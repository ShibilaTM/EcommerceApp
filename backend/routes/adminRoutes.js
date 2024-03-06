const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const cors = require('cors')
router.use(cors())
const bcrypt = require('bcryptjs')
const adminModel = require('../model/adminData')

router.post('/signup',async(req,res,next)=>{
    const {email,password}=req.body

    if(!email||!password){
        res.status(401).json({message:"invalid inputs"})
    }

    const adminHashedPassword = bcrypt.hashSync(password,10)

    try {
        const admin = new adminModel({email,password:adminHashedPassword})
        await admin.save()
        return res.status(201).json({ message: "Successfully registered" });
    } catch (error) {
        return next(error);
    }
})

router.post('/login',async(req,res,next)=>{
    const {email, password} = req.body
    if(
        !email&&email.trim()===""&&
        !password&& password.trim()===""
        ){
            return res.status(402).json({message:"invalid inputs"})
        }
        let existingAdmin;
        try {
            existingAdmin = await adminModel.findOne({email})
        } catch (error) {
           return console.log(error) 
        }
        if(!existingAdmin) {
            return res.status(404).json({message:"unable to find admin from this ID"})
        }
        const isPasswordCorrect = bcrypt.compareSync(password,existingAdmin.password)
        if(!isPasswordCorrect){
            return res.status(400).json({message:"incorrect password"})
        }
        return res.status(200).json({message:"Login successfull"})
})



module.exports = router
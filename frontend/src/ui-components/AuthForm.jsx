import { Box, Button, Dialog, FormLabel, IconButton, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
const labelStyle = {mt:1,mb:1}
const AuthForm = ({onSubmit,isAdmin}) => {
    const [isSignup ,setIsSignup]=useState(false)
    const [inputs,setInputs] = useState({
        name:"",
        email:"",
        password:""
    })
    const inputHandler = (e)=>{
        setInputs({
            ...inputs,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        onSubmit({inputs,signup:isAdmin?false:isSignup})
    }
  return (
    <Dialog PaperProps={{style:{borderRadius:20}}} open={true}>
        <Box sx={{ml:"auto"}}>
            <IconButton>
                <CloseRoundedIcon/>
            </IconButton>
        </Box>
        <Typography variant="h4" textAlign={"center"}>
            {isSignup? "Signup" : "Login"}
        </Typography>
        <form onSubmit={handleSubmit}>
            <Box 
                padding={6}
                display={"flex"}
                justifyContent={"center"}
                flexDirection={"column"}
                    width={400}
                    margin={"auto"}
                    alignContent={"center"}
            >
              {!isAdmin && isSignup&&<> 
                {" "}
                <FormLabel sx={labelStyle }>Name</FormLabel>
                <TextField 
                    variant='standard' 
                    margin='normal' 
                    type='text' 
                    name='name' 
                    onChange={inputHandler}/>
                </>}
                <FormLabel sx={labelStyle }>Email</FormLabel>
                <TextField 
                    variant='standard' 
                    margin='normal' 
                    type='email' 
                    name='email' 
                    onChange={inputHandler}/>
                <FormLabel sx={labelStyle }>Password</FormLabel>
                <TextField 
                    type='password' 
                    margin='normal' 
                    variant='standard'  
                    name='password' 
                    onChange={inputHandler}/>
                <Button 
                    sx={{mt:2,borderRadius:10,bgcolor:"#2b2d42",color:"white"}}
                    type='submit' 
                    fullWidth
                    variant='contained'
                >
                    {isSignup? "Signup" : "Login"}
                </Button>
                {!isAdmin&&(<Button 
                    sx={{mt:2,borderRadius:10}} 
                    fullWidth
                    onClick={()=>setIsSignup(!isSignup)} 
                >
                    Switch To {isSignup?"Login":"Signup"}
                </Button>)}
            </Box>
        </form>
    </Dialog>
  )
}

export default AuthForm



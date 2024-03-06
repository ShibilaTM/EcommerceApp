import React from 'react'
import AuthForm from '../ui-components/AuthForm'
import { sendAdminAuthRequest } from '../api-helpers/api-helpers'
import { useNavigate } from 'react-router-dom'

const Admin = () => {
  const navigate = useNavigate()
    const getData = (data)=>{
        console.log("Admin",data)
        sendAdminAuthRequest(data.inputs)
        .then((res)=>{
          navigate('/adminDashboard')
          console.log(res)})
        .catch((err)=>console.log(err))
    }
  return (
    <div>
      <AuthForm onSubmit={getData} isAdmin={true}/>
    </div>
  )
}

export default Admin

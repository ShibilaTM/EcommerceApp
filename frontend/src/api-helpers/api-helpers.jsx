import axios from 'axios';
import toast from 'react-hot-toast';

//User Signup and Login
export const sendUserAuthRequest = async (data, signup) => {

  try {
    const res = await axios.post(`/user/${signup ? "signup" : "login"}`, {
      name: signup ? data.name : "",
      email: data.email,
      password: data.password
    });

    const resData = res.data;

    if (res.status === 422||res.status === 500) {
      toast.error('All Fields are required', { position: 'top-center' });
    } 
     else if (res.status === 200 || res.status === 201) {
      toast.success(resData.message, { position: 'top-right' }); 

    } else {
      console.log("unexpected error occurred");
    }

    return resData;
    
  } catch (err) {
    // Display toast for network errors
    if (err.response) {
      toast.error(err.response.data.message, { position: 'top-center' });
    } else if (err.request) {
      toast.error('Network Error. Please try again later.', { position: 'top-center' });
    } else {
      toast.error('An unexpected error occurred. Please try again later.', { position: 'top-center' });
    }
    console.log(err);
    throw err; // Rethrow the error for handling in the caller function if needed
  }
};

// Admin Login api
export const sendAdminAuthRequest = async(data)=>{
  try{
  const res = await axios.post("/admin/login",{
    email:data.email,
    password:data.password
  })
  if(res.status !==200){
    return console.log("unexpected error")
  }
  const resData =await res.data
  toast.success(resData.message, { position: 'top-right' });
  return resData
}
  catch (err) {
    // Display toast for network errors
    if (err.response) {
      toast.error(err.response.data.message, { position: 'top-center' });
    } else if (err.request) {
      toast.error('Network Error. Please try again later.', { position: 'top-center' });
    } else {
      toast.error('An unexpected error occurred. Please try again later.', { position: 'top-center' });
    }
    console.log(err);
    throw err; // Rethrow the error for handling in the caller function if needed
  }
 
}

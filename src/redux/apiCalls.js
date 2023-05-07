import { loginFailure, loginStart, loginSuccess } from "./userReducer";
import { publicRequest } from "../requestMethods";

export  const Log = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    //const res = await publicRequest.post("users/auth/login", user);
    const res= await fetch("https://ekartapi108.azurewebsites.net/api/users/auth/login",{
      method:"POST",
      credentials: "include" ,
      headers: {
       Accept: "application/json",
       "Content-Type": "application/json",
       "Access-Control-Allow-Credentials": true,
       'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
       'Origin':'http://localhost:3000',
     
      
     },
      body:JSON.stringify(user)
    

    
 })
 const resJson=await res.json()
 console.log(resJson)
    dispatch(loginSuccess(resJson));
  } catch (err) {
    dispatch(loginFailure());
  }
};
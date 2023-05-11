import { loginFailure, loginStart, loginSuccess } from "./userReducer";
import {addinitialProducts}from "./cartRedux"


export  const Log = async (dispatch, user) => {
  let id
  dispatch(loginStart());
  try {
    //const res = await publicRequest.post("users/auth/login", user);
    const res= await fetch("http://localhost:3000/api/users/auth/login",{
      method:"POST",
      credentials: "include" ,
      headers: {
       Accept: "application/json",
       "Content-Type": "application/json",
       "Access-Control-Allow-Credentials": true,
       'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
      
     
      
     },
      body:JSON.stringify(user)
    

    
 })
 const resJson=await res.json()
 id=resJson._id.toString()
 console.log(resJson)
 console.log("cin")
    dispatch(loginSuccess(resJson));
 
    console.log("pl")
  } catch (err) {
    dispatch(loginFailure());
  }
 return id
};

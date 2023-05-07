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
       
     
      
     },
      body:JSON.stringify(user)
    

    
 })
 const resJson=await res.json()
 console.log(resJson)
  await dispatch(loginSuccess(resJson));
    try {
      //const res = await publicRequest.post("users/auth/login", user);
      const cartData= await fetch(`https://ekartapi108.azurewebsites.net/api/carts/${resJson._id}`,{
        method:"POST",
        credentials: "include" ,
        headers: {
         Accept: "application/json",
         "Content-Type": "application/json",
         "Access-Control-Allow-Credentials": true,
         'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
       
       
        
       },
      
      
  
      
   })
   const cartdata=await cartData.json()
   console.log(cartdata)
   cartdata.products.forEach((ele)=>{
    dispatch(addProduct({}));
   })
      
      
    } 
  } catch (err) {
    dispatch(loginFailure());
  }
};
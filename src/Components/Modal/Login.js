import React,{useEffect, useState} from 'react'
import {motion,AnimatePresence} from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faXmark } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from "react-redux";
import insta from '../../images/insta.png'
import './Login.css'
import {Log} from '../../redux/apiCalls'
const Login = ({showLogModal,setShowLogModal}) => {
  const dispatch=useDispatch()
  const [log,setLog]=useState(true)
  const [name,setName]=useState("")
  const [username,setUsername]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [UserLogin,setUserLogin]=useState("")
  const [passLogin,setPassLogin]=useState("")
 
  const google = () => {

    window.open("http://localhost:5000/auth/google", "_self");
  };
 
  const handleSubmit = async (e)=>{
    e.preventDefault()
    try{
     const res= await fetch("https://ekartapi108.azurewebsites.net/api/users/auth/register",{
         method:"POST",
         headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
         body:JSON.stringify({
          username:username,
          email:email,
          password:password
         })
       

       
    })
    if (res.status === 201) {
      setName("");
      setEmail("");
      setPassword("")
      setUsername("")
      setShowLogModal(false)
    } else {
     console.log(res)
    }
   
    
    }
    catch(err){
       console.log(err)
    }

  }
  const handleLogin = async (e) =>{
    e.preventDefault()
    await Log(dispatch,{username:UserLogin,password:passLogin})
    setShowLogModal(false)

  }
  return (
    <React.Fragment>
      <AnimatePresence exitBeforeEnter>
   {showLogModal && (<motion.div className="contain"  initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} exit={{opacity:0,transition:{delay:0.5,duration:1}}}>
        <motion.div  className='switch'  initial={{opacity:0,x:-50}} animate={{opacity:1,x:0}} transition={{delay:0.5,duration:1}} exit={{opacity:0,x:-50,transition:{duration:1}}}>
          <div className='reg' onClick={()=>{setLog(true)}}>Register</div>
          <div className='log'onClick={()=>{setLog(false)}}>Login</div>
          <div className='close'>
          <FontAwesomeIcon icon={faXmark} className="x"  onClick={()=>{setShowLogModal(false)}}/>
          </div>
        </motion.div>
        <motion.div className='log-container' initial={{opacity:0,x:-50}} animate={{opacity:1,x:0}} transition={{delay:0.5,duration:1}} exit={{opacity:0,x:-50,transition:{duration:1}}}>
        {log?(<motion.div className="register">
            <h1 className="title">CREATE AN ACCOUNT</h1>
            <form className="form"  onSubmit={handleSubmit}>
                <input type="text" placeholder="name" value={name} onChange={(e)=>{setName(e.target.value)}} id="name"/>
                {/* <input type="text" placeho="lastname" name="lastname"  id="lastname"/> */}
                <input type="text" placeholder="username" value={username} onChange={(e)=>{setUsername(e.target.value)}}  id="username"/>
                <input type="email" placeholder="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} id="email"/>
                <input type="password" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}  id="password"/>
                {/* <input type="password" placeholder="confirm password" name="confirm"  id="confirm"/> */}
                <div className="google_signup">
            <button type="submit">
                CREATE
            </button>
            </div>
            </form>
            <p>By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b></p>
           
            {/* <div className="google_signup">
  <button className="signup_button">
    <img width="15px"  alt="Google login" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
    Sign up with Google
  </button>
  </div>
  <div className="google_signup">
  <button className="signup_button">
    <img width="15px"  alt="Google login" src="https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-instagram-new-logo-vector-download-13.png" />
    Sign up with Instagram
  </button>
</div> */}
            

        </motion.div>):(
        <div className="login">
        
            <h1 className="title">SIGN IN</h1>
            <form className="form"  onSubmit={handleLogin}>
                <input type="text" placeholder="username" value={UserLogin} onChange={(e)=>{setUserLogin(e.target.value)}}/>
                <input type="password" placeholder="password" value={passLogin} onChange={(e)=>{setPassLogin(e.target.value)}}/>
                <button style={{marginTop:"2rem"}}type="submit">
                LOG IN
            </button>
            </form>
            {/* <a><p>Create a new account</p></a> */}
            <div className="google_signup">
          
            </div>
            {/* <div className="google_signup" onClick={google }>
  <button className="signup_button">
    <img width="15px"  alt="Google login" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
    Sign in with Google
  </button>
  </div>
  <div className="google_signup">
  <button className="signup_button">
    <img width="15px"  alt="Google login" src="https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-instagram-new-logo-vector-download-13.png" />
    Sign in with Instagram
  </button>
  </div> */}
        </div>)}
        </motion.div>
    </motion.div>)}
    
    </AnimatePresence>
    </React.Fragment>
  )
}

export default Login
import React,{useState} from 'react'
import {motion,AnimatePresence} from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faXmark } from '@fortawesome/free-solid-svg-icons'
import insta from '../../images/insta.png'
import './Login.css'
const Login = ({showLogModal,setShowLogModal,setUser,user}) => {
  const [log,setLog]=useState(true)
  const google = () => {

    window.open("http://localhost:5000/auth/google", "_self");
  };

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
            <form className="form">
                <input type="text" placeholder="name"/>
                <input type="text" placeholder="lastname"/>
                <input type="text" placeholder="username"/>
                <input type="email" placeholder="email"/>
                <input type="password" placeholder="password"/>
                <input type="password" placeholder="confirm password"/>
            </form>
            <p>By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b></p>
            <div className="google_signup">
            <button>
                CREATE
            </button>
            </div>
            <div className="google_signup">
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
</div>
            

        </motion.div>):(
        <div className="login">
        
            <h1 className="title">SIGN IN</h1>
            <form className="form">
                <input type="text" placeholder="username"/>
                <input type="password" placeholder="lastname"/>
               
            </form>
            <a><p>Create a new account</p></a>
            <div className="google_signup">
            <button>
                LOG IN
            </button>
            </div>
            <div className="google_signup" onClick={google }>
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
  </div>
        </div>)}
        </motion.div>
    </motion.div>)}
    
    </AnimatePresence>
    </React.Fragment>
  )
}

export default Login
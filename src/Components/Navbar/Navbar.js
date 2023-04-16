import React,{useState,useEffect} from 'react'
import logo from '../../images/logo-2.png'
import {AnimatePresence, motion,useCycle} from 'framer-motion'
import Ham from '../Hamburger/Hamburger'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faXmark,faArrowRightToBracket,faBagShopping,faVolumeMute,faVolumeHigh,faPause,faPlay, faSignOut } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'
import Modal from '../Modal/Modal'
import Menu from '../Menu/Menu'
import Dropdown from '../Dropdown/Dropdown'
import Login from '../Modal/Login'
import {useSelector,useDispatch} from 'react-redux'
import { Router,Link} from 'react-router-dom';
import { loginFailure, loginStart, loginSuccess } from "../../redux/userReducer"
import { ShoppingBagOutlined } from '@mui/icons-material'

import {Badge} from '@material-ui/core'
const Navbar = ({navcol}) => {
  const [showModal,setShowModal ]=useState(false)
  const dispatch=useDispatch()
  const [showLogModal,setShowLogModal ]=useState(false)
  const [ham,setHam ]=useState(window.innerWidth<960?true:false)
  const [Others,setOthers]= useState(false)
  const [isOpen, toggleOpen] = useCycle(false, true);
  const userName=useSelector((state)=>state.user.currentUser)
  const quantity=useSelector((state)=>state.cart.quantity)
  //const [user,setUser]=useState("")
  const logout = async () => {
    //window.open("http://localhost:3002/api/users/auth/logout", "_self");
    try{
    const r = await fetch("https://ekartapi108.azurewebsites.net/api/users/auth/logout",{
         method:"POST",
         credentials:"include",
         headers: {
          
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
          
        
        },
        body:JSON.stringify({
          logout:'true'
        })
       

       
    })
   
    dispatch(loginSuccess({username:null}))
  }
  catch(e){
    console.log(e)
  }
  };
  const sidebarVariants = {
      open: {
        clipPath:[`circle(0% at 50% 96%)`,`circle(0% at 50% 96%)`,`circle(200% at 50% 96%)`],
       height:["0%","100%","100%"],
        transition: {
          duration: 1,
         
          when:"beforeChildren"
      
    
        },
      },
      closed: {
        clipPath:[`circle(200% at 50% 96%)`,`circle(0% at 50% 96%)`,`circle(0% at 50% 96%)`],
        height:["100%","100%","0%"],
        transition: {
          duration: 1,
          delay:0.8,
         
        },
      },
    };

  useEffect(()=>{
    // console.log(document.querySelector('.navbar').offsetHeight)
    // console.log(navcol)
    // if(!navcol)
    // {
    //   let x=document.querySelectorAll('.button')
    //   x.forEach((y)=>{
    //     y.style.color='black'
    //   })
    //   }
    //     else
    //     {
    //       let x=document.querySelectorAll('.button')
    //       x.forEach((y)=>{
    //         y.style.color='white'
    //       })

    //     }
    // parent(document.querySelector('.navbar').offsetHeight)
    window.addEventListener('resize',reSize)
    window.addEventListener('click',func)
  
    return () => {
      window.removeEventListener('click',func);
      window.removeEventListener('resize',reSize);
    };
   },[navcol])
  //  useEffect(()=>{

  //   console.log(userName)
  //  setUser(userName)
  //  },[userName])
   console.log(userName)
   const reSize=()=>{
    if(window.innerWidth<960)
    {
      setHam(true)
    }
    else{
      setHam(false)
    }
    console.log(ham)
  }
   const func=(e)=>{
    let isDropdownButton=e.target.matches("[data-dropdown-button]")
    let lower=document.querySelector(".lower-deck")
    if(e.target.closest("[data-drop]")!=null)
    {
    
      return
    }

   let currentDropdown
   if(isDropdownButton)
   { currentDropdown=e.target.closest("[data-dropdown]")
     
    currentDropdown.classList.toggle('active')
  console.log(5)
   }
 
   document.querySelectorAll("[data-dropdown].active").forEach(tag=>{
     if(tag===currentDropdown)
     return
   
       tag.classList.remove('active')
 
     
   })
   if(window.location.href.split('/').slice(-1)[0]==='' && document.querySelectorAll("[data-dropdown].active").length!==0)
   {
     console.log( document.querySelectorAll("[data-dropdown].active").length)
     lower.style.backgroundColor="white"
     document.querySelectorAll(".button").forEach(x=>{
      x.style.color="black"
     })
  }
   else if(window.location.href.split('/').slice(-1)[0]===''){
    console.log( document.querySelectorAll("[data-dropdown].active").length)
    // lower.style.backgroundColor="transparent"
   
    // document.querySelectorAll(".button").forEach(x=>{
    //   x.style.color="white"
    //  })
   }
  }
  return (
    
    <div style={{position:"sticky",top:"0",zIndex:"1000"}}>
    <Modal showModal={showModal} setShowModal={setShowModal}/>
    <Login showLogModal={showLogModal} setShowLogModal={setShowLogModal}/>
    {/* <AnimatePresence exitBeforeEnter> */}
   {ham &&( 
       <motion.div className="background"  variants={sidebarVariants}  initial={false} animate={isOpen ? "open" : "closed" }>
       <Menu isOpen={isOpen}/>
         </motion.div>
    
  
   )}
 
    <div className='navbar'>
  
  <div className='upper-deck'>
  <div className='signup'>
    {ham ? (<Ham toggle={()=>{toggleOpen()}} isOpen={isOpen}/>):
   (
   <React.Fragment>
    {userName===null ?(
  <motion.div whileTap={{ scale: 0.75 }}  onClick={()=>{setShowLogModal(true)}}>
  <div className="icon">
    Sign In
    </div>
  </motion.div>):( 
    <motion.div whileTap={{ scale: 0.75 }} >
  <div className="icon" onClick={logout}>
    Log Out {userName}
    </div>
    </motion.div>)}
   
  <motion.div whileTap={{ scale: 0.75 }}>
 <Link to='/cart'>
  <Badge badgeContent={quantity} color="primary"> 
   <ShoppingBagOutlined style={{height:"3rem" ,width:"3rem"}} color="black"/>
  </Badge>
  </Link>
  </motion.div>
  </React.Fragment>
  )
}
  </div>
      
  <div className='heading'><motion.span whileHover={{ scale: 0.75 }}>B</motion.span>

              <motion.span whileHover={{ scale: 0.75 }}>É</motion.span>
              <motion.span whileHover={{ scale: 0.75 }}>N</motion.span>
              <motion.span whileHover={{ scale: 0.75 }}>E</motion.span>
              {/* <motion.span whileHover={{ scale: 0.75 }}>&nbsp;</motion.span> */}
              <motion.img className="logo" src={logo} initial={{scale:0.9}}  whileHover={{ scale: 0.75 }}/>
              {/* <motion.span whileHover={{ scale: 0.75 }}>&nbsp;</motion.span> */}
              <motion.span whileHover={{ scale: 0.75 }}>C</motion.span>
              <motion.span whileHover={{ scale: 0.75 }}>L</motion.span>
              <motion.span whileHover={{ scale: 0.75 }}>O</motion.span>
              <motion.span whileHover={{ scale: 0.75 }}>T</motion.span>
              <motion.span whileHover={{ scale: 0.75 }}>H</motion.span>
              <motion.span whileHover={{ scale: 0.75 }}>I</motion.span>
              <motion.span whileHover={{ scale: 0.75 }}>N</motion.span>
              <motion.span whileHover={{ scale: 0.75 }}>G</motion.span>
             </div>

  <motion.div className='search' onClick={()=>{setShowModal(true)}}  whileTap={{ scale: 0.75 }}>
   
      <FontAwesomeIcon className="search-button" icon={faSearch}/>
 
      </motion.div>
  </div>
  <div className='lower-deck'>
    <div className='categories'>
        <div className="cat" data-dropdown>
        <button className='button' data-dropdown-button>What's new</button>
        <div className='dropdown-menu' data-drop>
           <Dropdown />
          </div>
        </div>
        <div className="cat" data-dropdown>
          <button  className='button' data-dropdown-button>Men</button>
          <div className='dropdown-menu' data-drop >
          CLOTHING CONTENT
          </div></div>
        <div className="cat" data-dropdown>
          <button  className='button' data-dropdown-button>Women</button>
        <div className='dropdown-menu'data-drop >
          CLOTHING CONTENT
          </div></div>
        <div className="cat" data-dropdown onClick={()=>setOthers(!Others)}>
          <button  className='button' data-dropdown-button>Others</button>
        <div className='dropdown-menu' data-drop>
          CLOTHING CONTENT
          </div></div>
        <div className="cat" data-dropdown>
          <button  className='button'data-dropdown-button>About Us</button>
        <div className='dropdown-menu' data-drop >
          CLOTHING CONTENT
          </div></div>
        <div className="cat" data-dropdown>
          <button  className='button' data-dropdown-button> Contact Us</button>
        <div className='dropdown-menu' data-drop>
          CLOTHING CONTENT
          </div></div>
    </div>
  </div>

 
</div>
</div>

  )
}

export default Navbar
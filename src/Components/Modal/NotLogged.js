import React from 'react'
import {motion,AnimatePresence} from 'framer-motion'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faXmark } from '@fortawesome/free-solid-svg-icons'
import './Modal.css'
const backdrop={
    visible:{opacity:1},
    hidden:{opacity:0},
   
}
const NotLogged = ({showModal,setShowModal}) => {
  return (
   
     <AnimatePresence exitBeforeEnter={true}>
    
    {showModal && (
     
        <motion.div className="backdrop"
        onClick={()=>{setShowModal(false)}}
        variants={backdrop}
        initial="hidden"
        animate="visible"
        exit="hidden">
            <motion.section class="notLogged-container" data-modal="container" >
           <motion.div className='notLogin_modal' >
             <div style={{fontSize:"20px",color:"#f75809",fontWeight:"bold"}}>
             Please Sign in first to add items to your Cart
             </div>
            
           </motion.div>
           {/* <FontAwesomeIcon icon={faXmark} className="cross" size="2x"/> */}
         </motion.section>
        </motion.div>
       
    )
  
   
   
  }

 
  </AnimatePresence>
  )
    
}

export default NotLogged
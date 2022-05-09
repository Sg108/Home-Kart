import React from 'react'
import {motion,AnimatePresence} from 'framer-motion'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faXmark } from '@fortawesome/free-solid-svg-icons'
import './Modal.css'
const backdrop={
    visible:{opacity:1},
    hidden:{opacity:0,
    transition:{
      delay:0.5
    }}
}
const Modal = ({showModal,setShowModal}) => {
  return (
   
    <AnimatePresence exitBeforeEnter={true}
     >
    {showModal && (
     
        <motion.div className="backdrop"
        variants={backdrop}
        initial="hidden"
        animate="visible"
        exit="hidden">
            <motion.section class="modal-container" data-modal="container" >
           <motion.div className='modal' initial={{y:"-50vh"}} animate={{y:"0vh"}} exit={{y:"-50vh"}} transition={{type:"ease",stiffness: 250,duration:1}}>
             <div className='searching'>
             <FontAwesomeIcon icon={faSearch}  />
             </div>
             <input type="text" className="input" placeholder="Search Product"></input>
           </motion.div>
           <FontAwesomeIcon icon={faXmark} className="cross" size="2x" onClick={()=>{setShowModal(false)}}/>
         </motion.section>
        </motion.div>
       
    )
  
   
   
  }
  </AnimatePresence>
  )
    
}

export default Modal
import React from 'react'
import {MenuItems} from '../MenuItems'
import {AnimatePresence, motion} from 'framer-motion'
import './Menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons'
const Menu = ({isOpen}) => {
    // useEffect(() => {
    //  document.addEventListener('click',(e)=>{
    //      const b=e.target.matches("[data-b]")
    //      if(b){

    //      }
    //  })
    // }, [])
    const container = {
      hidden: { opacity: 0,
        transition: {
          delay:1,
          staggerChildren: 0.1,
          staggerDirection:1,
 
        }

      },
      show: {
        opacity: 1,
        transition: {
          delay:0.3,
          staggerChildren: 0.1,
          staggerDirection:-1,
          when:"beforeChildren"
        }
      }
    }
    
    const item = {
      hidden: { opacity: 0 ,
        // transition: {
         
        //   duration:0.75
        // }},
      },
      show: { opacity: 1,
        // transition: {
       
        //   duration:0.75,
     
        // }
      }
    }
    
  return (
      <div id="t1">
        <div id="t2">
     
        <AnimatePresence exitBeforeEnter>
{
  isOpen && (<motion.ul  variants={container}
  initial="hidden"
  animate="show" exit="hidden">{ MenuItems.map((x,i) => {
    return (<motion.a href={x.id}><motion.li variants={item} 
     className={x.cName}>{x.title}</motion.li></motion.a>)
   })}
    </motion.ul>
    )

   }
       </AnimatePresence>
    
  
         
  
    <div class="page" id="p1">
           
            <a href="#" data-b><FontAwesomeIcon icon={faCircleChevronLeft} size="4x" color="black"/></a>
          </div>
          <div class="page" id="p2">
          <a href="#" data-b><FontAwesomeIcon icon={faCircleChevronLeft} size="4x" color="black"/></a>
          </div>
           

    </div>
    </div>

  )
}

export default Menu
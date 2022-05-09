import React from 'react'
import { motion ,useCycle,Variants} from "framer-motion";
import './Hamburger.css'
const Path = ({ openPath, closedPath, isOpen,...rest }) => {
    return (
      <motion.path
      initial={false} 
      animate={isOpen ? "open" : "closed" }
        fill="transparent"
        strokeWidth="4"
        stroke="hsl(0, 0%, 18%)"
        strokeLinecap="round"
        variants={{
          open: { d: openPath, transition: { duration: 0.3 } },
          closed: { d: closedPath, transition: { duration: 0.3 } },
        }}
        {...rest}
      ></motion.path>
    );
  };
  
  const Hamburger = ({toggle,isOpen}) => {

    return (
      
      <button className="ham" onClick={toggle} >
        <svg width="23" height="23" color="black" viewBox="0 0 23 23"  >
           {/* <Path d="M 2 2.5 L 20 2.5" />
          <Path d="M 2 9.423 L 20 9.423" />
          <Path d="M 2 16.346 L 20 16.346" />
         <Path d="M 3 16.5 L 17 2.5" />
          <Path d="M 3 2.5 L 17 16.346" />  */}
  
          <Path openPath="M 3 16.5 L 17 2.5" closedPath="M 2 2.5 L 20 2.5" isOpen={isOpen}/>
          <Path closedPath="M 2 9.423 L 20 9.423" openPath="" isOpen={isOpen}/>
          <Path closedPath="M 2 16.346 L 20 16.346" openPath="M 3 2.5 L 17 16.346" isOpen={isOpen}/>
        </svg>
      </button>
 

    );
  };

export default Hamburger
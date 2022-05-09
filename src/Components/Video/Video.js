import React,{useState,useEffect} from 'react'
//import {Link} from 'react-router-dom'
//import img from '../../images/clothing.jpg'
//import video from '../../images/Bene.mp4'
import video from '../../images/bene_video.mp4'
import Navbar from '../Navbar/Navbar'
import {motion} from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faXmark,faArrowRightToBracket,faBagShopping,faVolumeMute,faVolumeHigh,faPause,faPlay } from '@fortawesome/free-solid-svg-icons'
import './Video.css'
import Modal from '../Modal/Modal'
const Video = ({setNavcol}) => {
 
   const [play,setPlay]= useState(true)
   const [sound,setSound]= useState(true)
  
   const [ham,setHam]= useState(window.innerWidth<960?true:false)
   
  useEffect(()=>{
    window.addEventListener('resize',()=>{
      if(window.innerWidth<960)
      {
        setHam(true)
      }
      else{
        setHam(false)
      }
    })
if(window.location.href.split('/').slice(-1)[0]!=='')
{
  setNavcol(false)
}
else{
  setNavcol(true)
}},[])
   const volumeFunction=()=>{
    let video=document.querySelector('.myvideo');
    setSound(!sound)
    if(video.muted===true){
      video.muted=false
      console.log(video.muted)
    }
    else
    {
      video.muted=true
      console.log(video.muted)
    }
   }


  return (
    <div className='container'>
      {/* <Navbar ham={ham} setHam={setHam}/> */}
      <div className='video-content'>
      <video class="myvideo" autoPlay muted loop> 
        <source
          src={video}
          type="video/mp4"
        />
       
    </video>
              <motion.div className='sound' onClick={volumeFunction}  whileTap={{ scale: 0.75 }}>
              <FontAwesomeIcon className="play-button" icon={sound?faVolumeHigh:faVolumeMute} />
              </motion.div>
              {/* <div className='play' onClick={()=>{setPlay(!play)}}>
              <FontAwesomeIcon className="play-button" icon={search?faPause:faPlay} />
              </div> */}
           
    </div>
       
 <div className="flag">
              <div className="orange"></div>
              <div  className="white"></div>
              <div  className="black"></div>
              <div className="orange"></div>
              </div>
    </div>
  )
}

export default Video
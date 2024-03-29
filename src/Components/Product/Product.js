import React, { useState,useEffect } from "react"
import "./Product.css"
import styled from "styled-components"
import { Add, Remove } from "@material-ui/icons"

//import { Button, Popup } from "semantic-ui-react";
import NotLogged from "../Modal/NotLogged"

import { Swiper, SwiperSlide } from "swiper/react"
import { motion, AnimatePresence } from "framer-motion"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper"
import { addProduct } from "../../redux/cartRedux"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

SwiperCore.use([Autoplay, Pagination, Navigation])

const proVariants = {
    initial: {
        x: 1000,
    },
    visible: {
        x: 0,
        transition: {
            ease: "easeInOut",
        },
    },
    exit: {
        x: -1000,
        // transition: {
        //     duration: 0.3,
        // },
    },
}

// const styleLink = document.createElement("link");
// styleLink.rel = "stylesheet";
// styleLink.href =
// "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
// document.head.appendChild(styleLink);

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`

export const Product = () => {
    let { id } = useParams()
    // id--
    const userid=useSelector((state)=>state.user.id)
    const currentUser=useSelector((state)=>state.user.currentUser)
    const [data, setData] = useState(null)
    const [showModal,setShowModal ]=useState(false)
  
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then((res) => res.json())
            .then((res) => setData(res))
    }, [])
    // const data = useSelector((state) => state.product.products)
    console.log(data, id)
    const dispatch = useDispatch()
    const images = data ? data.images:[]
    const [cur, setCur] = useState(0)
    const [quantity, setQuantity] = useState(1)
    const handleQuantity = (type) => {
        if (type === "dec") {
            quantity > 1 && setQuantity(quantity - 1)
        } else {
            setQuantity(quantity + 1)
        }
    }

    const  addToCartFunction = async()=>{
           const dateString = Date.now().toString(36);
        const randomness = Math.random().toString(36).substr(2);
        let uid= dateString + randomness;
        
        await fetch(`https://home-kart-api.vercel.app/api/carts/${userid.toString()}`,{
            method:"POST",
            credentials: "include" ,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true,
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
               
              
               
              },
               body:JSON.stringify({ products:{...data, quantity: quantity,itemId:uid }})
             
          }).then((x)=>{console.log(x)}).catch((err)=>{console.log(err)})
        dispatch(addProduct({ ...data, quantity: quantity,itemId:uid }))
        
    }
   
    const handleClick = (state) => {
        setCur(state)
    }

    return (
        data ? 
        <>
        <NotLogged  showModal={showModal} setShowModal={setShowModal}/>
        <div className="product">
        
            <div className="left">
                {/* <div className="info-color"> */}
                {/* <div className="color-head">Colors</div> */}
                {/* <div className="color-opt">
                        <div className=" color red"></div>
                        <div className="color blue"></div>
                        <div className="color green"></div>
                    </div> */}
                {/* <div className="circle"></div> */}
                {/* </div> */}
                <div className="left-wrapper">
                    <div className="main-image">
                        <div className="orange-stripe"></div>
                        <div className="black-stripe"></div>
                        <AnimatePresence exitBeforeEnter>
                            <motion.img
                                key={images[cur]}
                                variants={proVariants}
                                initial="initial"
                                animate="visible"
                                exit="exit"
                                transition={{ duration: 0.1 }}
                                src={images[cur]}
                                alt=""
                            />
                        </AnimatePresence>
                    </div>

                    <div className="side-image">
                        <Swiper
                            spaceBetween={0}
                            loop={true}
                            navigation={true}
                            modules={{ Navigation }}
                            breakpoints={{
                                390: {
                                    slidesPerView: 3,
                                },
                                450: {
                                    slidesPerView: 3,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                                991: {
                                    slidesPerView: 4,
                                },

                                1200: {
                                    slidesPerView: 5,
                                },
                            }}
                            // autoplay={{
                            //     delay: 2500,
                            //     disableOnInteraction: false,
                            // }}
                            onSlideChange={() => console.log("slide change")}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            {images &&
                                images.map((img, idx) => {
                                    return (
                                        <SwiperSlide key={img}>
                                            <div
                                                className="swiper-images"
                                                onClick={() => handleClick(idx)}
                                            >
                                                <img
                                                    src={img}
                                                    alt={`bene-product-${img}`}
                                                />
                                            </div>
                                        </SwiperSlide>
                                    )
                                })}
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="info-box">
                    <div className="info-heading">{data.title}</div>
                    <div className="hr-line"></div>
                    <div className="info-desc">
                        <h2>description</h2>
                        <p>{data.description}</p>
                    </div>
                    <div className="hr-line"></div>
                    <div className="info-price">${data.price}</div>
                    <AmountContainer>
                        <Remove onClick={() => handleQuantity("dec")} />
                        <Amount>{quantity}</Amount>
                        <Add onClick={() => handleQuantity("inc")} />
                    </AmountContainer>
                  
                    
                     <div
                        className="info-button"
                        onClick={currentUser?() => addToCartFunction():()=>setShowModal(true)}
                    >
                        <h3>Add To Cart</h3>
     
                    </div>
                        
                   
                </div>
            </div>
        </div>
        </>
    :(
    <>
    </>)

    )
}

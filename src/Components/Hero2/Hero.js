import React, { useEffect, useState } from "react"
import Rellax from "rellax"
import "./Hero.css"
// import { SinglePhoto } from "../../Components/SinglePhoto/SinglePhoto"
// import { useAnimation, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Link } from "react-router-dom"

function useForceUpdate() {
    const [value, setValue] = useState(0) // integer state
    return () => setValue((value) => value + 1) // update the state to force render
}

// const headingVariants = {
//     hidden: {
//         opacity: 0,
//         scaleX: 1.2,
//         y: 100,
//     },
//     visible: {
//         opacity: 1,
//         scaleX: 1,
//         y: 0,
//         transition: {
//             duration: 1,
//         },
//     },
// }

export const Hero = () => {
    const [offsetY, setOffsetY] = useState(0)
    const forceUpdate = useForceUpdate()
    // const c1 = useAnimation()
    // const [ref1, inView1] = useInView()

    useEffect(() => {
        setTimeout(() => {
            var rellax = new Rellax(".rellax", {
                center: true,
            })
        }, 2000)
    }, [])

    // useEffect(() => {
    //     window.onload = () => {
    //         var rellax = new Rellax(".rellax", {
    //             center: true,
    //         })
    //     }
    // }, [])

    // useEffect(() => {
    //     if (inView1) {
    //         c1.start("visible")
    //     }
    // }, [c1, inView1])

    return (
        <div className="hero">
            {/* <div className="video">
                <video class="myvideo" autoplay="true" muted loop>
                    <source
                        src="https://drive.google.com/uc?export=download&id=1ZPSCbfddoODIzGHYExBcjxJJefzLuEtA"
                        type="video/mp4"
                    />
                </video>
            </div> */}
            {/* </Link> */}
            <div className="heading">
                <div className="line-orange"></div>
                <h2
                // ref={ref1}
                // variants={headingVariants}
                // initial="hidden"
                // animate={c1}
                >
                    Sho<span>es</span>
                </h2>
                <div className="line-black"></div>
            </div>

            <div className="photo-frame photo">
                <div
                    className="back-overlay  rellax"
                    date-rellax-percentage="0.5"
                    data-rellax-speed="5"
                ></div>
                <div
                    className="back-overlay-2  rellax"
                    date-rellax-percentage="0.5"
                    data-rellax-speed="3"
                ></div>

                <div
                    className="left-image image rellax"
                    data-rellax-percentage="0.5"
                    data-rellax-speed="2"
                >
                    <img
                        src="https://thumbs.dreamstime.com/b/poster-shoe-new-collection-shoes-advertisement-192307675.jpg"
                        alt=""
                    />
                    <Link to="/products">
                        <div
                            className="image-overlay"
                            style={{ color: "white" }}
                        >
                            <h2
                                data-rellax-percentage="0.5"
                                data-rellax-speed="-3"
                                className="rellax"
                            >
                                SHOP THE COLLECTION
                            </h2>
                        </div>
                    </Link>
                </div>
                <div
                    className="right-image image rellax"
                    data-rellax-percentage="0.5"
                    data-rellax-speed="5"
                >
                    <img
                        src="https://images.hdqwalls.com/wallpapers/hanging-shoes-in-air-city-night-view-4k-v5.jpg"
                        alt=""
                    />
                    <Link to="/products">
                        <div
                            className="image-overlay"
                            style={{ color: "white" }}
                        >
                            <h2
                                data-rellax-percentage="0.5"
                                data-rellax-speed="3"
                                className="rellax"
                            >
                                SHOP THE COLLECTION
                            </h2>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="heading">
                <div className="line-orange"></div>
                <h2>
                    Shir<span>ts</span>
                </h2>
                <div className="line-black"></div>
            </div>
            <div className="photo-frame-2 photo">
                <div
                    className="back-overlay  rellax"
                    date-rellax-percentage="0.5"
                    data-rellax-speed="8"
                ></div>
                <div
                    className="back-overlay-2  rellax"
                    date-rellax-percentage="0.5"
                    data-rellax-speed="4"
                ></div>
                <div
                    className="left-image image rellax"
                    data-rellax-percentage="0.5"
                    data-rellax-speed="5"
                >
                    <img
                        src="https://w0.peakpx.com/wallpaper/303/695/HD-wallpaper-hrithik-roshan-in-blue-shirt.jpg"
                        alt=""
                    />
                    <Link to="/products">
                        <div
                            className="image-overlay"
                            style={{ color: "white" }}
                        >
                            <h2
                                data-rellax-percentage="0.5"
                                data-rellax-speed="4"
                                className="rellax"
                            >
                                SHOP THE COLLECTION
                            </h2>
                        </div>
                    </Link>
                </div>
                <div
                    className="right-image image rellax"
                    data-rellax-percentage="0.5"
                    data-rellax-speed="1"
                >
                    <img
                        src="https://hips.hearstapps.com/bpc.h-cdn.co/assets/17/39/1600x800/landscape-1506621756-mens-jeans.jpg?resize=1200:*"
                        alt=""
                    />
                    <Link to="/products">
                        <div
                            className="image-overlay"
                            style={{ color: "white" }}
                        >
                            <h2
                                data-rellax-percentage="0.5"
                                data-rellax-speed="-3"
                                className="rellax"
                            >
                                SHOP THE COLLECTION
                            </h2>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="single-pic">
                <div
                    className="single-frame rellax"
                    // data-rellax-percentage="0.5"
                    // data-rellax-speed="-2"
                >
                    <img
                        className="rellax"
                        data-rellax-percentage="0.5"
                        data-rellax-speed="2"
                        src="https://media.istockphoto.com/photos/stylish-man-wearing-sunglasses-and-white-shirt-city-life-picture-id1201026026?k=20&m=1201026026&s=612x612&w=0&h=5GIO1F1S4vxIlrxcPQWFr7mWJ3IVqCxHFn8K52qm4QI="
                        alt=""
                    />
                    <div
                        className="back-overlay rellax "
                        data-rellax-percentage="0.5"
                        data-rellax-speed="-1"
                    ></div>
                    <div className="front-overlay">
                        <h2
                            className="rellax"
                            data-rellax-percentage="0.5"
                            data-rellax-speed="-2"
                        >
                            Explore Magic
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

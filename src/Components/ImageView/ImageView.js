import React from "react"
import img1 from "../../Images-2/img1.jpg"
import img2 from "../../Images-2/img2.jpg"
import { motion, AnimatePresence } from "framer-motion"
import "./ImageView.css"

const backVariants = {
    initial: {
        transformOrigin: "right",
        opacity: 1,

        x: "-100%",
    },
    visible: {
        x: "0%",
        opacity: 1,
        scale: 1,
        transition: {
            when: "beforeChildren",
            duration: 0.5,
            ease: "easeInOut",
            staggerChildren: 0.6,
        },
    },
    exit: {
        x: "100%",

        transition: {
            when: "afterChildren",
            duration: 0.5,
            ease: "easeInOut",
            staggerChildren: 0.3,
        },
    },
}

const imgVariants = {
    initial: {
        transformOrigin: "left",
        clipPath: "polygon(0% 0%,0% 0%,0% 100%,0 100%,0% 0%)",
    },
    visible: {
        clipPath: "polygon(0% 0%, 50% 0%, 50% 100%, 0% 100%, 0% 0%)",
        transition: {
            duration: 0.6,
            type: "spring",
            damping: 10,
            stiffness: 70,
        },
    },
    exit: {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%)",
        opacity: 1,
        transition: {
            duration: 0.3,
        },
    },
}

const h2Variants = {
    initial: {
        opacity: 0,
        y: 50,
    },
    visible: {
        opacity: 1,
        // scale: 1,
        y: 0,
        transition: {
            when: "beforeChildren",
            duration: 0.3,
            // ease: "easeInOut",
            type: "spring",
            damping: 8,
            stiffness: 100,
        },
    },
    exit: {
        // scale: 0,
        y: 50,
        opacity: 0,
        transition: {
            when: "afterChildren",
            duration: 0.3,
        },
    },
}

export const ImageView = (props) => {
    const img = props.imgno
    return (
        <motion.div className="image-view">
            {console.log(img)}
            <AnimatePresence exitBeforeEnter>
                {img == 1 && (
                    <motion.div
                        key={img1}
                        className="image-container"
                        variants={backVariants}
                        initial="initial"
                        animate="visible"
                        exit="exit"
                    >
                        <img src={img1} alt="" />
                        <motion.div className="image-overlay">
                            <motion.h2 variants={h2Variants}>
                                EXPLORE NIKE
                            </motion.h2>
                            <motion.img
                                variants={imgVariants}
                                src={img1}
                                alt=""
                            />
                        </motion.div>
                    </motion.div>
                )}
                {img == 2 && (
                    <motion.div
                        key={img2}
                        className="image-container"
                        variants={backVariants}
                        initial="initial"
                        animate="visible"
                        exit="exit"
                    >
                        <img src={img2} alt="" />
                        <motion.div className="image-overlay">
                            <motion.h2 variants={h2Variants}>
                                EXPLORE CANON
                            </motion.h2>
                            <motion.img
                                variants={imgVariants}
                                src={img2}
                                alt=""
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

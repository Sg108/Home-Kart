// import logo from "./logo.png";
import "./Loading.css"
import { motion } from "framer-motion"

const spring = {
    type: "spring",
    damping: 10,
    stiffness: 70,
}

const centerVariants = {
    hidden: {
        x: "-50%",
        y: "-50%",
    },
    visible: {
        scale: 0.8,
        x: "-50%",
        y: "-50%",
        transition: {
            duration: 1,
            delay: 5,
        },
    },
}

function Loading() {
    return (
        <motion.div className="Loading" style={{ zIndex: "999" }}>
            <motion.div
                className="backdrop"
                style={{
                    zIndex: "999",
                    position: "absolute",
                    height: "100vh",
                    width: "100vw",
                }}
                transition={{ duration: 3.5, delay: 0 }}
            ></motion.div>
            <motion.div
                variants={centerVariants}
                initial="hidden"
                animate="visible"
                className="center"
            >
                <motion.div
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="head1"
                >
                    <motion.div
                        initial={{ x: 0, y: "-80vh" }}
                        animate={{ x: 0, y: 0 }}
                        transition={{ ...spring, duration: 1, delay: 3.5 }}
                    >
                        B
                    </motion.div>
                    <motion.span
                        initial={{ y: 0, x: "-100vw" }}
                        animate={{ x: 0, y: 0 }}
                        transition={{ ...spring, duration: 1, delay: 2.9 }}
                    >
                        É
                    </motion.span>
                    <motion.span
                        initial={{ x: 0, y: "100vh" }}
                        animate={{ x: 0, y: 0 }}
                        transition={{ ...spring, duration: 1, delay: 3.1 }}
                    >
                        N
                    </motion.span>
                    <motion.span
                        initial={{ y: 0, x: "100vw" }}
                        animate={{ x: 0, y: 0 }}
                        transition={{ ...spring, duration: 1, delay: 3.3 }}
                    >
                        E
                    </motion.span>
                </motion.div>
                <motion.div className="logo">
                    <motion.div
                        initial={{ originX: 0, scaleX: 0, opacity: 1 }}
                        animate={{
                            x: ["100%", "100%", "100%", "0%", "0%"],
                            scaleX: [0, 10, 10, 0.5, 1],
                            scaleY: [10, 10, 1, 1, 1],
                        }}
                        exit={{
                            scaleX: [1, 0.5, 10, 10, 10],
                            scaleY: [1, 1, 1, 10, 10],
                            //   x: ["0%", "0%", "0%", "100%", "100%"],
                            originX: [1, 1, 1, 1, 1],
                        }}
                        transition={{
                            duration: 2,
                            delay: 1,
                            ease: "easeInOut",
                        }}
                        className="green"
                    ></motion.div>
                    <motion.div
                        initial={{ originX: 1, scaleX: 2, opacity: 1 }}
                        animate={{
                            x: ["-100%", "-100%", "-100%", "0%", "0%"],
                            scaleX: [0, 10, 10, 0.5, 1],
                            scaleY: [10, 10, 1, 1, 1],
                            opacity: 1,
                        }}
                        exit={{
                            scaleX: [1, 0.5, 10, 10, 10],
                            scaleY: [1, 1, 1, 10, 10],
                            originX: [0, 0, 0, 0, 0],
                        }}
                        transition={{
                            duration: 2,
                            delay: 1,
                            ease: "easeInOut",
                        }}
                        className="black"
                    ></motion.div>
                </motion.div>
                <motion.div
                    className="head2"
                    initial={{ scaleX: 1.6, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{
                        duration: 1,
                        delay: 5,
                    }}
                    exit={{
                        scaleX: 0.3,
                        opacity: 0,
                        transition: {
                            delay: 0,
                        },
                    }}
                >
                    PASSIONATE LUXE
                </motion.div>
            </motion.div>
            <div className="content"></div>
        </motion.div>
    )
}

export default Loading

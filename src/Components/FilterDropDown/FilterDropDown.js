import React, { useState, useRef, useEffect } from "react"
import "./FilterDropDown.css"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { AnimatePresence } from "framer-motion"

const dropVariants = {
    initial: {
        opacity: 0,
        y: 60,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.01,
            when: "beforeChildren",
            staggerChildren: 0.1,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            when: "afterChildren",
            staggerChildren: 0.1,
            staggerDirection: -1,
        },
    },
}

const itemVariants = {
    initial: {
        opacity: 0,
        y: 50,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.01,
        },
    },
    exit: {
        opacity: 0,
        y: 50,

        transition: {
            duration: 0.01,
        },
    },
}

const FilterDropDown = (props) => {
    const [open, setOpen] = useState(false)
    const [curitem, setCurItem] = useState("")
    const ref = useRef(null)
    useEffect(() => {
        window.addEventListener("click", (e) => {
            if (ref.current && e.target !== ref.current) {
                setOpen(false)
            }
        })
    })
    return (
        <div className="filter-menu">
            <div
                className="filter-overlay"
                onClick={() => setOpen(!open)}
                ref={ref}
                id={props.label}
            ></div>
            <div
                className={`filter-menu-head ${
                    open ? "filter-menu-active" : "filter-menu-inactive"
                }`}
            >
                <h2>{curitem == "" ? props.label : curitem}</h2>
                <FontAwesomeIcon icon={faChevronDown} />
            </div>
            <AnimatePresence exitBeforeEnter>
                {open && (
                    <motion.div
                        className="filter-menu-drop"
                        variants={dropVariants}
                        animate="visible"
                        initial="initial"
                        exit="exit"
                    >
                        {props.items.map((value) => {
                            return (
                                <motion.h2
                                    className="filter-menu-drop-item"
                                    onClick={() => setCurItem(value)}
                                    key={value}
                                    variants={itemVariants}
                                >
                                    {value}
                                </motion.h2>
                            )
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default FilterDropDown

import React, { useState, useEffect } from "react"
import "./App.css"
import { motion, AnimatePresence } from "framer-motion"
import Loading from "./Components/Loading/Loading"
import Navbar from "./Components/Navbar/Navbar"
import { Hero } from "./Components/Hero2/Hero"
import Login from "./Components/Modal/Login"
import Cart from "./Components/Cart/Cart"

import { Product } from "./Components/Product/Product"
import { Products } from "./Components/Products/Products"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Parallax from "react-rellax"


function App() {
    const [user, setUser] = useState(null)
    const [navcol, setNavcol] = useState(true)

    // useEffect(() => {
    //   // const getUser = () => {
    //   //   fetch("http://localhost:5000/auth/login/success", {
    //   //     method: "GET",
    //   //     credentials: "include",
    //   //     headers: {
    //   //       Accept: "application/json",
    //   //       "Content-Type": "application/json",
    //   //       "Access-Control-Allow-Credentials": true,
    //   //     },
    //   //   })
    //   //     .then((response) => {
    //   //       if (response.status === 200) return response.json();
    //   //       throw new Error("authentication has been failed!");
    //   //     })
    //   //     .then((resObject) => {
    //   //       setUser(resObject.user);
    //   //     })
    //   //     .catch((err) => {
    //   //       console.log(err);
    //   //     });
    //   // };
    //   // getUser();
    // }, []);
    const [img, setImg] = useState(1)
    const [load, setLoad] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoad(!load)
        }, 8000)
    }, [])
    const spring = {
        type: "spring",
        damping: 10,
        stiffness: 70,
    }
    return (
        <React.Fragment>
            <Router>
                <Navbar setUser={setUser} user={user} navcol={navcol} />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                               
                               <Products/>
                            </>
                        }
                    />
                    <Route
                        path="/load"
                        element={
                            <AnimatePresence>
                                {load && <Loading />}
                            </AnimatePresence>
                        }
                    />
                    {/* <Route exact path='/' element={<Video setNavcol={setNavcol}/>}></Route> */}
                    <Route
                        path="/cart"
                        element={<Cart setNavcol={setNavcol} navcol={navcol} />}
                    ></Route>
                    <Route path="/products" element={<Products />} />

                    <Route path="/products/:id" element={<Product />} />
                </Routes>
            </Router>
        </React.Fragment>
    )
}

export default App


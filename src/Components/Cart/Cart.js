import React, { useState, useEffect } from "react"
import Navbar from "../Navbar/Navbar"
import "./Cart.css"
import { Add, Delete } from "@mui/icons-material"
import { BrowserRouter as Router, Switch, useLocation } from "react-router-dom"
import { useSelector } from "react-redux"
import styled from "styled-components"
// import Announcement from "../components/Announcement";
// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
import { mobile } from "../responsive"

const Container = styled.div`
    position: relative;
    top: 110px;
    ${mobile({ top: "10px" })}
`

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: "10px" })}
`

const Title = styled.h1`
    font-weight: 500px;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 3rem;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) =>
        props.type === "filled" ? "black" : "transparent"};
    color: ${(props) => props.type === "filled" && "white"};
`

const TopTexts = styled.div`
    ${mobile({ display: "none" })}
`
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
    font-size: 1.5rem;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`

const Info = styled.div`
    flex: 3;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`

const Image = styled.img`
    width: 200px;
`

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const ProductName = styled.span`
    font-size: 2rem;
`

const ProductId = styled.span`
    font-size: 2rem;
`

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
`

const ProductSize = styled.span`
    font-size: 2rem;
`

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    font-size: 2rem;
`

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin: "5px 15px" })}
`

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ marginBottom: "20px" })}
`

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`

const SummaryTitle = styled.h1`
    font-weight: 200;
`

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${(props) => props.type === "total" && "500"};
    font-size: ${(props) => props.type === "total" && "24px"};
`

const SummaryItemText = styled.span`
    font-size: 2rem;
`

const SummaryItemPrice = styled.span`
    font-size: 2rem;
`

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`

// const Cart = () => {
//     const [height,setHeight]=useState(0)
//     const [view,setView ]=useState(false)
//     const handleCallback = (childData) =>{
//         setHeight(childData)

//     }
//     console.log(height)
//     // useEffect(()=>{

//     // window.addEventListener('resize',()=>{
//     //   if(window.innerWidth<960)
//     //   {
//     //     setView(true)
//     //   }
//     //   else{
//     //     setView(false)
//     //   }

//     // })
//     // if(view)
//     // {
//     //  document.querySelector('.blankDiv').style.height="0px"
//     // }
//     // else{
//     //  document.querySelector('.blankDiv').style.height=height.toString()+"px";
//     // }
//     // },[height,view])
//   return (
//     <div className='cart-container'>

//         <Navbar  parent= {handleCallback}/>
//         <div class="blankDiv"></div>
//         <div className="cart-title">Cart</div>
//     </div>
//   )
// }

const Cart = ({ setNavcol, navcol }) => {
    let Location = useLocation()
    const cart = useSelector((state) => state.cart.products)
    const total = useSelector((state) => state.cart.total)
    useEffect(() => {
        console.log(window.location.href.split("/").slice(-1)[0])
        if (window.location.href.split("/").slice(-1)[0] !== "") {
            setNavcol(false)
        } else {
            setNavcol(true)
        }
    }, [Location])
    return (
        <>
            <Container>
                {/* <Announcement /> */}
                <Wrapper>
                    <Title>YOUR BAG</Title>
                    <Top>
                        <TopButton>CONTINUE SHOPPING</TopButton>
                        <TopTexts>
                            <TopText>Shopping Bag(2)</TopText>
                            <TopText>Your Wishlist (0)</TopText>
                        </TopTexts>
                        <TopButton type="filled">CHECKOUT NOW</TopButton>
                    </Top>
                    <Bottom>
                        <Info>
                            {cart.map((item, id) => {
                                return (
                                    <Product>
                                        <ProductDetail>
                                            <Image
                                                src={require(`../../Images-2/${item.photo}`)}
                                            />
                                            <Details>
                                                <ProductName>
                                                    <b>Product:</b> {item.name}
                                                </ProductName>
                                                <ProductId>
                                                    <b>ID:</b> {id}
                                                </ProductId>
                                                <ProductColor color="black" />
                                                {/* <ProductSize>
                    <b>Size:</b> 37.5
                  </ProductSize> */}
                                            </Details>
                                        </ProductDetail>
                                        <PriceDetail>
                                            <ProductAmountContainer>
                                                <Add />
                                                <ProductAmount>
                                                    {item.quantity}
                                                </ProductAmount>
                                                <Delete />
                                            </ProductAmountContainer>
                                            <ProductPrice>
                                                $ {item.price}
                                            </ProductPrice>
                                        </PriceDetail>
                                    </Product>
                                )
                            })}
                        </Info>
                        <Summary>
                            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                            <SummaryItem>
                                <SummaryItemText>Subtotal</SummaryItemText>
                                <SummaryItemPrice>$ {total}</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>
                                    Estimated Shipping
                                </SummaryItemText>
                                <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>
                                    Shipping Discount
                                </SummaryItemText>
                                <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem type="total">
                                <SummaryItemText>Total</SummaryItemText>
                                <SummaryItemPrice>$ {total}</SummaryItemPrice>
                            </SummaryItem>
                            <Button>CHECKOUT NOW</Button>
                        </Summary>
                    </Bottom>
                </Wrapper>
                {/* <Footer /> */}
            </Container>
            <div className="flag">
                <div className="orange"></div>
                <div className="white"></div>
                <div className="black"></div>
                <div className="orange"></div>
            </div>
        </>
    )
}
export default Cart

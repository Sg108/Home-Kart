import React from "react"
import "./Card.css"
import { Link } from "react-router-dom"
//const pho = require("../../Images-2/pro4.png")

export const Card = (props) => {
    return (
        <div className="pro-card">
            <div className="circle"></div>
            <div className="pro-info">
                <h2 className="pro-name">{props.item.title}</h2>
                <h3 className="pro-price">{props.item.price}</h3>
                <Link to={`/products/${props.item.id}`}>
                    <button className="pro-button">Shop</button>
                </Link>
            </div>
            <div className="pro-img">
                {/* {console.log(`../../Images-2/${props.item.thumbnail}`)} */}
                <img src={props.item.thumbnail} alt="" />
            </div>
        </div>
    )
}

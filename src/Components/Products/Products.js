import React from "react"
import "./Products.css"
import { data } from "../../data"
import { Card } from "../Card/Card"
import { FilterBox } from "../FilterBox/FilterBox"

export const Products = () => {
    // console.log(data)
    return (
        <div className="products-container">
            <FilterBox />
            <div className="products-heading">
                <h2>
                    SHOWING <span> ALL PRODUCTS</span>
                </h2>
                <div className="right-line"></div>
            </div>
            <div className="products-box">
                {data.map((pro,idx) => {
                    // console.log(pro)
                    
                    return <Card item={pro} index={idx} />
                })}
            </div>
        </div>
    )
}

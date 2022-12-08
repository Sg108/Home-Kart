import React, { useEffect } from "react"
import "./Products.css"
// import { data } from "../../data"
import { Card } from "../Card/Card"
import { FilterBox } from "../FilterBox/FilterBox"
import { useDispatch, useSelector } from "react-redux"
import { storeProducts } from "../../redux/productReducer"

export const Products = () => {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.product.products)
    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((data) =>
                dispatch(storeProducts({ products: data.products }))
            )
    }, [])
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
                {data.map((pro) => {
                    // console.log(pro)

                    return <Card item={pro} />
                })}
            </div>
        </div>
    )
}

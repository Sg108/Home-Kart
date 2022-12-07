import React, { useEffect, useRef, useState } from "react"
import "./FilterBox.css"
import Collapse from "../Collapse/Collapse"
import FilterDropDown from "../FilterDropDown/FilterDropDown"

export const FilterBox = () => {
    return (
        <div className="filter-container">
            <div className="filter-box">
                <h2>FILTER : </h2>
                <FilterDropDown
                    label="Category"
                    items={["Men", "Women", "Kids", "New Arrival"]}
                />
                <FilterDropDown
                    label="Size"
                    items={["M", "L", "XL", "XXl", "S"]}
                />
            </div>
            <div className="filter-box">
                <h2>SORT : </h2>
                <FilterDropDown
                    label="Sort-By"
                    items={[
                        "price low to high",
                        "Women",
                        "Kids",
                        "New Arrival",
                    ]}
                />
            </div>
        </div>
    )
}

import React from "react"
import "./Sidebar.css"

export const Sidebar = (props) => {
    return (
        <div>
            <div className="sidebar">
                <div className="line"></div>
                <div onMouseOver={() => props.setimg(1)} className="category">
                    JORDAN
                </div>
                <div onMouseOver={() => props.setimg(2)} className="category">
                    CANYON
                </div>
                <div className="category">SPARKS</div>
                <div className="category">NIKE</div>
            </div>
        </div>
    )
}

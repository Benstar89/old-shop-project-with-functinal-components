import React from "react";
import styled from "../styles/Banner.module.css";
import bgbanner from "../images/banner.jpg"
const Banner = () => {
    return(
        <div className={styled.main}>
            <img src = {bgbanner} alt = "bg"/>
            <div className={styled.textarea}>
                <h1>BotoStart</h1>
                <p>We're learning <span>React.js</span></p>
            </div>
        </div>
    )
}

export default Banner;
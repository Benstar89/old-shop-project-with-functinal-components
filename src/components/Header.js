import React from "react";
import Logo from "../images/Logo.png";
import styled from "../styles/Header.module.css";
import {Link} from "react-router-dom";

const Header = () => {
    return(
        <div className={styled.all}>
            <div className={styled.leftside}>
                <ul>
                   <li><Link to = "/">Home Page</Link></li> 
                   <li><Link to = "/products">Products</Link></li> 
                   <li><Link to = "/aboutus">About Us</Link></li> 
                </ul>
            </div>
            <div className={styled.rightside}>
                <img src = {Logo} alt = "logo" />
            </div>
        </div>
    )
}
export default Header;
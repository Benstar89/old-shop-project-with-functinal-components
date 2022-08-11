import React from 'react';
import samsung from "../images/samsung.jpg";
import apple from "../images/apple.jpg";
import xiaomi from "../images/xiaomi.png";
import styled from "../styles/Support.module.css";

const Support = () => {
    return (
        <div className={styled.main}>
            <h1>Who Support Us ?</h1>
            <div className={styled.whoSupport}>
                <img src = {apple} alt = "pic" />
                <img src = {samsung} alt = "pic" />
                <img src = {xiaomi} alt = "pic" />
            </div>
        </div>
    );
};

export default Support;
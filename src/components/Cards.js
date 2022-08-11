import React from 'react';
import styled from "../styles/Cards.module.css";
import Card from "./Card";
import iphone10 from "../images/iphone10.jpg";
import iphone11 from "../images/iphone11.jpg";
import iphone12 from "../images/iphone12.jpg";
import s21 from "../images/s21.jpg";



const Cards = () => {
    return (
        <div className={styled.cards}>
            <Card img = {iphone10} price = {"500"} name = {"iphone 10"}/>
            <Card img = {iphone11} price = {"600"} name = {"iphone 11"}/>
            <Card img = {iphone12} price = {"800"} name = {"iphone 12"}/>
            <Card img = {s21} price = {"790"} name = {"s21 ultra"}/>
        </div>
    );
};

export default Cards;
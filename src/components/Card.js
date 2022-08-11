import React , {useState} from 'react';
import styled from '../styles/Card.module.css';
import up from "../images/up.svg";
import down from "../images/down.svg";

const Card = (props) => {
    let [number , setNumber] = useState(0)

    const addProduct = () => {
        setNumber(
            number += 1,
        )
    }
    const dontAddProduct = () => {
        if(number > 0){
            setNumber(
                number = number - 1
            )
        }
    }
    return (
        <div className={styled.card}>
            <img src = {props.img}/>
            <h3>{props.name}</h3>
            <h3>{props.price} {`${number > 0 ? `${number} *`  : ""}  ${number > 0 ? number * props.price : ""}`}</h3>
            <div className={styled.addingPart}>
                <img src = {down} className={number === 0 ? styled.deactive : styled.up} onClick = {dontAddProduct}/>
                <div className={styled.value}>{number}</div>
                <img src = {up} className={styled.up} onClick = {addProduct}/>
            </div>
        </div>
    );
};

export default Card;
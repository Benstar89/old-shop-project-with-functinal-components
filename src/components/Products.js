import React , {useEffect , useState} from 'react';
import axios from "axios";
import styled from "../styles/Products.module.css";
import Card from "./Card";

const Products = () => {
    let [data , setData] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then(response => {
                setData(
                    data = response.data,
                    console.log(data)
                )
            })
    } , [])
    return (
        <div className={styled.store}>
            {data.length ? "" : <h1>Loding...</h1>}
            {data.map(item => <Card price = {item.price} name = {item.category} key = {item.id} img = {item.image}/>)}
        </div>
    );
};

export default Products;
import React from 'react';
import styled from "../styles/Search.module.css";

const Search = () => {
    return (
        <div className={styled.search}>
            <h1>Search What You Want</h1>
            <input type = "text"/>
        </div>
    );
};

export default Search;
import React from 'react';

import Banner from "./Banner";
import Cards from "./Cards";
import Search from "./Search";
import Support from "./Support";

const Landing = () => {
    return (
        <div>
            <Banner />
            <Cards />
            <Search />
            <Support />
        </div>
    );
};

export default Landing;
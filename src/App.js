import React from 'react';
import Header from "./components/Header"
import Footer from './components/Footer';
import Landing from "./components/Landing";
import Products from './components/Products';
import Aboutus from "./components/Aboutus"
import {Route , Routes} from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path = "/" element = {<Landing />}/>
        <Route path = "/products" element = {<Products />}/>
        <Route path = "/aboutus" element = {<Aboutus />}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
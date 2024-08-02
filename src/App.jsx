// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import About from "./Components/Pages/About"
import Layout from './Components/Layout';
import Faq from './Components/Pages/Faq';
import Post from "./Components/Pages/Post"
import Service from './Components/Pages/Service';
import Testimonial from './Components/Pages/Testimonial';
import Products from './Components/Pages/Products';
// import { AppData } from './Data/firebaseData';
// import {getAuth} from "firebase/auth"
const App = () => {
  // console.log(AppData)
  // const datex = getAuth(AppData)
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/post" element={<Post />} />
          <Route path="/service" element={<Service />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

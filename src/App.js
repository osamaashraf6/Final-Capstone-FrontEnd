import React, { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.js';
import Home from './pages/Home.js';
import Reserve from './pages/Reserve.js';
import AddReserve from './pages/AddReserve.js';
import SignUp from './pages/SignUp.js';
import Section1 from './components/SignUp/Section1/Section1.js';
import Section2 from './components/SignUp/Section2/Section2.js';
import Footer from './components/Footer/Footer.js';

import './App.css';
import HomeDetails from './components/Home/HomeDetails/HomeDetails.js';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/*  */}
          <Route index element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="/product/:id" element={<HomeDetails />} />
          {/*  */}
          <Route path="Reserve" element={<Reserve />} />
          {/*  */}
          <Route path="SignUp" element={<SignUp />}>
            <Route index element={<Section1 />} />
            <Route path="Section1" element={<Section1 />} />
            <Route path="Section2" element={<Section2 />} />
          </Route>
          {/*  */}
          <Route path="AddReserve" element={<AddReserve />} />
          {/*  */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

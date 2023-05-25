import './App.css';
import {Header} from './components/HomePage/Header.js';
import {Footer} from './components/Footer/Footer.js';
import React from "react";
import HomePage from "./components/HomePage/HomePage.js";
import BookingPage from "./components/BookingPage/BookingPage.js";
import Chicago from "./components/Chicago/Chicago.js"
import CallToAction from "./components/CallToAction/CallToAction.js";
import CustomersSay from "./components/CustomersSay/CustomersSay.js";
import Specials from "./components/Specials/Specials.js";

import {Routes, Route} from "react-router-dom";



function App() {


    return (
      <div className="App">
        <Header></Header>
          <main id="main-content" className="mb-0 h-100 z-1">
              <Routes>
                  <Route path="/" element={<HomePage/>}></Route>
                  <Route path="/week-specials" element={<Specials/>}></Route>
                  <Route path="/booking" element={<BookingPage/>}></Route>
                  <Route path="/chicago" element={<Chicago/>}></Route>
                  <Route path="/hero" element={<CallToAction/>}></Route>
                  <Route path="/testimonials" element={<CustomersSay/>}></Route>
              </Routes>
          </main>
        <Footer></Footer>
      </div>
  );
}

export default App;

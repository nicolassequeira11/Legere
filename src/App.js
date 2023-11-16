import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";
import Genre from "./Genre";
import Details from "./Details";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return(
    <Routes>
      <Route path="/Legere" element={<Home />} />
      <Route path="/Genre" element={<Genre />} />
      <Route path="/Details" element={<Details />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Profile" element={<Profile />} />
    </Routes>
  )
}

export default App;

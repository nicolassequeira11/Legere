import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Profile from "./Profile";
import Genre from "./Genre";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return(
    <Routes>
      <Route path="/Legere" element={<Home />} />
      <Route path="/Genre" element={<Genre />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Profile" element={<Profile />} />
    </Routes>
  )
}

export default App;

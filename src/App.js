import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return(
    <Routes>
      <Route path="/Legere" element={<Home />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  )
}

export default App;

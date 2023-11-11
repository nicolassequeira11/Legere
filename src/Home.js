import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./images/banner-home.png";

const Home = () => {
  return(
    <div>
      <Navbar />
      <div>
        <img src={Banner} className="col-12" />
      </div>
    </div>
  );
};

export default Home;

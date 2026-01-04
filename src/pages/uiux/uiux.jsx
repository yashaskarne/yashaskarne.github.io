import React from "react";
import "./uiux.css";
import applevid from "../../assets/applevid.mov";
import Header from "../../component/Header/black_header/header.jsx";
import back from "../../assets/wback.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Exploring, { data } from "../../component/exploring/exploring.jsx";
import { div } from "framer-motion/client";

const uiux = () => {
  const navigate = useNavigate();

  const uiuxImages = data.filter((img) => img.id);

  return (
    <div>
      <div className="uiux" id="uiux">
        <Header />
        <div className="back-button-uiux">
          <img src={back} alt="back" onClick={() => navigate("/")} />

          <h1>UI UX</h1>
        </div>
        <video
          src={applevid}
          className="uiux-img scroll-section"
          autoPlay
          muted
          loop
          playsInline
        />
        <h1 className="commingsoon">IN DEVELOPMENT</h1>
      </div>
      <Exploring images={uiuxImages} />
    </div>
  );
};

export default uiux;

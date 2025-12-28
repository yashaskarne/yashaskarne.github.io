import React from "react";
import "./footer.css";
import downarrow from "../../assets/downarroe.png";
import btnicon from "../../assets/logo.png";
import { Link } from "react-router-dom";

const footer = () => {
  return (
    <div>
      <div className="studio">
        <div className="arrow">
          <img src={downarrow} alt="" />
        </div>
        <div className="studio-button">
          <hr />
          <img src={btnicon} alt="" />
          <h1>THE STUDIO</h1>
        </div>
      </div>
      <div className="footer">
        <div className="footer-name">
          <h1>Work inquiries</h1>
        </div>
      </div>
    </div>
  );
};

export default footer;

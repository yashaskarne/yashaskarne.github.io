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
        <div className="f-heading">
          <h1>Contact</h1>
          <h1>Social</h1>
          <h1>Explore</h1>
        </div>
        <div className="f-data">
          <div className="f-left">
            <p>Bangalore, India</p>
            <p>yashk8326@gmail.com</p>
          </div>
          <div className="f-center">
            <p>LinkedIn</p>
            <p>Instagram</p>
            <p>Behance </p>
            <p>X</p>
          </div>
          <div className="f-right">
            <Link to={"/branding"} className="f-link">
              {" "}
              <p> Branding</p>
            </Link>
            <Link to={"/uiux"} className="f-link">
              {" "}
              <p> UI/UX</p>
            </Link>
            <Link to={"/casestudies"} className="f-link">
              {" "}
              <p> Case studies</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;

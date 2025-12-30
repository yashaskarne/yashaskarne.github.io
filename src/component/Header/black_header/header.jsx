import React from "react";
import "./header.css";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import resume from "../../../assets/resume.pdf";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="logo b-header-link">
        <img src={logo} alt="Logo" />
        <h3>One Eyed Designer</h3>
      </Link>
      <div className="nav-menu">
        <ul>
          <li>
            <a href={resume} target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </li>
          <li>
            <Link to="/#work">Work</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

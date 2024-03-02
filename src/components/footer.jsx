import React from "react";
import "./footer.css";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
const Footer = () => {
  return (
    <div className="MainFooter">
      <h3>Follow Me </h3>
      <div className="SocialLinks">
        <a 
        href="https://in.linkedin.com/in/marripudi-vijay-kumar-a2bab0232" 
        rel="noopener noreferrer" 
        target="_blank"
        >
          <img src={linkedin} alt="Linkedin Logo" />
        </a>
        <a 
        href="https://github.com/VijayMarripudi" 
        rel="noopener noreferrer"
        target="_blank" 
        >
          <img src={github} alt="GitHub Logo" />
        </a>
      </div>
      <p> &copy; Last Updated March 2024</p>
    </div>
  );
};

export default Footer;

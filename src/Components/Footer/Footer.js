import React from "react";
// import background from '../../assets/back.jpg';
import "./Footer.css";
import logo from "../../assets/cice.jpeg";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { color } from "framer-motion";


export default function Footer() {
  return (
    <div id="Contact">
      <div className="footer">
        <div className="Border">
          {/* <img className="bg-img" src={background} alt="" /> */}
          <div className="symbol">
            <img className="logo" src={logo} alt="JSCOP Logo" />
          </div>
          <a
            className="phone"
            href="https://www.google.com/maps/place/JAYPEE+INSTITUTE+OF+INFORMATION+TECHNOLOGY/@28.6312137,77.3683335,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce551491b3ce7:0x7335d9fcfd4d9db0!8m2!3d28.631209!4d77.3709084!16zL20vMDlqcXJt?entry=ttu"
            target="_blank"
          >
            <div className="Location">
              <div>
                <IoLocationSharp fontSize="medium" />
                <div className="location-content">
                  <p>JSCOP 6.O</p>
                  <p>Jaypee Institute Of Information Technology</p>
                  <p> Sector-62 , Noida </p>
                  <p>India</p>
                </div>
              </div>
            </div>
          </a>
          <div className="contact">
            <div className="footer-contact">
              <FaPhone fontSize="12px" />
              <a className="phone" href="tel:+919116457772">
                Anima Shukla : +91 8115610105
              </a>
            </div>
            <div className="footer-contact">
              <FaPhone fontSize="12px" />
              <a className="phone" href="tel:+919506424755">
                Anima Shukla : +91 8383936346
              </a>
            </div>
            <div className="footer-contact">
              <MdEmail fontSize="15px" />

              <a href="mailto:mittalyas1234@gmail.com" className="phone">
                Email : xyz@gmail.com
              </a>
            </div>
          </div>
          <div className="find-us">
            <div className="icons" style={{ color: "white" }}>
              Find Us Here
            </div>
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/company/jiitopticachapter/"
                className="link"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.facebook.com/jiitopticachapter/"
                className="link"
              >
                <FaSquareFacebook />
              </a>
              <a href="https://github.com/jiitopticachapter" className="link">
                <FaGithubSquare />
              </a>
              <a
                href="https://www.instagram.com/jiitopticachapter/"
                className="link"
              >
                <FaInstagramSquare />
              </a>
              <a
                href="https://www.youtube.com/@jiitopticachapter7634"
                className="link"
              >
                <FaYoutubeSquare />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <hr style={{ color: "white" }} /> */}
      <div
        id="copyright"
        style={{
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "10px",
          paddingTop: "10px",
          borderTop: "1px solid white",
        }}
      >
        <span> &copy;</span> &nbsp; Copyright : CICE JIIT | All Rights
        Reserved
      </div>
    </div>
  );
}

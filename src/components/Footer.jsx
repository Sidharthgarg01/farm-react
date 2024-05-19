import React from "react";
import { FaInstagram, FaSquareFacebook, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="title-social-links">
          <h2>
            local <br />
            life
          </h2>
          <div className="links">
            <a href="#">
              <FaSquareFacebook />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
          </div>
        </div>
        <div className="footer-coloum">
          <h4>our services</h4>
          <ul>
            <li>what's new</li>
            <li>how to order</li>
            <li>payment method</li>
            <li>other status</li>
            <li>subscriptions</li>
          </ul>
        </div>
        <div className="footer-coloum">
          <h4>our team</h4>
          <ul>
            <li>our local farms</li>
            <li>craftman ship</li>
            <li>our services</li>
            <li>sustenebelity</li>
          </ul>
        </div>
        <div className="footer-coloum">
          <h4>legal</h4>
          <ul>
            <li>privacy policy</li>
            <li>our promise</li>
            <li>more information</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>copyright &copy; 2024 hte local life co. all right reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

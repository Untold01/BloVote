import React from "react";

import "./Footer.css";

const Footer = () => (
  <>
    <div className="footer-block"></div>
    <div className="footer">
      <div className="footer-container">
        <p>
        Copyright &copy;
          {new Date().getFullYear()} Blo-Vote. All rights reserved
          .
        </p>
      </div>
    </div>
  </>
);

export default Footer;

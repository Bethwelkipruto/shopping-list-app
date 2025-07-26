import React from "react";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>© {year} SwiftBasket | Your smart way to organize your shopping items.</p>
    </footer>
  );
}

export default Footer;

import React from "react";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>© {year} Shopping List App. Built with React.</p>
    </footer>
  );
}

export default Footer;

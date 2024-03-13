import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const openNav = () => {
    document.getElementById("myNav").style.width = "100%";
  };

  const handleCloseNav = () => {
    document.getElementById("myNav").style.width = "0%";
  };
  return (
    <div className="navbar">
      <div id="myNav" className="overlay">
        <a href="#" className="closebtn" onClick={handleCloseNav}>
          &times;
        </a>
        <div className="overlay-content" onClick={handleCloseNav}>
          <a href="#about">ABOUT</a>
          <a href="#gift">BUY GIFT CARDS</a>
          <a href="#contact">SOCIALS</a>
        </div>
      </div>
      <Link to="/">
        <img src="/logoo.png" className="logo" alt="" />
      </Link>
      <span style={{ fontSize: "30px", cursor: "pointer" }} onClick={openNav}>
        &#9776;
      </span>

      <ul className="nav-links">
        <li>
          <a href="#about">ABOUT</a>
        </li>
        <li>
          <a href="#gift">BUY GIFT CARDS</a>
        </li>
        <li>
          <a href="#contact">SOCIALS</a>
        </li>
      </ul>
      <a href="https://t.me/AIGiftrobot" target="_blank" className="hidea">
        <button className="btn2">TRY THE BOT</button>
      </a>
    </div>
  );
}

export default Navbar;

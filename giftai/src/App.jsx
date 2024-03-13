import React, { useState } from "react";
import "./App.css"; // Import your CSS files here
import GiftForm from "./components/GiftForm";
import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <section id="hero" className="hero hell">
        <div className="hero-content">
          <div className="lefthero">
            <h1 className="hero-title">
              Send Love Anonymously with <span>Crypto</span> Gifts!
            </h1>
            <p>
              Send Anonymously our best in class Gifting Crypto Service -
              GiftAI, with the power of all the coupons available
            </p>
            <div className="buttondiv">
              <a href="https://t.me/AIGiftrobot" target="_blank">
                <button className="btn2">TRY NOW</button>
              </a>
            </div>
          </div>
          <img src="./giftbox.png" className="hero-img" alt="Gift Box" />
        </div>
        <div className="learnmore">
          <p>Learn More</p>
          <img src="./scrolldown.png" alt="Scroll Down" />
        </div>
      </section>
      <section className="about" id="about">
        <h1>
          About <span>Us</span>
        </h1>
        <div className="features">
          <div className="card">
            <img src="/giftybb.png" />
            <h3>Wide Selection</h3>
            <p>
              Cards for in-app purchases such as Itunes? Or perhaps want to pay
              for your beloved hotel stay with hotels.com gift card? We offer
              you a wide selection, that is updated daily to support more
              platforms.
            </p>
          </div>
          <div className="card">
            <img src="/nomsg.png" />
            <h3>Anonymous Transactions</h3>
            <p>
              No Sign Up, No KYC, nothing of that sort. Pay with crypto, and
              receive your order in minutes, no strings attached
            </p>
          </div>
          <div className="card">
            <img src="/callno.png" />
            <h3>Multi Platform</h3>
            <p>
              You can either book through our website, or if you don’t feel like
              leaving Telegram, just use our bot.
            </p>
          </div>
          <div className="card">
            <img src="/ticksec.png" />
            <h3>Recieve Crypto Gifts</h3>
            <p>
              Setup your own page to receive anonymous crypto gifts, just share
              the link with people you think would love to send you something,
              perfect for birthdays!
            </p>
          </div>
        </div>
        <div className="community">
          <div className="leftcom">
            <h3>SEND LOVE WITH CRYPTO</h3>
            <p>
              Discover the thrill of anonymous gifting with crypto. Surprise
              your loved ones with digital presents, while keeping your identity
              hidden. Experience the joy of giving without revealing your
              secrets. Start gifting anonymously today and spread smiles
              effortlessly!
            </p>
            <div className="explorebot">
              <p>Explore Bot &gt; </p>
            </div>
          </div>
          <div className="rightcom">
            <div className="comcard">
              <h1>0+</h1>
              <h5>Active Users</h5>
            </div>
            <div className="comcard">
              <h1>$0</h1>
              <h5>Gift Cards Alloted</h5>
            </div>
          </div>
        </div>
      </section>
      <section className="gift">
        <h1>
          {" "}
          Buy Gift <span>Cards</span>
        </h1>
        <div className="maingift">
          <GiftForm />
        </div>
      </section>
      <section className="recieve">
        <h1>
          Want to Recieve Anyonymous <span>Gifts ?</span>
        </h1>
        <Link to="/createprofile">
          <button className="btnr">Create Profile</button>
        </Link>
      </section>
      <section id="contact" className="footer">
        <div className="footer-logo">
          <img src="./logoo.png" alt="Footer Logo" />
        </div>
        <div className="footer-links">
          <ul>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#gift">Gift Cards</a>
            </li>
            <li>
              <a href="https://t.me/AIGiftrobot" target="_blank">
                Try Now!
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-social">
          <h2>
            Our <span>Socials</span>
          </h2>
          <ul>
            <li>
              <a href="https://t.me/GiftAIerc" target="_blank">
                <img src="/telegram.png" />
              </a>
            </li>
            <li>
              <a href="https://x.me/giftAIerc" target="_blank">
                <img src="/Twitter.png" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default App;

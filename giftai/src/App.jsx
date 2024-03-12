import React, { useState } from "react";
import "./App.css"; // Import your CSS files here
import GiftForm from "./components/GiftForm";

function App() {
  const [giftCost, setGiftCost] = useState("$40");
  const [selectedCompany, setSelectedCompany] = useState("Walmart");
  const [selectedAmount, setSelectedAmount] = useState("5");
  const [receiverEmail, setReceiverEmail] = useState("");

  const handleCompanyChange = (event) => {
    setSelectedCompany(event.target.value);
  };

  const handleAmountChange = (event) => {
    setSelectedAmount(event.target.value);
  };

  const handleEmailChange = (event) => {
    setReceiverEmail(event.target.value);
  };

  const openNav = () => {
    document.getElementById("myNav").style.width = "100%";
  };

  const closeNav = () => {
    document.getElementById("myNav").style.width = "0%";
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div>
      <header>
        <div className="navbar">
          <div id="myNav" className="overlay">
            <a
              href="javascript:void(0)"
              className="closebtn"
              onClick={closeNav}
            >
              &times;
            </a>
            <div className="overlay-content" onClick={closeNav}>
              <a href="#about">ABOUT</a>
              <a href="#gift">BUY GIFT CARDS</a>
              <a href="#contact">SOCIALS</a>
            </div>
          </div>
          <img src="./logoo.png" className="logo" alt="" />
          <span
            style={{ fontSize: "30px", cursor: "pointer" }}
            onClick={openNav}
          >
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
          <a href="" target="_blank" className="hidea">
            <button className="btn2">TRY THE BOT</button>
          </a>
        </div>
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
              <a href="" target="_blank">
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
            <img src="./public/giftybb.png" />
            <h3>Wide Selection</h3>
            <p>
              Cards for in-app purchases such as Itunes? Or perhaps want to pay
              for your beloved hotel stay with hotels.com gift card? We offer
              you a wide selection, that is updated daily to support more
              platforms.
            </p>
          </div>
          <div className="card">
            <img src="./public/nomsg.png" />
            <h3>Anonymous Transactions</h3>
            <p>
              No Sign Up, No KYC, nothing of that sort. Pay with crypto, and
              receive your order in minutes, no strings attached
            </p>
          </div>
          <div className="card">
            <img src="./public/callno.png" />
            <h3>Multi Platform</h3>
            <p>
              You can either book through our website, or if you don’t feel like
              leaving Telegram, just use our bot.
            </p>
          </div>
          <div className="card">
            <img src="./public/ticksec.png" />
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
            {" "}
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
              <a
                href="https://t.me/betaierc"
                target="_blank"
                rel="noopener noreferrer"
              >
                Try Now!
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-social">
          <h2>
            Our <span>Links</span>
          </h2>
          <ul>
            <li>
              <a href="">
                <img src="./public/telegram.png" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="./public/Twitter.png" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="./public/gitbook.svg" />
              </a>
            </li>
            <li></li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default App;

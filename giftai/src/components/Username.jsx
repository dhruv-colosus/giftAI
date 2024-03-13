import React, { useState } from "react";
import Navbar from "./Navbar";

function Username() {
  const [selectedToken, setselectedToken] = useState("5");

  const updateGiftCard = (event) => {
    // Get selected store and amount from event.target.value
    const { name, value } = event.target;

    // Update state based on the input name
    if (name === "radio") {
      setSelectedGift(value);
    } else if (name === "radio2") {
      setselectedToken(value);
    }
  };
  return (
    <>
      <Navbar />
      <section className="createprofile">
        <form
          className="makegift"
          id="giftForm"
          // onSubmit={handleFormSubmit}
          onChange={updateGiftCard}
        >
          <div className="profilesection">
            <img src="/monki.jpg" alt="Gift" />
            <h2>Dhruv Deora</h2>
            <p>
              This is my descrpition lol hello how are you. This is my
              descrpition lol hello how are you
            </p>
          </div>
          <h6>Select Tokens you want to Gift</h6>

          <div className="costing selections">
            <label className="cont">
              BNB
              <input
                type="checkbox"
                name="radio2"
                value="BNB"
                checked={selectedToken === "BNB"}
              />
              <span className="checkmark2"></span>
            </label>
            <label className="cont">
              ETH
              <input
                type="checkbox"
                name="radio2"
                value="ETH"
                checked={selectedToken === "ETH"}
              />
              <span className="checkmark2"></span>
            </label>
            <label className="cont">
              ETHARB
              <input
                type="checkbox"
                name="radio2"
                value="ETHARB"
                checked={selectedToken === "ETHARB"}
              />
              <span className="checkmark2"></span>
            </label>
            <label className="cont">
              SOL
              <input
                type="checkbox"
                name="radio2"
                value="SOL"
                checked={selectedToken === "SOL"}
              />
              <span className="checkmark2"></span>
            </label>
          </div>
          <h6>Name</h6>
          <input
            type="text"
            id="names"
            className="emailinput selections"
            placeholder="Anonymous"
          />
          <h6>Comments (optional) </h6>

          <textarea
            id="comments"
            className="emailinput selections"
            type="text"
            placeholder="Enter your Comment"
          />
          <h6>Amount in Dollars</h6>
          <input
            type="number"
            id="names"
            className="emailinput selections"
            placeholder="Anonymous"
          />

          <button className="newbtn">Send Gift </button>
        </form>
      </section>
    </>
  );
}

export default Username;

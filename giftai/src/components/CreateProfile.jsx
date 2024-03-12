import React, { useState } from "react";
import Navbar from "./Navbar";

function CreateProfile() {
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
        <h1>
          Create <span>Profile</span>
        </h1>
        <form
          className="makegift"
          id="giftForm"
          // onSubmit={handleFormSubmit}
          onChange={updateGiftCard}
        >
          <h6>Username</h6>
          <input
            type="text"
            id="username"
            className="emailinput selections"
            placeholder="Enter UserName"
          />
          <h6>Select Tokens you want</h6>

          <div className="costing selections">
            <label className="cont">
              BNB
              <input
                type="checkbox"
                name="radio2"
                value="BNB"
                checked={selectedToken === "BNB"}
              />
              <span className="checkmark"></span>
            </label>
            <label className="cont">
              ETH
              <input
                type="checkbox"
                name="radio2"
                value="ETH"
                checked={selectedToken === "ETH"}
              />
              <span className="checkmark"></span>
            </label>
            <label className="cont">
              ETHARB
              <input
                type="checkbox"
                name="radio2"
                value="ETHARB"
                checked={selectedToken === "ETHARB"}
              />
              <span className="checkmark"></span>
            </label>
            <label className="cont">
              SOL
              <input
                type="checkbox"
                name="radio2"
                value="SOL"
                checked={selectedToken === "SOL"}
              />
              <span className="checkmark"></span>
            </label>
          </div>
          <div className="emailing">
            <h6>Description</h6>

            <textarea
              id="description"
              className="emailinput selections"
              type="text"
              placeholder="Enter your description"
            />
          </div>
          <div className="extras">
            <div className="extrasinside">
              <h6>Profile Picture</h6>

              <input
                id="profilepic"
                className="emailinput "
                type="file"
                placeholder="Choose Profile Pic"
              />
            </div>
            <div className="extrasinside">
              <h6>TG BOT ID</h6>

              <input
                id="tgbotid"
                className="emailinput "
                type="text"
                placeholder="Enter your TG BOT ID"
              />
            </div>
          </div>

          <button className="newbtn">Create Profile </button>
        </form>
      </section>
    </>
  );
}

export default CreateProfile;

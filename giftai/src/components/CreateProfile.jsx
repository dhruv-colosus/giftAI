import React, { useState } from "react";
import Navbar from "./Navbar";

function CreateProfile() {
  const [selectedTokens, setSelectedTokens] = useState("5");
  const [tokenAddresses, setTokenAddresses] = useState({
    BNB: "",
    ETH: "",
    ETHARB: "",
    SOL: "",
  });

  const updateGiftCard = (event) => {
    const { value, checked } = event.target;

    if (
      value === "BNB" ||
      value === "ETH" ||
      value === "ETHARB" ||
      value === "SOL"
    ) {
      setSelectedTokens((prevSelectedTokens) =>
        checked
          ? [...prevSelectedTokens, value]
          : prevSelectedTokens.filter((token) => token !== value)
      );
    }
  };

  const handleAddressChange = (token, address) => {
    setTokenAddresses((prevAddresses) => ({
      ...prevAddresses,
      [token]: address,
    }));
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
        >
          <h6>Username</h6>
          <input
            type="text"
            id="username"
            className="emailinput selections"
            placeholder="Enter UserName"
          />
          <h6>Select the coins you want to accept!</h6>

          <div className="costing2 selections">
            <div className="tokenrow">
              <label className="custom-checkbox">
                <input
                  type="checkbox"
                  value="BNB"
                  checked={selectedTokens.includes("BNB")}
                  onChange={updateGiftCard}
                />
                <span className="checkmark"></span>
                <p>BTC</p>
              </label>
              <input
                type="text"
                className={`emailinput selections ${
                  !selectedTokens.includes("BNB") ? "disabled-input" : ""
                }`}
                placeholder="Enter your Address"
                value={tokenAddresses.BNB}
                onChange={(e) => handleAddressChange("BNB", e.target.value)}
                disabled={!selectedTokens.includes("BNB")}
              />
            </div>
            <div className="tokenrow">
              <label className="custom-checkbox">
                <input
                  type="checkbox"
                  value="ETH"
                  checked={selectedTokens.includes("ETH")}
                  onChange={updateGiftCard}
                />
                <span className="checkmark"></span>
                <p>ETH</p>
              </label>

              <input
                type="text"
                className={`emailinput selections ${
                  !selectedTokens.includes("ETH") ? "disabled-input" : ""
                }`}
                placeholder="Enter your Address"
                value={tokenAddresses.ETH}
                onChange={(e) => handleAddressChange("ETH", e.target.value)}
                disabled={!selectedTokens.includes("ETH")}
              />
            </div>
            <div className="tokenrow">
              <label className="custom-checkbox">
                <input
                  type="checkbox"
                  value="ETHARB"
                  checked={selectedTokens.includes("ETHARB")}
                  onChange={updateGiftCard}
                />
                <span className="checkmark"></span>
                <p>ETHARB</p>
              </label>

              <input
                type="text"
                className={`emailinput selections ${
                  !selectedTokens.includes("ETHARB") ? "disabled-input" : ""
                }`}
                placeholder="Enter your Address"
                value={tokenAddresses.ETHARB}
                onChange={(e) => handleAddressChange("ETHARB", e.target.value)}
                disabled={!selectedTokens.includes("ETHARB")}
              />
            </div>
            <div className="tokenrow">
              <label className="custom-checkbox">
                <input
                  type="checkbox"
                  value="SOL"
                  checked={selectedTokens.includes("SOL")}
                  onChange={updateGiftCard}
                />
                <span className="checkmark"></span>
                <p>SOL</p>
              </label>

              <input
                type="text"
                className={`emailinput selections ${
                  !selectedTokens.includes("SOL") ? "disabled-input" : ""
                }`}
                placeholder="Enter your Address"
                value={tokenAddresses.SOL}
                onChange={(e) => handleAddressChange("SOL", e.target.value)}
                disabled={!selectedTokens.includes("SOL")}
              />
            </div>
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
              <h6>
                TG Bot id{" "}
                <span>
                  (Dm the bot on t.me/AiGiftRobot and type /code to get your
                  code)
                </span>
              </h6>

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

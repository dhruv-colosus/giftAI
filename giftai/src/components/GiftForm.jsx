import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function GiftForm() {
  const [selectedGift, setSelectedGift] = useState("iTunes");
  const [selectedAmount, setSelectedAmount] = useState("5");
  const [receiverEmail, setReceiverEmail] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const jsonData = {
      brand: selectedGift,
      amt: selectedAmount,
      email: receiverEmail,
    };

    localStorage.setItem("giftData", JSON.stringify(jsonData));

    navigate("/payment");
  };
  const handleEmailChange = (event) => {
    setReceiverEmail(event.target.value);
  };

  const updateGiftCard = (event) => {
    // Get selected store and amount from event.target.value
    const { name, value } = event.target;

    // Update state based on the input name
    if (name === "radio") {
      setSelectedGift(value);
    } else if (name === "radio2") {
      setSelectedAmount(value);
    }
  };

  return (
    <>
      <div className="giftcard">
        <p id="giftcost">{selectedAmount}</p>
        <h2 id="giftcomp">{selectedGift}</h2>
      </div>
      <form
        className="makegift"
        id="giftForm"
        onSubmit={handleFormSubmit}
        onChange={updateGiftCard}
      >
        <h6>Choose Gift</h6>
        <div className="companies selections">
          <label className="cont">
            iTunes
            <input
              type="radio"
              name="radio"
              value="iTunes"
              checked={selectedGift === "iTunes"}
            />
            <span className="checkmark"></span>
          </label>
          <label className="cont">
            Walmart
            <input
              type="radio"
              name="radio"
              value="Walmart"
              checked={selectedGift === "Walmart"}
            />
            <span className="checkmark"></span>
          </label>
          <label className="cont">
            Amazon
            <input
              type="radio"
              name="radio"
              value="Amazon"
              checked={selectedGift === "Amazon"}
            />
            <span className="checkmark"></span>
          </label>
          <label className="cont">
            Disney
            <input
              type="radio"
              name="radio"
              value="Disney"
              checked={selectedGift === "Disney"}
            />
            <span className="checkmark"></span>
          </label>
          <label className="cont">
            Google Play
            <input
              type="radio"
              name="radio"
              value="Google Play"
              checked={selectedGift === "Google Play"}
            />
            <span className="checkmark"></span>
          </label>
          <label className="cont">
            Uber
            <input
              type="radio"
              name="radio"
              value="Uber"
              checked={selectedGift === "Uber"}
            />
            <span className="checkmark"></span>
          </label>
        </div>
        <h6>Select Amount</h6>

        <div className="costing selections">
          <label className="cont">
            5$
            <input
              type="radio"
              name="radio2"
              value="5"
              checked={selectedAmount === "5"}
            />
            <span className="checkmark"></span>
          </label>
          <label className="cont">
            10$
            <input
              type="radio"
              name="radio2"
              value="10"
              checked={selectedAmount === "10"}
            />
            <span className="checkmark"></span>
          </label>
          <label className="cont">
            15$
            <input
              type="radio"
              name="radio2"
              value="15"
              checked={selectedAmount === "15"}
            />
            <span className="checkmark"></span>
          </label>
          <label className="cont">
            25$
            <input
              type="radio"
              name="radio2"
              value="25"
              checked={selectedAmount === "25"}
            />
            <span className="checkmark"></span>
          </label>
          <label className="cont">
            50$
            <input
              type="radio"
              name="radio2"
              value="50"
              checked={selectedAmount === "50"}
            />
            <span className="checkmark"></span>
          </label>
          <label className="cont">
            100$
            <input
              type="radio"
              name="radio2"
              value="100"
              checked={selectedAmount === "100"}
            />
            <span className="checkmark"></span>
          </label>
        </div>
        <div className="emailing">
          <h6>Reciever's Email</h6>

          <input
            id="receiverEmail"
            className="emailinput selections"
            type="text"
            placeholder="Enter Email"
            value={receiverEmail}
            onChange={handleEmailChange}
          />
        </div>

        <button className="newbtn">Pay Now</button>
      </form>
    </>
  );
}

export default GiftForm;

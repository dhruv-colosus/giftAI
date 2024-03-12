import React, { useState, useEffect } from "react";
import { API_URL } from "./Constants";
import Navbar from "./Navbar";

function Payment() {
  const [formData, setFormData] = useState({
    brand: "",
    amt: "",
    email: "",
    currency: "ETH",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem("giftData");
    const parsedData = JSON.parse(savedData);

    if (parsedData) {
      setFormData(parsedData);
    }
    console.log(parsedData);
  }, []);

  const handleCurrencyChange = (event) => {
    setFormData({ ...formData, currency: event.target.value });
    localStorage.setItem("currency", event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        localStorage.setItem("txnid", JSON.stringify(data.id));
        window.location.href = `/order?txid=${data.id}`;
      } else {
        console.log("Error:", data.error);
        // Show error toast
      }
    } catch (error) {
      console.error("Error:", error);
      // Show error toast
    }
  };

  return (
    <>
      <section id="hero" className="hero hell">
        <Navbar />
      </section>
      <section className="main">
        <h1>Complete Payment</h1>
        <form id="paymentForm" onSubmit={handleFormSubmit}>
          <div className="namings">
            <h2>
              Gift Card : <span id="companyname">{formData.brand}</span>
            </h2>
            <h2>
              Amount : <span id="amounttotal">{formData.amt}$</span>
            </h2>
          </div>
          <h2>
            Email : <span id="mailid">{formData.email}</span>
          </h2>

          <h3>Choose Currency</h3>
          <div className="costing selections">
            <label className="cont" style={{ backgroundColor: "black" }}>
              ETH
              <input
                // type="radio"
                name="currency"
                value="ETH"
                checked={formData.currency === "ETH"}
                onChange={handleCurrencyChange}
              />
              <span className="checkmark"></span>
            </label>
            <label className="cont">
              BNB
              <input
                type="radio"
                name="currency"
                value="BNB.BSC"
                checked={formData.currency === "BNB.BSC"}
                onChange={handleCurrencyChange}
              />
              <span className="checkmark"></span>
            </label>
            <label className="cont">
              USDT
              <input
                type="radio"
                name="currency"
                value="USDT"
                checked={formData.currency === "USDT"}
                onChange={handleCurrencyChange}
              />
              <span className="checkmark"></span>
            </label>
          </div>
          <button type="submit" className="newbtn">
            Complete Payment
          </button>
          {loading && (
            <div
              id="loading-spinner"
              style={{ display: "block", position: "absolute" }}
            >
              <div
                className="spinner-border"
                role="status"
                style={{ display: "flex" }}
              >
                <div className="spinner" style={{ marginRight: "1rem" }}></div>
                <span
                  className="sr-only"
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontSize: "1.5rem",
                    fontFamily: "Gilroy",
                  }}
                >
                  Loading...
                </span>
              </div>
            </div>
          )}
        </form>
      </section>
    </>
  );
}

export default Payment;

import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import BigNumber from "bignumber.js";
import { API_URL } from "./Constants";
import Navbar from "./Navbar";

const Order = () => {
  const [searchParams] = useSearchParams();
  const txid = searchParams.get("txid");
  const [qrData, setQrData] = useState(null);
  const [costs, setCosts] = useState("");
  const [currency, setCurrency] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/status`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: txid,
          }),
        });
        const data = await response.json();

        if (response.ok) {
          if (data.complete) {
            showSuccessToast();
          } else {
            setQrData(data);
            generateQR(data.addr, data.expiry, data.amt, data.coin);
          }
        } else {
          console.log("Error");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    const savedData = localStorage.getItem("giftData");
    const parsedData = JSON.parse(savedData);

    setCosts(`${parsedData.amt}$`);
    setCurrency(localStorage.getItem("currency"));

    fetchData();
    const interval = setInterval(fetchData, 10000);

    return () => clearInterval(interval);
  }, [txid]);

  const showSuccessToast = () => {
    const toast = document.getElementById("toast");
    toast.textContent = "Payment Done Successfully";
    toast.style.display = "block";
    toast.style.backgroundColor = "#4CAF50";
    toast.style.padding = "16px";
    toast.style.margin = "10px";

    setTimeout(() => {
      toast.style.display = "none";
    }, 3000);
  };

  const generateQR = (addr, expiry, amount, coin) => {
    const apiURL = "https://api.qrserver.com/v1/create-qr-code/";
    const weiAmount = new BigNumber(10).exponentiatedBy(18).times(amount);
    let params;

    if (coin === "BNB.BSC") {
      const datas = `ethereum:${addr}@56?amount=${weiAmount}`;
      params = `?size=150x150&data=${encodeURIComponent(datas)}`;
    } else if (coin === "ETH") {
      const datas = `ethereum:${addr}@1?amount=${weiAmount}`;
      params = `?size=150x150&data=${encodeURIComponent(datas)}`;
    }

    const qrCodeURL = apiURL + params;
    const img = document.createElement("img");
    img.src = qrCodeURL;

    const qrContainer = document.getElementById("qrContainer");
    qrContainer.innerHTML = "";
    qrContainer.appendChild(img);
  };

  return (
    <>
      <section id="hero" className="hero hell">
        <Navbar />
      </section>
      <section className="main">
        <h1>Scan QR Code</h1>
        <form style={{ textAlign: "center" }}>
          <div id="qrContainer"></div>
          <h4 style={{ marginTop: "2rem" }}>
            Please send <span id="costs">{costs}</span> worth of
            <span id="currency"> {currency} </span> to the address
            <span id="txnid"> {qrData?.addr || "0x4773843"}</span>
          </h4>
          <div id="toast" className="toast"></div>
        </form>
      </section>
    </>
  );
};

export default Order;

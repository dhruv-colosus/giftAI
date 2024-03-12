import "dotenv/config";
import express from "express";
import Coinpayments from "coinpayments";
import { Database } from "bun:sqlite";

import cors from "cors";

const db = new Database("data.db");
db.run(
  `CREATE TABLE IF NOT EXISTS txns(id TEXT, email TEXT, brand TEXT, amount INT, currency TEXT, complete INT DEFAULT 0);`
);

const client = new Coinpayments({
  key: process.env.KEY,
  secret: process.env.SECRET,
});

const app = express();
app.use(cors()); // Allow all origins

app.use(express.static("static"));
app.use(express.json());

// app.get("/payment", (req, res) => {
//   return res.sendFile(__dirname + "/static/payment.html");
// });

// app.get("/order", (req, res) => {
//   return res.sendFile(__dirname + "/static/order.html");
// });

app.post("/create", async (req, res) => {
  console.log(req.body);
  const amt = parseInt(req.body.amt);
  const currency = req.body.currency;
  if (![5, 10, 15, 25, 50, 100].includes(amt)) {
    return res.status(400).json({ error: "Invalid amount" });
  }
  if (!["ETH", "BNB.BSC", "USDT"].includes(currency)) {
    return res.status(400).json({ error: "Invalid currency" });
  }

  // can do validation here
  const brand = req.body.brand;
  const email = req.body.email;

  let tx;
  try {
    tx = await client.createTransaction({
      amount: amt,
      currency1: "USD",
      currency2: currency,
      buyer_email: email,
      item_name: `${brand} Gift Card $${amt}`,
    });
  } catch (e) {
    console.log(e);
    return res.status(502).json({ error: "Failed to create order" });
  }

  db.prepare(
    `INSERT INTO txns VALUES($id, $email, $brand, $amt, $currency, 0);`
  ).run(tx.txn_id, email, brand, amt, currency);

  return res.json({ id: tx.txn_id });
});

app.post("/status", async (req, res) => {
  const txid = req.body.id;

  const rec = await db
    .query(
      `SELECT complete,email,brand,amount,currency FROM txns where id=$txid;`
    )
    .get(txid);

  if (rec === null) {
    return res.status(400).json({ error: "Invalid ID" });
  }
  if (rec.complete !== 0) {
    return res.json({ complete: true });
  }

  let tx;
  try {
    tx = await client.getTx({ txid: req.body.id });
  } catch (e) {
    console.log(e);
    return res.status(502).json({ error: "Failed to fetch order" });
  }

  if (tx.status === 1) {
    // send email and telegram message here
    db.prepare(`UPDATE txns SET complete = 1 WHERE id=$txid;`).run(req.body.id);

    await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`,
      {
        method: "POST",
        body: new URLSearchParams({
          chat_id: process.env.ADMIN_CHAT_ID,
          text: `New order confirmed!\nID: ${txid}\nEmail: ${rec.email}\nGift Card: ${rec.brand} $${rec.amount}`,
        }),
      }
    );

    return res.json({
      complete: true,
    });
  } else {
    return res.json({
      complete: false,
      addr: tx.payment_address,
      expiry: tx.time_expires,
      amt: tx.amountf,
      coin: tx.coin,
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});

import React, { useState } from "react";
import "./App.css";

function App() {
  const [amount, setAmount] = useState("");
  const [discount, setDiscount] = useState("");
  const [finalBill, setFinalBill] = useState(null);

  const calculateBill = () => {
    const amt = parseFloat(amount);
    const disc = parseFloat(discount);

    if (isNaN(amt) || isNaN(disc)) {
      alert("Please enter valid numbers!");
      return;
    }

    const discountValue = (amt * disc) / 100;
    const total = amt - discountValue;

    setFinalBill(total.toFixed(2));
  };

  return (
    <div className="container">
      <h1>🧾 Bill & Discount Calculator</h1>

      <div className="input-group">
        <label>Enter Bill Amount: </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />
      </div>

      <div className="input-group">
        <label>Enter Discount %: </label>
        <input
          type="number"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
          placeholder="Enter discount"
        />
      </div>

      <button onClick={calculateBill}>Calculate</button>

      {finalBill !== null && (
        <div className="result">Final Amount: ₹{finalBill}</div>
      )}
    </div>
  );
}

export default App;
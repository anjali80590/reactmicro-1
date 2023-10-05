// Form.js
import React, { useState } from "react";
import "./Form.css";
function Form({ onSubmit }) {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");

  const [errors, setErrors] = useState({
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvc: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setErrors({
      ...errors,
      [name]: "",
    });

    if (name === "cardName") {
      setCardName(value);
    } else if (name === "cardNumber") {
      setCardNumber(value);
    } else if (name === "expiryDate") {
      // Ensure the format is MM/YY
      if (/^\d{0,5}$/.test(value)) {
        setExpiryDate(value);
      }
    } else if (name === "cvc") {
      setCvc(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (cardName.trim() === "") {
      newErrors.cardName = "Name is required";
    }
    if (!/^\d{16}$/.test(cardNumber)) {
      newErrors.cardNumber = "Card number must be a 16-digit number";
    }
    if (!/^\d{4}$/.test(expiryDate)) {
      newErrors.expiryDate = "Expiry date must be in MM/YY format (e.g., 1223)";
    }
    if (!/^\d{3}$/.test(cvc)) {
      newErrors.cvc = "CVC must be a 3-digit number";
    }

    if (Object.keys(newErrors).length === 0) {
      onSubmit({
        cardName,
        cardNumber,
        expiryDate,
        cvc,
      });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Cardholder Name:</label>
          <input
            type="text"
            name="cardName"
            value={cardName}
            onChange={handleChange}
            placeholder="Cardholder Name"
          />
          {errors.cardName && <div className="error">{errors.cardName}</div>}
        </div>
        <div>
          <label>Card Number:</label>
          <input
            type="text"
            name="cardNumber"
            value={cardNumber}
            onChange={handleChange}
            placeholder="Card Number (16 digits)"
          />
          {errors.cardNumber && (
            <div className="error">{errors.cardNumber}</div>
          )}
        </div>
        <div className="inline-inputs">
          <div className="expiry-date">
            <label>Expiry Date (MM/YY):</label>
            <input
              type="text"
              name="expiryDate"
              value={expiryDate}
              onChange={handleChange}
              maxLength="5"
              placeholder="MM/YY"
            />
            {errors.expiryDate && (
              <div className="error">{errors.expiryDate}</div>
            )}
          </div>
          <div className="cvc">
            <label>CVC:</label> <br />
            <input
              type="text"
              name="cvc"
              value={cvc}
              onChange={handleChange}
              placeholder="CVC (3 digits)"
            />
            {errors.cvc && <div className="error">{errors.cvc}</div>}
          </div>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;

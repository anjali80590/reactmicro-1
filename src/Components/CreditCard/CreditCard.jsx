// Card.js
import React from 'react';

function Card({ cvc, cardNumber, expiryDate }) {
  return (
    <div className="card">
      <div className="cvc">CVC: {cvc}</div>
      <div className="card-number">Card Number: {cardNumber}</div>
      <div className="expiry-date">Expiry Date: {expiryDate}</div>
    </div>
  );
}

export default Card;

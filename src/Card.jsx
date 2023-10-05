// Card.js
import React from 'react';
import './card.css'

function Card({ cvc, cardNumber, expiryDate }) {
  return (
    <div className="card">
        <div className="frontcard">
            <div className="bigcircle"></div>
            <div className="smallcircle"></div>
        <div className="card-number"> {cardNumber}</div>
       <div className="box">
        <div className="txt">JANE APPLESSED</div>
        <div className="expiry-date"> {expiryDate}</div>
       </div>
        </div>
    <div className="backcard">
        <div className="black"></div>
        <div className="cvc-card">{cvc}</div>
    </div>
    
    </div>
  );
}

export default Card;

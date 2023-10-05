
// Form.js
import React, { useState } from 'react';

function Form({ onSubmit }) {
  const [formData, setFormData] = useState({
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvc: '',
  });

  const [errors, setErrors] = useState({
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvc: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error message when user starts typing in the field
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    const newErrors = {};
    if (formData.cardName.trim() === '') {
      newErrors.cardName = 'Name is required';
    }
    if (!/^\d{16}$/.test(formData.cardNumber)) {
      newErrors.cardNumber = 'Card number must be a 16-digit number';
    }
    if (!/^\d{4}$/.test(formData.expiryDate)) {
      newErrors.expiryDate = 'Expiry date must be a 4-digit number (MMYY)';
    }
    if (!/^\d{4}$/.test(formData.cvc)) {
      newErrors.cvc = 'CVC must be a 4-digit number';
    }

    if (Object.keys(newErrors).length === 0) {
      // Form is valid, submit the data to the parent component
      onSubmit(formData);
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
            value={formData.cardName}
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
            value={formData.cardNumber}
            onChange={handleChange}
            placeholder="Card Number (16 digits)"
          />
          {errors.cardNumber && <div className="error">{errors.cardNumber}</div>}
        </div>
        <div>
          <label>Expiry Date (MMYY):</label>
          <input
            type="text"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
            placeholder="Expiry Date (MMYY)"
          />
          {errors.expiryDate && <div className="error">{errors.expiryDate}</div>}
        </div>
        <div>
          <label>CVC:</label>
          <input
            type="text"
            name="cvc"
            value={formData.cvc}
            onChange={handleChange}
            placeholder="CVC (4 digits)"
          />
          {errors.cvc && <div className="error">{errors.cvc}</div>}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;

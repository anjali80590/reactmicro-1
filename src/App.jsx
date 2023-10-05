import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';
import './App.css';
import Card from './Card';
import Form from './Form';

// ... (previous code)

function App() {
  const [cardData, setCardData] = useState({
    cardName: '',
    cardNumber: '0000 0000 0000 0000',
    expiryDate: '00/00',
    cvc: '000',
  });

  const handleFormSubmit = (formData) => {
    setCardData({
      cardName: formData.cardName,
      cardNumber: formData.cardNumber,
      expiryDate: formData.expiryDate,
      cvc: formData.cvc,
    });

    // Show a success toast message
    toast.success('Form submitted successfully!', {
      position: 'top-center',
      autoClose: 2000, // Close the toast after 2 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });
  };

  return (
    <div className="App">

      <div className="container">
      <Card
        cvc={cardData.cvc}
        cardNumber={cardData.cardNumber}
        expiryDate={cardData.expiryDate}
      />
      <Form onSubmit={handleFormSubmit} />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;

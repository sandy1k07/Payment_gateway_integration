import React, { useEffect } from "react";

const Payment = () => {
  useEffect(() => {
    const rzpPaymentForm = document.getElementById("rzp_payment");

    if (!rzpPaymentForm.hasChildNodes()) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.async = true;
      script.dataset.payment_button_id = "pl_M2OShpgGM6cFmU";
      rzpPaymentForm.appendChild(script);
    }
  });
  return (
    <div className="payment">
      <div className="paymentWrapper">
        <h1>Thank You For the Support❤️</h1>
        <form id="rzp_payment"></form>
      </div>
    </div>
  );
};

export default Payment;

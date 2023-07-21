import React, { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    const rzpPaymentForm = document.getElementById("rzp_payment_form");

    if (!rzpPaymentForm.hasChildNodes()) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.async = true;
      script.dataset.payment_button_id = "pl_M2OShpgGM6cFmU";
      rzpPaymentForm.appendChild(script);
    }
  });
  return (
    <div className="navbar">
      <div>
        <a href="https://lets-feed-india.web.app/">Home</a>
        <a href="mailto:deepakdarak01@gmail.com">Contact Us</a>
      </div>
      <div>
        <form id="rzp_payment_form"></form>
      </div>
    </div>
  );
};

export default Navbar;

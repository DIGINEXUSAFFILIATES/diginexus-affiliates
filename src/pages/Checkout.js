import React from "react";

const Checkout = () => {
  return (
    <div className="container">
      <h1>Checkout</h1>
      <p>Enter your details to complete the purchase.</p>
      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default Checkout;

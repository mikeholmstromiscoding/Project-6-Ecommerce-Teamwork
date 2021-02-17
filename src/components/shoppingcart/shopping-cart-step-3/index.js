import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import Carousel from '../../app-you-may-also-like'

export default function OrderComplete() {
  return (
    <div className="order-complete">
      <div className="container text-center order-info">
        <h1>Thank you for your order</h1>
        <p className="mt-4">
          Your order has been placed and is being procceded. You will receive an
          email with the order details.
        </p>
        <Link to="/" className="order-link">
          <p className="mt-3">Back to Homepage</p>
        </Link>
      </div>
      <Carousel></Carousel>
    </div>
  );
}

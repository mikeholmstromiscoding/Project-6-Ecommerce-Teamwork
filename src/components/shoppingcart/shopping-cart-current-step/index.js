import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

export default function Index(props) {
  const step = () => {
    if (props.step === 1) {
      return (
        <div>
          <div className="container">
            <span className="weight-medium d-flex align-items-center justify-content-between">
              <span className="text-theme-color current-step-text">Shopping Cart</span>
              <i className="fas fa-angle-right text-theme-color mx-3"></i>
              {/* <i className="fas fa-angle-down text-theme-color d-none d-md-block"></i> */}
              <Link className="text-white current-step-text" to="/checkout">
                Checkout
              </Link>
              <i className="fas fa-angle-right text-theme-color mx-3"></i>
              {/* <i className="fas fa-angle-down text-theme-color d-none d-md-block"></i> */}
              <span className="current-step-text">Order Complete</span>
            </span>
          </div>
        </div>
      );
    }
    if (props.step === 2) {
      return (
        <div>
          <div className="container">
            <span className="weight-medium d-flex align-items-center justify-content-between">
              <Link className="text-white current-step-text" to="/shoppingcart">
                Shopping Cart
              </Link>
              
              <i className="fas fa-angle-right text-theme-color mx-3"></i>
              <span className="text-theme-color current-step-text">Checkout</span>
              <i className="fas fa-angle-right text-theme-color mx-3"></i>
              {/* <i className="fas fa-angle-down text-theme-color d-none"></i> */}
              <span className="current-step-text">Order Complete</span>
            </span>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <div className="step-bg d-flex align-items-center justify-content-center">
        {step()}
      </div>
    </div>
  );
}

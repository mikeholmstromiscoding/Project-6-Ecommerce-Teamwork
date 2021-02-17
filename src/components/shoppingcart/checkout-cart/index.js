import React from "react";
import './index.css'
import Brands from '../../app-brands/index'

export default function Index() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-lg-6">
          <p>
            Returning customer?{" "}
            <span className="text-theme-color">Click here to login</span>
          </p>
          <p className="mt-3">
            Have a coupon?{" "}
            <span className="text-theme-color">
              Click here to enter your code
            </span>
          </p>
          <div className="coupon mt-4">
            <p className="mb-4">
              If you have a coupon code, please apply it below.
            </p>
            <div className="contact-input-grp">
              <input
                type="text"
                className="form-control contact-input"
                placeholder="Coupon code"
              />
              <button className="contact-input-btn">Apply</button>
            </div>
          </div>
          <form className="mt-5 checkout-form">
            <h3 className="font-size-18">BILLING DETAILS</h3>
            <div className="form-row mt-4">
              <div className="form-group col-6">
                <label>
                  First name <span className="text-theme-color">*</span>
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group col-6">
                <label>
                  Last name <span className="text-theme-color">*</span>
                </label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="form-group">
              <label>Company name (optional)</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>
                Country / Region <span className="text-theme-color">*</span>
              </label>
              <select className="form-control">
                <option defaultValue>Choose...</option>
                <option>United States</option>
              </select>
            </div>
            <div className="form-group">
              <label>
                Street address <span className="text-theme-color">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group mt-4">
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>
                Town / City <span className="text-theme-color">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput2">
                State <span className="text-theme-color">*</span>
              </label>
              <select id="inputState" className="form-control">
                <option defaultValue>Alabama</option>
              </select>
            </div>
            <div className="form-group">
              <label>
                ZIP <span className="text-theme-color">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>
                Phone <span className="text-theme-color">*</span>
              </label>
              <input type="number" className="form-control" />
            </div>
            <div className="form-group">
              <label>
                Email adress <span className="text-theme-color">*</span>
              </label>
              <input type="email" className="form-control" />
            </div>
            <div className="form-check mt-5">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label">Create an account?</label>
            </div>
            <hr className="my-5" />
            <div className="form-check mb-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck1"
              />
              <label
                className="form-check-label text-size-18 weight-bold"
                htmlFor="gridCheck1"
              >
                SHIP TO DIFFERENT ADRESS?
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">
                Order notes (optional)
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="6"
                placeholder="Notes about your order, e.g. special notes for delivery."
              ></textarea>
            </div>
          </form>
        </div>
        <div className="col-12 col-lg-6">
          <div className="order-summary">
            <div className="order-header d-flex align-items-center justify-content-center">
              <p className="weight-medium text-size-24">CART TOTALS</p>
            </div>
            <div className="order-content">
              <span className="d-flex align-items-center justify-content-between weight-bold">
                <p className=" text-theme-color">PRODUCT</p>
                <p className=" text-theme-color">SUBTOTAL</p>
              </span>
              <hr />
              <span className="d-flex align-items-center justify-content-between">
                <p>Women smart high heel shoe</p>
                <p>$380.00</p>
              </span>
              <hr />
              <span className="d-flex align-items-center justify-content-between">
                <p>Gents half t-shirt</p>
                <p>$380.00</p>
              </span>
              <hr />
              <span className="d-flex align-items-center justify-content-between">
                <p>Gents winter yellow jacket</p>
                <p>$380.00</p>
              </span>
              <hr />
              <span className="d-flex align-items-center justify-content-between">
                <p>Men's Watches Brown Leather</p>
                <p>$380.00</p>
              </span>
              <hr />
              <span className="d-flex align-items-center justify-content-between weight-medium">
                <p className=" text-theme-color">Subtotal</p>
                <p className=" text-theme-color">$930.00</p>
              </span>
              <hr />
              <span className="d-flex align-items-center justify-content-between">
                <p>Shipping</p>
                <span className="text-right">
                  <div className="form-check mb-1">
                    <label
                      className="form-check-label custom-shipping-label"
                      htmlFor="payment2"
                    >
                      Flat rate:{" "}
                      <span className="text-theme-color">$20.00</span>
                    </label>
                    <input
                      className="form-check-input custom-shipping-radio"
                      type="radio"
                      name="payment"
                      id="payment2"
                      value="p2"
                    />
                  </div>
                  <div className="form-check mb-1">
                    <label
                      className="form-check-label custom-shipping-label"
                      htmlFor="payment2"
                    >
                      Free shipping
                    </label>
                    <input
                      className="form-check-input custom-shipping-radio"
                      type="radio"
                      name="payment"
                      id="payment2"
                      value="p2"
                    />
                  </div>
                  <div className="form-check mb-1">
                    <label
                      className="form-check-label custom-shipping-label"
                      htmlFor="payment2"
                    >
                      Local pickup:{" "}
                      <span className="text-theme-color">$25.00</span>
                    </label>
                    <input
                      className="form-check-input custom-shipping-radio"
                      type="radio"
                      name="payment"
                      id="payment2"
                      value="p2"
                    />
                  </div>
                </span>
              </span>
              <hr />
              <span className="d-flex align-items-center justify-content-between weight-bold text-size-18">
                <p className=" text-theme-color">TOTAL</p>
                <p className=" text-theme-color">$930.00</p>
              </span>
              <hr />
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="payment"
                  id="payment1"
                  value="p1"
                />
                <label className="form-check-label" htmlFor="payment1">
                  Direct bank transfer
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="payment"
                  id="payment2"
                  value="p2"
                />
                <label className="form-check-label" htmlFor="payment2">
                  Check Payment
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="payment"
                  id="payment2"
                  value="p2"
                />
                <label className="form-check-label" htmlFor="payment2">
                  Cah on delivery
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="payment"
                  id="payment2"
                  value="p2"
                />
                <label
                  className="form-check-label d-flex align-items-center"
                  htmlFor="payment2"
                >
                  PayPal
                  <img
                    className="mx-2"
                    src="@/assets/img/shop-img/paypal-logo.png"
                    alt=""
                  />
                  <span className="text-grey-color">What is PayPal?</span>
                </label>
              </div>
              <hr />
              <p>
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our{" "}
                <span className="text-theme-color">privacy policy.</span>
              </p>
              <hr />
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="accept-terms"
                />
                <label className="form-check-label" htmlFor="accept-terms">
                  I have read and agree to the website{" "}
                  <span className="text-theme-color">
                    terms and conditions *
                  </span>
                </label>
              </div>
              <button className="btn custom-theme-btn text-size-18 btn-p-t-c mt-3">
                PLACE ORDER
              </button>
            </div>
          </div>
        </div>
      </div>
      <Brands></Brands>
    </div>
  );
}

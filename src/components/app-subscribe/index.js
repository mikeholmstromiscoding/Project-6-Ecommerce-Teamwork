import React from 'react'
import './index.css';

export default function Index() {
    return (
        <div>
            <div className="app-contact">
                <div className="container d-flex flex-column flex-xl-row justify-content-between align-items-center">
                    <div className="">
                        <h2>
                            SUBSCRIBE
                            <span className="text-theme-color"> NOW</span>
                        </h2>
                        <p className="sign-up">
                            Signup for awesome news about our new products and
                            know our special discounts on products.
                        </p>
                        <div className="contact-input-grp">
                            <input type="text" className="form-control contact-input" placeholder="Enter email adress" />
                            <button className="contact-input-btn">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

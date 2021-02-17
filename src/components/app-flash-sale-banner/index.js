import React from 'react';
import './index.css'

export default function Index() {
    return (
      <div>
        <div className="flash-sale">
          <div className="container d-flex flex-column flex-lg-row justify-content-md-between flash-container">
            <div className="flash-sale-off">
              <h1>FLASH SALE</h1>
              <p>UP TO 50% OFF</p>
            </div>
            <div className="d-flex align-items-center flex-column justify-content-center py-5">
              <div className="flash-counter d-flex flex-column flex-sm-row">
                <div className="d-flex justify-content-between mb-4 mb-sm-0">
                  <div className="flash-counter-i d-flex flex-column justify-content-center">
                    <h3 className="text-theme-color">7</h3>
                    <p>Days</p>
                  </div>
                  <div className="flash-counter-i d-flex flex-column justify-content-center">
                    <h3 className="text-theme-color">23</h3>
                    <p>Hours</p>
                  </div>
                </div>

                <div className="d-flex justify-content-between">
                  <div className="flash-counter-i d-flex flex-column justify-content-center">
                    <h3 className="text-theme-color">46</h3>
                    <p>Minutes</p>
                  </div>
                  <div className="flash-counter-i d-flex flex-column justify-content-center">
                    <h3 className="text-theme-color">12</h3>
                    <p>Seconds</p>
                  </div>
                </div>
              </div>
              <button className="btn custom-cta-btn mt-4">SHOP NOW</button>
            </div>
          </div>
        </div>
      </div>
    );
}
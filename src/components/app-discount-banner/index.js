import React from 'react';
import './index.css'

export default function Index() {

    return (
        <div className="sale-info">
          <div className="container h-100 d-flex justify-content-between">
            <div className="sale-info-off d-none align-items-center justify-content-center flex-column d-md-flex">
              <h3>
                30% <span>OFF</span>
              </h3>
              <p>FOR NEW CUSTOMER</p>
              <button className="btn custom-cta-btn mt-4 sale-info-btn">
                SHOP NOW
              </button>
            </div>
            <div className="sale-info-desc col-12 col-md-5 d-flex flex-column justify-content-center">
              <p>
                Donec pulvinar arcu vitae ipsum varius cursus. Nunc iaculis
                fermentum iaculis. Nunc pulvinar purus at erat lacinia, ut
                convallis nibh consequat. Integer nulla nisi, aliquam at tellus
                a, viverra scelerisque purus. Nam pretium iaculis ultrices.
              </p>
              <button className="btn custom-cta-btn mt-5 sale-info-desc-btn">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
    );
}
import React from 'react'
import './index.css';

import Shipping from '../../assets/img/feature-icons/shipping.svg';
import Support from '../../assets/img/feature-icons/support.svg';
import Payment from '../../assets/img/feature-icons/payment.svg';
import Delivery from '../../assets/img/feature-icons/delivery.svg';

export default function Index() {
    return (
        <div>
            <div id="shipping-boxes">
                <div className="container">
                    <div className="grid-wrapper">
                        {/* Box 1 */}
                        <div className="box-shipping d-flex align-items-center">
                            <img className="box-image" src={Shipping} alt="/#" />
                            <span>
                                <p className="box-title text-theme ml-3">Free Shipping</p>
                                <p className="ml-3 text-title small">For a local customer, we provide free shipping facility</p>
                            </span>
                        </div>
                        {/* Box 2 */}
                        <div className="box-shipping d-flex align-items-center">
                            <img className="box-image" src={Support} alt="/#" />
                            <span>
                                <p className="box-title text-theme ml-3">24/7 support</p>
                                <p className="ml-3 text-title small">For any inquiry, we are available 24 hours every day</p>
                            </span>
                        </div>
                        {/* Box 3 */}
                        <div className="box-shipping d-flex align-items-center">
                            <img className="box-image" src={Payment} alt="/#" />
                            <span>
                                <p className="box-title text-theme ml-3">Online payment</p>
                                <p className="ml-3 text-title small">You can pay quickly and easily with our online payment system</p>
                            </span>
                        </div>
                        {/* Box 4 */}
                        <div className="box-shipping d-flex align-items-center">
                            <img className="box-image" src={Delivery} alt="/#" />
                            <span>
                                <p className="box-title text-theme ml-3">Fast delivery</p>
                                <p className="ml-3 text-title small">We understand your urgency and we deliver in a fast way</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

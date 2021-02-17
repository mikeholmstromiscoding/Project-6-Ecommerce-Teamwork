import React from 'react'
import './index.css'

import Brand from '../../../assets/img/brands/Bexim.png'
import ShopImage from '../../../assets/img/shop-img/1x1.png'


export default function Index() {
    return (
        <div>
            <div className="shop-current-path">
                <div className="container">
                    <div className="current-path-container d-flex align-items-center justify-content-between">
                        <p className="text-white weight-regular text-text-size-14">
                            <span className="text-theme-color mr-1">Home</span>
                            /
                            <span className="text-theme-color mx-1">Shop</span>
                            /
                            <span className="text-theme-color mx-1">Shoes</span>
                            /
                            <span className="ml-1">Gents Blue Lightweight Trainers</span>
                        </p>
                        <div className="d-none d-lg-flex align-items-center flex-row">
                             <div className="product-brand-fix">
                                <img className="product-brand-img" src={Brand} alt="/#" />
                            </div> 
                            <div className="d-flex align-items-center icons">
                                <i className="fas fa-angle-left fa-3x mx-3"></i>
                                <img src={ShopImage} alt="" />
                                <i className="fas fa-angle-right fa-3x mx-3"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

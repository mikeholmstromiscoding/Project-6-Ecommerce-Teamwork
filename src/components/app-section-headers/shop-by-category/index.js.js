import React from 'react'
import './index.css'
import Underline from '../../../assets/img/blog-img/underline.png'

export default function Index() {
    return (
        <div>
            <div className="app-latest-blog-header d-flex align-items-center flex-column">
                <h3>
                    <span>SHOP BY<span className="text-theme-color"> <br className="br-sm"/> CATEGORY</span></span>
                </h3>
                <img src={Underline} alt="underline" />
                <p className="text-second-color">We always try to give you the best product within a fast and reliable way</p>
            </div>
        </div>
    )
}



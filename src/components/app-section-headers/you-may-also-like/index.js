import React from 'react'
import './index.css'
import Underline from '../../../assets/img/blog-img/underline.png'

export default function Index() {
    return (
        <div>
            <div className="app-latest-blog-header d-flex align-items-center flex-column">
                <h3>
                    <span>YOU MAY<span className="text-theme-color"> ALSO LIKE</span></span>
                </h3>
                <img src={Underline} alt="underline" />
                <p className="text-second-color"></p>
            </div>
        </div>
    )
}

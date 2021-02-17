import '../app-blog-item/index.css'
import { Link } from 'react-router-dom'

import React from 'react'

export default function Index() {
    return (
        <div>
            <div className="position-relative pl-3 latest-blog">
                <div className="c-item-bg col-9 col-md-8"></div>
                <div className="c-item-info col-9 col-sm-8 col-md-7 col-xl-6 position-absolute">
                    <div className="c-item-date">
                        <h1 className="c-item-date-day">29</h1>
                        <p>MAR</p>
                    </div>
                    <div className="c-item-desc">
                        <p className="c-item-author">By <span>Adam Moore</span></p>
                        <p className="text-theme-color">A beautiful scenery in the
                        world we are missing
                        </p>
                        <div className="c-item-tags">
                            <span className="c-item-tag">
                                Travel
                            </span>
                            <span className="c-item-tag">
                                Fashion
                            </span>
                        </div>
                        <Link to="/blog-details" className="btn c-item-btn">Read more</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

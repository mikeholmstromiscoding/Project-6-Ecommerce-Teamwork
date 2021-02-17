import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    
    <div>
      
    
      <div className="banner"></div>
        <div className="container d-flex flex-column flex-lg-row justify-content-between align-items-center pt-5 pt-lg-0">
          <div className="banner-content mb-lg-0 px-4 px-lg-0">
            <h1>
              Shopping is
              <span className="text-theme-color">MORE FUN</span>
            </h1>
            <p className="py-3 banner-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloribus accusamus ipsa asperiores quam amet quas sapiente
              praesentium fuga distinctio quidem.
            </p>
            <Link to="shop">
              <button className="btn custom-cta-btn">SHOP NOW</button>
            </Link>
          </div>
 
        </div>
      </div>
  );
}

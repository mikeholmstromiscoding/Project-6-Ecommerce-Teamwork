import React from "react";
import "./index.css";
import NotFound from "../../assets/img/404.png"

export default function Index() {
  return (
    <div className="app-not-found">
      <div className="container">
        <div className="app-not-cound-container d-flex flex-column align-items-center justify-content-center">
          <img src={NotFound} alt="notfound" />
          <p className="mt-5">Oops! The page you are looking for doesn't exist.</p>
          <div className="mt-4">
            <button className="btn-not-found btn-w-u btn-theme-color mr-4">
              HOME
            </button>
            <button className="btn-not-found btn-second-color">
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

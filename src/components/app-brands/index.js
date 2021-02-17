import React from "react";
import "./index.css";

import Bexim from "../../assets/img/brands/Bexim.png";
import Dallas from "../../assets/img/brands/Dallas.png";
import Dismis from "../../assets/img/brands/Dismis.png";
import Lighton from "../../assets/img/brands/Lighton.png";
import Rosimo from "../../assets/img/brands/Rosimo.png";

export default function Index() {
  return (
    <div className="container">
      <div className="app-brands py-5 d-flex flex-column flex-lg-row justify-content-between align-items-center">
        <img src={Bexim} alt="bexim" />
        <img src={Lighton} alt="bexim" />
        <img src={Dismis} alt="bexim" />
        <img src={Rosimo} alt="bexim" />
        <img src={Dallas} alt="bexim" />
      </div>
    </div>
  );
}

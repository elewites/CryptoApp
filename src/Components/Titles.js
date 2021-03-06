import React from "react";

import "./styling/titles.css";

function Titles() {
  return (
    <div className="title-data">
      <p className="title-rank">#</p>
      <p className="title-icon-and-name">Coin</p>
      <p className="title-coin-price">Price</p>
      <p className="title-price-change">24h</p>
      <p className="title-coin-volume">24h Volume</p>
      <p className="title-mkt-cap">Mkt Cap</p>
    </div>
  );
}

export default Titles;

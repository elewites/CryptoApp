import React, { useState, useParams } from "react";

//styles
import "./coin.css";

export default function Coin(props) {
  const [coin, setCoin] = useState("");

  return (
    <div className="coin-container">
      <div className="coin-data">
        <p className="coin-rank">{props.rank}</p>
        <div className="icon-and-name">
          <img className="coin-icon" alt={props.name} src={props.icon} />
          <p className="coin-name">{props.name}</p>
          <p className="coin-symbol">{props.symbol.toUpperCase()}</p>
        </div>
        <p className="coin-price">${props.price.toFixed(2)}</p>
        {props.priceChange < 0 ? (
          <p className="price-change red">{props.priceChange.toFixed(2)}%</p>
        ) : (
          <p className="price-change green">{props.priceChange.toFixed(2)}%</p>
        )}
        <p className="coin-volume">${props.volume.toLocaleString()}</p>
        <p className="mkt-cap">${props.marketCap.toLocaleString()}</p>
        <button className="more-info-button">More Info</button>
      </div>
    </div>
  );
}

import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

//styles
import "./coin.css";

//components
import { Context } from "../Helpers/Context";

export default function Coin(props) {
  //global states
  const { currency, isDarkMode, setIsDarkMode } = useContext(Context);

  //navigation hook
  const navigate = useNavigate();

  //EFFECTS: if currency is usd, returns dollar sign, returns euro sign otherwise
  const setDisplayCurr = () => {
    return currency === "usd" ? "$" : "€";
  };

  return (
    <div
      className={isDarkMode ? "coin-data c-dark" : "coin-data c-light"}
      onClick={() => navigate(`/coinpage/${props.id}`)}
    >
      <p className="coin-rank">{props.rank}</p>
      <div className="icon-and-name">
        <img className="coin-icon" alt={props.name} src={props.icon} />
        <p className="coin-name">{props.name}</p>
        <p className="coin-symbol">{props.symbol.toUpperCase()}</p>
      </div>
      <p className="coin-price">
        {setDisplayCurr()}
        {props.price.toFixed(2)}
      </p>
      {props.priceChange < 0 ? (
        <p className="price-change c-red">{props.priceChange.toFixed(2)}%</p>
      ) : (
        <p className="price-change c-green">{props.priceChange}%</p>
      )}
      <p className="coin-volume">
        {setDisplayCurr()}
        {props.volume.toLocaleString()}
      </p>
      <p className="mkt-cap">
        {setDisplayCurr()}
        {props.marketCap.toLocaleString()}
      </p>
    </div>
  );
}

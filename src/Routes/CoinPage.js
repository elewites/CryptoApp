import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

//styling
import "./styling/coinpage.css";

//components
import { Context } from "../Helpers/Context";
import Navbar from "../Components/Navbar";

function CoinPage() {
  //global states
  const { currency, isDarkMode } = useContext(Context);

  //parameters in route
  const { id } = useParams();

  //coin data has to be set to null first to provide time to fetch API data
  const [coinData, setCoinData] = useState(null);

  //api url
  const API_COIN_URL = `https://api.coingecko.com/api/v3/coins/${id}`;

  //EFFECTS: fetching data from API and storing it in coinData state
  useEffect(() => {
    console.log(id);
    axios.get(API_COIN_URL).then((response) => {
      setCoinData(response.data);
      console.log(response.data);
    });
  }, [API_COIN_URL, id]);

  //EFFECTS: if currency is usd, returns dollar sign, returns euro sign otherwise
  const setDisplayCurr = () => {
    return currency === "usd" ? "$" : "€";
  };

  //component will render only if coinData is not null
  if (coinData) {
    return (
      <div
        className={
          isDarkMode ? "outermost-container dark" : "outermost-container"
        }
      >
        <div className="coinpage-container">
          <Navbar />
          <div className="coinpage-top">
            <p
              className={
                isDarkMode ? "coinpage-rank rank-dark" : "coinpage-rank"
              }
            >
              Rank #{coinData.market_cap_rank}
            </p>
            <div
              className={
                isDarkMode
                  ? "coinpage-top-inner-container inner-dark"
                  : "coinpage-top-inner-container"
              }
            >
              <img alt={coinData.symbol} src={coinData.image.small}></img>
              <p>{coinData.name}</p>
              <p>({coinData.symbol.toUpperCase()})</p>
            </div>
            <div className="coinpage-price-container">
              <p
                className={
                  isDarkMode ? "coinpage-price page-dark" : "coinpage-price"
                }
              >
                {setDisplayCurr()}
                {coinData.market_data.current_price[currency].toLocaleString()}
              </p>
              <p
                className={
                  coinData.market_data.price_change_percentage_24h_in_currency[
                    currency
                  ] < 0
                    ? "coinpage-percentage red"
                    : "coinpage-percentage green"
                }
              >
                {coinData.market_data.price_change_percentage_24h_in_currency[
                  currency
                ].toFixed(2)}
                %
              </p>
            </div>
          </div>
          <div
            className={
              isDarkMode ? "coinpage-bottom b-dark" : "coinpage-bottom"
            }
          >
            <div className="coinpage-row">
              <p className="row-label">24h high</p>
              <p>
                {setDisplayCurr()}
                {coinData.market_data.high_24h[currency].toLocaleString()}
              </p>
            </div>
            <div className="coinpage-row">
              <p className="row-label">24h low</p>
              <p>
                {setDisplayCurr()}
                {coinData.market_data.low_24h[currency].toLocaleString()}
              </p>
            </div>
            <div className="coinpage-row">
              <p className="row-label">24 Hour Trading Vol</p>
              <p>
                {setDisplayCurr()}
                {coinData.market_data.total_volume[currency].toLocaleString()}
              </p>
            </div>
            <div className="coinpage-row">
              <p className="row-label">Fully Diluted Valuation</p>
              <p>
                {setDisplayCurr()}
                {coinData.market_data.fully_diluted_valuation[currency]}
              </p>
            </div>
            <div className="coinpage-row">
              <p className="row-label">Circulating Supply</p>
              <p>{coinData.market_data.circulating_supply.toLocaleString()}</p>
            </div>
            <div className="coinpage-row">
              <p className="row-label">Total Supply</p>
              <p>{coinData.market_data.total_supply.toLocaleString()}</p>
            </div>
            <div className="coinpage-row">
              <p className="row-label">Max Supply</p>
              <p>{coinData.market_data.max_supply}</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default CoinPage;

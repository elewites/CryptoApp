import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

//styling
import "./styling/coinpage.css";

//components
import { Context } from "../Helpers/Context";
import Navbar from "../Components/Navbar";
import Chart from "../Components/Chart";

function CoinPage() {
  //global states
  const { currency, isDarkMode } = useContext(Context);

  //parameters in route
  const { id } = useParams();

  //coin data has to be set to null first to provide time to fetch API data
  const [coinData, setCoinData] = useState(null);
  const [price, setPrice] = useState(null);
  const [rank, setRank] = useState(null);
  const [percentageChange, setPercentage] = useState(null);
  const [high, setHigh] = useState(null);
  const [low, setLow] = useState(null);
  const [tradingVol, setTradingVol] = useState(null);
  const [valuation, setValuation] = useState(null);
  const [circSupply, setCircSupply] = useState(null);
  const [totalSupply, setTotalSupply] = useState(null);
  const [maxSupply, setMaxSupply] = useState(null);

  //api url
  const API_COIN_URL = `https://api.coingecko.com/api/v3/coins/${id}`;

  //EFFECTS: fetching data from API and storing it in coinData state
  useEffect(() => {
    console.log(id);

    axios.get(API_COIN_URL).then((response) => {
      setCoinData(response.data);
      console.log(response.data);
      //
      setPrice(response.data.market_data.current_price[currency]);
      setRank(response.data.market_cap_rank);
      setPercentage(
        response.data.market_data.price_change_percentage_24h_in_currency[
          currency
        ]
      );
      setHigh(response.data.market_data.high_24h[currency]);
      setLow(response.data.market_data.low_24h[currency]);
      setTradingVol(response.data.market_data.total_volume[currency]);
      setValuation(response.data.market_data.fully_diluted_valuation[currency]);
      setCircSupply(response.data.market_data.circulating_supply);
      setTotalSupply(response.data.market_data.total_supply);
      setMaxSupply(response.data.market_data.max_supply);
    });
    //
  }, [API_COIN_URL, id, currency]);

  //EFFECTS: if currency is usd, returns dollar sign, returns euro sign otherwise
  const setDisplayCurr = () => {
    return currency === "usd" ? "$" : "€";
  };

  //not available string
  const notAvailable = "n/a";

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
              Rank #{rank}
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
                {price && setDisplayCurr()}
                {price ? price.toLocaleString() : notAvailable}
              </p>
              <p
                className={
                  percentageChange < 0
                    ? "coinpage-percentage coinpage-red"
                    : "coinpage-percentage coinpage-green"
                }
              >
                {percentageChange ? percentageChange.toFixed(2) : notAvailable}
                {percentageChange && "%"}
              </p>
            </div>
          </div>
          <div
            className={
              isDarkMode ? "coinpage-bottom bottom-dark" : "coinpage-bottom"
            }
          >
            <div className="coinpage-row">
              <p className="row-label">24h high</p>
              <p>
                {high && setDisplayCurr()}
                {high ? high.toLocaleString() : notAvailable}
              </p>
            </div>
            <div className="coinpage-row">
              <p className="row-label">24h low</p>
              <p>
                {low && setDisplayCurr()}
                {low ? low.toLocaleString() : notAvailable}
              </p>
            </div>
            <div className="coinpage-row">
              <p className="row-label">24h Trading Vol</p>
              <p>
                {tradingVol && setDisplayCurr()}
                {tradingVol ? tradingVol.toLocaleString() : notAvailable}
              </p>
            </div>
            <div className="coinpage-row">
              <p className="row-label">Fully Diluted Valuation</p>
              <p>
                {valuation && setDisplayCurr()}
                {valuation ? valuation.toLocaleString() : notAvailable}
              </p>
            </div>
            <div className="coinpage-row">
              <p className="row-label">Circulating Supply</p>
              <p>{circSupply ? circSupply.toLocaleString() : notAvailable}</p>
            </div>
            <div className="coinpage-row">
              <p className="row-label">Total Supply</p>
              <p>{totalSupply ? totalSupply.toLocaleString() : notAvailable}</p>
            </div>
            <div className="coinpage-row">
              <p className="row-label">Max Supply</p>
              <p>{maxSupply ? maxSupply.toLocaleString() : notAvailable}</p>
            </div>
          </div>
          <Chart />
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default CoinPage;

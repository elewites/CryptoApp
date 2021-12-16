//libraries
import React, { useState, useEffect } from "react";
import axios from "axios";
import Coin from "../Components/Coin";
import Titles from "../Components/Titles";
import Navbar from "../Components/Navbar";

export default function Home() {
  const [coins, setCoins] = useState([]);

  const API_URL =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        //handle success
        setCoins(response.data);
      })
      .catch((error) => {
        //handle error
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Titles />
      {coins.map((coin) => {
        return (
          <Coin
            rank={coin.market_cap_rank}
            name={coin.name}
            symbol={coin.symbol}
            icon={coin.image}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
            marketCap={coin.market_cap}
          />
        );
      })}
    </div>
  );
}

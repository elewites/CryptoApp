//libraries
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

//components
import Coin from "../Components/Coin";
import Titles from "../Components/Titles";
import Navbar from "../Components/Navbar";
import { Context } from "../Helpers/Context";

export default function Home() {
  //global states
  const { searchTerm, cursor, currency } = useContext(Context);

  //coins displayed on home page only
  const [firstPageCoins, setFirstPageCoins] = useState([]);

  const API_URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=${cursor}&sparkline=false`;

  //EFFECTS: fetches coin data whenever API_URL changes
  useEffect(() => {
    axios.get(API_URL).then((response) => {
      setFirstPageCoins(response.data);
      window.scrollTo(0, 0);
    });
  }, [API_URL]);

  //EFFECTS: returns an array of all values in firstPageCoins that are equal to searchTerm;
  //         if searchTerm is empty string, returns all values
  const filteredCoins = firstPageCoins.filter((coin) =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <Titles />
      {filteredCoins.map((coin, key) => {
        return (
          <Coin
            key={key}
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

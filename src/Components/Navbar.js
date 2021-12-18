import React, { useContext } from "react";

//components
import { Context } from "../Helpers/Context";
import "./navbar.css";

function Navbar() {
  //searchTerm global state
  const { searchTerm, setSearchTerm, currency, setCurrency } =
    useContext(Context);

  //MODIFIES: searchTerm
  //EFFECTS: sets the searchTerm to current value of input
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    console.log(searchTerm);
  };

  //MODIFIES: currency
  //EFFECTS: toggles currency to between usd and eur
  const handleCurrency = () => {
    if (currency === "usd") {
      setCurrency("eur");
      console.log("chaned to eur");
    } else {
      setCurrency("usd");
      console.log("changed to usd");
    }
  };

  return (
    <div className="navbar-outer-container">
      <div className="navbar-inner-container">
        <button onClick={handleCurrency}>
          {currency === "usd" ? "USD" : "EUR"}
        </button>
        <input placeholder="Search..." onChange={handleSearch}></input>
      </div>
    </div>
  );
}

export default Navbar;

//libraries imports
import React, { useContext } from "react";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useParams } from "react-router-dom";

//components
import { Context } from "../Helpers/Context";
import "./navbar.css";

function Navbar() {
  //searchTerm global state
  const {
    searchTerm,
    setSearchTerm,
    currency,
    setCurrency,
    setIsDarkMode,
    isDarkMode,
  } = useContext(Context);

  //parameters stored in location route
  //used to determine if search bar renders
  const { id } = useParams();

  //MODIFIES: searchTerm
  //EFFECTS: sets the searchTerm to current value of input
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
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

  //MODIFIES: isDarkMode
  //EFFECTS: toggles isDarkMode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="navbar-container">
      <button
        className={
          isDarkMode ? "navbar-button n-dark" : "navbar-button n-light"
        }
        onClick={handleCurrency}
      >
        {currency === "usd" ? "USD" : "EUR"}
      </button>
      {!id && (
        <input
          className={isDarkMode ? "input i-dark" : "input i-light"}
          placeholder="Search..."
          onChange={handleSearch}
        ></input>
      )}
      <div className="dark-mode-area">
        <FormControlLabel
          label="Dark Mode"
          control={<Switch onChange={toggleDarkMode} />}
        />
      </div>
    </div>
  );
}

export default Navbar;

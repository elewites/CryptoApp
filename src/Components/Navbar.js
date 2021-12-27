//libraries imports
import React, { useContext } from "react";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useParams, useNavigate } from "react-router-dom";

//components
import { Context } from "../Helpers/Context";
import "./styling/navbar.css";
import backArrow from "../back_arrow.png";
import backArrowTwo from "../back_arrow_two.png";

function Navbar() {
  //searchTerm global state
  const { setSearchTerm, currency, setCurrency, setIsDarkMode, isDarkMode } =
    useContext(Context);

  //parameters stored in location route
  //used to determine if search bar renders
  const { id } = useParams();

  //used to navigate to other routes
  const navigate = useNavigate();

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
          isDarkMode ? "navbar-button b-dark" : "navbar-button b-light"
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
      {id && (
        <div className="button-container">
          <button
            className={
              isDarkMode ? "back-button back-button-dark" : "back-button"
            }
            onClick={() => {
              console.log("hi");
              navigate(-1);
            }}
          >
            Return
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;

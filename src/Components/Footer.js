//libraries
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//styles
import "./footer.css";

function Footer() {
  let navigate = useNavigate();

  const cursor = 1;

  //used for ui in Prev and Next buttons
  const rightArrow = "< ";
  const leftArrow = " >";

  const pageOneClick = () => {
    navigate("/");
  };

  //EFFECTS: handles click event for button 2 and navigates to second page
  const pageTwoClick = () => {
    navigate("/secondpage");
  };

  return (
    <div className="footer-container">
      <button id="arrow-left">{rightArrow}Prev</button>
      <button onClick={pageOneClick}>1</button>
      <button onClick={pageTwoClick}>2</button>
      <button>3</button>
      <button id="arrow-right">Next{leftArrow}</button>
    </div>
  );
}

export default Footer;

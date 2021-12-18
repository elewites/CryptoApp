//libraries
import React, { useContext } from "react";

//styles
import "./footer.css";

//components
import { Context } from "../Helpers/Context";

function Footer() {
  //global states
  const { setSearchTerm, setCursor, cursor } = useContext(Context);

  //used for ui in Prev and Next buttons
  const rightArrow = "< ";
  const leftArrow = " >";

  //MODIFIES: searchTerm, cursor
  //EFFECTS: handles click event for button 1,
  //         sets cursor to 1 and search term to empty string
  const pageOneClick = () => {
    setCursor(1);
    setSearchTerm("");
  };

  //MODIFIES: searchTerm, cursor
  //EFFECTS: handles click event for button 2,
  //         sets cursor to 2 and search term to empty string
  const pageTwoClick = () => {
    setCursor(2);
    setSearchTerm("");
  };

  //MODIFIES: searchTerm, cursor
  //EFFECTS: handles click event for button 3,
  //         sets cursor to 3 and search term to empty string
  const thirdPageClick = () => {
    setCursor(3);
    setSearchTerm("");
  };

  //MODIFIES: cursor
  //EFFECTS: sets cursor to cursor - 1 only if cursor is not equal to 1
  const prevClick = () => {
    if (cursor === 1) {
      console.log("hi");
    } else {
      setCursor(cursor - 1);
      console.log("changed");
    }
  };

  //MODIFIES: cursor
  //EFFECTS: sets cursor to cursor + 1 only if cursor is not equal to 3
  const nextClick = () => {
    if (cursor === 3) {
      console.log("hi");
    } else {
      setCursor(cursor + 1);
      console.log("changed");
    }
  };

  return (
    <div className="footer-container">
      <button id="arrow-left" onClick={prevClick}>
        {rightArrow}Prev
      </button>
      <button onClick={pageOneClick}>1</button>
      <button onClick={pageTwoClick}>2</button>
      <button onClick={thirdPageClick}>3</button>
      <button id="arrow-right" onClick={nextClick}>
        Next{leftArrow}
      </button>
    </div>
  );
}

export default Footer;

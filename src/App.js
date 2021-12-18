//Libraries
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Styling
import "./App.css";

//Components
import Home from "./Routes/Home";
import Footer from "./Components/Footer";
import { Context } from "./Helpers/Context";

function App() {
  //global states
  const [searchTerm, setSearchTerm] = useState("");
  const [cursor, setCursor] = useState(1);
  const [currency, setCurrency] = useState("usd");

  return (
    <div className="App">
      <Context.Provider
        value={{
          searchTerm,
          setSearchTerm,
          cursor,
          setCursor,
          currency,
          setCurrency,
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </Router>
      </Context.Provider>
    </div>
  );
}

export default App;

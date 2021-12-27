//Libraries
import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
  useLocation,
} from "react-router-dom";

//Styling
import "./App.css";

//Components
import Home from "./Routes/Home";
import Footer from "./Components/Footer";
import { Context } from "./Helpers/Context";
import CoinPage from "./Routes/CoinPage";

function App() {
  //global states
  const [searchTerm, setSearchTerm] = useState("");
  const [cursor, setCursor] = useState(1);
  const [currency, setCurrency] = useState("usd");
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={isDarkMode ? "App dark" : "App"}>
      <Context.Provider
        value={{
          searchTerm,
          setSearchTerm,
          cursor,
          setCursor,
          currency,
          setCurrency,
          setIsDarkMode,
          isDarkMode,
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coinpage/:id" element={<CoinPage />} />
          </Routes>
        </Router>
      </Context.Provider>
    </div>
  );
}

export default App;

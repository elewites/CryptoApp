//Libraries
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Styling
import "./App.css";

//Components
import Home from "./Routes/Home";
import SecondPage from "./Routes/SecondPage";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/secondpage" element={<SecondPage />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;

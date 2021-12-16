//Libraries
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Styling
import "./App.css";

//Components
import Home from "./Routes/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

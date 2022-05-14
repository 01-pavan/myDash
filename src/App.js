import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import "./styles/globalStyles.scss";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as d3 from "d3";

function App() {
  d3.selectAll("p").style("color", "blue");
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

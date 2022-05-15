import Dashboard from "./pages/Dashboard";
import CreateAccountPage from "./pages/CreateAcountPage";
import "./styles/globalStyles.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<CreateAccountPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

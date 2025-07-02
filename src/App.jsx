import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";

function App() {
  const isLoggedIn = localStorage.getItem("loggedIn");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;

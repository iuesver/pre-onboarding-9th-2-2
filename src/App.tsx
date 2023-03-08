import { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import MainPage from "./pages/MainPage";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/main");
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;

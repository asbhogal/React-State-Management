import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UseStateHook from "./pages/UseStateHook";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usestatehook" element={<UseStateHook />} />
      </Routes>
    </Router>
  );
}

export default App;

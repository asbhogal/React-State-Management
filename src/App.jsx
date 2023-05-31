import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UseStateHook from "./pages/useStateHook";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usestate" element={<UseStateHook />} />
      </Routes>
    </Router>
  );
}

export default App;

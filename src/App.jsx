import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UseStateHook from "./pages/useStateHook";
import Home from "./pages/Home";
import "@fontsource/mulish/400.css";
import "@fontsource/mulish/700.css";
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

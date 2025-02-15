import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FilterPage from "./components/FilterPage.jsx";
import CareerPage from "./components/CareerPage.jsx";
import BlogPage from "./components/BlogPage.jsx";
import Navlink from "./components/NavLink.jsx";
function App() {
  return (
    <Router>
      <Navlink />
      <Routes>
        <Route path="/" element={<FilterPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/career" element={<CareerPage />} />
      </Routes>
    </Router>
  );
}

export default App;

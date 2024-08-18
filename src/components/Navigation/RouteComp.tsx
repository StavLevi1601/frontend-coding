import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Nav";
import HomePage from "./Home";
import AboutPage from "./About";
import ContactPage from "./Contact";

function RouteComp() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default RouteComp;

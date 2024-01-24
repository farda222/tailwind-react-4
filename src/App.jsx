import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Pricing from "./Pages/Pricing";
import Welcoming from './Pages/Welcometotheapp'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/bayaryok" element={<Pricing />}></Route>
        <Route path="/Selamatdatang" element={<Welcoming />}></Route>
      </Routes>
    </Router>
  );
};

export default App;

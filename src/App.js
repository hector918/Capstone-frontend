import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Navigation from "./components/Navigation";
import Welcome from "./components/Welcome";


// import RecentsContainer from "./components/RecentsContainer";

import AllInOneFramework from "./pages/all-in-one-framework";
import FW002 from "./pages/fw-v0.02";
import ReadingAssistance from "./pages/ReadingAssistance";
import ReadingComprehension from "./pages/ReadingComprehension";
import TestOnly from "./pages/test-only";


// import srv from './fetch_';


export default function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Navigation />} />
            <Route path="/assistance" element={<ReadingAssistance />} />
            <Route path="/comprehension" element={<ReadingComprehension />} />
            <Route path="/framework-testing" element={<AllInOneFramework />} />
            <Route path="/framework-2" element={<FW002 />} />
            <Route path="/testing_fetch" element={<TestOnly />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

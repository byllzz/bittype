import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// ui comps...
import Navigations from './components/ui/Navigations';
import NavBar from './components/ui/NavBar';
import Pattern from './extras/Pattern';
// pages used in typeflow...
import Home from './pages/Home';
import About from './pages/About';
import Faqs from './pages/Faqs';
import Results from './pages/Results';

export default function App() {
  return (
    <Router>
      <div className="relative overflow-hidden">
        <div className="fixed top-6 w-full flex items-center justify-between px-5 z-99">
          <NavBar />
        </div>
              <div>
                <Pattern />
              </div>
        <div className="fixed top-60 left-15 z-99">
          <Navigations />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </div>
    </Router>
  );
}

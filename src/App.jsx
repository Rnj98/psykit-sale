import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/MainPage/Home';
import Navbar from './components/Navbar/Navbar';
import DemoRequest from './components/DemoRequest/DemoRequest';
import Team from './components/Team/Team';
import './CSS/App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/demo-request" element={<DemoRequest />} />
          <Route path="/approach" element={<div>Our Approach Page</div>} />
          <Route path="/testimonials" element={<div>Testimonials Page</div>} />
          <Route path="/faq" element={<div>FAQ Page</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 
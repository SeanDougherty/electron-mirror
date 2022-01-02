import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Hello from './TestComponents/Hello';
import Home from './Pages/Home';
import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hello" element={<Hello />} />
      </Routes>
    </Router>
  );
}


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Obras from './pages/Obras';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/obras" element={<Obras />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

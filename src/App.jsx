import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Newsletter from './pages/Newsletter'; // ✅ Make sure this path is correct
import International from './pages/NewsletterPages/International';
import Domestic from './pages/NewsletterPages/Domestic';

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root to newsletter */}
        <Route path="/" element={<Navigate to="/newsletter" />} />

        {/* Main newsletter route */}
        <Route path="/newsletter" element={<Newsletter />} />

        {/* Subpages */}
        <Route path="/international" element={<International />} />
        <Route path="/domestic" element={<Domestic />} />

       
      </Routes>
    </Router>
  );
}

export default App;

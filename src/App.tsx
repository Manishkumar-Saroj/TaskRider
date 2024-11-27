import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Day from './pages/Day';
import Week from './pages/Week';
import Month from './pages/Month';
import Settings from './pages/Settings';
import PrivacyPolicy from './pages/PrivacyPolicy';
import FAQ from './pages/FAQ';
import Feedback from './pages/Feedback';
import TermsAndConditions from './pages/TermsAndConditions';

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="h-screen overflow-y-auto scrollbar-none">
      <Routes>
        <Route element={<Dashboard />}>
          <Route path="/" element={<Home />} />
          <Route path="/day" element={<Day />} />
          <Route path="/week" element={<Week />} />
          <Route path="/month" element={<Month />} />
        </Route>
        <Route path="/settings" element={<Settings />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </div>
  );
}



function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
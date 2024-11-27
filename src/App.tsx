import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
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
import Login from './pages/Auth/login';
import ForgotPassword from './pages/Auth/forgot-password';
import VerifyOTP from './pages/Auth/verify-otp';
import ResetPassword from './pages/Auth/reset-password';

// Protected Route Component
interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  // Replace this with your actual authentication logic
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="h-screen overflow-y-auto scrollbar-none">
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path='/forgot-password' element={<ForgotPassword/>} />
        <Route path='/verify-otp' element={<VerifyOTP/>} />
        <Route path="/reset-password" element={<ResetPassword />} />
        
        {/* Protected Routes */}
        <Route path="/" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }>
          <Route index element={<Home />} />
          <Route path="day" element={<Day />} />
          <Route path="week" element={<Week />} />
          <Route path="month" element={<Month />} />
        </Route>

        <Route path="/settings" element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        } />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/feedback" element={
          <ProtectedRoute>
            <Feedback />
          </ProtectedRoute>
        } />
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
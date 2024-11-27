import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (!email) {
        alert('Please enter your email address');
        return;
      }

      // Here you would make an API call to request OTP
      // For now, simulating success
      const otpRequestSuccessful = true; // Replace with actual API call

      if (otpRequestSuccessful) {
        // Store email for next steps
        localStorage.setItem('resetEmail', email);
        navigate('/verify-otp');
      }
    } catch (error) {
      console.error('OTP request error:', error);
      alert('Failed to send OTP. Please try again.');
    }
  };

  return (
    <div className="min-h-screen px-4 py-6 sm:p-6 bg-zinc-900 overflow-hidden">
      <div className="relative max-w-3xl lg:max-w-xl mx-auto">
        {/* Glow effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 via-purple-500/20 to-pink-500/20 blur-3xl rounded-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-yellow-500/10 to-purple-500/10 blur-2xl rounded-full" />
        
        {/* Main container */}
        <div className="relative bg-gray-100/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-gray-100/20">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-100 text-center mb-8">Reset Password</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6 text-gray-300">
            <div className="group">
              <label htmlFor="email" className="block text-lg font-semibold text-yellow-400 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-gray-100/10 backdrop-blur-md border border-gray-100/20 rounded-xl
                  text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 transition-all duration-300"
                placeholder="Enter your email address"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-r from-yellow-500 to-yellow-600
                hover:from-yellow-400 hover:to-yellow-500 text-gray-900 font-semibold rounded-xl
                transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Send OTP
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link 
              to="/login" 
              className="text-sm text-gray-400 hover:text-yellow-400 transition-colors duration-300"
            >
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
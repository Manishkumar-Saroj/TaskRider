import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function VerifyOTP() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (!otp || otp.length !== 6) {
        alert('Please enter a valid 6-digit OTP');
        return;
      }

      // Here you would verify the OTP with your API
      const otpVerified = true; // Replace with actual API call

      if (otpVerified) {
        navigate('/reset-password');
      }
    } catch (error) {
      console.error('OTP verification error:', error);
      alert('Invalid OTP. Please try again.');
    }
  };

  return (
    <div className="min-h-screen px-4 py-6 sm:p-6 bg-zinc-900 overflow-hidden">
      <div className="relative max-w-3xl lg:max-w-xl mx-auto">
        {/* Similar styling as forgot-password.tsx */}
        <div className="relative bg-gray-100/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-gray-100/20">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-100 text-center mb-8">Enter OTP</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6 text-gray-300">
            <div className="group">
              <label htmlFor="otp" className="block text-lg font-semibold text-yellow-400 mb-2">
                6-Digit OTP
              </label>
              <input
                type="text"
                id="otp"
                maxLength={6}
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                className="w-full px-4 py-3 bg-gray-100/10 backdrop-blur-md border border-gray-100/20 rounded-xl
                  text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 transition-all duration-300"
                placeholder="Enter 6-digit OTP"
              />
            </div>

            <button type="submit" className="w-full py-3 px-4 bg-gradient-to-r from-yellow-500 to-yellow-600
              hover:from-yellow-400 hover:to-yellow-500 text-gray-900 font-semibold rounded-xl">
              Verify OTP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default VerifyOTP;
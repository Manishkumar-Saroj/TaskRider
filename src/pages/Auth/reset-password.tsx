import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ResetPassword() {
  const navigate = useNavigate();
  const [passwords, setPasswords] = useState({
    newPassword: '',
    confirmPassword: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (passwords.newPassword !== passwords.confirmPassword) {
        alert('Passwords do not match');
        return;
      }

      if (passwords.newPassword.length < 6) {
        alert('Password must be at least 6 characters long');
        return;
      }

      // Here you would reset the password via API
      const resetSuccessful = true; // Replace with actual API call

      if (resetSuccessful) {
        alert('Password reset successful!');
        navigate('/login');
      }
    } catch (error) {
      console.error('Password reset error:', error);
      alert('Failed to reset password. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswords({
      ...passwords,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen px-4 py-6 sm:p-6 bg-zinc-900 overflow-hidden">
      <div className="relative max-w-3xl lg:max-w-xl mx-auto">
        {/* Similar styling as other pages */}
        <div className="relative bg-gray-100/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-gray-100/20">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-100 text-center mb-8">Reset Password</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6 text-gray-300">
            <div className="group">
              <label htmlFor="newPassword" className="block text-lg font-semibold text-yellow-400 mb-2">
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                value={passwords.newPassword}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-100/10 backdrop-blur-md border border-gray-100/20 rounded-xl
                  text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 transition-all duration-300"
                placeholder="Enter new password"
              />
            </div>

            <div className="group">
              <label htmlFor="confirmPassword" className="block text-lg font-semibold text-yellow-400 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={passwords.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-100/10 backdrop-blur-md border border-gray-100/20 rounded-xl
                  text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 transition-all duration-300"
                placeholder="Confirm new password"
              />
            </div>

            <button type="submit" className="w-full py-3 px-4 bg-gradient-to-r from-yellow-500 to-yellow-600
              hover:from-yellow-400 hover:to-yellow-500 text-gray-900 font-semibold rounded-xl">
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
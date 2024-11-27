import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userIdentifier: '',
    password: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Basic validation
      if (!formData.userIdentifier || !formData.password) {
        alert('Please fill in all required fields');
        return;
      }

      // Here you would typically make an API call to your backend
      // For now, we'll simulate a successful login
      const loginSuccessful = true; // Replace with actual API call result

      if (loginSuccessful) {
        // Set authentication state
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('user', JSON.stringify({ identifier: formData.userIdentifier }));
        
        // Navigate to dashboard
        navigate('/');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen px-4 py-6 sm:p-6 bg-zinc-900 overflow-hidden">
      <div className="relative max-w-3xl lg:max-w-xl mx-auto">
        {/* Glow effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 via-purple-500/20 to-pink-500/20 blur-3xl rounded-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-yellow-500/10 to-purple-500/10 blur-2xl rounded-full" />
        
        {/* Main container */}
        <div className="relative 
          bg-gray-100/10 backdrop-blur-xl 
          rounded-3xl p-6 sm:p-8
          border border-gray-100/20
          shadow-[inset_0_0_20px_rgba(243,244,246,0.05)]">
          
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-100 text-center mb-8">Login</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6 text-gray-300">
            {/* Username/Email field */}
            <div className="group">
              <label 
                htmlFor="userIdentifier" 
                className="block text-lg font-semibold text-yellow-400 mb-2
                  transition-all duration-300 group-hover:-translate-y-0.5"
              >
                Username or Email
              </label>
              <input
                type="text"
                id="userIdentifier"
                name="userIdentifier"
                value={formData.userIdentifier}
                onChange={handleChange}
                className="w-full px-4 py-3 
                  bg-gray-100/10 backdrop-blur-md
                  border border-gray-100/20
                  rounded-xl
                  text-gray-100
                  focus:outline-none focus:ring-2 focus:ring-yellow-400/50
                  transition-all duration-300
                  placeholder:text-gray-300/50"
                placeholder="Enter your username or email"
              />
            </div>

            {/* Password field */}
            <div className="group">
              <label 
                htmlFor="password" 
                className="block text-lg font-semibold text-yellow-400 mb-2
                  transition-all duration-300 group-hover:-translate-y-0.5"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 
                  bg-gray-100/10 backdrop-blur-md
                  border border-gray-100/20
                  rounded-xl
                  text-gray-100
                  focus:outline-none focus:ring-2 focus:ring-yellow-400/50
                  transition-all duration-300
                  placeholder:text-gray-300/50"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4
                bg-gradient-to-r from-yellow-500 to-yellow-600
                hover:from-yellow-400 hover:to-yellow-500
                text-gray-900 font-semibold
                rounded-xl
                transition-all duration-300
                transform hover:-translate-y-0.5
                focus:outline-none focus:ring-2 focus:ring-yellow-400/50"
            >
              Login
            </button>
          </form>

          {/* Links */}
          <div className="mt-6 text-center">
            <Link 
              to="/forgot-password" 
              className="text-sm text-gray-400 hover:text-yellow-400 transition-colors duration-300"
            >
              Forgot password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

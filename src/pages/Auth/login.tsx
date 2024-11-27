import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
      <div className="min-h-screen bg-gray-900 overflow-hidden relative">
        {/* Gradient background effects */}
        <div className="fixed inset-0 bg-gradient-to-br from-yellow-500/5 via-purple-500/5 to-pink-500/5" />
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-900/90 to-gray-900/80" />
  
        <div className="relative min-h-screen flex flex-col md:flex-row items-center justify-center p-4 sm:p-6 lg:p-8">
          {/* Container with max width for larger screens */}
          <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row rounded-2xl overflow-hidden">
            {/* Left Section - Brand/Welcome */}
            <div className="w-full md:w-1/2 p-6 sm:p-8 lg:p-12 
              bg-gray-800/30 backdrop-blur-sm">
              <div className="max-w-md mx-auto">
                <div className="relative group mb-6 sm:mb-8">
                  {/* Logo glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 via-purple-500/20 to-pink-500/20 blur-xl rounded-2xl" />
                  <div className="relative">
                    <motion.div 
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="h-12 w-12 sm:h-14 sm:w-14 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center"
                    >
                      <span className="text-2xl sm:text-3xl">⚡</span>
                    </motion.div>
                  </div>
                </div>
  
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-3 sm:space-y-4"
                >
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-100">
                    Welcome back
                  </h1>
                  <p className="text-base sm:text-lg lg:text-xl text-gray-400">
                    Login to your account to continue your journey with us
                  </p>
                </motion.div>
              </div>
            </div>
  
            {/* Right Section - Login Form */}
            <div className="w-full md:w-1/2 p-6 sm:p-8 lg:p-12 
              bg-gray-100/5 backdrop-blur-xl">
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="relative max-w-md mx-auto"
              >
                {/* Form glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-purple-500/10 to-pink-500/10 blur-xl rounded-2xl" />
                
                <div className="relative p-4 sm:p-6 lg:p-8 rounded-2xl 
                  bg-gray-800/40 backdrop-blur-xl 
                  border border-gray-700/50
                  transition-all duration-300">
                  
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="space-y-3 sm:space-y-4">
                      <div>
                        <label htmlFor="userIdentifier" className="block text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                          Email or Username
                        </label>
                        <input
                          type="text"
                          id="userIdentifier"
                          name="userIdentifier"
                          value={formData.userIdentifier}
                          onChange={handleChange}
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3.5 
                            bg-gray-800/50
                            rounded-xl
                            text-white text-sm sm:text-base
                            border border-gray-700/50
                            focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-transparent
                            transition duration-200
                            placeholder:text-gray-500"
                          placeholder="Enter your email or username"
                        />
                      </div>
  
                      <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                          Password
                        </label>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3.5 
                            bg-gray-800/50
                            rounded-xl
                            text-white text-sm sm:text-base
                            border border-gray-700/50
                            focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-transparent
                            transition duration-200
                            placeholder:text-gray-500"
                          placeholder="Enter your password"
                        />
                      </div>
                    </div>
  
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="remember"
                          className="h-4 w-4 rounded border-gray-700 text-yellow-500 focus:ring-yellow-500/50
                            bg-gray-800/50"
                        />
                        <label htmlFor="remember" className="ml-2 block text-sm text-gray-400">
                          Remember me
                        </label>
                      </div>
                      <Link 
                        to="/forgot-password" 
                        className="text-sm text-yellow-500 hover:text-yellow-400 transition-colors"
                      >
                        Forgot password?
                      </Link>
                    </div>
  
                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      type="submit"
                      className="w-full py-2.5 sm:py-3.5 px-4
                        bg-gradient-to-r from-yellow-500 to-yellow-600
                        hover:from-yellow-400 hover:to-yellow-500
                        text-gray-900 font-semibold
                        text-sm sm:text-base
                        rounded-xl
                        transition-all duration-300
                        focus:outline-none focus:ring-2 focus:ring-yellow-500/50
                        shadow-lg shadow-yellow-500/20"
                    >
                      Sign in
                    </motion.button>
  
                    <p className="text-center text-xs sm:text-sm text-gray-400">
                      Don't have an account?{' '}
                      <Link 
                        to="/register" 
                        className="font-medium text-yellow-500 hover:text-yellow-400 transition-colors"
                      >
                        Create an account
                      </Link>
                    </p>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default Login;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Add your form submission logic here
      console.log('Form submitted:', formData);
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Show success message
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Enhanced gradient background effects - similar to Home page */}
      <div className="fixed inset-0 bg-gradient-to-br from-yellow-500/5 via-purple-500/5 to-pink-500/5" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-900/90 to-gray-900/80" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-500/10 via-transparent to-transparent blur-3xl" />

      {/* Header Section - Enhanced with glass morphism from Header component */}
      <header className="fixed top-0 left-0 right-0 px-4 py-3 sm:p-6 z-50 backdrop-blur-lg">
        <div className="relative max-w-7xl mx-auto">
          {/* Enhanced glow effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/30 via-purple-500/30 to-pink-500/30 blur-3xl rounded-full animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-yellow-500/20 to-purple-500/20 blur-2xl rounded-full animate-pulse delay-75" />
          
          <div className="relative grid grid-cols-[auto_1fr_auto] items-center gap-4 
            bg-gray-100/10 backdrop-blur-xl 
            rounded-3xl p-4
            border border-gray-100/20
            shadow-[inset_0_0_20px_rgba(243,244,246,0.05)]">
            
            {/* Logo section - similar to Login page */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex items-center gap-4"
            >
              <div className="h-12 w-12 
                bg-gradient-to-r from-yellow-500 to-purple-600 
                rounded-2xl flex items-center justify-center
                shadow-lg shadow-yellow-500/20"
              >
                <span className="text-2xl">⚡</span>
              </div>
              
              {/* Brand Name with enhanced animations */}
              <div className="flex items-center">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-purple-500 text-transparent bg-clip-text"
                >
                  Task
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-2xl font-bold text-white"
                >
                  Rider
                </motion.span>
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="w-2 h-2 rounded-full bg-yellow-500 ml-2 animate-pulse"
                />
              </div>
            </motion.div>

            {/* Navigation - Enhanced with BottomNav styling */}
            <motion.nav 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="justify-self-center"
            >
              <ul className="flex space-x-8">
                {['Features', 'About', 'Contact'].map((item) => (
                  <motion.li 
                    key={item}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-300 hover:text-white transition-colors duration-300 
                        relative group text-sm font-medium"
                    >
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r 
                        from-yellow-400 to-purple-500 group-hover:w-full transition-all duration-300" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>

            {/* Contact Button - Enhanced with BottomNav plus button styling */}
            <Link to="/contact">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-600 via-purple-500 to-yellow-400 rounded-full blur opacity-50 group-hover:opacity-75 transition-all duration-500" />
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-4 py-2 bg-gray-900 rounded-lg text-white block 
                    transition-transform duration-300 text-sm
                    hover:shadow-lg hover:shadow-yellow-500/20"
                >
                  Contact Us
                </motion.button>
              </div>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section - Enhanced with glass morphism and card styling */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-32">
        <div className="relative max-w-7xl mx-auto w-full">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left Column - Text Content */}
            <div className="space-y-8 text-center lg:text-left">
              {/* Enhanced title with gradient container */}
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 via-purple-500/20 to-pink-500/20 blur-xl rounded-3xl" />
                <h1 className="relative text-5xl md:text-7xl font-bold space-y-4">
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="block bg-gradient-to-r from-yellow-400 to-purple-500 text-transparent bg-clip-text pb-3"
                  >
                    Manage Tasks
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="block text-white"
                  >
                    Track Finances
                  </motion.span>
                </h1>
              </div>

              {/* Enhanced subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0"
              >
                Streamline your workflow and financial management with our powerful platform
              </motion.p>

              {/* Enhanced CTA buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                {/* Get Started Button */}
                <Link to="/contact">
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-600 via-purple-500 to-yellow-400 rounded-xl blur opacity-50 group-hover:opacity-75 transition-all duration-500" />
                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="relative px-8 py-4 bg-gradient-to-r from-yellow-500 to-purple-600 
                        hover:from-yellow-400 hover:to-purple-500
                        rounded-xl text-white font-semibold
                        shadow-lg shadow-yellow-500/20 
                        transition-all duration-300
                        focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
                    >
                      Get Started
                    </motion.button>
                  </div>
                </Link>
                
                {/* Learn More Button */}
                <Link to="/learn-more">
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="px-8 py-4 bg-gray-800/40 
                      backdrop-blur-xl border border-gray-700/50
                      rounded-xl text-white font-semibold
                      hover:bg-gray-800/60 
                      transition-all duration-300
                      focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
                  >
                    Learn More
                  </motion.button>
                </Link>
              </motion.div>

              {/* Stats Section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12"
              >
                {[
                  { label: 'Active Users', value: '10K+', icon: '👥' },
                  { label: 'Tasks Completed', value: '100K+', icon: '✅' },
                  { label: 'Countries', value: '50+', icon: '🌍' },
                  { label: 'Satisfaction', value: '99%', icon: '⭐' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    className="relative group p-4"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-purple-500/10 
                      rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative space-y-2 text-center">
                      <div className="text-2xl">{stat.icon}</div>
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Column - Feature Preview */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-purple-500/10 to-pink-500/10 blur-2xl rounded-3xl" />
              <div className="relative p-8 
                bg-gray-800/40 backdrop-blur-xl 
                border border-gray-700/50
                rounded-2xl
                transition-all duration-300
                hover:border-yellow-500/30 hover:bg-gray-800/50"
              >
                {/* Mock Dashboard Preview */}
                <div className="space-y-4">
                  <div className="h-2 w-24 bg-gray-700/50 rounded-full" />
                  <div className="grid grid-cols-3 gap-4">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="h-24 bg-gray-700/30 rounded-xl 
                        hover:bg-gray-700/40 transition-colors duration-300" />
                    ))}
                  </div>
                  <div className="h-32 bg-gray-700/30 rounded-xl" />
                  <div className="grid grid-cols-2 gap-4">
                    {[...Array(2)].map((_, i) => (
                      <div key={i} className="h-24 bg-gray-700/30 rounded-xl 
                        hover:bg-gray-700/40 transition-colors duration-300" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-purple-500 text-transparent bg-clip-text mb-4">
              About TaskRider
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Empowering individuals and businesses to achieve more through smart task and finance management
            </p>
          </motion.div>

          {/* About Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image/Illustration */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-purple-500/10 to-pink-500/10 blur-xl rounded-2xl" />
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden 
                bg-gray-800/40 backdrop-blur-xl 
                border border-gray-700/50
                p-6"
              >
                {/* Mock App Interface */}
                <div className="w-full h-full relative">
                  {/* Header Bar */}
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="h-6 mb-3 bg-gray-700/30 rounded-lg flex items-center px-3"
                  >
                    <div className="flex space-x-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    </div>
                  </motion.div>

                  {/* Tasks Section */}
                  <div className="space-y-2 mb-4">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-xs text-gray-400 mb-2"
                    >
                      Tasks
                    </motion.div>
                    {[
                      { 
                        priority: 'High', 
                        color: 'red', 
                        gradient: 'from-red-500/20 to-red-500/30',
                        reminder: 'Today, 2:00 PM',
                        icon: '⏰'
                      },
                      { 
                        priority: 'Medium', 
                        color: 'yellow', 
                        gradient: 'from-yellow-500/20 to-yellow-500/30',
                        reminder: 'Tomorrow',
                        icon: '📅'
                      },
                      { 
                        priority: 'Low', 
                        color: 'green', 
                        gradient: 'from-green-500/20 to-green-500/30',
                        reminder: 'Next Week',
                        icon: '📆'
                      }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.2 }}
                        className="relative group"
                      >
                        <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient}
                          rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                        <div className="relative p-3 bg-gray-700/30 rounded-lg flex items-center justify-between">
                          {/* Task Content */}
                          <div className="flex items-center space-x-2">
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className={`w-4 h-4 rounded border border-${item.color}-500/50 flex items-center justify-center`}
                            >
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: [0, 1.2, 1] }}
                                transition={{ delay: 1 + index * 0.2, duration: 0.5 }}
                                className={`w-2 h-2 bg-${item.color}-500 rounded-sm`}
                              />
                            </motion.div>
                            <div className="space-y-1">
                              <div className="h-1.5 w-20 bg-gray-600/50 rounded-full" />
                              <div className="h-1.5 w-14 bg-gray-600/30 rounded-full" />
                            </div>
                          </div>

                          {/* Priority and Reminder Tags */}
                          <div className="flex items-center space-x-2">
                            {/* Priority Tag */}
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              className={`px-1.5 py-0.5 rounded-full text-xs 
                                bg-${item.color}-500/20 text-${item.color}-300 
                                border border-${item.color}-500/30`}
                            >
                              {item.priority}
                            </motion.div>

                            {/* Reminder Tag */}
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              className="flex items-center space-x-1 px-1.5 py-0.5 rounded-full text-xs 
                                bg-blue-500/20 text-blue-300 
                                border border-blue-500/30"
                            >
                              <span className="text-[10px]">{item.icon}</span>
                              <span>{item.reminder}</span>
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Finances Section */}
                  <div className="space-y-2">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.0 }}
                      className="text-xs text-gray-400 mb-2"
                    >
                      Finances
                    </motion.div>
                    {[
                      { 
                        type: 'Income', 
                        amount: '+₹25,000.00',
                        date: new Date().toLocaleDateString('en-IN', { 
                          month: 'short', 
                          day: 'numeric'
                        }),
                        color: 'green',
                        icon: '💰'
                      },
                      { 
                        type: 'Expense', 
                        amount: '-₹8,500.00',
                        date: new Date(Date.now() - 24 * 60 * 60 * 1000).toLocaleDateString('en-IN', { 
                          month: 'short', 
                          day: 'numeric'
                        }),
                        color: 'red',
                        icon: '🏠'
                      },
                      { 
                        type: 'Income', 
                        amount: '+₹4,000.00',
                        date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN', { 
                          month: 'short', 
                          day: 'numeric'
                        }),
                        color: 'green',
                        icon: '💻'
                      }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1 + index * 0.2 }}
                        className="relative group"
                      >
                        <div className={`absolute inset-0 bg-gradient-to-r from-${item.color}-500/10 to-${item.color}-500/20
                          rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                        <div className="relative p-3 bg-gray-700/30 rounded-lg flex items-center justify-between">
                          {/* Transaction Info */}
                          <div className="flex items-center space-x-3">
                            <div className={`w-8 h-8 rounded-lg bg-${item.color}-500/20 
                              flex items-center justify-center text-sm
                              border border-${item.color}-500/30`}
                            >
                              {item.icon}
                            </div>
                            <div>
                            <div className="h-1.5 w-20 bg-gray-600/50 rounded-full" />
                              <div className="text-xs text-gray-500">{item.date}</div>
                            </div>
                          </div>

                          {/* Amount */}
                          <div className={`text-sm font-medium text-${item.color}-400`}>
                            {item.amount}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Notification Animations */}
                  {[
                    { message: "Task completed! 🎉", color: "green", delay: 3 },
                    { message: "Reminder set ⏰", color: "blue", delay: 7 },
                    { message: "Payment received 💰", color: "green", delay: 11 },
                    { message: "Expense recorded 📝", color: "yellow", delay: 15 }
                  ].map((notification, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20, x: "-50%" }}
                      animate={{ 
                        opacity: [0, 1, 1, 0],
                        y: [20, 0, 0, -20]
                      }}
                      transition={{ 
                        delay: notification.delay,
                        duration: 2,
                        times: [0, 0.2, 0.8, 1],
                        repeat: Infinity,
                        repeatDelay: 16
                      }}
                      className={`absolute bottom-20 left-1/2 transform -translate-x-1/2
                        px-4 py-2 rounded-full
                        bg-${notification.color}-500/20 text-${notification.color}-300 
                        border border-${notification.color}-500/30
                        text-sm whitespace-nowrap
                        z-50`}
                    >
                      {notification.message}
                    </motion.div>
                  ))}

                  {/* Success Checkmark Animations */}
                  {[
                    { x: "20%", y: "30%", delay: 5 },
                    { x: "80%", y: "50%", delay: 9 },
                    { x: "40%", y: "70%", delay: 13 }
                  ].map((position, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: [0, 1, 1, 0],
                        scale: [0.8, 1.2, 1.2, 0.8]
                      }}
                      transition={{ 
                        delay: position.delay,
                        duration: 1.5,
                        times: [0, 0.2, 0.8, 1],
                        repeat: Infinity,
                        repeatDelay: 16
                      }}
                      className="absolute w-8 h-8 flex items-center justify-center"
                      style={{ 
                        left: position.x, 
                        top: position.y 
                      }}
                    >
                      <div className="absolute inset-0 bg-green-500/20 rounded-full blur-sm" />
                      <motion.div
                        initial={{ rotate: -90 }}
                        animate={{ rotate: 0 }}
                        transition={{ duration: 0.3, delay: position.delay }}
                        className="relative text-green-500 text-lg"
                      >
                        ✓
                      </motion.div>
                    </motion.div>
                  ))}

                  {/* Progress Bar */}
                  <motion.div 
                    initial={{ width: "0%" }}
                    animate={{ width: "75%" }}
                    transition={{ delay: 2, duration: 1.5 }}
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-yellow-500 to-purple-600 rounded-full"
                  />

                  {/* Floating Action Button */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 2.5, type: "spring" }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute bottom-3 right-3 w-8 h-8 rounded-full 
                      bg-gradient-to-r from-yellow-500 to-purple-600 
                      flex items-center justify-center
                      shadow-lg shadow-purple-500/20 cursor-pointer"
                  >
                    <svg 
                      className="w-4 h-4 text-white" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M12 4v16m8-8H4" 
                      />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              {/* Mission Statement */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                <p className="text-gray-400">
                  At TaskRider, we're committed to simplifying task management and financial tracking, 
                  making it easier for you to focus on what matters most - growing your business and achieving your goals.
                </p>
              </div>

              {/* Key Points */}
              <div className="space-y-6">
                {[
                  {
                    title: "Innovation First",
                    description: "Continuously evolving our platform with cutting-edge technology to meet your needs."
                  },
                  {
                    title: "User-Centered",
                    description: "Built with real user feedback to ensure an intuitive and efficient experience."
                  },
                  {
                    title: "Reliable Support",
                    description: "Dedicated team providing round-the-clock assistance for your success."
                  }
                ].map((point, index) => (
                  <motion.div
                    key={point.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="relative group p-6 
                      bg-gray-800/40 backdrop-blur-xl 
                      border border-gray-700/50
                      rounded-xl
                      hover:border-yellow-500/30 hover:bg-gray-800/50
                      transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-purple-500/10 
                      rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative space-y-2">
                      <h4 className="text-white font-semibold">{point.title}</h4>
                      <p className="text-gray-400 text-sm">{point.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-32">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-purple-500 text-transparent bg-clip-text mb-4">
              Powerful Features
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Everything you need to manage tasks and track finances effectively
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: "📋", 
                title: "Task Management", 
                desc: "Organize tasks with priority levels and due dates",
                gradient: "from-yellow-500/10 to-orange-500/10"
              },
              { 
                icon: "⏰", 
                title: "Smart Reminders", 
                desc: "Never miss important deadlines with automated notifications",
                gradient: "from-purple-500/10 to-pink-500/10"
              },
              { 
                icon: "💰", 
                title: "Financial Tracking", 
                desc: "Monitor income and expenses with detailed analytics",
                gradient: "from-green-500/10 to-emerald-500/10"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} 
                  blur-xl rounded-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500`} />
                
                <div className="relative p-8 rounded-2xl 
                  bg-gray-800/40 backdrop-blur-xl 
                  border border-gray-700/50
                  transition-all duration-300 
                  hover:border-yellow-500/30 hover:bg-gray-800/50
                  group-hover:transform group-hover:-translate-y-1"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl 
                      bg-gradient-to-r from-yellow-500 to-purple-600
                      flex items-center justify-center text-2xl
                      shadow-lg shadow-yellow-500/20"
                    >
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                    <p className="text-gray-400">{feature.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="relative py-32">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-purple-500/5 to-pink-500/5" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-gray-900/90 to-gray-900/80" />
        </div>

        <div className="relative container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-purple-500 text-transparent bg-clip-text mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>

          {/* Contact Form and Info Container */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              {/* Form glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-purple-500/10 to-pink-500/10 blur-xl rounded-2xl" />
              
              <div className="relative p-8 
                bg-gray-800/40 backdrop-blur-xl 
                border border-gray-700/50
                rounded-2xl
                transition-all duration-300
                hover:border-yellow-500/30 hover:bg-gray-800/50"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                        Name
                      </label>
                      <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500/30 to-purple-500/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="relative w-full px-4 py-3.5 
                            bg-gray-800/50
                            rounded-xl
                            text-white
                            border border-gray-700/50
                            focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-transparent
                            transition duration-200
                            placeholder:text-gray-500
                            group-hover:bg-gray-800/70"
                          placeholder="Your name"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                        Email
                      </label>
                      <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500/30 to-purple-500/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="relative w-full px-4 py-3.5 
                            bg-gray-800/50
                            rounded-xl
                            text-white
                            border border-gray-700/50
                            focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-transparent
                            transition duration-200
                            placeholder:text-gray-500
                            group-hover:bg-gray-800/70"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                      Message
                    </label>
                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500/30 to-purple-500/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="relative w-full px-4 py-3.5 
                          bg-gray-800/50
                          rounded-xl
                          text-white
                          border border-gray-700/50
                          focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-transparent
                          transition duration-200
                          placeholder:text-gray-500
                          resize-none
                          group-hover:bg-gray-800/70"
                        placeholder="Your message..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    className="relative w-full group"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-600 to-purple-600 
                      rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-500" />
                    <div className="relative w-full px-4 py-3.5
                      bg-gradient-to-r from-yellow-500 to-purple-600
                      hover:from-yellow-400 hover:to-purple-500
                      text-white font-semibold
                      rounded-xl
                      transition-all duration-300
                      focus:outline-none focus:ring-2 focus:ring-yellow-500/50
                      shadow-lg shadow-yellow-500/20
                      flex items-center justify-center gap-2"
                    >
                      <span>Send Message</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info Cards */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              {/* Contact Information Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: "📧", title: "Email", info: "contact@taskrider.com" },
                  { icon: "📱", title: "Phone", info: "+1 (555) 123-4567" },
                  { icon: "📍", title: "Address", info: "123 Business Ave, Suite 100" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="relative group p-4 rounded-xl 
                      bg-gray-800/30 backdrop-blur-sm
                      border border-gray-700/50
                      text-center
                      hover:border-yellow-500/30 hover:bg-gray-800/50
                      transition duration-300"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500/30 to-purple-500/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                    <div className="relative">
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <h3 className="text-white font-medium mb-1">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.info}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map Container */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500/30 to-purple-500/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                <div className="relative h-[300px] sm:h-[400px] 
                  bg-gray-800/40 backdrop-blur-xl 
                  border border-gray-700/50
                  rounded-2xl overflow-hidden
                  hover:border-yellow-500/30 hover:bg-gray-800/50
                  transition duration-300"
                >
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13724.07978173555!2d72.8469833266855!3d19.02266704387673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDAxJzUxLjkiTiA3MsKwNTAnMTguMiJF!5e0!3m2!1sen!2sin!4v1732711103218!5m2!1sen!2sin" 
                    className="w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="relative mt-32 border-t border-gray-800">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/5 via-purple-500/5 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-900 via-gray-900/90 to-gray-900/80" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12">
            {/* Brand Column */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 
                  bg-gradient-to-r from-yellow-500 to-purple-600 
                  rounded-xl flex items-center justify-center
                  shadow-lg shadow-yellow-500/20"
                >
                  <span className="text-xl">⚡</span>
                </div>
                <div className="flex items-center">
                  <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-purple-500 text-transparent bg-clip-text">
                    Task
                  </span>
                  <span className="text-xl font-bold text-white">
                    Rider
                  </span>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Streamline your workflow and financial management with our powerful platform.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-white font-semibold">Product</h3>
              <ul className="grid grid-cols-1 gap-3">
                {["Features", "Pricing", "Updates"].map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-white text-sm 
                        transition-colors duration-300 
                        relative group inline-block"
                    >
                      <span className="relative">
                        {link}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r 
                          from-yellow-400 to-purple-500 group-hover:w-full transition-all duration-300" />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div className="space-y-6">
              <h3 className="text-white font-semibold">Company</h3>
              <ul className="grid grid-cols-1 gap-3">
                {["About", "Contact"].map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-white text-sm 
                        transition-colors duration-300 
                        relative group inline-block"
                    >
                      <span className="relative">
                        {link}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r 
                          from-yellow-400 to-purple-500 group-hover:w-full transition-all duration-300" />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              
              {/* Social Links */}
              <div className="flex space-x-4 pt-4">
                {[
                  { icon: "twitter", href: "#" },
                  { icon: "linkedin", href: "#" }
                ].map((social) => (
                  <a
                    key={social.icon}
                    href={social.href}
                    className="relative group p-2"
                    aria-label={social.icon}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-purple-500/20 
                      rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative w-5 h-5 text-gray-400 hover:text-white transition-colors duration-300">
                      {social.icon === "twitter" ? (
                        <svg fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      ) : (
                        <svg fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="relative pt-8 mt-8 border-t border-gray-800">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2024 TaskRider. All rights reserved.
              </p>
              <div className="flex gap-6">
                {["Privacy Policy", "Terms of Service"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-gray-400 hover:text-white text-sm 
                      transition-colors duration-300 
                      relative group"
                  >
                    <span className="relative">
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r 
                        from-yellow-400 to-purple-500 group-hover:w-full transition-all duration-300" />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

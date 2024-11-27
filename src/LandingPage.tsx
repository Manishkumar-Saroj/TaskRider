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
      {/* Header Section */}
      <header className="fixed top-0 left-0 right-0 px-4 py-3 sm:p-6 z-50 backdrop-blur-lg">
        <div className="relative max-w-7xl mx-auto">
          {/* Glow effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/30 via-emerald-500/30 to-teal-500/30 blur-3xl rounded-full animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 via-green-500/20 to-emerald-500/20 blur-2xl rounded-full animate-pulse delay-75" />
          
          <div className="relative grid grid-cols-[auto_1fr_auto] items-center gap-4 
            bg-gray-100/10 backdrop-blur-xl 
            rounded-3xl p-4
            border border-gray-100/20
            shadow-[inset_0_0_20px_rgba(243,244,246,0.05)]">
            
            {/* Logo */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex items-center gap-4"
            >
              {/* Logo Icon */}
              <div className="h-12 w-12 
                bg-gradient-to-r from-green-500 to-emerald-600 
                rounded-2xl flex items-center justify-center
                shadow-lg shadow-green-500/20"
              >
                <span className="text-2xl">⚡</span>
              </div>
              
              {/* Brand Name */}
              <div className="flex items-center">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text"
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
                  className="w-2 h-2 rounded-full bg-green-500 ml-2 animate-pulse"
                />
              </div>
            </motion.div>

            {/* Navigation Items */}
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
                        from-green-400 to-emerald-500 group-hover:w-full transition-all duration-300" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>

            {/* Contact Button */}
            <Link to="/contact">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 via-emerald-500 
                  to-green-400 rounded-lg blur opacity-50 group-hover:opacity-75 transition-all duration-500" />
                <span className="relative px-4 py-2 bg-gray-900 rounded-lg text-white block 
                  transition-transform duration-300 text-sm">
                  Contact Us
                </span>
              </motion.button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        {/* Enhanced gradient background effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-emerald-500/5 to-teal-500/5" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-900/90 to-gray-900/80" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-500/10 via-transparent to-transparent blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8 text-center"
          >
            {/* Enhanced title with gradient container */}
            <div className="relative group inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-teal-500/20 blur-xl rounded-3xl" />
              <h1 className="relative text-5xl md:text-7xl font-bold space-y-4">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="block bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text"
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

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-gray-400 max-w-2xl mx-auto"
            >
              Streamline your workflow and financial management with our powerful platform
            </motion.p>

            {/* Enhanced CTA buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 
                    hover:from-green-400 hover:to-emerald-500
                    rounded-xl text-gray-900 font-semibold
                    shadow-lg shadow-green-500/20 
                    transition-all duration-300
                    focus:outline-none focus:ring-2 focus:ring-green-500/50"
                >
                  Get Started
                </motion.button>
              </Link>
              
              <Link to="/learn-more">
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="px-8 py-4 bg-gray-800/40 
                    backdrop-blur-xl border border-gray-700/50
                    rounded-xl text-white font-semibold
                    hover:bg-gray-800/60 
                    transition-all duration-300
                    focus:outline-none focus:ring-2 focus:ring-green-500/50"
                >
                  Learn More
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "📋", title: "Task Priority", desc: "High, Medium, Low task management" },
              { icon: "⏰", title: "Reminders", desc: "Never miss important deadlines" },
              { icon: "💰", title: "Finance", desc: "Track income and expenses" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative group p-8"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 
                  rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative space-y-4">
                  <div className="text-4xl">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="relative py-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-emerald-500/5 to-teal-500/5" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-gray-900/90 to-gray-900/80" />
        </div>

        <div className="relative container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-gray-400">Have questions? We'd love to hear from you.</p>
          </motion.div>

          {/* Contact Form and Map Container */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              {/* Form glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10 blur-xl rounded-2xl" />
              
              <div className="relative p-6 sm:p-8 
                bg-gray-800/40 backdrop-blur-xl 
                border border-gray-700/50
                rounded-2xl
                transition-all duration-300"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 
                        bg-gray-800/50
                        rounded-xl
                        text-white
                        border border-gray-700/50
                        focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-transparent
                        transition duration-200
                        placeholder:text-gray-500"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 
                        bg-gray-800/50
                        rounded-xl
                        text-white
                        border border-gray-700/50
                        focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-transparent
                        transition duration-200
                        placeholder:text-gray-500"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 
                        bg-gray-800/50
                        rounded-xl
                        text-white
                        border border-gray-700/50
                        focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-transparent
                        transition duration-200
                        placeholder:text-gray-500"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 
                        bg-gray-800/50
                        rounded-xl
                        text-white
                        border border-gray-700/50
                        focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-transparent
                        transition duration-200
                        placeholder:text-gray-500
                        resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    className="w-full py-3.5 px-4
                      bg-gradient-to-r from-green-500 to-emerald-600
                      hover:from-green-400 hover:to-emerald-500
                      text-gray-900 font-semibold
                      rounded-xl
                      transition-all duration-300
                      focus:outline-none focus:ring-2 focus:ring-green-500/50
                      shadow-lg shadow-green-500/20"
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Map and Contact Info */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              {/* Map Container */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10 blur-xl rounded-2xl" />
                <div className="relative h-[300px] sm:h-[400px] 
                  bg-gray-800/40 backdrop-blur-xl 
                  border border-gray-700/50
                  rounded-2xl overflow-hidden"
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
                    className="p-4 rounded-xl 
                      bg-gray-800/30 backdrop-blur-sm
                      border border-gray-700/50
                      text-center"
                  >
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <h3 className="text-white font-medium mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.info}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-white font-bold">TaskRider</span>
              <span className="text-gray-400">by GeekRider</span>
            </div>
            <p className="text-gray-400">© 2024 All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

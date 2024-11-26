import React from 'react';
import { RadioSelectPopup } from '../../components/RadioSelectPopup';
import { useState } from 'react';

const Feedback = () => {
  const [category, setCategory] = useState('');
  const [priority, setPriority] = useState('');

  const categoryOptions = [
    { value: 'schedule', label: 'Schedule Management' },
    { value: 'finance', label: 'Income & Expenses' },
    { value: 'reminders', label: 'Reminders & Notifications' },
    { value: 'ui', label: 'User Interface' },
    { value: 'bug', label: 'Bug Report' },
    { value: 'feature', label: 'Feature Request' },
    { value: 'other', label: 'Other' }
  ];

  const priorityOptions = [
    { value: 'low', label: 'Low - Suggestion' },
    { value: 'medium', label: 'Medium - Minor Issue' },
    { value: 'high', label: 'High - Major Issue' },
    { value: 'critical', label: 'Critical - Urgent Bug' }
  ];

  return (
    <div className="min-h-screen px-4 py-6 sm:p-6 bg-zinc-900">
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
          
          {/* Header with back button */}
          <div className="flex items-center mb-8">
            <button 
              onClick={() => window.history.back()} 
              className="absolute left-6 group"
            >
              <div className="absolute inset-0 bg-gray-100/10 backdrop-blur-md rounded-full -m-2" />
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 relative text-gray-300 group-hover:text-yellow-400 transition-colors" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M15 19l-7-7 7-7" 
                />
              </svg>
            </button>
            <h1 className="flex-1 text-2xl sm:text-3xl font-bold text-gray-100 text-center">
              Feedback
            </h1>
          </div>

          {/* Form */}
          <form className="space-y-6 text-gray-300">
            <div className="group">
              <label 
                htmlFor="email" 
                className="block text-lg font-semibold text-yellow-400 mb-2
                  transition-all duration-300 group-hover:-translate-y-0.5"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 
                  bg-gray-100/10 backdrop-blur-md
                  border border-gray-100/20
                  rounded-xl
                  text-gray-100
                  focus:outline-none focus:ring-2 focus:ring-yellow-400/50
                  transition-all duration-300
                  placeholder:text-gray-300/50"
                placeholder="your@email.com"
              />
            </div>
            
            <RadioSelectPopup
              options={categoryOptions}
              value={category}
              onChange={setCategory}
              placeholder="Select a category"
              label="Feedback Category"
            />

            <div className="group">
              <label 
                htmlFor="subject" 
                className="block text-lg font-semibold text-yellow-400 mb-2
                  transition-all duration-300 group-hover:-translate-y-0.5"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 
                  bg-gray-100/10 backdrop-blur-md
                  border border-gray-100/20
                  rounded-xl
                  text-gray-100
                  focus:outline-none focus:ring-2 focus:ring-yellow-400/50
                  transition-all duration-300
                  placeholder:text-gray-300/50"
                placeholder="Brief description of your feedback"
              />
            </div>

            <div className="group">
              <label 
                htmlFor="message" 
                className="block text-lg font-semibold text-yellow-400 mb-2
                  transition-all duration-300 group-hover:-translate-y-0.5"
              >
                Detailed Feedback
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-3 
                  bg-gray-100/10 backdrop-blur-md
                  border border-gray-100/20
                  rounded-xl
                  text-gray-100
                  focus:outline-none focus:ring-2 focus:ring-yellow-400/50
                  transition-all duration-300
                  placeholder:text-gray-300/50"
                placeholder="Please provide specific details about your experience, suggestions, or issues you've encountered..."
              />
            </div>

            <RadioSelectPopup
              options={priorityOptions}
              value={priority}
              onChange={setPriority}
              placeholder="Select priority"
              label="Priority Level"
            />

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
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
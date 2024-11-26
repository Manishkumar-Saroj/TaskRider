import React from 'react';

function FAQ() {
    // Add state to track which section is open
    const [openSection, setOpenSection] = React.useState(0);

    return (
      <div className="min-h-screen px-4 py-6 sm:p-6 bg-zinc-900">
        <div className="relative max-w-3xl lg:max-w-xl mx-auto">
          {/* Glow effects - removed animate-pulse and adjusted opacity */}
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
                Frequently Asked Questions
              </h1>
            </div>
  
            {/* Content sections */}
            <div className="space-y-4 text-gray-300">
              <Section 
                title="What is TaskRider?" 
                isOpen={openSection === 0}
                onClick={() => setOpenSection(openSection === 0 ? -1 : 0)}
              >
                TaskRider is a powerful task and schedule management application designed to help you
                organize your work, set priorities, and track your progress efficiently.
              </Section>
  
              <Section 
                title="How do I create a new task?" 
                isOpen={openSection === 1}
                onClick={() => setOpenSection(openSection === 1 ? -1 : 1)}
              >
                Simply click the '+' button in the dashboard, fill in the task details including title,
                description, due date, and priority level. You can also add tags and subtasks to better
                organize your work.
              </Section>
  
              <Section 
                title="Can I share tasks with my team?" 
                isOpen={openSection === 2}
                onClick={() => setOpenSection(openSection === 2 ? -1 : 2)}
              >
                Yes! TaskRider supports team collaboration. You can invite team members, assign tasks,
                and track progress together. Simply use the share button on any task to invite others.
              </Section>
  
              <Section 
                title="How do notifications work?" 
                isOpen={openSection === 3}
                onClick={() => setOpenSection(openSection === 3 ? -1 : 3)}
              >
                TaskRider sends notifications for upcoming deadlines, task assignments, and updates from
                your team. You can customize notification preferences in your account settings.
              </Section>

              <Section 
                title="Is my data secure?" 
                isOpen={openSection === 4}
                onClick={() => setOpenSection(openSection === 4 ? -1 : 4)}
              >
                We take security seriously. All data is encrypted, and we use industry-standard security
                measures to protect your information. Your tasks and personal data are never shared without
                your permission.
              </Section>
            </div>
  
            {/* Last updated */}
            <div className="mt-8 pt-6 border-t border-gray-100/20 text-center">
              <p className="text-sm text-gray-400">Last updated: March 2024</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Helper component for sections
  function Section({ 
    title, 
    children, 
    isOpen, 
    onClick 
  }: { 
    title: string; 
    children: React.ReactNode;
    isOpen: boolean;
    onClick: () => void;
  }) {
    return (
      <div className="group">
        <button
          onClick={onClick}
          className="w-full flex items-center justify-between text-left"
        >
          <h2 className="text-lg sm:text-xl font-semibold text-yellow-400 
            transition-all duration-300 group-hover:-translate-y-0.5">
            {title}
          </h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 text-yellow-400 transform transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
          }`}
        >
          <p className="text-sm sm:text-base leading-relaxed">{children}</p>
        </div>
      </div>
    );
  }
  
  export default FAQ;
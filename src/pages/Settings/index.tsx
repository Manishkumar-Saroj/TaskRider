function Settings() {
  return (
    <div className="min-h-screen w-full px-4 py-4 sm:px-6 sm:py-6 md:py-8 bg-zinc-900">
      <div className="relative w-full max-w-xl mx-auto">
        {/* Glow effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 via-purple-500/20 to-pink-500/20 blur-3xl rounded-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-yellow-500/10 to-purple-500/10 blur-2xl rounded-full" />
        
        {/* Main container */}
        <div className="relative 
          bg-gray-100/10 backdrop-blur-xl 
          rounded-2xl sm:rounded-3xl 
          p-4 sm:p-6 md:p-8
          border border-gray-100/20
          shadow-[inset_0_0_20px_rgba(243,244,246,0.05)]">
          
          {/* Header with back button */}
          <div className="flex items-center mb-6 sm:mb-8">
            <button 
              onClick={() => window.history.back()} 
              className="absolute left-4 sm:left-6 group"
            >
              <div className="absolute inset-0 bg-gray-100/10 backdrop-blur-md rounded-full -m-2" />
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 sm:h-6 sm:w-6 relative text-gray-300 group-hover:text-yellow-400 transition-colors" 
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
            <h1 className="flex-1 text-xl sm:text-2xl md:text-3xl font-bold text-gray-100 text-center">
              Settings
            </h1>
          </div>

          {/* Profile section */}
          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-600 via-purple-500 to-yellow-400 rounded-full blur opacity-50 group-hover:opacity-75 transition-all duration-500 animate-spin-slow" />
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden 
                border-2 border-yellow-400/50
                transition-all duration-300 ease-in-out 
                hover:scale-110
                hover:shadow-lg hover:shadow-yellow-500/20">
                <img 
                  src="https://avatar.iran.liara.run/public" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex-1">
              <h2 className="text-base sm:text-lg font-semibold text-gray-100">Hi, John</h2>
            </div>
          </div>
  
          {/* Content sections */}
          <div className="space-y-4 sm:space-y-6 text-gray-300">
            <Section title="Account Settings">
              <div className="space-y-3 sm:space-y-4">
                <SettingItem
                  title="Profile Information"
                  description="Update your name, email, and profile picture"
                  onClick={() => {/* Add navigation logic */}}
                />
                <SettingItem
                  title="Password"
                  description="Change your password"
                  onClick={() => {/* Add navigation logic */}}
                />
              </div>
            </Section>
  
            <Section title="Preferences">
              <div className="space-y-3 sm:space-y-4">
                <ToggleSetting
                  title="Push Notifications"
                  description="Receive push notifications"
                  enabled={true}
                  onChange={() => {/* Add toggle logic */}}
                />
              </div>
            </Section>

            <Section title="Privacy">
              <div className="space-y-3 sm:space-y-4">
                <SettingItem
                  title="Privacy Policy"
                  description="Read our privacy policy"
                  onClick={() => {/* Add navigation logic */}}
                />
                <SettingItem
                  title="Data & Privacy"
                  description="Manage your data and privacy settings"
                  onClick={() => {/* Add navigation logic */}}
                />
              </div>
            </Section>

            <Section title="Help & Support">
              <div className="space-y-3 sm:space-y-4">
                <SettingItem
                  title="FAQ"
                  description="Frequently asked questions"
                  onClick={() => {/* Add navigation logic */}}
                />
                <SettingItem
                  title="Contact Support"
                  description="Get help from our support team"
                  onClick={() => {/* Add navigation logic */}}
                />
              </div>
            </Section>

            <div className="pt-4 sm:pt-6 mt-6 sm:mt-8 border-t border-gray-100/20">
              <button 
                onClick={() => {/* Add logout logic */}}
                className="w-full group px-4 py-3 sm:py-3.5 rounded-xl 
                  transition-all duration-300 ease-in-out
                  hover:scale-105 hover:-translate-y-1
                  border border-red-500/20
                  bg-red-500/5 hover:bg-red-500/10
                  text-red-400 hover:text-red-300
                  text-sm sm:text-base"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper Components
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="group">
      <h2 className="text-base sm:text-lg md:text-xl font-semibold text-yellow-400 mb-3 sm:mb-4 
        transition-all duration-300 group-hover:-translate-y-0.5">{title}</h2>
      <div className="text-sm sm:text-base leading-relaxed">{children}</div>
    </div>
  );
}

function SettingItem({ title, description, onClick }: { 
  title: string; 
  description: string; 
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left p-3 sm:p-4 rounded-xl
        transition-all duration-300 ease-in-out
        hover:scale-102 hover:-translate-y-0.5
        bg-gray-100/5 hover:bg-gray-100/10
        border border-gray-100/10 hover:border-gray-100/20
        group"
    >
      <div className="flex justify-between items-center gap-3">
        <div>
          <h3 className="font-medium text-sm sm:text-base text-gray-100 group-hover:text-yellow-400 
            transition-colors duration-300">{title}</h3>
          <p className="text-xs sm:text-sm text-gray-400">{description}</p>
        </div>
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-yellow-400 
            transition-all duration-300 group-hover:translate-x-1 flex-shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </button>
  );
}

function ToggleSetting({ title, description, enabled, onChange }: {
  title: string;
  description: string;
  enabled: boolean;
  onChange: () => void;
}) {
  return (
    <div className="flex items-center justify-between p-3 sm:p-4 rounded-xl
      bg-gray-100/5 hover:bg-gray-100/10
      border border-gray-100/10 hover:border-gray-100/20
      transition-all duration-300 ease-in-out
      group"
    >
      <div className="mr-3">
        <h3 className="font-medium text-sm sm:text-base text-gray-100 group-hover:text-yellow-400 
          transition-colors duration-300">{title}</h3>
        <p className="text-xs sm:text-sm text-gray-400">{description}</p>
      </div>
      <button
        onClick={onChange}
        className={`relative inline-flex h-5 sm:h-6 w-9 sm:w-11 items-center rounded-full
          transition-colors duration-300 focus:outline-none flex-shrink-0
          ${enabled ? 'bg-yellow-400' : 'bg-gray-500'}`}
      >
        <span
          className={`inline-block h-3.5 sm:h-4 w-3.5 sm:w-4 transform rounded-full bg-white
            transition-transform duration-300
            ${enabled ? 'translate-x-5 sm:translate-x-6' : 'translate-x-1'}`}
        />
      </button>
    </div>
  );
}

export default Settings;
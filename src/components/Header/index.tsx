import { useState } from 'react';
import NotificationIcon from '../../assets/icons/notification-icon';

function Header() {
  const [currentDate] = useState(new Date());
  
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                  'July', 'August', 'September', 'October', 'November', 'December'];

  return (
    <header className="fixed top-0 left-0 right-0 px-4 py-3 sm:p-6 z-50  backdrop-blur-lg">
      <div className="relative max-w-3xl lg:max-w-xl mx-auto">
        {/* Glow effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/30 via-purple-500/30 to-pink-500/30 blur-3xl rounded-full animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-yellow-500/20 to-purple-500/20 blur-2xl rounded-full animate-pulse delay-75" />
        
        {/* Main container */}
        <div className="relative grid grid-cols-[auto_1fr_auto] items-center gap-4 
          bg-gray-100/10 backdrop-blur-xl 
          rounded-3xl p-2
          border border-gray-100/20
          shadow-[inset_0_0_20px_rgba(243,244,246,0.05)]">
          
          {/* Left - Notification */}
          <button className="p-2 rounded-full 
            bg-gray-100/10 backdrop-blur-md
            transition-all duration-300 ease-in-out 
            hover:scale-110 hover:-translate-y-1 
            hover:shadow-lg hover:shadow-yellow-500/20">
            <NotificationIcon color='#ffffff' className="w-6 h-6" />
          </button>

          {/* Middle - Greeting & Date */}
          <div className="text-center">
            <h1 className="text-md font-semibold text-gray-100">Hi, Manish</h1>
            <p className="text-sm text-gray-300">
              {months[currentDate.getMonth()]} , {currentDate.getDate()}
            </p>
          </div>

          {/* Right - Profile Image */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-600 via-purple-500 to-yellow-400 rounded-full blur opacity-50 group-hover:opacity-75 transition-all duration-500" />
            <button className="relative w-10 h-10 rounded-full overflow-hidden 
              border-2 border-yellow-400/50
              transition-all duration-300 ease-in-out 
              hover:scale-110 hover:-translate-y-1">
              <img 
                src="https://avatar.iran.liara.run/public" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

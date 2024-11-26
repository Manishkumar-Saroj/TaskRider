import { useEffect, useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import { HomeIcon, SettingsIcon, Shield, HelpCircle, CalendarDaysIcon, CalendarWeekIcon, CalendarMonthIcon } from './icons';
import CloseIcon from '../../assets/icons/close-icon';
import SidebarItem from './SidebarItem';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

function Sidebar({ isOpen, onClose }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [currentDate] = useState(new Date());
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                 'July', 'August', 'September', 'October', 'November', 'December'];

  const handlers = useSwipeable({
    onSwipedLeft: onClose,
    trackMouse: true,
    trackTouch: true,
    delta: 50,
    preventScrollOnSwipe: true,
    swipeDuration: 500,
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleNavigation = (path: string) => {
    navigate(path);
    onClose();
  };

  const isCurrentPath = (path: string) => location.pathname === path;

  const navigationItems = [
    { 
      title: 'Home', 
      path: '/', 
      icon: HomeIcon
    },
    {
      title: 'Settings',
      path: '/settings',
      icon: SettingsIcon
    },
    {
      title: 'Privacy Policy',
      path: '/privacy',
      icon: Shield
    },
    {
      title: 'FAQ',
      path: '/faq',
      icon: HelpCircle
    }
  ];

  return (
    <div 
      className={`fixed inset-0 z-[60] transition-all duration-300 ${
        isOpen ? 'visible opacity-100' : 'invisible opacity-0'
      }`}
    >
      {/* Backdrop with blur */}
      <div 
        className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 
          ${isOpen ? 'opacity-100' : 'opacity-0'}`} 
      />

      {/* Sidebar */}
      <div
        {...handlers}
        ref={sidebarRef}
        className={`absolute left-0 top-0 h-full w-72 transform transition-transform duration-500 ease-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Glass container */}
        <div className="relative h-full overflow-hidden">
          {/* Gradient background effects */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 via-purple-500/10 to-pink-500/10 blur-3xl" />
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/95 to-gray-900/90 backdrop-blur-xl" />
          </div>

          {/* Content */}
          <div className="relative h-full flex flex-col p-6">
            {/* Close Button - moved to top right */}
            <div className="absolute top-6 right-6 z-10">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-600 via-purple-500 to-yellow-400 rounded-full blur opacity-50 group-hover:opacity-75 transition-all duration-500" />
                <button 
                  onClick={onClose}
                  className="relative p-2 rounded-full 
                    bg-gray-100/10 backdrop-blur-md
                    transition-all duration-300 ease-in-out 
                    hover:scale-110 hover:-translate-y-1 
                    hover:shadow-lg hover:shadow-yellow-500/20
                    active:scale-95"
                >
                  <CloseIcon 
                    color="#F4CE14" 
                    className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" 
                    strokeWidth={2.5}
                  />
                </button>
              </div>
            </div>

            {/* Header - removed left padding since button is now on right */}
            <div className="flex items-center gap-4 mb-8 select-none">
              {/* Profile Image with glow effect */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-600 via-purple-500 to-yellow-400 rounded-full blur opacity-50 group-hover:opacity-75 transition-all duration-500" />
                <div className="relative w-12 h-12 rounded-full overflow-hidden 
                  border-2 border-yellow-400/50
                  transition-all duration-300 ease-in-out 
                  hover:scale-110">
                  <img 
                    src="https://avatar.iran.liara.run/public" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Name and Date */}
              <div className="flex-1">
                <h1 className="text-lg font-semibold text-gray-100">Hi, John</h1>
                <p className="text-sm text-gray-300">
                  {currentDate.getDate()} {months[currentDate.getMonth()]}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 space-y-3 mb-6">
              {/* Home item */}
              <SidebarItem
                key="/"
                icon={HomeIcon}
                title="Home"
                isActive={isCurrentPath('/')}
                onClick={() => handleNavigation('/')}
              />
              
              {/* Calendar group */}
              <SidebarItem
                icon={CalendarDaysIcon}
                title="Calendar Views"
                isCollapsible
              >
                {[
                  { 
                    title: 'Day View', 
                    path: '/day', 
                    icon: CalendarDaysIcon
                  },
                  { 
                    title: 'Week View', 
                    path: '/week', 
                    icon: CalendarWeekIcon
                  },
                  { 
                    title: 'Month View', 
                    path: '/month', 
                    icon: CalendarMonthIcon
                  },
                ].map((item) => (
                  <button
                    key={item.path}
                    onClick={() => handleNavigation(item.path)}
                    className={`w-full px-4 py-2.5 rounded-lg
                      transition-all duration-300 ease-in-out
                      hover:scale-102
                      flex items-center gap-3
                      select-none
                      ${isCurrentPath(item.path)
                        ? 'bg-yellow-400/10 text-yellow-400'
                        : 'text-gray-400 hover:text-yellow-400 hover:bg-gray-100/5'
                      }`}
                  >
                    <item.icon size={16} />
                    <span className="text-sm font-medium">{item.title}</span>
                  </button>
                ))}
              </SidebarItem>
              
              {/* Remaining navigation items */}
              {navigationItems.slice(1).map((item) => (
                <SidebarItem
                  key={item.path}
                  icon={item.icon}
                  title={item.title}
                  isActive={isCurrentPath(item.path)}
                  onClick={() => handleNavigation(item.path)}
                />
              ))}
            </nav>

            {/* Footer */}
            <div className="pt-6 border-t border-gray-100/10">
              <div className="text-sm text-gray-400 select-none">
                Version 1.0.0
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

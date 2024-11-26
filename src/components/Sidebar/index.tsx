import { useEffect, useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import { HomeIcon, SettingsIcon, Shield, HelpCircle, CalendarDaysIcon, CalendarWeekIcon, CalendarMonthIcon, LogoutIcon, ArrowRightIcon, TermsIcon, MessageSquare } from './icons';
import CloseIcon from '../../assets/icons/close-icon';
import SidebarItem from './SidebarItem';
import GeekHeadLogo from '../../assets/logos/geekhead.png'

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

type CollapsibleSection = 'calendar' | 'others' | null;

function Sidebar({ isOpen, onClose }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [currentDate] = useState(new Date());
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                 'July', 'August', 'September', 'October', 'November', 'December'];
  const [openSection, setOpenSection] = useState<CollapsibleSection>(null);

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

  const handleCollapsibleClick = (section: CollapsibleSection) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div 
      className={`fixed inset-0 z-[60] transition-all duration-300 ${
        isOpen ? 'visible opacity-100' : 'invisible opacity-0'
      }`}
    >
      {/* Enhanced backdrop with multi-layer blur */}
      <div 
        className={`absolute inset-0 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-purple-500/5 to-pink-500/5 blur-3xl" />
      </div>

      {/* Sidebar */}
      <div
        {...handlers}
        ref={sidebarRef}
        className={`absolute left-0 top-0 h-full w-72 transform transition-transform duration-500 ease-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Enhanced glass container with multiple layers */}
        <div className="relative h-full overflow-hidden">
          {/* Multi-layer gradient background effects */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 via-purple-500/10 to-pink-500/10 blur-3xl animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 via-yellow-500/10 to-purple-500/10 blur-2xl animate-pulse delay-75" />
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/95 to-gray-900/90 backdrop-blur-xl" />
            <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(243,244,246,0.05)]" />
          </div>

          {/* Content container with enhanced glass effect */}
          <div className="relative h-full flex flex-col p-6 
            border-r border-gray-100/10
            bg-gray-100/5 backdrop-blur-xl
            overflow-y-auto scrollbar-none">
            
            {/* Close Button - with enhanced glow effect */}
            <div className="absolute top-6 right-6 z-10">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-600 via-purple-500 to-yellow-400 rounded-full blur opacity-50 group-hover:opacity-75 transition-all duration-500 animate-spin-slow" />
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

            {/* Header with enhanced profile image glow */}
            <div className="flex items-center gap-4 mb-8 select-none">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-600 via-purple-500 to-yellow-400 rounded-full blur opacity-50 group-hover:opacity-75 transition-all duration-500 animate-spin-slow" />
                <div className="relative w-12 h-12 rounded-full overflow-hidden 
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
                <h1 className="text-lg font-semibold text-gray-100">Hi, John</h1>
                <p className="text-sm text-gray-300">
                  {currentDate.getDate()} {months[currentDate.getMonth()]}
                </p>
              </div>
            </div>

            {/* Navigation with enhanced spacing */}
            <nav className="flex-1 space-y-3 mb-6 px-1">
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
                isOpen={openSection === 'calendar'}
                onCollapsibleClick={() => handleCollapsibleClick('calendar')}
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
              
              {/* Settings item */}
              <SidebarItem
                icon={SettingsIcon}
                title="Settings"
                isActive={isCurrentPath('/settings')}
                onClick={() => handleNavigation('/settings')}
              />
              
              {/* Others group */}
              <SidebarItem
                icon={HelpCircle}
                title="Others"
                isCollapsible
                isOpen={openSection === 'others'}
                onCollapsibleClick={() => handleCollapsibleClick('others')}
              >
                {[
                  {
                    title: 'FAQ',
                    path: '/faq',
                    icon: HelpCircle
                  },
                  {
                    title: 'Feedback',
                    path: '/feedback',
                    icon: MessageSquare
                  },
                  {
                    title: 'Privacy Policy',
                    path: '/privacy-policy',
                    icon: Shield
                  },
                  {
                    title: 'Terms & Conditions',
                    path: '/terms-and-conditions',
                    icon: TermsIcon
                  }
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
            </nav>

            {/* Logout Button */}
            <div className="mb-4">
              <button 
                onClick={() => {/* Add your logout logic here */}} 
                className="w-full group px-4 py-3.5 rounded-xl 
                  transition-all duration-300 ease-in-out
                  hover:scale-105 hover:-translate-y-1
                  border border-red-500/20
                  bg-red-500/5 hover:bg-red-500/10
                  flex items-center gap-4
                  select-none"
              >
                {/* Icon container with glow effect */}
                <div className="relative group-hover:scale-110 transition-all duration-300 text-red-400">
                  <div className="absolute inset-0 bg-red-400/20 blur-xl rounded-full 
                    transition-opacity duration-300 
                    opacity-0 group-hover:opacity-50" 
                  />
                  <LogoutIcon 
                    size={20} 
                    strokeWidth={2.5} 
                    className="relative z-10" 
                  />
                </div>

                {/* Text content */}
                <div className="flex-1 text-left">
                  <span className="block text-sm font-medium text-red-400 group-hover:text-red-300
                    transition-colors duration-300">
                    Logout
                  </span>
                </div>

                {/* Arrow indicator */}
                <div className="transition-all duration-300
                  opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0">
                  <ArrowRightIcon 
                    size={16} 
                    className="text-red-400 group-hover:text-red-300" 
                  />
                </div>
              </button>
            </div>

            {/* Enhanced footer */}
            <div className="pt-4 border-t border-gray-100/10">
            <div className="text-gray-400 select-none 
                bg-gray-100/5 backdrop-blur-md 
                rounded-xl p-3
                transition-all duration-300 hover:bg-gray-100/10 text-center">
                <div className='text-sm flex items-center justify-center gap-1'>
                    Design and developed by
                    <span className="text-green-500 animate-pulse text-lg">&#123;</span>
                    <img src={GeekHeadLogo} alt="" className='w-5 inline-block' />
                    <span className="text-green-500 animate-pulse text-lg">&#125;</span>
                </div>
                <div className='text-xs'>Version 1.0.0</div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

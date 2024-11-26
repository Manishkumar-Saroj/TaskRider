import { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import HomeIcon from '../../assets/icons/home-icon';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

function Sidebar({ isOpen, onClose }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const sidebarRef = useRef<HTMLDivElement>(null);

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
            {/* Header */}
            <div className="flex items-center gap-3 mb-8">
              <HomeIcon color="#F4CE14" strokeWidth="2" className="w-7 h-7" />
              <span className="text-xl font-semibold text-yellow-400">Dashboard</span>
            </div>

            {/* Navigation */}
            <nav className="flex-1 space-y-3">
              {[
                { title: 'Home', path: '/' },
                { title: 'Day View', path: '/day' },
                { title: 'Week View', path: '/week' },
                { title: 'Month View', path: '/month' },
              ].map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  className={`w-full group px-4 py-3.5 rounded-xl 
                    transition-all duration-300 ease-in-out
                    hover:scale-105 hover:-translate-x-1
                    border border-gray-100/10
                    flex items-center gap-3
                    ${isCurrentPath(item.path) 
                      ? 'bg-gray-100/15 border-gray-100/20' 
                      : 'bg-gray-100/5 hover:bg-gray-100/10 hover:border-gray-100/20'
                    }`}
                >
                  <span className={`text-sm font-medium transition-colors
                    ${isCurrentPath(item.path)
                      ? 'text-yellow-400'
                      : 'text-gray-100 group-hover:text-yellow-400'
                    }`}>
                    {item.title}
                  </span>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-yellow-400">→</span>
                  </div>
                </button>
              ))}
            </nav>

            {/* Footer */}
            <div className="pt-6 border-t border-gray-100/10">
              <div className="text-sm text-gray-400">
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

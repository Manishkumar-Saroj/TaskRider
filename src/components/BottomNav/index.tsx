import { useState } from 'react';
import Hamburger from '../Hamburger';
import HomeIcon from '../../assets/icons/home-icon';
import PlusIcon from '../../assets/icons/plus-icon';

function BottomNav() {
  const [activeNav, setActiveNav] = useState<'menu' | 'home' | null>('home');
  const [activePeriod, setActivePeriod] = useState<string | null>(null);

  const handleNavClick = (nav: 'menu' | 'home') => {
    setActiveNav(nav);
    setActivePeriod(null);
  };

  const handlePeriodClick = (period: string) => {
    setActivePeriod(activePeriod === period ? null : period);
    setActiveNav(null);
  };

  return (
    <nav className="fixed bottom-2 left-0 right-0 px-4 py-1 sm:p-6">
      <div className="relative max-w-3xl lg:max-w-xl mx-auto">
        {/* Enhanced multi-layer glow effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/30 via-purple-500/30 to-pink-500/30 blur-3xl rounded-full animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-yellow-500/20 to-purple-500/20 blur-2xl rounded-full animate-pulse delay-75" />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-100/5 to-gray-100/10 blur-xl rounded-full" />
        
        {/* Enhanced glass effect for main container */}
        <div className="relative grid grid-cols-[auto_1fr_auto] items-center gap-2 sm:gap-3 rounded-3xl p-2 
          bg-gray-100/10 backdrop-blur-xl 
          border border-gray-100/20
          shadow-[inset_0_0_20px_rgba(243,244,246,0.05)]
          transition-all duration-500 ease-in-out">
          
          {/* Left section with glass effect */}
          <div className="grid grid-cols-2 items-center gap-1 sm:gap-1.5 
            bg-gray-100/10 backdrop-blur-md 
            rounded-2xl py-1.5 px-2 
            transition-all duration-500 ease-in-out 
            hover:scale-105 
            hover:shadow-lg hover:shadow-yellow-500/20">
            <button 
              className={`p-1 sm:p-1.5 rounded-full transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg active:translate-y-0 ${
                activeNav === 'menu' 
                  ? 'bg-gray-900/50 scale-110 shadow-md shadow-yellow-500/20' 
                  : 'hover:scale-105'
              }`}
              onClick={() => handleNavClick('menu')}
            >
              <Hamburger size='1.6rem' color='#ffffff' className="transition-all duration-300 ease-in-out sm:text-[1.8rem] hover:rotate-12"/>
            </button>
            <button 
              className={`p-2 sm:p-1.5 rounded-full transition-all duration-300 ease-in-out hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center ${
                activeNav === 'home' 
                  ? 'bg-gray-900/50 scale-110 ' 
                  : 'hover:scale-105'
              }`}
              onClick={() => handleNavClick('home')}
            >
              <HomeIcon color='#F4CE14' strokeWidth='2' className='w-5 sm:w-6 transition-all duration-300 ease-in-out'/>
            </button>
          </div>

          {/* Center section with glass effect */}
          <div className="grid grid-cols-3 place-self-center w-fit 
            bg-gray-100/5 backdrop-blur-xl 
            rounded-2xl p-1.5 
            transition-all duration-300 ease-in-out 
            hover:shadow-lg hover:shadow-yellow-500/20">
            {['Day', 'Week', 'Month'].map((period) => (
              <button 
                key={period}
                className={`group relative px-3 sm:px-5 py-1.5 sm:py-2 rounded-xl transition-all duration-300 ease-in-out ${
                  activePeriod === period 
                    ? 'bg-gray-900/50 scale-105 shadow-md shadow-yellow-500/20' 
                    : 'hover:scale-105'
                }`}
                onClick={() => handlePeriodClick(period)}
              >
                <span className='relative text-gray-200 text-xs sm:text-sm font-medium transition-all duration-300 ease-in-out group-hover:-translate-y-1 group-hover:text-yellow-300 inline-block'>
                  {period}
                </span>
                <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-yellow-400 transition-all duration-500 ease-in-out ${
                  activePeriod === period 
                    ? 'opacity-100 scale-150 blur-[1px]' 
                    : 'opacity-0 scale-0'
                }`} />
              </button>
            ))}
          </div>

          {/* Plus button section */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-600 via-purple-500 to-yellow-400 rounded-full blur opacity-50 group-hover:opacity-75 transition-all duration-500 ease-in-out animate-spin-slow" />
            <button className="relative 
              bg-gradient-to-br from-yellow-400/90 to-yellow-500/90 
              backdrop-blur-sm
              p-2.5 sm:p-3 rounded-full 
              transition-all duration-300 ease-in-out 
              hover:scale-110 active:scale-95 
              hover:-translate-y-1.5 active:translate-y-0 
              hover:shadow-lg hover:shadow-yellow-500/20
              group-hover:from-yellow-300 group-hover:to-yellow-400">
              <PlusIcon color='#000' strokeWidth='3' className='w-4 sm:w-5 group-hover:rotate-180 transition-transform duration-500 ease-in-out'/>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default BottomNav;
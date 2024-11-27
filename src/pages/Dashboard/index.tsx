import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import BottomNav from '../../components/BottomNav';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handlers = useSwipeable({
    onSwipedRight: () => setIsSidebarOpen(true),
    onSwipedLeft: () => setIsSidebarOpen(false),
    trackMouse: true,
    trackTouch: true,
    delta: 50,
    preventScrollOnSwipe: true,
    swipeDuration: 500,
  });

  const handleSidebarToggle = () => {
    setIsSidebarOpen(prevState => !prevState);
  };

  return (
    <div className={`h-screen flex flex-col bg-zinc-900 ${
      isSidebarOpen ? 'overflow-hidden' : ''
    }`} {...handlers}>
      <Header />
      <main className="flex-1 mb-16 pt-20 sm:pt-28">
        <Outlet />
      </main>
      <BottomNav 
        onMenuClick={handleSidebarToggle} 
        isSidebarOpen={isSidebarOpen}
      />
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />
    </div>
  );
}

export default Dashboard;

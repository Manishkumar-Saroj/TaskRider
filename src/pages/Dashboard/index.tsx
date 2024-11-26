import { Routes, Route } from 'react-router-dom';
import BottomNav from '../../components/BottomNav';
import Header from '../../components/Header';
import Home from '../Home';
import Day from '../Day';
import Week from '../Week';
import Month from '../Month';

function Dashboard() {
  return (
    <div className="h-screen flex flex-col bg-zinc-900">
      <Header />
      <main className="flex-1 mb-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/day" element={<Day />} />
          <Route path="/week" element={<Week />} />
          <Route path="/month" element={<Month />} />
        </Routes>
      </main>
      <BottomNav />
    </div>
  );
}

export default Dashboard;

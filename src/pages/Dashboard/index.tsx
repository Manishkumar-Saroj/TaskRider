import BottomNav from '../../components/BottomNav';
import Header from '../../components/Header';

function Dashboard() {
  return (
    <div className="h-screen flex flex-col bg-zinc-900">
      <Header />
      <main className="flex-1 mb-16">
        {/* Page content goes here */}
        {/* <h1 className="text-3xl font-bold text-center mt-10">Dashboard</h1> */}
      </main>
      <BottomNav />
    </div>
  );
}

export default Dashboard;

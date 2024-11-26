import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Home() {
  // Add new state for sync status
  const [syncStatus, setSyncStatus] = useState<'online' | 'offline' | 'syncing'>('online');
  const [lastSynced, setLastSynced] = useState<string | null>(null);
  const [pendingChanges, setPendingChanges] = useState<number>(0); // Track offline changes

  // Add useEffect to monitor online/offline status
  useEffect(() => {
    const handleOnline = () => {
      setSyncStatus('online');
      syncData(); // Trigger sync when coming back online
    };
    
    const handleOffline = () => setSyncStatus('offline');

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Set initial status
    setSyncStatus(navigator.onLine ? 'online' : 'offline');

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Mock sync function - replace with your actual sync logic
  const syncData = async () => {
    if (syncStatus === 'syncing') return;
    
    setSyncStatus('syncing');
    try {
      // Your sync logic here
      await new Promise(resolve => setTimeout(resolve, 1000));
      setLastSynced(new Date().toISOString());
      setPendingChanges(0); // Clear pending changes after successful sync
      setSyncStatus('online');
    } catch (error) {
      console.error('Sync failed:', error);
      setSyncStatus('offline');
    }
  };

  // Mock data - in a real app, this would come from your data source
  const stats = [
    { 
      label: 'Tasks',
      today: { value: '3', label: 'Today' },
      total: { value: '12', label: 'Total' },
      icon: '📋',
      gradient: 'from-yellow-500/20 via-orange-500/20 to-red-500/20'
    },
    { 
      label: 'Reminders',
      today: { value: '2', label: 'Today' },
      total: { value: '5', label: 'Total' },
      icon: '⏰',
      gradient: 'from-purple-500/20 via-indigo-500/20 to-blue-500/20'
    },
    { 
      label: 'Income',
      today: { value: '₹12,350', label: 'Today' },
      total: { value: '₹1,45,450', label: 'This Month' },
      icon: '💰',
      gradient: 'from-green-500/20 via-emerald-500/20 to-teal-500/20'
    },
    { 
      label: 'Expenses',
      today: { value: '₹8,120', label: 'Today' },
      total: { value: '₹52,280', label: 'This Month' },
      icon: '💳',
      gradient: 'from-pink-500/20 via-rose-500/20 to-red-500/20'
    },
  ];

  const tasks = [
    { id: 1, title: 'Complete project proposal', priority: 'high', date: '2024-03-20' },
    { id: 2, title: 'Review documentation', priority: 'medium', date: '2024-03-21' },
    { id: 3, title: 'Team meeting', priority: 'low', date: '2024-03-22' },
  ];

  const reminders = [
    { id: 1, title: 'Call with client', time: '2:30 PM', date: 'Today' },
    { id: 2, title: 'Submit report', time: '5:00 PM', date: 'Tomorrow' },
    { id: 3, title: 'Team lunch', time: '12:30 PM', date: 'Mar 23' },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  // Helper function to format Indian currency
  const formatIndianCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount).replace('INR', '₹');
  };

  // Enhanced sync status display component
  const SyncStatusIndicator = () => (
    <motion.div layout className="relative">
      {/* Glow effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/30 via-purple-500/30 to-pink-500/30 blur-3xl rounded-full animate-pulse" />
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-yellow-500/20 to-purple-500/20 blur-2xl rounded-full animate-pulse delay-75" />
      
      {/* Main container */}
      <div className="relative flex items-center gap-2 p-1 
        bg-gray-100/10 backdrop-blur-xl 
        rounded-xl
        border border-gray-100/20
        shadow-[inset_0_0_20px_rgba(243,244,246,0.05)]">
        
        {/* Status Indicator */}
        <div className="flex items-center gap-2 px-3 py-1.5 
          bg-gray-100/10 backdrop-blur-md rounded-lg">
          <motion.div 
            className={`w-2 h-2 rounded-full ${
              syncStatus === 'online' ? 'bg-emerald-500' :
              syncStatus === 'offline' ? 'bg-rose-500' :
              'bg-amber-500'
            }`}
            animate={{
              scale: (syncStatus as 'online' | 'offline' | 'syncing') === 'syncing' ? [1, 1.2, 1] : 1
            }}
            transition={{ repeat: (syncStatus as 'online' | 'offline' | 'syncing') === 'syncing' ? Infinity : 0 }}
          />
          <span className="text-xs font-medium text-gray-100">
            {syncStatus === 'online' ? 'Online' :
             syncStatus === 'offline' ? 'Offline' :
             'Syncing...'}
          </span>
        </div>

        {/* Sync Button - Only show when offline */}
        {syncStatus === 'offline' && (
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-600 via-purple-500 to-yellow-400 rounded-full blur opacity-50 group-hover:opacity-75 transition-all duration-500" />
            <motion.button
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95, y: 0 }}
              onClick={syncData}
              className="relative p-2 rounded-lg 
                bg-gray-100/10 backdrop-blur-md
                hover:shadow-lg hover:shadow-yellow-500/20
                transition-all duration-300"
            >
              <motion.svg 
                className="w-4 h-4 text-yellow-400" 
                fill="none" 
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={{
                  rotate: (syncStatus as 'online' | 'offline' | 'syncing') === 'syncing' ? [0, 360] : 0
                }}
                transition={{
                  repeat: (syncStatus as 'online' | 'offline' | 'syncing') === 'syncing' ? Infinity : 0,
                  duration: 2,
                  ease: "linear"
                }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" 
                />
              </motion.svg>
            </motion.button>
          </div>
        )}

        {/* Pending Changes Badge */}
        {pendingChanges > 0 && syncStatus === 'offline' && (
          <span className="px-2 py-1 text-xs font-medium rounded-xl 
            bg-yellow-500/20 text-yellow-400 
            backdrop-blur-md">
            {pendingChanges}
          </span>
        )}
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-900 p-4 pb-24 overflow-y-auto scrollbar-none">
      {/* Gradient background effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-yellow-500/5 via-purple-500/5 to-pink-500/5" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-900/90 to-gray-900/80" />

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto space-y-6 select-none">
        {/* Updated Header */}
        <header className="flex justify-between items-start mb-8">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-gray-100">Dashboard</h1>
            <p className="text-sm text-gray-400">Welcome back! Here's your overview.</p>
          </div>
          
          <SyncStatusIndicator />
        </header>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {stats.map((stat) => (
            <div key={stat.label} className="group relative">
              {/* Simplified gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} blur-md rounded-2xl opacity-40 
                group-hover:opacity-60 transition-opacity duration-300`} />
              
              {/* Main card - centered content */}
              <div className="relative p-4 rounded-2xl 
                bg-gray-800/40 backdrop-blur-xl 
                border border-gray-700/50
                transition-all duration-300 
                active:scale-95 touch-manipulation">
                
                {/* Icon and label in more compact layout */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center justify-center w-8 h-8 
                    rounded-lg bg-gray-700/50 backdrop-blur-sm 
                    border border-gray-600/50">
                    <span className="text-base">{stat.icon}</span>
                  </div>
                  <h3 className="text-sm text-gray-400 font-medium text-center">{stat.label}</h3>
                </div>

                {/* Stats centered */}
                <div className="space-y-2 text-center">
                  {/* Today's stats */}
                  <div>
                    <p className="text-xl font-bold text-gray-100 
                      tracking-tight group-hover:text-gray-100">
                      {stat.today.value}
                    </p>
                    <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">
                      {stat.today.label}
                    </p>
                  </div>

                  {/* Total stats - slightly muted */}
                  <div className="pt-1 border-t border-gray-700/50">
                    <p className="text-lg font-bold text-gray-300/90">
                      {stat.total.value}
                    </p>
                    <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">
                      {stat.total.label}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Tasks Priority Distribution */}
          <div className="relative group lg:col-span-2">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-purple-500/10 to-pink-500/10 blur-xl rounded-2xl" />
            <div className="relative p-4 rounded-2xl bg-gray-100/10 backdrop-blur-xl border border-gray-100/20
              transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20">
              <h2 className="text-lg font-semibold text-gray-100 mb-4">Task Priority Distribution</h2>
              <div className="grid grid-cols-3 gap-4 h-[300px] items-end px-4">
                {['high', 'medium', 'low'].map((priority) => (
                  <div key={priority} className="relative group flex flex-col items-center">
                    <div className={`w-full ${getPriorityColor(priority)} rounded-t-lg transition-all duration-500 group-hover:opacity-80`} 
                      style={{ height: priority === 'high' ? '70%' : priority === 'medium' ? '50%' : '30%' }}>
                    </div>
                    <span className="mt-2 text-sm text-gray-400 capitalize">{priority}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Reminders */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-yellow-500/10 to-purple-500/10 blur-xl rounded-2xl" />
            <div className="relative p-4 rounded-2xl bg-gray-100/10 backdrop-blur-xl border border-gray-100/20
              transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20">
              <h2 className="text-lg font-semibold text-gray-100 mb-4">Upcoming Reminders</h2>
              <div className="space-y-3">
                {reminders.map((reminder) => (
                  <div key={reminder.id} className="flex items-center justify-between p-3 rounded-xl bg-gray-800/50 hover:bg-gray-800/70 transition-colors">
                    <div>
                      <h3 className="text-sm font-medium text-gray-200">{reminder.title}</h3>
                      <p className="text-xs text-gray-400">{reminder.date}</p>
                    </div>
                    <span className="text-xs font-medium text-yellow-400">{reminder.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Financial Summary */}
          <div className="relative group lg:col-span-2">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-yellow-500/10 blur-xl rounded-2xl" />
            <div className="relative p-4 rounded-2xl bg-gray-100/10 backdrop-blur-xl border border-gray-100/20
              transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20">
              <h2 className="text-lg font-semibold text-gray-100 mb-4">Financial Overview</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                  <h3 className="text-sm text-green-400">Total Income</h3>
                  <p className="text-xl font-semibold text-green-300">{formatIndianCurrency(2450)}</p>
                </div>
                <div className="p-4 rounded-xl bg-pink-500/10 border border-pink-500/20">
                  <h3 className="text-sm text-pink-400">Total Expenses</h3>
                  <p className="text-xl font-semibold text-pink-300">{formatIndianCurrency(1280)}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Tasks */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-purple-500/10 to-pink-500/10 blur-xl rounded-2xl" />
            <div className="relative p-4 rounded-2xl bg-gray-100/10 backdrop-blur-xl border border-gray-100/20
              transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20">
              <h2 className="text-lg font-semibold text-gray-100 mb-4">Recent Tasks</h2>
              <div className="space-y-3">
                {tasks.map((task) => (
                  <div key={task.id} className="flex items-center justify-between p-3 rounded-xl bg-gray-800/50 hover:bg-gray-800/70 transition-colors">
                    <div>
                      <h3 className="text-sm font-medium text-gray-200">{task.title}</h3>
                      <p className="text-xs text-gray-400">{task.date}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)} bg-opacity-20 text-${task.priority === 'medium' ? 'yellow' : task.priority === 'high' ? 'red' : 'green'}-400`}>
                      {task.priority}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
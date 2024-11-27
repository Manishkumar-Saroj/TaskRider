import { useState, useRef } from 'react';
import styled from 'styled-components';

// Add this styled component at the top level, outside the Day function
const ScrollContainer = styled.div`
  overflow-x: auto;
  padding-bottom: 1rem;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`;

function Day() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const scrollRef = useRef<HTMLDivElement>(null);

  // Generate dates for the current month
  const getDates = () => {
    const dates = [];
    const currentDate = new Date();
    const month = selectedDate.getMonth();
    const year = selectedDate.getFullYear();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      dates.push(date);
    }
    return dates;
  };

  const scrollToToday = () => {
    const today = new Date();
    setSelectedDate(today);
    
    // Find and scroll to today's element
    const todayElement = scrollRef.current?.querySelector('[data-today="true"]');
    if (todayElement) {
      todayElement.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'nearest',
        inline: 'center' 
      });
    }
  };

  // Reorganized mock data with specific times
  const daySchedule = [
    { id: 1, time: '00:00', items: [] },
    { id: 2, time: '01:00', items: [] },
    { id: 3, time: '06:00', items: [
      { id: 'task-1', type: 'task', title: 'Morning Exercise', priority: 'high' }
    ]},
    { id: 4, time: '09:00', items: [] },
    { id: 5, time: '10:00', items: [
      { id: 'task-2', type: 'task', title: 'Complete project proposal', priority: 'high' }
    ]},
    { id: 6, time: '14:30', items: [
      { id: 'task-3', type: 'task', title: 'Review documentation', priority: 'medium' },
      { id: 'reminder-1', type: 'reminder', title: 'Call with client' }
    ]},
    { id: 7, time: '16:00', items: [
      { id: 'task-4', type: 'task', title: 'Team meeting', priority: 'low' }
    ]},
    { id: 8, time: '17:00', items: [
      { id: 'reminder-2', type: 'reminder', title: 'Submit report' }
    ]},
    // ... add more time slots as needed
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const formatIndianCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount).replace('INR', '₹');
  };

  const dayFinancials = {
    income: { label: 'Income', amount: 25000 },
    expenses: { label: 'Expenses', amount: 12500 }
  };

  return (
    <div className="min-h-screen px-4 pb-24 sm:p-6 bg-zinc-900">
      <div className="relative max-w-3xl lg:max-w-xl mx-auto">
        {/* Glow effects - removed animate-pulse and adjusted opacity */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 via-purple-500/20 to-pink-500/20 blur-3xl rounded-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-yellow-500/10 to-purple-500/10 blur-2xl rounded-full" />
        
        {/* Main container */}
        <div className="relative 
          bg-gray-100/10 backdrop-blur-xl 
          rounded-3xl p-6 sm:p-8
          border border-gray-100/20
          shadow-[inset_0_0_20px_rgba(243,244,246,0.05)]">
          
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <button className="text-2xl font-semibold text-white flex items-center gap-2">
                {selectedDate.toLocaleString('default', { month: 'short' })} 
                <span className="text-sm opacity-60">▼</span>
              </button>
              <button 
                onClick={scrollToToday}
                className="px-3 py-1 text-sm text-white/60 hover:text-white border border-white/20 rounded-full hover:border-white/40 transition-colors"
              >
                Today
              </button>
            </div>
            <div className="flex gap-4">
              <button className="text-white/60 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <button className="text-white/60 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="text-white/60 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>
          </div>

          {/* Scrollable Calendar Days */}
          <ScrollContainer ref={scrollRef}>
            <div className="grid grid-flow-col auto-cols-min gap-3 min-w-full">
              {getDates().map((date) => {
                const isToday = date.toDateString() === new Date().toDateString();
                const isSelected = date.toDateString() === selectedDate.toDateString();
                
                return (
                  <div
                    key={date.toString()}
                    data-today={isToday}
                    onClick={() => setSelectedDate(date)}
                    className={`
                      flex flex-col items-center justify-center
                      w-12 h-16 rounded-full cursor-pointer
                      transition-all duration-200
                      ${isSelected 
                        ? 'bg-white text-zinc-900' 
                        : 'hover:bg-white/10 text-white'}
                    `}
                  >
                    <div className="text-xs opacity-60">
                      {date.toLocaleString('default', { weekday: 'short' })}
                    </div>
                    <div className={`text-lg font-semibold ${isToday && !isSelected ? 'text-blue-400' : ''}`}>
                      {date.getDate()}
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollContainer>
          
        </div>
      </div>

      {/* Day Details Section */}
      <div className="relative max-w-3xl lg:max-w-xl mx-auto mt-6">
        <div className="grid grid-cols-1 gap-4">
          {/* Time-based Schedule Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-purple-500/10 to-pink-500/10 blur-xl rounded-2xl" />
            <div className="relative p-4 rounded-2xl bg-gray-100/10 backdrop-blur-xl border border-gray-100/20
              transition-all duration-300">
              <h2 className="text-lg font-semibold text-gray-100 mb-4">Daily Schedule</h2>
              <div className="space-y-3">
                {daySchedule.map((timeSlot) => (
                  <div key={timeSlot.id} className="flex gap-4">
                    {/* Time Column */}
                    <div className="w-16 py-3 text-sm text-gray-400">
                      {timeSlot.time}
                    </div>
                    {/* Items Column */}
                    <div className="flex-1">
                      {timeSlot.items.length > 0 ? (
                        timeSlot.items.map((item) => (
                          <div key={item.id}
                            className="flex items-center justify-between p-3 rounded-xl bg-gray-800/50 hover:bg-gray-800/70 transition-colors">
                            <div>
                              <h3 className="text-sm font-medium text-gray-200">{item.title}</h3>
                            </div>
                            {item.type === 'task' ? (
                              <span className={`px-2 py-1 rounded-full text-xs font-medium 
                                ${getPriorityColor(item.priority || 'default')} bg-opacity-20 
                                text-${(item.priority === 'medium' ? 'yellow' : item.priority === 'high' ? 'red' : 'green')}-400`}>
                                {item.priority || 'default'}
                              </span>
                            ) : (
                              <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400">
                                Reminder
                              </span>
                            )}
                          </div>
                        ))
                      ) : (
                        <div className="h-2 border-l-2 border-gray-700/30 ml-3" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Financial Summary Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10 blur-xl rounded-2xl" />
            <div className="relative p-4 rounded-2xl bg-gray-100/10 backdrop-blur-xl border border-gray-100/20
              transition-all duration-300">
              <h2 className="text-lg font-semibold text-gray-100 mb-4">Financial Overview</h2>
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/20">
                  <h3 className="text-sm text-green-400">{dayFinancials.income.label}</h3>
                  <p className="text-xl font-semibold text-green-300">
                    {formatIndianCurrency(dayFinancials.income.amount)}
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-pink-500/10 border border-pink-500/20">
                  <h3 className="text-sm text-pink-400">{dayFinancials.expenses.label}</h3>
                  <p className="text-xl font-semibold text-pink-300">
                    {formatIndianCurrency(dayFinancials.expenses.amount)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Day;
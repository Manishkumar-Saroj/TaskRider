import { useState, useRef } from 'react';
import styled from 'styled-components';

// Add this styled component at the top level, outside the Day function
const ScrollContainer = styled.div`
  overflow-x: auto;
  padding-bottom: 1rem;
  user-select: none;

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

  // Reorganized mock data with AM/PM times
  const daySchedule = [
    { id: 1, time: '12:00 AM', items: [] },
    { id: 2, time: '1:00 AM', items: [] },
    { id: 3, time: '6:00 AM', items: [
      { id: 'task-1', type: 'task', title: 'Morning Exercise', priority: 'high' }
    ]},
    { id: 4, time: '9:00 AM', items: [] },
    { id: 5, time: '10:00 AM', items: [
      { id: 'task-2', type: 'task', title: 'Complete project proposal', priority: 'high' }
    ]},
    { id: 6, time: '2:30 PM', items: [
      { id: 'task-3', type: 'task', title: 'Review documentation', priority: 'medium' },
      { id: 'reminder-1', type: 'reminder', title: 'Call with client' }
    ]},
    { id: 7, time: '4:00 PM', items: [
      { id: 'task-4', type: 'task', title: 'Team meeting', priority: 'low' }
    ]},
    { id: 8, time: '5:00 PM', items: [
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
    <div className="min-h-screen px-4 pb-24 sm:p-6 bg-zinc-900 -mt-2.5 select-none">
      <div className="relative max-w-3xl lg:max-w-xl mx-auto">
        {/* Glow effects - removed animate-pulse and adjusted opacity */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 via-purple-500/20 to-pink-500/20 blur-3xl rounded-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-yellow-500/10 to-purple-500/10 blur-2xl rounded-full" />
        
        {/* Main container */}
        <div className="relative 
          bg-gray-100/10 backdrop-blur-xl 
          rounded-b-[35%] p-6 sm:p-8
          border border-gray-100/20
          shadow-[inset_0_0_20px_rgba(243,244,246,0.05)]">
          
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <button className="text-2xl font-semibold text-gray-100 flex items-center gap-2">
                {selectedDate.toLocaleString('default', { month: 'short' })} 
                <span className="text-sm opacity-60">▼</span>
              </button>
              <button 
                onClick={scrollToToday}
                className="px-3 py-1 text-sm text-gray-100/60 hover:text-gray-100 border border-gray-100/20 rounded-full hover:border-gray-100/40 transition-colors"
              >
                Today
              </button>
            </div>
            <div className="flex gap-4">
              <button className="text-gray-100/60 hover:text-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <button className="text-gray-100/60 hover:text-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
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
                      w-12 rounded-full cursor-pointer
                      transition-all duration-200 p-1
                      ${isSelected 
                        ? 'bg-gray-100 text-zinc-900' 
                        : 'hover:bg-gray-100/10 text-gray-100'}
                    `}
                  >
                    <div className="text-xs opacity-60">
                      {date.toLocaleString('default', { weekday: 'short' })}
                    </div>
                    <div className={`text-md font-semibold ${isToday && !isSelected ? 'text-blue-400' : ''}`}>
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
  

          {/* Time-based Schedule Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-purple-500/10 to-pink-500/10 blur-xl rounded-2xl" />
            <div className="relative p-3 rounded-2xl bg-gray-100/10 backdrop-blur-xl border border-gray-100/20
              transition-all duration-300">
              <h2 className="text-lg font-semibold text-gray-100 mb-4">Daily Schedule</h2>
              <div className="space-y-4">
                {daySchedule.map((timeSlot) => (
                  <div key={timeSlot.id} className="flex gap-3 group/slot">
                    {/* Time Column */}
                    <div className="w-20 py-3 text-sm font-medium text-gray-400 group-hover/slot:text-gray-200 transition-colors">
                      {timeSlot.time}
                    </div>
                    {/* Items Column */}
                    <div className="flex-1 space-y-2">
                      {timeSlot.items.length > 0 ? (
                        timeSlot.items.map((item) => (
                          <div key={item.id}
                            className="group/item flex items-center justify-between p-2 rounded-xl 
                              bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-200
                              border border-gray-700/50 hover:border-gray-600/50
                              transform hover:-translate-y-0.5 hover:shadow-lg">
                            <div className="flex items-center gap-1">
                              {/* Icon based on type */}
                              <div className={`p-0.5 rounded-lg 
                                ${item.type === 'task' 
                                  ? `${getPriorityColor(item.priority || 'default')} bg-opacity-20` 
                                  : 'bg-blue-500/20'}`}>
                                {item.type === 'task' ? (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                  </svg>
                                ) : (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                  </svg>
                                )}
                              </div>
                              <div>
                                <h3 className="text-xs font-medium text-gray-200 group-hover/item:text-gray-100">{item.title}</h3>
                              </div>
                            </div>
                            {item.type === 'task' ? (
                              <span className={`px-1 py-0.5 rounded-full text-xs font-medium 
                                ${getPriorityColor(item.priority || 'default')} bg-opacity-20 
                                text-${(item.priority === 'medium' ? 'yellow' : item.priority === 'high' ? 'red' : 'green')}-400`}>
                                {item.priority || 'default'}
                              </span>
                            ) : (
                              <span className="px-1 py-0.5 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400">
                                Reminder
                              </span>
                            )}
                          </div>
                        ))
                      ) : (
                        <div className="h-1 border-l-2 border-gray-700/30 ml-3" />
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
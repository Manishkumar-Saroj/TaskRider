import { useState } from 'react';

interface CalendarEvent {
  id: number;
  title: string;
  type: 'task' | 'reminder';
  priority?: string;
  date: number;
}

function Month() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const navigateMonth = (direction: 'prev' | 'next') => {
    setSelectedDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + (direction === 'next' ? 1 : -1));
      return newDate;
    });
  };

  const getDaysInMonth = () => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();
    
    const days = [];
    // Add previous month's days
    const prevMonthDays = new Date(year, month, 0).getDate();
    for (let i = startingDay - 1; i >= 0; i--) {
      days.push({
        date: new Date(year, month - 1, prevMonthDays - i),
        isCurrentMonth: false
      });
    }
    
    // Add current month's days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        date: new Date(year, month, i),
        isCurrentMonth: true
      });
    }
    
    // Add next month's days to complete the grid
    const remainingDays = 42 - days.length; // 6 rows * 7 days = 42
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        date: new Date(year, month + 1, i),
        isCurrentMonth: false
      });
    }
    
    return days;
  };

  // Sample events data
  const monthEvents: Record<number, CalendarEvent[]> = {
    1: [
      { id: 1, title: "Team Meeting", type: "task", priority: "high", date: 1 },
      { id: 2, title: "Project Deadline", type: "reminder", date: 1 }
    ],
    5: [
      { id: 3, title: "Client Presentation", type: "task", priority: "medium", date: 5 }
    ],
    15: [
      { id: 4, title: "Monthly Review", type: "task", priority: "high", date: 15 },
      { id: 5, title: "Team Lunch", type: "reminder", date: 15 }
    ],
    20: [
      { id: 6, title: "Sprint Planning", type: "task", priority: "medium", date: 20 }
    ]
  };

  const getPriorityColor = (priority: string | undefined) => {
    switch (priority) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const scrollToToday = () => {
    const today = new Date();
    setSelectedDate(today);
  };

  return (
    <div className="min-h-screen px-2 sm:px-4 pb-24 sm:p-6 bg-zinc-900 -mt-2.5 select-none">
      <div className="relative max-w-6xl mx-auto">
        {/* Enhanced glow effects with more subtle animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-purple-500/10 to-pink-500/10 blur-3xl rounded-full animate-pulse duration-[4000ms]" />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 via-yellow-500/5 to-purple-500/5 blur-2xl rounded-full animate-pulse duration-[5000ms]" />
        
        {/* Main container with improved backdrop blur */}
        <div className="relative bg-gray-900/40 backdrop-blur-2xl rounded-2xl p-3 sm:p-6 border border-gray-100/10">
          {/* Enhanced Header with navigation */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => navigateMonth('prev')}
                  className="p-1.5 rounded-lg hover:bg-gray-700/50 transition-colors"
                >
                  <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button className="text-lg sm:text-xl font-semibold text-gray-100 flex items-center gap-2 hover:text-gray-300 transition-colors px-2">
                  {selectedDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                </button>
                <button 
                  onClick={() => navigateMonth('next')}
                  className="p-1.5 rounded-lg hover:bg-gray-700/50 transition-colors"
                >
                  <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <button 
                onClick={scrollToToday}
                className="px-3 py-1.5 text-sm text-gray-100/60 hover:text-gray-100 
                  border border-gray-100/20 rounded-full hover:border-gray-100/40 
                  transition-all hover:scale-105 active:scale-95 hover:bg-gray-700/30"
              >
                Today
              </button>
            </div>
          </div>

          {/* Calendar Grid with improved styling */}
          <div className="grid grid-cols-7 gap-px bg-gray-700/20 rounded-lg overflow-hidden shadow-xl">
            {/* Weekday headers with gradient */}
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="bg-gray-800/70 p-2.5 text-center text-gray-300 text-sm font-medium border-b border-gray-700/50">
                {day}
              </div>
            ))}

            {/* Calendar days with improved styling */}
            {getDaysInMonth().map(({ date, isCurrentMonth }, index) => {
              const day = date.getDate();
              const isToday = date.toDateString() === new Date().toDateString();
              const isSelected = date.toDateString() === selectedDate.toDateString();
              const events = monthEvents[day] || [];
              const isWeekend = date.getDay() === 0 || date.getDay() === 6;

              return (
                <div
                  key={index}
                  onClick={() => setSelectedDate(date)}
                  className={`
                    relative min-h-[120px] p-2 
                    ${isCurrentMonth ? 'bg-gray-800/50' : 'bg-gray-800/30'}
                    ${isSelected ? 'ring-2 ring-purple-500/50' : ''}
                    ${isToday ? 'bg-purple-900/20' : ''}
                    ${isWeekend && isCurrentMonth ? 'bg-gray-800/60' : ''}
                    hover:bg-gray-700/50 transition-all duration-200 cursor-pointer
                    border-b border-r border-gray-700/30
                    group
                  `}
                >
                  <div className={`
                    absolute top-1 right-1
                    text-sm font-medium flex items-center justify-center w-6 h-6 rounded-full
                    ${isCurrentMonth ? 'text-gray-100' : 'text-gray-500'}
                    ${isToday ? 'bg-purple-500 text-gray-100' : ''}
                    ${isSelected && !isToday ? 'bg-gray-700' : ''}
                    group-hover:bg-gray-700/70 transition-colors
                  `}>
                    {day}
                  </div>
                  
                  {/* Events with improved styling */}
                  <div className="space-y-1.5 mt-8">
                    {events.map((event) => (
                      <div
                        key={event.id}
                        className="text-xs p-1.5 rounded-md
                          bg-gray-700/40 border border-gray-600/30
                          hover:bg-gray-700/60 hover:scale-[1.02] 
                          transition-all duration-200 group/event
                          hover:shadow-lg hover:shadow-purple-500/5"
                      >
                        <div className="flex items-center gap-1.5">
                          <div className={`w-1.5 h-1.5 rounded-full ${
                            event.type === 'task' 
                              ? getPriorityColor(event.priority) 
                              : 'bg-blue-500'
                          } group-hover/event:scale-110 transition-transform`} />
                          <span className="truncate text-gray-200 group-hover/event:text-gray-100 transition-colors">
                            {event.title}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Month;
import { useState, useRef } from 'react';
import styled from 'styled-components';

const ScrollContainer = styled.div`
  overflow-x: auto;
  padding-bottom: 1rem;
  user-select: none;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

// Add interface for event type
interface ScheduleEvent {
  id: number;
  title: string;
  type: 'task' | 'reminder';
  priority?: string;
  day: number;
}

function Week() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const scrollRef = useRef<HTMLDivElement>(null);

  // Get the week dates based on selected date
  const getWeekDates = () => {
    const dates = [];
    const currentDate = new Date(selectedDate);
    const firstDayOfWeek = currentDate.getDate() - currentDate.getDay();

    for (let i = 0; i < 7; i++) {
      const date = new Date(currentDate.setDate(firstDayOfWeek + i));
      dates.push(new Date(date));
    }
    return dates;
  };

  const scrollToToday = () => {
    const today = new Date();
    setSelectedDate(today);
    
    const todayElement = scrollRef.current?.querySelector('[data-today="true"]');
    if (todayElement) {
      todayElement.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'nearest',
        inline: 'center' 
      });
    }
  };

  // Mock schedule data
  const weekSchedule: Record<string, ScheduleEvent[]> = {
    "7:00 AM": [
      { id: 1, title: "Morning Workout", type: "task", priority: "medium", day: 0 },
      { id: 2, title: "Breakfast", type: "reminder", day: 2 }
    ],
    "9:00 AM": [
      { id: 3, title: "Team Meeting", type: "task", priority: "high", day: 1 },
      { id: 4, title: "Client Call", type: "reminder", day: 3 },
      { id: 5, title: "Code Review", type: "task", priority: "medium", day: 0 }
    ],
    "11:00 AM": [
      { id: 6, title: "Project Review", type: "task", priority: "medium", day: 2 },
      { id: 7, title: "Design Meeting", type: "task", priority: "high", day: 4 }
    ],
    "1:00 PM": [
      { id: 8, title: "Lunch Break", type: "reminder", day: 0 },
      { id: 9, title: "Team Lunch", type: "reminder", day: 3 }
    ],
    "2:00 PM": [
      { id: 10, title: "Code Review", type: "task", priority: "low", day: 4 },
      { id: 11, title: "Client Meeting", type: "task", priority: "high", day: 1 }
    ],
    "3:30 PM": [
      { id: 12, title: "Coffee Break", type: "reminder", day: 2 },
      { id: 13, title: "Sprint Planning", type: "task", priority: "medium", day: 5 }
    ],
    "4:00 PM": [
      { id: 14, title: "Weekly Report", type: "task", priority: "high", day: 5 },
      { id: 15, title: "Team Sync", type: "task", priority: "low", day: 3 }
    ],
    "5:00 PM": [
      { id: 16, title: "Daily Wrap-up", type: "reminder", day: 1 },
      { id: 17, title: "Gym Session", type: "task", priority: "low", day: 4 }
    ]
  };

  // Update getPriorityColor to handle undefined
  const getPriorityColor = (priority: string | undefined) => {
    switch (priority) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen px-2 sm:px-4 pb-24 sm:p-6 bg-zinc-900 -mt-2.5 select-none">
      <div className="relative max-w-6xl mx-auto">
        {/* Glow effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 via-purple-500/20 to-pink-500/20 blur-3xl rounded-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-yellow-500/10 to-purple-500/10 blur-2xl rounded-full" />
        
        {/* Main container - adjusted padding for small screens */}
        <div className="relative bg-gray-100/10 backdrop-blur-xl rounded-2xl p-3 sm:p-6 border border-gray-100/20">
          {/* Header - made more compact on mobile */}
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <div className="flex items-center gap-2 sm:gap-4">
              <button className="text-lg sm:text-2xl font-semibold text-gray-100 flex items-center gap-2">
                {selectedDate.toLocaleString('default', { 
                  month: 'short',
                  year: window.innerWidth > 640 ? 'numeric' : undefined 
                })}
                <span className="text-sm opacity-60">▼</span>
              </button>
              <button 
                onClick={scrollToToday}
                className="px-2 sm:px-3 py-1 text-xs sm:text-sm text-gray-100/60 hover:text-gray-100 
                  border border-gray-100/20 rounded-full hover:border-gray-100/40 transition-colors"
              >
                Today
              </button>
            </div>
          </div>

          {/* Week Grid - made scrollable */}
          <ScrollContainer ref={scrollRef}>
            <div className="grid grid-cols-7 min-w-[640px] gap-0 divide-x divide-gray-700/30">
              {getWeekDates().map((date, index) => {
                const isToday = date.toDateString() === new Date().toDateString();
                const isSelected = date.toDateString() === selectedDate.toDateString();
                
                return (
                  <div 
                    key={date.toString()}
                    data-today={isToday}
                    className="flex flex-col min-w-[90px] px-2 py-1 border-t border-gray-700/30"
                  >
                    <div 
                      onClick={() => setSelectedDate(date)}
                      className={`
                        flex flex-col items-center p-1 sm:p-2 rounded-xl cursor-pointer
                        ${isSelected ? 'bg-gray-100 text-zinc-900' : 'text-gray-100 hover:bg-gray-100/10'}
                        border border-gray-700/30
                      `}
                    >
                      <span className="text-xs sm:text-sm opacity-60">
                        {date.toLocaleString('default', { 
                          weekday: window.innerWidth > 640 ? 'short' : 'narrow' 
                        })}
                      </span>
                      <span className={`text-sm sm:text-lg font-semibold ${isToday && !isSelected ? 'text-blue-400' : ''}`}>
                        {date.getDate()}
                      </span>
                    </div>

                    {/* Schedule Items - adjusted borders and spacing */}
                    <div className="mt-2 space-y-1.5 sm:space-y-2 px-0.5">
                      {Object.entries(weekSchedule).map(([time, events]) => (
                        events.filter(event => event.day === index).map(event => (
                          <div
                            key={event.id}
                            className="p-1.5 sm:p-2 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 
                              border border-gray-600/50 hover:border-gray-500/50
                              transform hover:-translate-y-0.5 transition-all duration-200
                              shadow-sm hover:shadow-md"
                          >
                            <div className="text-[10px] sm:text-xs text-gray-400">{time}</div>
                            <div className="flex items-center justify-between gap-1">
                              <span className="text-xs sm:text-sm text-gray-200 truncate">
                                {event.title}
                              </span>
                              {event.type === 'task' ? (
                                <span className={`px-1 sm:px-1.5 py-0.5 rounded-full text-[10px] sm:text-xs 
                                  ${getPriorityColor(event.priority)} bg-opacity-20 whitespace-nowrap`}>
                                  {event.priority}
                                </span>
                              ) : (
                                <span className="px-1 sm:px-1.5 py-0.5 rounded-full text-[10px] sm:text-xs 
                                  bg-blue-500/20 text-blue-400 whitespace-nowrap">
                                  reminder
                                </span>
                              )}
                            </div>
                          </div>
                        ))
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollContainer>
        </div>
      </div>
    </div>
  );
}

export default Week;
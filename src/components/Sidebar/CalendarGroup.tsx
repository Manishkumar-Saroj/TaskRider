import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { CalendarDaysIcon, CalendarWeekIcon, CalendarMonthIcon } from './icons';

interface CalendarGroupProps {
  isCurrentPath: (path: string) => boolean;
  handleNavigation: (path: string) => void;
}

function CalendarGroup({ isCurrentPath, handleNavigation }: CalendarGroupProps) {
  const [isOpen, setIsOpen] = useState(false);

  const calendarViews = [
    { 
      title: 'Day View', 
      path: '/day', 
      icon: CalendarDaysIcon
    },
    { 
      title: 'Week View', 
      path: '/week', 
      icon: CalendarWeekIcon
    },
    { 
      title: 'Month View', 
      path: '/month', 
      icon: CalendarMonthIcon
    },
  ];

  return (
    <div className="space-y-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3.5 rounded-xl 
          transition-all duration-300 ease-in-out
          hover:scale-105 hover:-translate-x-1
          border border-gray-100/10
          bg-gray-100/5 hover:bg-gray-100/10 hover:border-gray-100/20
          flex items-center gap-4
          select-none"
      >
        <CalendarDaysIcon 
          size={20} 
          className="text-gray-400" 
          strokeWidth={2}
        />
        <span className="text-sm font-medium text-gray-100">Calendar Views</span>
        <ChevronDown 
          size={16} 
          className={`ml-auto text-gray-400 transition-transform duration-300 
            ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>

      <div className={`space-y-1 pl-2 overflow-hidden transition-all duration-300 
        ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
        {calendarViews.map((item) => (
          <button
            key={item.path}
            onClick={() => handleNavigation(item.path)}
            className={`w-full px-4 py-2.5 rounded-lg
              transition-all duration-300 ease-in-out
              hover:scale-102
              flex items-center gap-3
              select-none
              ${isCurrentPath(item.path)
                ? 'bg-yellow-400/10 text-yellow-400'
                : 'text-gray-400 hover:text-yellow-400 hover:bg-gray-100/5'
              }`}
          >
            <item.icon size={16} />
            <span className="text-sm font-medium">{item.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default CalendarGroup;
import { IconProps } from './icons';
import { ArrowLeft, ChevronDown } from 'lucide-react';

interface SidebarItemProps {
  icon: ({ className, strokeWidth, color, size }: IconProps) => JSX.Element;
  title: string;
  isActive?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  isCollapsible?: boolean;
  isOpen?: boolean;
  onCollapsibleClick?: () => void;
}

function SidebarItem({ 
  icon: Icon, 
  title, 
  isActive = false, 
  onClick, 
  children, 
  isCollapsible = false,
  isOpen = false,
  onCollapsibleClick
}: SidebarItemProps) {
  const handleClick = () => {
    if (isCollapsible) {
      onCollapsibleClick?.();
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <div className="space-y-2">
      <button
        onClick={handleClick}
        className={`w-full group px-4 py-3.5 rounded-xl 
          transition-all duration-300 ease-in-out
          hover:scale-105 hover:-translate-x-1
          border border-gray-100/10
          flex items-center gap-4
          select-none
          ${isActive 
            ? 'bg-gray-100/15 border-gray-100/20' 
            : 'bg-gray-100/5 hover:bg-gray-100/10 hover:border-gray-100/20'
          }`}
      >
        {/* Icon container with glow effect */}
        <div className={`relative group-hover:scale-110 transition-all duration-300
          ${isActive ? 'text-yellow-400' : 'text-gray-400 group-hover:text-yellow-400'}`}>
          <div className={`absolute inset-0 bg-yellow-400/20 blur-xl rounded-full 
            transition-opacity duration-300 
            ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}`} 
          />
          <Icon size={20} strokeWidth={2.5} className="relative z-10" />
        </div>

        {/* Text content */}
        <div className="flex-1 text-left">
          <span className={`block text-sm font-medium transition-colors
            ${isActive
              ? 'text-yellow-400'
              : 'text-gray-100 group-hover:text-yellow-400'
            }`}>
            {title}
          </span>
        </div>

        {/* Indicator icon - either arrow or chevron */}
        {isCollapsible ? (
          <ChevronDown 
            size={16} 
            className={`text-gray-400 transition-transform duration-300 
              ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          />
        ) : (
          <div className={`transition-all duration-300
            ${isActive 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
            }`}>
            <ArrowLeft 
              size={16} 
              className={`transform rotate-180 
                ${isActive ? 'text-yellow-400' : 'text-gray-400 group-hover:text-yellow-400'}`}
            />
          </div>
        )}
      </button>

      {/* Collapsible content */}
      {isCollapsible && (
        <div className={`space-y-1 pl-2 overflow-hidden transition-all duration-300 
          ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          {children}
        </div>
      )}
    </div>
  );
}

export default SidebarItem;
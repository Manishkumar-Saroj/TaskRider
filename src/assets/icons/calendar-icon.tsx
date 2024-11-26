import React from "react";

interface CalendarIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  color?: string;
  size?: string;
}

const CalendarIcon: React.FC<CalendarIconProps> = ({ className = "", color = "currentColor", size = "24", ...props }) => {
  const today = new Date().getDate();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={`fill-none stroke-${color} ${size} ${className}`}
      {...props}
    >
      <path d="M18 2V4M6 2V4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <text
        x="12"
        y="17"
        textAnchor="middle"
        fill={color}
        stroke="none"
        fontSize="8"
        fontWeight="bold"
      >
        {today}
      </text>
      <path d="M2.5 12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.5 5.70728 21.5 7.88594 21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 8H18" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default CalendarIcon;

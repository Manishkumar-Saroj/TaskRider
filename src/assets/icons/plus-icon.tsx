import React from "react";

interface PlusIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  color?: string;
  size?: string;
  strokeWidth?: string;
}

const PlusIcon: React.FC<PlusIconProps> = ({ className = "", color = "currentColor", size = "24", strokeWidth = "1.5", ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`w-${size} h-${size} ${className}`} fill="none" {...props}>
      <path d="M12 4V20" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 12H20" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default PlusIcon;

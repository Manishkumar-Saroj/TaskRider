const CloseIcon = ({ color = 'currentColor', className = '', strokeWidth = 2 }) => (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      className={className}
      stroke={color} 
      strokeWidth={strokeWidth} 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  );
  
  export default CloseIcon;
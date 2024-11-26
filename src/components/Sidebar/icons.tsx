export interface IconProps {
    className?: string;
    strokeWidth?: number;
    color?: string;
    size?: number;
  }
  
  export function HomeIcon({ className, strokeWidth = 1.5, color = "currentColor", size = 24 }: IconProps) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M15.0002 17C14.2007 17.6224 13.1504 18 12.0002 18C10.8499 18 9.79971 17.6224 9.00018 17" />
        <path d="M2.35157 13.2135C1.99855 10.9162 1.82204 9.76763 2.25635 8.74938C2.69065 7.73112 3.65421 7.03443 5.58132 5.64106L7.02117 4.6C9.41847 2.86667 10.6171 2 12.0002 2C13.3832 2 14.5819 2.86667 16.9792 4.6L18.419 5.64106C20.3462 7.03443 21.3097 7.73112 21.744 8.74938C22.1783 9.76763 22.0018 10.9162 21.6488 13.2135L21.3478 15.1724C20.8473 18.4289 20.5971 20.0572 19.4292 21.0286C18.2613 22 16.5538 22 13.139 22H10.8614C7.44652 22 5.73909 22 4.57118 21.0286C3.40327 20.0572 3.15305 18.4289 2.65261 15.1724L2.35157 13.2135Z" />
      </svg>
    );
  }
  
  export function CalendarDaysIcon({ className, strokeWidth = 1.5, color = "currentColor", size = 24 }: IconProps) {
    const today = new Date().getDate();
    
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M18 2V4M6 2V4" />
        <path d="M2.5 12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.5 5.70728 21.5 7.88594 21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432Z" />
        <path d="M6 8H18" />
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
      </svg>
    );
  }
  
  export function ArrowRightIcon({ className, strokeWidth = 2, color = "currentColor", size = 24 }: IconProps) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    );
  }
  
  export function CalendarWeekIcon({ className, strokeWidth = 1.5, color = "currentColor", size = 24 }: IconProps) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M11 13H16M8 13H8.00898M13 17H8M16 17H15.991" />
        <path d="M18 2V4M6 2V4" />
        <path d="M2.5 12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.5 5.70728 21.5 7.88594 21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432Z" />
        <path d="M3 8H21" />
      </svg>
    );
  }
  
  export function CalendarMonthIcon({ className, strokeWidth = 1.5, color = "currentColor", size = 24 }: IconProps) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M18 2V4M6 2V4" />
        <path d="M11.9955 13H12.0045M11.9955 17H12.0045M15.991 13H16M8 13H8.00897M8 17H8.00897" strokeWidth="2" />
        <path d="M3.5 8H20.5" />
        <path d="M2.5 12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.5 5.70728 21.5 7.88594 21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432Z" />
        <path d="M3 8H21" />
      </svg>
    );
  }
  
  export function SettingsIcon({ className, strokeWidth = 1.5, color = "currentColor", size = 24 }: IconProps) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M15.5 12C15.5 13.933 13.933 15.5 12 15.5C10.067 15.5 8.5 13.933 8.5 12C8.5 10.067 10.067 8.5 12 8.5C13.933 8.5 15.5 10.067 15.5 12Z" />
        <path d="M20.7906 9.15201C21.5969 10.5418 22 11.2366 22 12C22 12.7634 21.5969 13.4582 20.7906 14.848L18.8669 18.1638C18.0638 19.548 17.6623 20.2402 17.0019 20.6201C16.3416 21 15.5402 21 13.9373 21L10.0627 21C8.45982 21 7.6584 21 6.99807 20.6201C6.33774 20.2402 5.93619 19.548 5.13311 18.1638L3.20942 14.848C2.40314 13.4582 2 12.7634 2 12C2 11.2366 2.40314 10.5418 3.20942 9.152L5.13311 5.83621C5.93619 4.45196 6.33774 3.75984 6.99807 3.37992C7.6584 3 8.45982 3 10.0627 3L13.9373 3C15.5402 3 16.3416 3 17.0019 3.37992C17.6623 3.75984 18.0638 4.45197 18.8669 5.83622L20.7906 9.15201Z" />
      </svg>
    );
  }

  export function Shield({ className, strokeWidth = 1.5, color = "currentColor", size = 24 }: IconProps) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M4.26759 4.32782C5.95399 3.02741 8.57337 2 12 2C15.4266 2 18.046 3.02741 19.7324 4.32782C19.9693 4.51048 20.0877 4.60181 20.1849 4.76366C20.2665 4.89952 20.3252 5.10558 20.3275 5.26404C20.3302 5.4528 20.2672 5.62069 20.1413 5.95648C19.8305 6.78539 19.6751 7.19984 19.6122 7.61031C19.533 8.12803 19.5322 8.25474 19.6053 8.77338C19.6632 9.18457 19.9795 10.0598 20.6121 11.8103C20.844 12.452 21 13.1792 21 14C21 17 18.5 19.375 16 20C13.8082 20.548 12.6667 21.3333 12 22C11.3333 21.3333 10.1918 20.548 8 20C5.5 19.375 3 17 3 14C3 13.1792 3.15595 12.452 3.38785 11.8103C4.0205 10.0598 4.33682 9.18457 4.39473 8.77338C4.46777 8.25474 4.46702 8.12803 4.38777 7.61031C4.32494 7.19984 4.16952 6.78539 3.85868 5.95648C3.73276 5.62069 3.6698 5.4528 3.67252 5.26404C3.6748 5.10558 3.73351 4.89952 3.81509 4.76366C3.91227 4.60181 4.03071 4.51048 4.26759 4.32782Z" />
        {/* <path d="M12.6911 7.57767L13.395 8.99715C13.491 9.19475 13.7469 9.38428 13.9629 9.42057L15.2388 9.6343C16.0547 9.77141 16.2467 10.3682 15.6587 10.957L14.6668 11.9571C14.4989 12.1265 14.4069 12.4531 14.4589 12.687L14.7428 13.925C14.9668 14.9049 14.4509 15.284 13.591 14.7718L12.3951 14.0581C12.1791 13.929 11.8232 13.929 11.6032 14.0581L10.4073 14.7718C9.5514 15.284 9.03146 14.9009 9.25543 13.925L9.5394 12.687C9.5914 12.4531 9.49941 12.1265 9.33143 11.9571L8.33954 10.957C7.7556 10.3682 7.94358 9.77141 8.75949 9.6343L10.0353 9.42057C10.2473 9.38428 10.5033 9.19475 10.5993 8.99715L11.3032 7.57767C11.6872 6.80744 12.3111 6.80744 12.6911 7.57767Z" /> */}
      </svg>
    );
  }

  export function HelpCircle({ className, strokeWidth = 1.5, color = "currentColor", size = 24 }: IconProps) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    );
  }
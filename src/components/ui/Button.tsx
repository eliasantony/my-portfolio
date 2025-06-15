import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-6 py-3 rounded-lg font-semibold text-white
        bg-accent hover:bg-accent-dark transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-accent-light focus:ring-opacity-50
        shadow-lg hover:shadow-xl transform hover:-translate-y-1
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
import React from 'react';
import { IButton } from '@/interfaces/shared.interface';

const Button: React.FC<IButton> = ({ 
  children, 
  variant = 'primary', 
  className = '',
  onClick 
}) => {
  const baseStyles = "px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300";
  const variants = {
    primary: "bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:scale-105 shadow-lg",
    secondary: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button; 
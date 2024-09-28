import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onclick?: () => void; 
  isDisabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, className, onclick, isDisabled }) => {
  return (
    <button
      disabled={isDisabled}
      className={`py-2 px-5 font-semibold transition-all duration-300 active:opacity-50 active:scale-95 ${className}`}
      onClick={onclick}
    >
      {children}
    </button>
  );
};
export default Button;

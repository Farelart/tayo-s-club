import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 text-sm font-sans tracking-wide transition-all duration-300 ease-out focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-tayo-gold text-tayo-grey hover:bg-tayo-cream hover:text-tayo-grey border border-transparent",
    secondary: "bg-tayo-gold text-tayo-grey hover:bg-tayo-grey hover:text-tayo-cream border border-transparent",
    outline: "bg-transparent text-tayo-grey border border-tayo-grey hover:bg-tayo-grey hover:text-tayo-cream",
    white: "bg-tayo-cream text-tayo-grey hover:bg-tayo-gold hover:text-tayo-grey border border-transparent"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
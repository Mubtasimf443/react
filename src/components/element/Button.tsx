/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import React, { FC, ButtonHTMLAttributes } from 'react';
import { LucideIcon } from 'lucide-react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    icon?: LucideIcon;
    children: React.ReactNode;
}

const Button: FC<Props> = ({ 
    variant = 'primary', 
    size = 'md', 
    className = '',
    icon: Icon,
    children,
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors duration-300";
    
    const variants = {
        primary: "bg-primary-500 text-white hover:bg-primary-600",
        secondary: "bg-gray-700 text-white hover:bg-gray-600",
        outline: "border-2 border-primary-500 text-primary-500 hover:border-primary-600 hover:text-primary-600"
    };
    
    const sizes = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-5 py-2.5 text-base",
        lg: "px-6 py-3 text-lg"
    };

    return (
        <button 
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {Icon && <Icon className="w-5 h-5 mr-2" />}
            {children}
        </button>
    );
};

export default Button;
/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import React, { type FC } from 'react';

interface Props {
    className?: string;
    children: React.ReactNode;
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Container: FC<Props> = ({ 
    className = '', 
    children,
    size = 'lg'
}) => {
    const sizes = {
        sm: 'max-w-3xl',
        md: 'max-w-4xl',
        lg: 'max-w-6xl',
        xl: 'max-w-7xl'
    };

    return (
        <div className={`mx-auto px-4 ${sizes[size]} ${className}`}>
            {children}
        </div>
    );
};

export default Container;
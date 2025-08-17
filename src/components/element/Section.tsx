/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import React, { type FC } from 'react';

interface Props {
    id?: string;
    className?: string;
    children: React.ReactNode;
    backgroundColor?: 'default' | 'dark' | 'light';
}

const Section: FC<Props> = ({ 
    id,
    className = '',
    children,
    backgroundColor = 'default'
}) => {
    const bgColors = {
        default: 'bg-gray-900',
        dark: 'bg-gray-950',
        light: 'bg-gray-800'
    };

    return (
        <section id={id} className={`py-20 ${bgColors[backgroundColor]}`}>
            <div className={`container mx-auto px-4 ${className}`}>
                {children}
            </div>
        </section>
    );
};

export default Section;
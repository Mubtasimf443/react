/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import React, { type FC, Fragment } from 'react';

interface Props {
    className?: string;
    children: React.ReactNode;
    variant?: 'default' | 'lead' | 'small' | 'muted';
    align?: 'left' | 'center' | 'right';
    maxWidth?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
};

const Paragraph: FC<Props> = ({ 
    className='', 
    children = <Fragment />,
    variant = 'default',
    align = 'left',
    maxWidth = 'none'
}) => {
    const variants = {
        default: "text-base text-gray-300",
        lead: "text-lg text-gray-200",
        small: "text-sm text-gray-400",
        muted: "text-base text-gray-500"
    };

    const alignments = {
        left: "text-left",
        center: "text-center",
        right: "text-right"
    };

    const maxWidths = {
        none: "",
        sm: "max-w-2xl",
        md: "max-w-3xl",
        lg: "max-w-4xl",
        xl: "max-w-5xl"
    };

    return (
        <p className={`
            ${variants[variant]}
            ${alignments[align]}
            ${maxWidths[maxWidth]}
            mb-4
            ${maxWidth !== 'none' ? 'mx-auto' : ''}
            ${className}
        `}>
            {children}
        </p>
    )
};

export default Paragraph;
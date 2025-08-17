/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import React, { type FC, Fragment } from 'react';

interface Props {
    className?: string;
    children: React.ReactNode
};

const Heading1: FC<Props> = ({ className='', children = <Fragment /> }) => {
    return (
        <>
            <h1 className={"text-5xl font-bold text-white mb-6 " + className}>{children}</h1>
            <div className="w-24 h-1.5 bg-primary-500 mx-auto mb-6"></div>
        </>
    )
};

export default Heading1;
/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import React, { type FC, Fragment } from 'react';

interface Props {
    className?: string;
    children: React.ReactNode
};

const Heading2: FC<Props> = ({ className='', children = <Fragment /> }) => {
    return (
        <>
            <h1 className={"text-4xl font-bold text-white mb-4 " + className}>{children}</h1>
            <div className="w-20 h-1 bg-primary-500 mx-auto mb-4"></div>
        </>
    )
};

export default Heading2;
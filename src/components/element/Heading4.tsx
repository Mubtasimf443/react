/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import React, { type FC, Fragment } from 'react';

interface Props {
    className?: string;
    children: React.ReactNode
};

const Heading4: FC<Props> = ({ className='', children = <Fragment /> }) => {
    return (
        <Fragment>
            <h4 className={"text-xl font-semibold text-gray-300 mb-4 " + className}>
                {children}
            </h4>
        </Fragment>
    )
};

export default Heading4;
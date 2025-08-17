/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import React, { type FC, Fragment } from 'react';

interface Props {
    className?: string;
    children: React.ReactNode
};

const Heading5: FC<Props> = ({ className='', children = <Fragment /> }) => {
    return (
        <Fragment>
            <h5 className={"text-lg font-medium text-gray-300 mb-3 " + className}>
                {children}
            </h5>
        </Fragment>
    )
};

export default Heading5;
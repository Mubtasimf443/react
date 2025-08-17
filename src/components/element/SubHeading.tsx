/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import React, { type FC, Fragment } from 'react';

interface Props {
 className?: string;
    children: React.ReactNode
};

const SubHeading :FC<Props> = ({ className='', children = <Fragment />}) => {
  return (
    <p className={"text-gray-400 mb-4 max-w-2xl mx-auto "+className}>
        {children}
    </p>
  )
};

export default SubHeading;
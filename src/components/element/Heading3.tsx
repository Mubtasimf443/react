/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import React, { type FC, Fragment } from 'react';

interface Props {
    className?: string;
    children: React.ReactNode
};

const Heading3 :FC<Props> = ({className='', children = <Fragment />}) => {
  return (
    <Fragment>
      <h3 className={"text-2xl font-semibold text-gray-200 mb-8 "+className}>{children}</h3>
    </Fragment>
  )
};

export default Heading3;
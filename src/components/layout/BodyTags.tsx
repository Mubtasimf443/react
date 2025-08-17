/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import React, { FC, Fragment } from 'react';

interface Props {

};

const BodyTags :FC<Props> = ({}) => {
  return (
    <Fragment>
      <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5SP3NKNJ" height="0" width="0" style={{display:'none', visibility :'hidden'}}>
          </iframe>
      </noscript>
    </Fragment>
  )
};

export default BodyTags;
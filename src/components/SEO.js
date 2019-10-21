import React from 'react';
import Helmet from 'react-helmet';

import { seoTypes } from '../util/types';

export default function SEO({ title, meta }) {
  return (
    <Helmet>
      <title>{title}</title>
      {meta && <meta name="description" content={meta} />}
    </Helmet>
  );
}

SEO.propTypes = seoTypes;

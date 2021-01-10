import React, { useRef, useEffect } from 'react';

import { mount } from 'marketing/MarketingApp';

/** generic approach to decouple our services */
export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  });

  return <div ref={ref} />;
};

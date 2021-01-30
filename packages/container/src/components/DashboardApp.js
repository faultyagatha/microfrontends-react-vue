import React, { useRef, useEffect } from 'react';

import { mount } from 'dashboard/DashboardApp';

/** generic approach to decouple our services */
export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};

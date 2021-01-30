import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { mount } from 'auth/AuthApp';

/** generic approach to decouple our services */
export default () => {
  const ref = useRef(null);
  const history = useHistory();

  /** onNavigate: 
   * a cb fired when we navigate 
   * in Marketing component*/
  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      //nextPathname comes from 
      //history.location in Marketing App
      onNavigate: ({ pathname: nextPathname }) => {
        //pathname comes from this App
        const { pathname } = history.location;
        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      }
    });

    //communicate navigation down to Marketing
    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};

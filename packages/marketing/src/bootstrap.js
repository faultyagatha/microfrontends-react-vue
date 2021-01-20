import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory } from 'history';

import App from './App';

// Mount function to start up the app
const mount = (el) => {
  //create a copy of history object that
  //will be used for our Router
  const history = createMemoryHistory();
  ReactDOM.render(<App history={history} />, el);
};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

// If we are running through container
// export the mount function
export { mount };

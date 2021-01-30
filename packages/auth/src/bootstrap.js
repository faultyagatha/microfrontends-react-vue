import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';

import App from './App';

// Mount function to start up the app
const mount = (el, { onSignin, onNavigate, defaultHistory, initialPath }) => {
  //create a copy of history object that
  //will be used for our Router
  //if we're in isolation, use default history
  const history = defaultHistory || createMemoryHistory({
    initialEntries: [initialPath]
  });
  //listen for navigation events
  if (onNavigate) history.listen(onNavigate);
  ReactDOM.render(<App onSignin={onSignin} history={history} />, el);

  //communicate navigation from Container
  //down to Marketing App
  return {
    onParentNavigate({ pathname: nextPathname }) {
      console.log('container just navigated');
      const { pathname } = history.location;
      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    }
  }
};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_auth-dev-root');

  if (devRoot) {
    //provide a browser history to use in isolation
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

// If we are running through container
// export the mount function
export { mount };

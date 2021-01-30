import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import ProgressBar from './components/ProgressBar';
import Header from './components/Header';

/** lazy loading */
const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));
const DashboardLazy = lazy(() => import('./components/DashboardApp'));

/** prevent scc name collision */
const generateClassName = createGenerateClassName({
  productionPrefix: 'co'
});

const history = createBrowserHistory();
export default () => {
  const [isSignedin, setIsSignedin] = useState(false);

  useEffect(() => {
    if (isSignedin) {
      history.push('/dashboard');
    }
  }, [isSignedin]);

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header isSignedin={isSignedin} onSignout={() => setIsSignedin(false)} />
          <Suspense fallback={<ProgressBar />}>
            <Switch>
              <Route path="/auth">
                <AuthLazy onSignin={() => setIsSignedin(true)} />
              </Route>
              <Route path="/dashboard">
                {!isSignedin && <Redirect to="/" />}
                <DashboardLazy />
              </Route>
              <Route path="/" component={MarketingLazy} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  );
};

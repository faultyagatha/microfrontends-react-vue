import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import ProgressBar from './components/ProgressBar';
import Header from './components/Header';

/** lazy loading */
const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));

/** prevent scc name collision */
const generateClassName = createGenerateClassName({
  productionPrefix: 'co'
});

export default () => {
  const [isSignedin, setIsSignedin] = useState(false);
  return (
    <Router>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header isSignedin={isSignedin} onSignout={() => setIsSignedin(false)} />
          <Suspense fallback={<ProgressBar />}>
            <Switch>
              <Route path="/auth">
                <AuthLazy onSignedin={() => setIsSignedin(true)} />
              </Route>
              <Route path="/" component={MarketingLazy} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  );
};

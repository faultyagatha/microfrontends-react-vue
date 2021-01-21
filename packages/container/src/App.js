import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import AuthApp from './components/AuthApp';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';

/** prevent scc name collision */
const generateClassName = createGenerateClassName({
  productionPrefix: 'co'
});

export default () => {
  return (
    <Router>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <Switch>
            <Route path="/auth" component={AuthApp} />
            <Route path="/" component={MarketingApp} />
          </Switch>
        </div>
      </StylesProvider>
    </Router>
  );
};

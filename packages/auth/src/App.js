import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Signup from './components/Signup';
import Signin from './components/Signin';

console.log('running marketing-service');

/** prevent scc name collision */
const generateClassName = createGenerateClassName({
  productionPrefix: 'au'
});

/** use memory history instead of BrowserRouter */
export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path="/auth/signin" component={Signin} />
            <Route path="/auth/signup" component={Signup} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Routes from '../Routes';
import PublicLayout from '../Layout/PublicLayout'
import { createBrowserHistory } from "history";
import { connect } from 'react-redux';

export const history = createBrowserHistory()

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
        {
          Routes.map((route, key) => {
            const { component, path } = route;
            return (
              <Route
                exact
                path={path} 
                key={key}
                render={ 
                  () => 
                    <PublicLayout component={component} />
                } 
              />
            )
          })
        }
        </Switch>
      </Router>
    );
  }
}

export default connect(null, null)(App);
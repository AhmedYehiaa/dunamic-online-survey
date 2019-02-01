import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import LandingPage from './containers/LandingPage';

const App = () => {
  const title = 'Product Survey';
  const subTitle = 'Your feedback is highly appreciated';

  return (
    <div className="container">
      <Header
        title={title}
        subTitle={subTitle}
      />
      <div className="app-wrapper">
        <Switch>
          <Route path="/survey" component={LandingPage} />
          <Redirect from="/" exact to="/survey" />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </div>

  );
};

export default App;

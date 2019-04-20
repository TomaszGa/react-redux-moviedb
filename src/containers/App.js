import React, { Component } from "react";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";

import Header from "../components/Header";
import FeaturedMovie from "../components/FeaturedMovie";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={FeaturedMovie} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);

import React, { Component } from "react";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";

import Header from "../components/Header";
// import FeaturedMovie from "../components/FeaturedMovie";
import SingleMovie from "../components/SingleMovie";
import { Helmet } from "react-helmet";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Helmet>
          <title>TMDB Browser App</title>
        </Helmet>
        <Switch>
          <Route exact path="/" component={SingleMovie} />
          <Route exact path="/s/:movieId" component={SingleMovie} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);

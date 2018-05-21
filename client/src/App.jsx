// Dependencies
// -----------------------------------
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
// -----------------------------------
import { Base, NotFound } from "./components";

// -----------------------------------
// CLASS->APP ------------------------
// -----------------------------------
export default class App extends Component {
  // -----------------------------------
  // RENDER ----------------------------
  // -----------------------------------
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Base} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

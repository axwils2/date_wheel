// Dependencies
// -----------------------------------
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
// -----------------------------------
import { Base, NotFound } from "./components/pages";
import { Nav } from './components/nav';

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
        <div>
          <Nav />
          <Switch>
            <Route path="/" exact component={Base} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

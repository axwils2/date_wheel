// Dependencies
// -----------------------------------
import React, { Component } from 'react';

// -----------------------------------
// CLASS->BASE -----------------------
// -----------------------------------
export default class Base extends Component {
  // Constructor
  // -----------------------------------
  constructor () {
    super()
    this.state = {}
  }

  // ComponentDidMount
  // -----------------------------------
  componentDidMount () {

  }

  // Fetch
  // -----------------------------------
  fetch (endpoint) {
    return window.fetch(endpoint)
      .then(response => response.json())
      .catch(error => console.log(error))
  }

  // -----------------------------------
  // RENDER ----------------------------
  // -----------------------------------
  render () {
    return (
      <div>Test</div>
    );
  }
}

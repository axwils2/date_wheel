// Dependencies
// -----------------------------------
import React, { Component } from 'react';

// Services
// -----------------------------------
import { RestaurantService } from '../../api';

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
    RestaurantService.index(1).then(response => {
      console.log(response);
    });
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

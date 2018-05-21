// Dependencies
// -----------------------------------
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// -----------------------------------
// CLASS->NOT-FOUND ------------------
// -----------------------------------
export default class NotFound extends Component {
  // -----------------------------------
  // RENDER ----------------------------
  // -----------------------------------
  render () {
    return <div style={{ textAlign: 'center '}}>
      <h1>404: Not found</h1>
      <Link to='/'>Back to home</Link>
    </div>
  }
}

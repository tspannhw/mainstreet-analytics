import React, { Component } from 'react';
import SummaryComponent from './summary.component';
import NavBar from './nav-bar.component';

export default class AppComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <header>
          <NavBar />
        </header>
        <div className="main-content">
          <h1>Main Street Analytics</h1>
          <SummaryComponent />
        </div>
      </div>
    );
  }
}

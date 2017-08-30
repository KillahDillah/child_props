import React, { Component } from 'react';
import ParentComponent from './ParentComponent';

class BaseLayout extends Component {
  render() {
    return(
      <div>
        <div className="navbar">
          <nav>Navbar</nav>
        </div>
        <div className="parent">
          <ParentComponent/>
        </div>
        <div className="navbar">
          <footer>I am the Footer</footer>
        </div>
      </div>
    )
  }
}

export default BaseLayout
import React, { Component } from 'react';
import '../styles/App.css';
import BaseLayout from './BaseLayout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BaseLayout/>
      </div>
    );
  }
}

export default App;
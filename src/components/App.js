import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header';
import ParentComponent from './ParentComponent';
import Footer from './Footer';
import BaseLayout from './BaseLayout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BaseLayout></BaseLayout>
        <Header />
        <ParentComponent />
        <Footer />
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import '../App.css';

import Promotional from './Promotional';
import Header from './Header';
import Landing from './Landing';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Promotional />
        <Header />
        <Landing />
        <Footer />
      </div>
    );
  }
}

export default App;
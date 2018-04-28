import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import '../App.css';

import Promotional from './Promotional';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div>
        <Promotional />
        <Header />
        <BrowserRouter>
          <div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
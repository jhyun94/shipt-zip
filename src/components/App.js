import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import '../App.css';

import Promotional from './Promotional';

class App extends Component {
  render() {
    return (
      <div>
        <Promotional />
      <BrowserRouter>
        <div>
        </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
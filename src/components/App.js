import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
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
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Landing} />
          </div>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
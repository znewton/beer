import React, { Component } from 'react';
import './App.css';

import BeerCard from '../BeerCard/BeerCard';
import Nav from '../Nav/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav></Nav>
        <BeerCard></BeerCard>
      </div>
    );
  }
}

export default App;

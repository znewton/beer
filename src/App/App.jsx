import React, { Component } from 'react';
import './App.css';

import BeerCard from '../BeerCard/BeerCard';
import Nav from '../Nav/Nav';
import beers from '../beer.data';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav></Nav>
        <div className="beer-grid">
        {beers.map(beer => <BeerCard
            key={beer.label}
            beer={beer}
          ></BeerCard>)}
        </div>
      </div>
    );
  }
}

export default App;

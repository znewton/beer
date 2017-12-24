import React, { Component } from 'react';
import './App.css';

import BeerCard from '../BeerCard/BeerCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BeerCard></BeerCard>
      </div>
    );
  }
}

export default App;

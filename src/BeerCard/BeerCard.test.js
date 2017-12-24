import React from 'react';
import ReactDOM from 'react-dom';
import BeerCard from './BeerCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BeerCard />, div);
});


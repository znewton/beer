import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BeerCard.css';

import Modal from '../components/Modal/Modal';

class BeerCard extends Component {
  render() {
    const beer = this.props.beer;
    return (
      <div className="beer-card">
        <div className="beer-img">
          <img src={beer.img} alt={beer.label + 'logo'} />
        </div>
        <div className="beer-label">
          {beer.label}
        </div>
        <div className="beer-style">
          {beer.style}
        </div>
        <div className="beer-more-info">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Modal>
        </Modal>
      </div>
    );
  }
}

BeerCard.propTypes = {
  beer: PropTypes.shape({
    label: PropTypes.string,
    style: PropTypes.string,
    description: PropTypes.string,
    site: PropTypes.string,
    img: PropTypes.string,
    stats: PropTypes.shape({
      abv: PropTypes.number,
      ibu: PropTypes.number,
      srm: PropTypes.number,
      brix: PropTypes.number
    })
  })
};

export default BeerCard;


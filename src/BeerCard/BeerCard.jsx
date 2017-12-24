import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BeerCard.css';

import Modal from '../components/Modal/Modal';
import Events from '../lib/Events/Events';

class BeerCard extends Component {
  constructor() {
    super();
    this.state = {
      modalOpen: false
    };
  }
  
  render() {
    const beer = this.props.beer;
    const id = beer.label.replace(/[\s()]/g, '-');
    return (
      <div 
        className={"beer-card" + (this.props.inStock ? '' : ' out-of-stock')} 
        id={id}
        onClick={(e) => this.openModal(e)}
      >
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
          {/*<span></span>
          <span></span>
          <span></span>*/}
          More Info
        </div>
        <Modal
          header={beer.label + ' Info'}
          footer={(this.footer.bind(this))()}
          bindTo={id}
          open={this.state.modalOpen}
          handleClose={(e) => this.closeModal(e)}
        >
        <p><span>Style:</span> {beer.style}</p>
        <p><span>Description:</span> {beer.description}</p>
        <p><span>Website:</span> <a href={beer.site}>
          {beer.site.replace(/(https?:\/\/)?(www\.)?/,'')}
        </a></p>
        {Object.keys(beer.stats).map((stat) => beer.stats[stat] != null ? (
          <p key={stat}><span>{stat.toUpperCase()}:</span> {beer.stats[stat]}</p>
        ) : null)}
        </Modal>
      </div>
    );
  }
  openModal(e) {
    e.stopPropagation();
    this.setState({modalOpen: true});
    Events.addOneTimeEvent(window, 
      'click', 
      (e) => this.closeModal(e), 
      this.props.beer.label+'ModalToggle');
  }
  closeModal(e) {
    if (e) e.stopPropagation();
    this.setState({modalOpen: false});
    Events.removeOneTimeEvent(this.props.beer.label+'ModalToggle');
  }
  footer() {
    return (<div 
      className="beer-info-footer"
      onClick={(e) => this.closeModal(e)}>
      &times; Close
    </div>);
  }
}

BeerCard.propTypes = {
  beer: PropTypes.shape({
    label: PropTypes.string,
    style: PropTypes.string,
    description: PropTypes.string,
    site: PropTypes.string,
    img: PropTypes.string,
    stats: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
  }),
  inStock: PropTypes.bool
};

BeerCard.defaultProps = {
  inStock: true
};

export default BeerCard;


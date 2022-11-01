import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo } = this.props;
    return (
      <div className="card">
        <h3 data-testid="name-card">{ cardName }</h3>

        <img src={ cardImage } alt={ cardName } data-testid="image-card" />

        <h3 data-testid="description-card">{ cardDescription }</h3>

        <h3 data-testid="attr1-card">{ cardAttr1 }</h3>

        <h3 data-testid="attr2-card">{ cardAttr2 }</h3>

        <h3 data-testid="attr3-card">{ cardAttr3 }</h3>

        <h3 data-testid="rare-card">{ cardRare }</h3>

        { cardTrunfo ? <h3 data-testid="trunfo-card">Super Trunfo</h3> : null }
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.number,
  cardAttr2: PropTypes.number,
  cardAttr3: PropTypes.number,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
};

Card.defaultProps = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.number,
  cardAttr2: PropTypes.number,
  cardAttr3: PropTypes.number,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.string,
};

export default Card;

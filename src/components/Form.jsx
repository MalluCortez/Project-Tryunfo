import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Form extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick } = this.props;

    return (
      <div>
        <h3 data-testid="name-input">
          Nome
          <br />
          <input
            type="text"
            value={ cardName }
            onChange={ onInputChange }
          />
        </h3>

        <h3 data-testid="description-input">
          Descrição
          <br />
          <textarea
            cols="30"
            rows="10"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </h3>

        <h3 data-testid="attr1-input">
          Attr1
          <input
            type="number"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </h3>

        <h3 data-testid="attr2-input">
          Attr2
          <input
            type="number"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </h3>

        <h3 data-testid="attr3-input">
          Attr3
          <input
            type="number"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </h3>

        <h3 data-testid="image-input">
          Imagem
          <input
            type="text"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </h3>

        <h3 data-testid="rare-input">
          Raridade
          <br />
          <select value={ cardRare } onChange={ onInputChange }>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </h3>

        <h4 data-testid="trunfo-input">
          <input
            type="checkbox"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
          Super Trybe Trunfo
        </h4>

        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
};

Form.defaultProps = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
};

export default Form;

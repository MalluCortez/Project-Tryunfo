import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick } = this.props;

    return (
      <div>
        <form>
          <label htmlFor="name-input">
            Nome
            <input
              type="text"
              id="name-input"
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
              name="cardName"
            />
          </label>
          <label htmlFor="description-input">
            Descrição
            <textarea
              data-testid="description-input"
              id="description-input"
              cols="30"
              rows="10"
              value={ cardDescription }
              onChange={ onInputChange }
              name="cardDescription"
            >
              Descreva seu pokemon
            </textarea>
          </label>
          <label htmlFor="attr1-input">
            Attr1
            <input
              type="number"
              id="attr1-input"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
              name="cardAttr1"
            />
          </label>
          <label htmlFor="attr2-input">
            Attr2
            <input
              type="number"
              id="attr2-input"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
              name="cardAttr2"
            />
          </label>
          <label htmlFor="attr3-input">
            Attr3
            <input
              type="number"
              id="attr3-input"
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
              name="cardAttr3"
            />
          </label>
          <label htmlFor="image-input">
            Imagem
            <input
              type="text"
              id="image-input"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
              name="cardImage"
            />
          </label>
          <label htmlFor="rare-input">
            Raridade
            <select
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
              id="rare-input"
              name="cardRare"
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <label htmlFor="trunfo-input">
            Super Trybe Trunfo
            {
              (hasTrunfo) ? <p>Você já tem um Super Trunfo em seu baralho</p>
                : (
                  <input
                    type="checkbox"
                    data-testid="trunfo-input"
                    id="trunfo-input"
                    checked={ cardTrunfo }
                    onChange={ onInputChange }
                    name="cardTrunfo"
                  />
                )
            }
          </label>
          <button
            type="submit"
            data-testid="save-button"
            id="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.number,
  cardAttr2: PropTypes.number,
  cardAttr3: PropTypes.number,
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
  cardAttr1: PropTypes.number,
  cardAttr2: PropTypes.number,
  cardAttr3: PropTypes.number,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
};

export default Form;

/* if ({ hasTrunfo } === true ){
  return <p>Você já tem um Super Trunfo em seu baralho</p>
} return */

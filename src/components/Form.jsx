import React, { Component } from 'react';

export class Form extends Component {
  render() {
    return (
      <div>
        <label htmlFor="name-input">
          <input type="text" id="name-input" data-testid="name-input" />
        </label>
        <label htmlFor="description-input">
          <textarea data-testid="description-input" cols="30" rows="10">Oi</textarea>
        </label>
        <label htmlFor="attr1-input">
          <input type="number" id="attr1-input" data-testid="attr1-input" />
        </label>
        <label htmlFor="attr2-input">
          <input type="number" id="attr2-input" data-testid="attr2-input" />
        </label>
        <label htmlFor="attr3-input">
          <input type="number" id="attr3-input" data-testid="attr3-input" />
        </label>
        <label htmlFor="image-input">
          <input type="text" id="image-input" data-testid="image-input" />
        </label>
        <label htmlFor="rare-input">
          <select data-testid="rare-input" id="rare-input">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-input">
          <input type="checkbox" data-testid="trunfo-input" id="trunfo-input" />
        </label>
        <button type="submit" data-testid="save-button" id="save-button">Salvar</button>
      </div>
    );
  }
}

export default Form;

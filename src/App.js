import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardImage: '',
    cardRare: '',
    cardTrunfo: '',
    hasTrunfo: false,
    isSaveButtonDisabled: true,
  };

  verificationText = () => {
    const { cardName, cardDescription, cardImage, cardRare } = this.state;
    const isValidText = cardName.length === 0 || cardDescription.length === 0
    || cardImage.length === 0 || cardRare.length === 0;
    return isValidText;
  };

  verificationNumber = () => {
    let { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    cardAttr1 = Number(cardAttr1);
    cardAttr2 = Number(cardAttr2);
    cardAttr3 = Number(cardAttr3);
    console.log(typeof cardAttr1);
    const cardAttrValue = 90;
    const sumAttr = 210;
    const isValidNumber = cardAttr1 >= cardAttrValue || cardAttr2 >= cardAttrValue
    || cardAttr3 >= cardAttrValue
    || (cardAttr1 + cardAttr2 + cardAttr3) >= sumAttr;
    const noNegativeNumbers = cardAttr1 < 0
    || cardAttr2 < 0 || cardAttr3 < 0;

    return isValidNumber || noNegativeNumbers;
  };

  allVerication = () => {
    if (this.verificationText() || this.verificationNumber()) {
      this.setState({
        isSaveButtonDisabled: true,
      });
      return;
    }
    this.setState({
      isSaveButtonDisabled: false,
    });
  };

  onInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    }, () => {
      this.allVerication();
    });
  };

  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick } = this.state;
    return (
      <div>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ cardName }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;

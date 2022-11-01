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
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    cardList: [],
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
    const cardAttrValue = 90;
    const sumAttr = 210;
    const isValidNumber = cardAttr1 > cardAttrValue || cardAttr2 > cardAttrValue
    || cardAttr3 > cardAttrValue || (cardAttr1 + cardAttr2 + cardAttr3) > sumAttr;
    const noNegativeNumbers = cardAttr1 < 1
    || cardAttr2 < 1 || cardAttr3 < 1;

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

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo } = this.state;

    const cardInfos = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    this.setState((prevState) => ({
      cardList: [...prevState.cardList, cardInfos],
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: cardInfos.cardTrunfo,
    }));
  };

  onInputChange = (event) => {
    const { name, type, checked } = event.target;
    const value = type === 'checkbox' ? checked : event.target.value;
    this.setState({
      [name]: value,
    }, () => {
      this.allVerication();
    });
  };

  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, hasTrunfo, isSaveButtonDisabled, cardList,
      /* onInputChange, onSaveButtonClick */ } = this.state;
    return (
      <div>
        <h2>ADICIONE NOVA CARTA</h2>
        <header>
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
              onSaveButtonClick={ this.onSaveButtonClick }
            />
          </div>
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
        </header>
        <h2>TODAS AS CARTAS</h2>
        <section>
          { cardList.map((card) => (
            <Card
              key={ card.cardName }
              cardName={ card.cardName }
              cardDescription={ card.cardDescription }
              cardAttr1={ card.cardAttr1 }
              cardAttr2={ card.cardAttr2 }
              cardAttr3={ card.cardAttr3 }
              cardImage={ card.cardImage }
              cardRare={ card.cardRare }
              cardTrunfo={ card.cardTrunfo }
            />
          ))}
        </section>
      </div>
    );
  }
}

export default App;

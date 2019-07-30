import React, { Component } from 'react';
import './App.css';
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";

class App extends Component {
  state = {
    text: ""
  };

  onInputChangeHandler = (event) => {
    const text = event.target.value;
    this.setState({text: text})
  };

  removeCharacterHandler = (index) => {
      const text = this.state.text.split('');
      text.splice(index, 1);
      const newText = text.join('');
      this.setState({text: newText});
  };

  render() {
    const characters = this.state.text.split('');
    const characterComponents = characters.map((character, index) => {
        return (
            <CharComponent key={index} click={() => this.removeCharacterHandler(index)} character={character}/>
        );
    });

    return (
      <div className="App">
        <input type="text" onChange={this.onInputChangeHandler} value={this.state.text}/>
        <p>{this.state.text.length}</p>
        <ValidationComponent textLength={this.state.text.length}/>
        {characterComponents}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import ValidationComponent from "./ValidationComponent/ValidationComponent";

class App extends Component {
  state = {
    wordCount: 0
  };

  onInputChangeHandler = (event) => {
    const text = event.target.value;
    this.setState({wordCount: text.length})
  };

  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.onInputChangeHandler}/>
        <p>{this.state.wordCount}</p>
        <ValidationComponent textLength={this.state.wordCount}/>
        <ol>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      </div>
    );
  }
}

export default App;

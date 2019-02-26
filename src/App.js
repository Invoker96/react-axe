import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentWillMount() {
    console.log("Component Will Mounting");
  }

  componentDidMount() {
    console.log("Component Mounting");
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <form target="_blank" className="form-layout"> 
        <fieldset>
          <legend>React X</legend>
          <label className="layout" htmlFor="select">Choose Any:</label>
          <select>
            <option label="Select 1">Select 1</option>
            <option label="Select 2">Select 2</option>
            <option label="Select 3">Select 3</option>
            <option label="Select 4">Select 4</option>
          </select><br></br>
          <p>
            <input type="radio" name="button" id="radio_1" value="A"/>
            <label htmlFor="radio_1">A</label>
          </p>
          <p>
            <input type="radio" name="button" id="radio_2" value="B"/>
            <label htmlFor="radio_2">B</label>
          </p>
          <label htmlFor="name">Name:</label> <input type="text" id="name" name="user_name" placeholder="User Name"></input>
          <input type="submit" value="Submit"/>
          </fieldset>
        </form>
        </header>
      </div>
    );
  }
}

export default App;

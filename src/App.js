import React, { Component } from 'react';
import './App.css';
import Quiz from './components/Quiz.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Awesome Learning - SOLID Principles, Part 1</h2>
        </div>
        <Quiz />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import baseHoc from './hoc/BaseComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React Frontend App Framework</h2>
        </div>
      </div>
    );
  }
}

export default baseHoc(App);

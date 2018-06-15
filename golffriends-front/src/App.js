import React, { Component } from 'react';
import './App.css';
import UserList from './UserList';
import BUserList from './BUserList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">GOLF FRIENDS</h1>
        </header>
        <BUserList />
      </div>
    );
  }
}

export default App;

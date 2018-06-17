import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { getUsers } from './users/actions'

// ReactDOM.render(<App />, document.getElementById('root'));


document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById("root");
  window.getUsers = getUsers();
  ReactDOM.render(<App />, rootEl);
});

registerServiceWorker();

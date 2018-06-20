import React, { Component } from 'react';
import './App.css';
import UserList from './users/BUserList';
import CourseList from './courses/CourseList';
import { Provider } from 'react-redux';
import rootReducer from './rootReducer';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';

const middleWare = [logger, thunk];

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(...middleWare)),
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">GOLF FRIENDS</h1>
          </header>
          <Router>
            <Switch>
              <Route exact path='/' component={UserList} />
              <Route path='/courses' component={CourseList} />
            </Switch>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;

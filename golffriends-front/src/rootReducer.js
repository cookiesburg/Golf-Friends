import { combineReducers } from 'redux';

import users from './users/reducer';
import courses from './courses/reducer';

const rootReducer = combineReducers({
  users,
  courses,
});

export default rootReducer;

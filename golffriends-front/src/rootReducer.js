import { combineReducers } from 'redux';

import users from './users/reducer';
import courses from './courses/reducer';
import scores from './scores/reducer';

const rootReducer = combineReducers({
  users,
  courses,
  scores,
});

export default rootReducer;

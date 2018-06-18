import { GET_USERS, ADD_USER } from './actions';

const initialState = {
  users: [],
  usersLoaded: false,

};

export default function (state = initialState, action) {
  const type = action.type;
  const data = action.data;
  switch (type) {
    case GET_USERS:
      return {
        ...state,
        users: data,
        usersLoaded: true,
      };
    case ADD_USER:
      return {
        ...state,
        users: [data, ...state.users],
      };
    default:
      return state;
  }
}

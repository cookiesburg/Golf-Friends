import { GET_USERS,
         // GET_USER,
         ADD_USER, DELETE_USER, EDIT_USER,  } from './actions';

const initialState = {
  users: [],
  usersLoaded: false,
  user: {},
  userLoaded: false,
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
    // case GET_USER:
    //   return {
    //     ...state,
    //     user: data,
    //     userLoaded: true,
    //   };
    case ADD_USER:
      return {
        ...state,
        users: [data, ...state.users],
      };
    case DELETE_USER:
      const users = state.users.filter(e => e.id !== data);
      return {
        ...state,
        users: users,
      };
    case EDIT_USER:
      const userList = state.users.filter(e => e.id !== data.id);
      return {
        ...state,
        users: [data, ...userList]
      };
    default:
      return state;
  }
}

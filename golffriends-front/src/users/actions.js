export const GET_USERS = 'GET_USERS';

export function getUsers() {
  return async function (dispatch) {
    const res = await fetch('http://localhost:3001/api/v1/users');
    const users = await res.json();
    return dispatch({
      type: 'GET_USERS',
      data: users,
    });
  };
}

// export const getUsers = () => async dispatch => {
//   const res = await axios.get('http://localhost:3001/api/v1/users')
//   dispatch({ type: GET_USERS, data: res.data });
// };

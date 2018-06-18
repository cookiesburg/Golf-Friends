export const GET_USERS = 'GET_USERS';
export const ADD_USER = 'ADD_USER';

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

export function addUser(name) {
  return async function (dispatch) {
     const res = await fetch('http://localhost:3001/api/v1/users', {
       method: 'POST',
       headers: {'Content-Type': 'application/json'},
       body: JSON.stringify({'user': {'name': name}}),
     });
     const user = await res.json();
     console.log(user);
     return dispatch({
       type: 'ADD_USER',
       data: user,
     });
   };
 }

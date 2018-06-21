export const GET_USERS = 'GET_USERS';
// export const GET_USER = 'GET_USER';
export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';
export const EDIT_USER = 'EDIT_USER';
// export const SELECT_USER = 'SELECT_USER';

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

// export function getUser(id) {
//   return async function (dispatch) {
//     const res = await fetch(`http://localhost:3001/api/v1/users/${id}`);
//     const user = await res.json();
//     return dispatch({
//       type: 'GET_USER',
//       data: user,
//     });
//   };
// }

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

export function deleteUser(user) {
  return async function (dispatch) {
     const res = await fetch(`http://localhost:3001/api/v1/users/${user}`, {
       method: 'DELETE',
     });
     console.log(user);
     return dispatch({
       type: 'DELETE_USER',
       data: user,
     });
   };
 }

export function editUser(id, name) {
  console.log('in action',id, name);
  return async function (dispatch) {
     const res = await fetch(`http://localhost:3001/api/v1/users/${id}`, {
       method: 'PUT',
       headers: {'Content-Type': 'application/json'},
       body: JSON.stringify({'user': {
         'id': id,
         'name': name,
         }}),
     });
     const user = await res.json();
     console.log(user);
     return dispatch({
       type: 'EDIT_USER',
       data: user,
     });
   };
 }

 // export function selectUser(id) {
 //   return async function (dispatch) {
 //     const res = await fetch(`http://localhost:3001/api/v1/users/${id}`);
 //     const selectedUser = await res.json();
 //     return dispatch({
 //       type: 'SELECT_USER',
 //       data: selectedUser,
 //     });
 //   };
 // }

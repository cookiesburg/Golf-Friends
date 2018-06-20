export const GET_COURSES = 'GET_COURSES';

export function getCourses() {
  return async function (dispatch) {
    const res = await fetch(`http://localhost:3001/api/v1/courses`);
    const courses = await res.json();
    return dispatch({
      type: 'GET_COURSES',
      data: courses,
    });
  };
}

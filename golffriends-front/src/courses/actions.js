export const GET_COURSES = 'GET_COURSES';
export const ADD_COURSE = 'ADD_COURSE';

export function getCourses() {
  return async function (dispatch) {
    const res = await fetch(`http://localhost:3001/api/v1/courses`);
    const courses = await res.json();
    console.log(courses);
    return dispatch({
      type: 'GET_COURSES',
      data: courses,
    });
  };
}

export function addCourse(name, rating, slope) {
  return async function (dispatch) {
    const res = await fetch('http://localhost:3001/api/v1/courses', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({'course': {'name': name, 'rating': rating, 'slope': slope}}),
    });
    const course = await res.json();
    return dispatch({
      type: 'ADD_COURSE',
      data: course,
    });
  };
}

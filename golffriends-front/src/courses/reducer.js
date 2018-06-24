import { GET_COURSES, ADD_COURSE, EDIT_COURSE, DELETE_COURSE, } from './actions';

const initialState = {
  courses: [],
  coursesLoaded: false,
};

export default function (state = initialState, action) {
  const type = action.type;
  const data = action.data;
  switch (type) {
    case GET_COURSES:
      return {
        ...state,
        courses: data,
        coursesLoaded: true,
      };
    case ADD_COURSE:
      return {
        ...state,
        courses: [data, ...state.courses]
      };
    case EDIT_COURSE:
      const courseList = state.courses.filter(e => e.id !== data.id);
      return {
        ...state,
        courses: [data, ...courseList]
      };
    default:
      return state;
  }
}

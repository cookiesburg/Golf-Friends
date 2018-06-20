import { GET_COURSES, ADD_COURSE } from './actions';

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
    default:
      return state;
  }
}

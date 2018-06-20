import { GET_COURSES, } from './actions';

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
    default:
      return state;
  }
}

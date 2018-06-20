import { GET_SCORES, } from './actions';

const initialState = {
  scores: [],
  coursesLoaded: false,
  handicap: 'n/a',
};

export default function (state = initialState, action) {
  const type = action.type;
  const data = action.data;
  switch (type) {
    case GET_SCORES:
      return {
        ...state,
        scores: data.scores,
        scoresLoaded: true,
        handicap: data.handicap,
      };
    // case ADD_COURSE:
    //   return {
    //     ...state,
    //     courses: [data, ...state.courses]
    //   };
    default:
      return state;
  }
}

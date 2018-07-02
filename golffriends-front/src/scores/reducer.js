import { GET_SCORES, POST_SCORE } from './actions';

const initialState = {
  scores: [],
  scoresLoaded: false,
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
    case POST_SCORE:
      return {
        ...state,
        scores: [data, ...state.scores]
      };
    default:
      return state;
  }
}

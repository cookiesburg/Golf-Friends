export const GET_SCORES = 'GET_SCORES';
export const POST_SCORE = 'POST_SCORE';


export function getScores(user) {
  return async function (dispatch) {
    const res = await fetch('http://localhost:3001/api/v1/scores');
    const scores = await res.json();
    const userScores = scores.filter(score => score.user_id === user.id);
    const handicap = calculateHandicap(userScores);
    return dispatch({
      type: 'GET_SCORES',
      data: { scores: userScores, handicap: handicap }
    });
  };
}
export function postScore(courseId, strokes, id, nine) {
  return async function (dispatch) {
    const res = await fetch('http://localhost:3001/api/v1/scores', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({'score': {'strokes': strokes, 'user_id': id, 'course_id': courseId, 'nine?': nine}}),
    });
    const score = await res.json();
    return dispatch({
      type: 'POST_SCORE',
      data: score,
    });
  };
}

function calculateHandicap(scores) {
  if(scores.length < 5) {
    return '5 SCORES REQUIRED';
  };

  const diffs = scores.map(score => {
    if (score.isNine === true) {
      return (score.strokes*2 - score.course.rating)*113 / score.course.slope ;
    } else {
      return (score.strokes - score.course.rating)*113 / score.course.slope ;
    }
  });
  const sorted = diffs.sort((a, b) => a>b ? 1 : -1 );

  if (sorted.length < 11) {
    return Math.round(sorted[0]*.96);
  } else if (sorted.length < 20)  {
    const lowest = sorted.slice(0, 2);
    const lowestSum = lowest.reduce((a, b) => a+=b);
    return Math.round((lowestSum / 3)*.96)
  } else {
    const lowest = sorted.slice(0, 9);
    const lowestSum = lowest.reduce((a, b) => a+=b);
    return Math.round((lowestSum / 10)*.96)
  }
}

import sortAndSlice from './sort-and-slice';

async function getScore() {
  const request = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/XIBOF92ECMhzw2Fzxen5/scores/', {})
  .then(res => res.json())
  .then(res =>  sortAndSlice(res.result));
  return request;
}

export default getScore;
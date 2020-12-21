import axios from 'axios';
import sortAndSlice from './sort-and-slice';

async function getScore() {
  const request = await axios.get('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/XIBOF92ECMhzw2Fzxen5/scores/', {})
    .then(res => res.data.result)
    .then(res => sortAndSlice(res));
  return request;
}

export default getScore;
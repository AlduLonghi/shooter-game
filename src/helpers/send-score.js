import axios from 'axios';

async function sendScore(name, score) {
  const result = await axios.post('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/XIBOF92ECMhzw2Fzxen5/scores/', { user: name, score })
    .then(res => res.data)
    .catch(err => err.response.data);
  return result;
}

export default sendScore;
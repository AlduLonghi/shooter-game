 async function sendScore(name, score) {
    const sendScore = {
      user: name,
      score,
    };
    const result = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/XIBOF92ECMhzw2Fzxen5/scores/', {
      method: 'POST',
      body: JSON.stringify(sendScore),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(res => res.data)
    .catch(err => err.response.data);
    return result;
  }

export default sendScore;
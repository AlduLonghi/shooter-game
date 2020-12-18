const sendScore = (name, score, scene) => {
  const sendScore = {
    user: name,
    score,
  };

  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/nFeS9gyeO4tJflNcgAJU/scores/', {
    method: 'POST',
    body: JSON.stringify(sendScore),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(() => scene.scene.start('PlayerName'));
};

export default sendScore;
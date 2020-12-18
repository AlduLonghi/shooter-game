const getScore = () => {
    fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/nFeS9gyeO4tJflNcgAJU/scores/', {
    }).then(res => res.json())
    .then(res => res.result.sort((a, b) => b.score - a.score))
    .then(res => console.log(res))
  .catch(error => console.error('Error:', error))
}

export default getScore;
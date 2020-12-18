async function getScore() {
  const request = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/nFeS9gyeO4tJflNcgAJU/scores/', {});
  const fetchResult = await request.json();
  const result = fetchResult.result.sort((a, b) => b.score - a.score).splice(0, 5);
  return result;
}

export default getScore;
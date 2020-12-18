const sendScore = (name, score, scene) => {
    console.log(scene);
    const sendScore = { 
        user: name,
        score: score
    };

    fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/nFeS9gyeO4tJflNcgAJU/scores/', {
        method: 'POST',
        body: JSON.stringify(sendScore),
        headers:{
        'Content-Type': 'application/json'
        }
    }).then(res => {console.log(res);
        scene.scene.start('PlayerName')})
    .catch(error => console.error('Error:', error));
}

export default sendScore;
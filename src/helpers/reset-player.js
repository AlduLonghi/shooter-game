import playerData from '../constants/player-data';

const resetPlayer = () => {
    playerData.name = null;
    playerData.score = 0;
}

export default resetPlayer;
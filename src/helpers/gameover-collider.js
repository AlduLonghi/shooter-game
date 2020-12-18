import playerData from '../constants/player-data';

function gameOverCollider() {
  this.game.sound.stopAll();
  playerData.score = this.score;
  this.scene.start('GameOver');
}

export default gameOverCollider;
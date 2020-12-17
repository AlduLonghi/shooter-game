function playerLaserCollider(playerLaser, enemy) {
  this.explosion.play();
  playerLaser.destroy();
  if (enemy.type === 'Gunship') {
    enemy.shootTimer.remove(false);
  }
  enemy.destroy();
  this.score += 30;
  this.scoreText.setText(`Score: ${this.score}`);
}

export default playerLaserCollider;
function playerLaserCollider(playerLaser, enemy){
    console.log(this);
    playerLaser.destroy();
      if (enemy.type == 'Gunship') {
        enemy.shootTimer.remove(false);
      }
      enemy.destroy();
      this.scene.score += 30,
      this.scoreText.setText(this.scene.score);
    }

export default playerLaserCollider;
function gameOverCollider() {
    this.game.sound.stopAll();
    this.scene.start('GameOver');
}

export default gameOverCollider;
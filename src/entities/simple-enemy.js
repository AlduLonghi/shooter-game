import Phaser from 'phaser';

class SimpleEnemy extends Phaser.Physics.Arcade.Sprite {
  constructor(scene) {
    const coordX = Math.random() * 900;
    super(scene, coordX, 10, 'enemy1');
    this.scene.add.existing(this);
    this.setScale(0.13);
    this.type = 'SimpleEnemy';
  }
}

export default SimpleEnemy;
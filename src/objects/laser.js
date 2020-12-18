import Phaser from 'phaser';

class Laser extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, imgKey) {
    super(scene, x, y, imgKey);
    this.scene = scene;
    this.scene.add.existing(this);
  }
}

export default Laser;
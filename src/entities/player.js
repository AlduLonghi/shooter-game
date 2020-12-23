import Phaser from 'phaser';

class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, imgKey) {
    super(scene, x, y, imgKey);
    this.scene = scene;
    this.scene.add.existing(this);
    this.scene.physics.world.enableBody(this);
    this.setCollideWorldBounds(true);
    this.body.setAllowGravity(false);
    this.setScale(0.17);
  }
}

export default Player;
class Laser extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, imgKey) {
      super(scene, x, y, imgKey);
      this.scene = scene;
      this.scene.add.existing(this);
    }
  }

export default Laser;
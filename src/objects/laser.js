class Laser extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, imgKey) {
      super(scene, x, y, imgKey);
      this.scene = scene;
      this.scene.add.existing(this);
      this.scene.physics.world.enableBody(this, 0);
      this.setData("isDead", false);
    }
  }

export default Laser;
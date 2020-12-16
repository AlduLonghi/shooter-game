class Laser extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y);
    }

    fire(x, y) {
      this.body.reset(x, y);

      this.setActive(true);
      this.setVisible(true);

      this.setVelocityY(-1500);
    }

    preUpdate(time, delta) {
        super.preUpdate(time, delta);
        
        if (this.y <= 0) {
        this.setActive(false);
        this.setVisible(false);
        }
    }

}

export default Laser;
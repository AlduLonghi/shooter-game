import Laser from './laser';

class LaserGroup extends Phaser.Physics.Arcade.Group {
    constructor(scene) {
        super(scene.physics.world, scene);

        this.lasers = this.createMultiple({
          classType: Laser,
          frameQuantity: 30,
          active: false,
          visible: false,
          key: "laser",
        })
    }

    fireLaser(x ,y) {
        const laser = this.getFirstDead(false);
        if (laser) {
            laser.fire(x, y);
        }
    } 

    
}

export default LaserGroup;
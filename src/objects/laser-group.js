import Laser from './laser';

class LaserGroup extends Phaser.Physics.Arcade.Group {
    constructor(scene, imgKey) {
        super(scene.physics.world, scene);

        this.lasers = this.createMultiple({
          classType: Laser,
          frameQuantity: 1,
          active: false,
          visible: false,
          key: "laser",
        })
        this.lasers.forEach(laser => laser.setTexture(imgKey));
    }

    fireLaser(x ,y) {
        const laser = this.getFirstDead(false);
        if (laser) {
            laser.fire(x, y);
        }
    } 

    
}

export default LaserGroup;
class LaserGroup extends Phaser.Physics.Arcade.Sprite {
    constructor(scene) {
        super(scene.physics.world, scene);

        this.createMultiple({
          classType: Laser,
        })
    }

    
}
class SimpleEnemy extends Phaser.Physics.Arcade.Sprite {
    constructor(scene) {
        const coordX = Math.random() * 900;
        super(scene, coordX , 10, 'enemy1');
        this.scene.add.existing(this);
        scene.physics.world.enableBody(this, 0);
        this.setScale(0.13);
    }
}

export default SimpleEnemy; 
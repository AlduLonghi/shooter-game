class SimpleEnemy extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, imgKey) {
        const coordX = Math.random() * 900;
        super(scene, coordX , 10, imgKey);
        scene.physics.world.enableBody(this, 0);
        this.setScale(0.13);
    }
}

export default SimpleEnemy; 
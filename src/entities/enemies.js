class Enemies {
    constructor(scene, imgKey, enemies) {
        const enemy = () => {
            this.addEnemy(imgKey, enemies);
        }

        scene.time.addEvent({
            delay: 500,
            callback: enemy,
            callbackScope: scene,
            loop: true
        });
    }

    addEnemy(imgKey, enemies) {
        const xCoord = Math.random() * 900;
        enemies.create(xCoord, 10, imgKey).setScale(0.13).setVelocityY((Math.random() + 1) * 100);
    }
}

export default Enemies;
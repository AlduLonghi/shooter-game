class Enemies {
    constructor(scene, imgKey, enemies) {
        const enemy = () => {
            this.addEnemy(imgKey, enemies);
        }

        scene.time.addEvent({
            delay: 1000,
            callback: enemy,
            callbackScope: scene,
            loop: true
        });
    }

    addEnemy(imgKey, enemies) {
        const xCoord = Math.random() * 750;
        enemies.create(xCoord, 10, imgKey).setScale(0.1).setVelocityY(80);
    }
}

export default Enemies;
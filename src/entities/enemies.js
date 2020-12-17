import Laser from '../objects/laser';
import SimpleEnemy from './simple-enemy';

class Enemies {
    constructor(scene, imgKey, classType) {
        this.classType = classType;
        this.scene = scene;
        this.imgKey = imgKey;

        scene.time.addEvent({
            delay: 500,
            callback: this.addEnemy,
            callbackScope: scene,
            loop: true
        });
        
    }

    addEnemy() {
        console.log('hello');
            this.enemy = new SimpleEnemy(this.scene, this.imgKey);
            console.log(this.enemy);
            this.scene.enemies.add(enemy.setScale(0.13).setVelocityY((Math.random() + 1) * 100));
    }

}

export default Enemies;
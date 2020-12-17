import GunShip from '../entities/gunship-enemy';
import SimpleEnemy from '../entities/simple-enemy';

class Enemies {
    constructor(scene) {
        this.scene = scene;
        this.enemiesCreation();
    }

    newEnemies(){
        const newEnemy1 = new SimpleEnemy(this.scene);
        this.scene.enemies.add(newEnemy1);
        this.scene.enemies.setVelocityY(100);
        
        const newEnemy2 = new GunShip(this.scene);
        this.scene.enemies.add(newEnemy2);
        this.scene.enemies.setVelocityY(100);
    }
      
    enemiesCreation(){
       this.scene.time.addEvent({
           delay: 800,
           callback: () => {this.newEnemies(this.scene)},
           callbackScope: this.scene,
           loop: true
       })
    }
}



export default Enemies;
import GunShip from '../entities/gunship-enemy';
import SimpleEnemy from '../entities/simple-enemy';

class Enemies extends Phaser.Physics.Arcade.Group{
    constructor(scene) {
        super(scene.physics.world, scene)
        this.scene = scene;
        this.scene.add.existing(this);
        this.scene.physics.world.enableBody(this, 0);
        this.enemiesCreation();
    }

    newEnemies(){
        const newEnemy1 = new SimpleEnemy(this.scene, this);
        this.scene.enemies.add(newEnemy1);
        this.setVelocityY(100);
        
        const newEnemy2 = new GunShip(this.scene, this);
        this.scene.enemies.add(newEnemy2);
        this.setVelocityY(100);
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
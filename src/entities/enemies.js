import Phaser from 'phaser';
import GunShip from './gunship-enemy';
import SimpleEnemy from './simple-enemy';

class Enemies extends Phaser.Physics.Arcade.Group {
  constructor(scene) {
    super(scene.physics.world, scene);
    this.scene = scene;
    this.enemiesCreation();
    this.scene.add.existing(this);
  }

  newEnemies() {
    const newEnemy1 = new SimpleEnemy(this.scene, this);
    this.add(newEnemy1);
    this.setVelocityY(100);

    const newEnemy2 = new GunShip(this.scene, this);
    this.add(newEnemy2);
    this.setVelocityY(100);
  }

  enemiesCreation() {
    this.scene.time.addEvent({
      delay: 1200,
      callback: () => { this.newEnemies(this.scene); },
      callbackScope: this.scene,
      loop: true,
    });
  }
}


export default Enemies;
import Phaser from 'phaser';
import Laser from '../objects/laser';

class GunShip extends Phaser.Physics.Arcade.Sprite {
  constructor(scene) {
    const coordX = Math.random() * 900;
    super(scene, coordX, 10, 'enemy2');
    this.scene.add.existing(this);
    this.setScale(0.13);
    this.type = 'Gunship';

    this.shootTimer = this.scene.time.addEvent({
      delay: 1800,
      callback: () => { this.addEnemy(); },
      callbackScope: this,
      loop: true,
    });
  }

  addEnemy() {
    const laser = new Laser(
      this.scene,
      this.x,
      this.y + 15,
      'laser2',
    );
    laser.setScale(0.6);
    this.scene.enemyLasers.add(laser);
    this.scene.enemyLasers.setVelocityY(350);
  }
}

export default GunShip;
import player from '../assets/player.png';
import enemy1 from '../assets/enemy1.png';
import enemy2 from '../assets/enemy2.png';
import enemy3 from '../assets/enemy3.png';
import starfield from '../assets/starfield.png';
import laser1 from '../assets/laser-org.png';
import LaserGroup from '../objects/laser-group';
import {addEvents, shootLaser} from '../helpers/shooting';

class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainScene' });
    console.log('Hello');
  }

  preload() {
    this.load.image('player', player);
    this.load.image('enemy1', enemy1);
    this.load.image('enemy2', enemy2);
    this.load.image('enemy3', enemy3);
    this.load.image('starfield', starfield);
    this.load.image('laser1', laser1);
  }

  create() {
    this.tileSprite = this.add.tileSprite(400, 300, 0, 0, 'starfield');
    this.laserGroup = new LaserGroup(this);

    this.gamePlayer = this.physics.add.sprite(this.sys.canvas.width / 2, 700, 'player').setScale(0.15);
    this.gamePlayer.setCollideWorldBounds(true);

    addEvents(this, shootLaser);
    
  }

  update() {
    this.tileSprite.tilePositionY -= 2;
  }

}


export default MainScene;
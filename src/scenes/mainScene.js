import player from '../assets/player.png';
import enemy1 from '../assets/enemy1.png';
import enemy2 from '../assets/enemy2.png';
import enemy3 from '../assets/enemy3.png';
import starfield from '../assets/starfield.png';
import laser1 from '../assets/laser-org.png';
import { shootLaser } from '../helpers/shooting';
import {enemiesCreation} from '../helpers/enemies-creation';

class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainScene' });
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

    this.enemies = this.physics.add.group();
    enemiesCreation(this);
     
    this.playerLasers = this.physics.add.group();

    this.gamePlayer = this.physics.add.sprite(this.sys.canvas.width / 2, 700, 'player').setScale(0.15);
    this.gamePlayer.setCollideWorldBounds(true);
    this.gamePlayer.body.setAllowGravity(false);

    this.cursors = this.input.keyboard.createCursorKeys();
    
    this.gun = 0;
    
  }

  update() {
    this.tileSprite.tilePositionY -= 3;
    if (this.cursors.left.isDown){
      this.gamePlayer.x -= 6;
    }
    else if (this.cursors.right.isDown){
      this.gamePlayer.x += 6;
    }
    else if (this.cursors.up.isDown){
      this.gamePlayer.y -= 6;
    }
    else if (this.cursors.down.isDown){
      this.gamePlayer.y += 6;
    } 
    else if (this.cursors.space.isDown && this.gun == 0) {
     shootLaser(this);
    }
  }

}


export default MainScene;
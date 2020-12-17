import player from '../assets/player.png';
import enemy1 from '../assets/enemy1.png';
import enemy2 from '../assets/enemy2.png';
import enemy3 from '../assets/enemy3.png';
import starfield from '../assets/starfield.png';
import laser1 from '../assets/laser-org.png';
import laser2 from '../assets/laser-round-gr.png';
import { shootLaser } from '../helpers/shooting';
import Enemies from '../entities/enemies';
import Player from '../entities/player';
import playerLaserCollider from '../helpers/playerlaser-collider';

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
    this.load.image('laser2', laser2);
  }

  create() {
    this.tileSprite = this.add.tileSprite(400, 300, 0, 0, 'starfield');
    
    this.enemies = new Enemies(this);
    this.enemyLasers = this.physics.add.group();

    this.gamePlayer = new Player(this, this.sys.canvas.width / 2, 700, 'player');
    this.playerLasers = this.physics.add.group();

    this.cursors = this.input.keyboard.createCursorKeys();
    
    this.gun = 0;

    this.score = 0;

    this.scoreText = this.add.text(16, 16, this.score, { fontSize: '17px', fill: '#ffffff' });

    this.physics.add.collider(this.playerLasers, 
      this.enemies, 
      playerLaserCollider, 
      null, this);
    
  }

  update() {
    this.tileSprite.tilePositionY -= 3;
    if (this.cursors.left.isDown){
      this.gamePlayer.x -= 8;
    }
    else if (this.cursors.right.isDown){
      this.gamePlayer.x += 8;
    }
    else if (this.cursors.up.isDown){
      this.gamePlayer.y -= 8;
    }
    else if (this.cursors.down.isDown){
      this.gamePlayer.y += 8;
    } 
    else if (this.cursors.space.isDown && this.gun == 0) {
     shootLaser(this);
    }
  }
  
}


export default MainScene;
import player from '../assets/player.png';
import enemy1 from '../assets/enemy1.png';
import enemy2 from '../assets/enemy2.png';
import enemy3 from '../assets/enemy3.png';
import starfield from '../assets/starfield.png';

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
  }

  create() {
    this.tileSprite = this.add.tileSprite(0, 0, 1400, 1085, 'starfield');

    this.gamePlayer = this.physics.add.sprite(this.sys.canvas.width / 2, 800, 'player').setScale(0.15);
    this.gamePlayer.setCollideWorldBounds(true);


    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    if (this.cursors.left.isDown) {
      this.gamePlayer.x -= 8;
    } else if (this.cursors.right.isDown) {
      this.gamePlayer.x += 8;
    } else if (this.cursors.up.isDown) {
      this.gamePlayer.y -= 8;
    } else if (this.cursors.down.isDown) {
      this.gamePlayer.y += 8;
    }
  }
}

export default MainScene;
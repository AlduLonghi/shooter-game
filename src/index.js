import 'phaser';

import MainScene from './scenes/mainScene';

const config = {
  type: Phaser.AUTO,
  width: 900,
  height: 750,
  backgroundColor: 'black',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 0 },
      debug: false,
    },
  },
  scene: [MainScene],
};

new Phaser.Game(config);
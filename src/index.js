import 'phaser';

import { MainScene } from './scenes/mainScene';

const config = {
  type: Phaser.AUTO,
  width: 900,
  height: 900,
  backgroundColor: "black",
  physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: 300 },
          debug: false
      }
  },
  scene: [MainScene]
};

new Phaser.Game(config);
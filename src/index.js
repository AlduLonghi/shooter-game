import 'phaser';

import { mainScene } from './scenes/mainScene';

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
  scene: [mainScene]
};

new Phaser.Game(config);
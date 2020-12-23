import Phaser from 'phaser';

import MainScene from './scenes/mainScene';
import GameOver from './scenes/gameOverScene';
import PlayerName from './scenes/playerName';
import Menu from './scenes/menu';
import ScoresScene from './scenes/scoresScene';

const config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  dom: {
    createContainer: true,
  },
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
  scene: [PlayerName, Menu, ScoresScene, MainScene, GameOver],
};

window.game = new Phaser.Game(config);
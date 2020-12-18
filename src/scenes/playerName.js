import Phaser from 'phaser';
import playerData from '../constants/player-data';
import resetPlayer from '../helpers/reset-player';
import getScore from '../helpers/get-score';

class PlayerName extends Phaser.Scene {
  constructor() {
    super({ key: 'PlayerName' });
    resetPlayer();
    getScore().then(res => {
      this.highScores = res;
    });
  }

  create() {
    this.input = this.add.dom(340, 380, 'input', 'background-color: white; width: 220px; height: 50px; font: 22px Arial');
    this.button = this.add.dom(530, 380, 'button', 'background-color: orange; width: 120px; height: 50px; font: 22px Arial', 'submit');
    this.text = this.add.text(120, 250, 'Please enter your name:', { fontSize: '50px', fill: '#ffffff' });

    const submitBtn = document.querySelector('button');

    submitBtn.onclick = () => {
      const name = document.querySelector('input').value;
      playerData.name = name;
      this.scene.start('Menu', { scores: this.highScores });
    };
  }
}

export default PlayerName;
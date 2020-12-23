import Phaser from 'phaser';
import getScore from '../helpers/get-score';
import validateName from '../helpers/validate-name';

class PlayerName extends Phaser.Scene {
  constructor() {
    super({ key: 'PlayerName' });
  }

  create() {
    getScore().then(res => {
      this.highScores = res;
    });
    this.input = this.add.dom(340, 380, 'input', 'background-color: white; width: 220px; height: 50px; font: 22px Arial');
    this.button = this.add.dom(530, 380, 'button', 'background-color: orange; width: 120px; height: 50px; font: 22px Arial', 'submit');
    this.text = this.add.text(120, 250, 'Please enter your name:', { fontSize: '50px', fill: '#ffffff' });

    const submitBtn = document.querySelector('button');

    submitBtn.onclick = () => {
      const name = document.querySelector('input').value;
      if (validateName(name) === false) {
        this.add.text(220, 450, 'Name too short or too long', { fontSize: '25px', fill: '#ffffff' });
      } else {
        this.registry.set('playerName', name);
        this.registry.set('score', this.highScores);
        this.scene.start('Menu');
      }
    };
  }
}

export default PlayerName;
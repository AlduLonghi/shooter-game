import Phaser from 'phaser';
import backBtn from '../assets/backBtn.png';

class ScoresScene extends Phaser.Scene {
  constructor() {
    super({ key: 'ScoresScene' });
  }

  preload() {
    this.load.image('backBtn', backBtn);
  }

  create() {
    this.text = this.add.text(230, 150, 'Top scores', { fontSize: '65px', fill: '#ffffff' });

    let height = 210;

    this.scores = this.registry.get('score');

    for (let i = 0; i < this.scores.length; i += 1) {
      this.add.text(230,
        height += 60,
        `${i + 1}. ${this.scores[i].user}: ${this.scores[i].score}`,
        { fontSize: '40px', fill: '#ffffff' });
    }

    this.btn = this.add.sprite(400, 670, 'backBtn').setScale(0.07);
    this.btn.setInteractive().on('pointerdown',
      function changeScene() {
        this.scene.switch('Menu');
      },
      this);
  }
}

export default ScoresScene;
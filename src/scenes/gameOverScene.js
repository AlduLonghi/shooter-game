import starfield from '../assets/starfield.png';
import gameOverSound from '../assets/gameOverSound.wav';
import buttons from '../assets/buttons.png';

class GameOver extends Phaser.Scene {
    constructor() {
        super({ key: 'GameOver'});
    }

    preload() {
        this.load.image('starfield', starfield);
        this.load.audio('gameOver', gameOverSound);
        this.load.spritesheet('buttons', buttons, {
            frameWidth: 265,
            frameHeight: 65,
        })
    }

    create() {
        this.tileSprite = this.add.tileSprite(400, 300, 0, 0, 'starfield');
        this.gameOverSnd = this.sound.add('gameOver');
        this.gameOverSnd.play();
        this.add.text(230, 230, 'GAME OVER', { fontSize: '75px', fill: '#ffffff' });

        this.button = this.add.sprite(440, 400, 'buttons');
        this.button.setInteractive().on('pointerdown', function(){ this.scene.start('MainScene')}, this);
    
    }
}

export default GameOver;
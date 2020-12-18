class ScoresScene extends Phaser.Scene {
    constructor() {
        super({key: 'ScoresScene'})
    }

    init(data){
        this.scores = data.scores;
        console.log(this.scores);
    }

    create() {
        this.add.text(230, 230, this.scores[0].user, { fontSize: '75px', fill: '#ffffff' });
    }
}

export default ScoresScene;
class ScoresScene extends Phaser.Scene {
    constructor() {
        super({key: 'ScoresScene'})
    }

    init(data){
        this.scores = data.scores;
        console.log(this.scores);
    }

    create() {
        this.text = this.add.text(230, 150, 'Top scores', { fontSize: '65px', fill: '#ffffff' });
        
        let height = 240;

        for (let i = 0; i<this.scores.length; i += 1) {
          this.add.text(260, height += 60, `${i+1}. ${this.scores[i].user}: ${this.scores[i].score}`, { fontSize: '40px', fill: '#ffffff' })
        }
    }
}

export default ScoresScene;
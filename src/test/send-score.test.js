import sendScore from '../helpers/send-score';

describe('API interactions', () => {
    it('Will post the score to score API', async (done) => {
        const res = await sendScore('test', 30);
        expect(res.result).toEqual('Leaderboard score created correctly.');
        done();
    }) 
})
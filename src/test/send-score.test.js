import sendScore from '../helpers/send-score';

describe('API interactions POST', () => {
  it('Will post the score to score API', async (done) => {
    const res = await sendScore('test', 30);
    expect(res.result).toEqual('Leaderboard score created correctly.');
    done();
  });
  it('Wont post the score to score API because score equals 0', async (done) => {
    const res = await sendScore('test', 0);
    expect(res.message).toEqual('You need to provide a valid score for the leaderboard');
    done();
  });
});
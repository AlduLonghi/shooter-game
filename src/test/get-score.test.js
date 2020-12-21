import getScore from '../helpers/get-score';

describe('API interactions GET', () => {
  it('Will get score from API', async (done) => {
    const res = await getScore();
    expect(res.length).toEqual(5);
    done();
  });
});
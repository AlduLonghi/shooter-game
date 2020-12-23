import axios from 'axios';
import sendScore from '../helpers/send-score';

jest.mock('axios');

describe('API interactions POST', () => {
  it('Will post the score to score API', async () => {
    axios.post.mockResolvedValue(
      {
        data:
       { result: 'Leaderboard score created correctly.' },
      },
    );
    const res = await sendScore('test', 30);
    expect(res.result).toEqual('Leaderboard score created correctly.');
  });

  it('Wont post the score to score API because score equals 0', async () => {
    axios.post.mockResolvedValue(
      {
        data:
       { message: 'You need to provide a valid score for the leaderboard' },
      },
    );
    const res = await sendScore('test', 0);
    expect(res.message).toEqual('You need to provide a valid score for the leaderboard');
  });
});
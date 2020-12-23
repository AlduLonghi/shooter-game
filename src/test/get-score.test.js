import axios from 'axios';
import getScore from '../helpers/get-score';

jest.mock('axios');

describe('API interactions GET', () => {
  it('Will get score from API', async () => {
    axios.get.mockResolvedValue(
      {
        data:
       {
         result: [
           {
             user: 'player1',
             score: 30,
           },
           {
             user: 'player2',
             score: 30,
           },
           {
             user: 'player3',
             score: 60,
           },
           {
             user: 'player4',
             score: 90,
           },
           {
             user: 'player5',
             score: 60,
           },
           {
             user: 'player6',
             score: 30,
           },
         ],
       },
      },
    );
    const res = await getScore();
    expect(res.length).toEqual(5);
  });
});
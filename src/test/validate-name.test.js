import validateName from '../helpers/validate-name';

describe('Validate user name', () => {
  it('Returns true if input name is valid', () => {
    const validName = validateName('Player');
    expect(validName).toBeTruthy();
  });
  it('Returns false if input name is invalid', () => {
    const validName = validateName('');
    expect(validName).toBeFalsy();
  });
});
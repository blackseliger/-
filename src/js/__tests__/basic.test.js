import shortDesc from '../app';

describe('check function shortDesc', () => {
  test('return corrected message', () => {
    const expected = '😠Л(1)⚔40🛡10❤50';
    const received = shortDesc({
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 1,
      attack: 40,
      defence: 10,
    });
    expect(received).toEqual(expected);
  });
  test('return null', () => {
    const expected = null;
    const received = shortDesc();
    expect(received).toEqual(expected);
  });
});

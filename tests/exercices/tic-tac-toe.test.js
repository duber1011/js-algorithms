describe('Tic Tac Toe', () => {
  const ticTacToe = require('../../src/exercises/tic-tac-toe');

  it('Player A wins', () => {
    expect(
      ticTacToe([
        [0, 0],
        [2, 0],
        [1, 1],
        [2, 1],
        [2, 2],
      ])
    ).toBe('The winner is player A');
  });

  test('Player B wins', () => {
    expect(
      ticTacToe([
        [0, 0],
        [1, 1],
        [0, 1],
        [0, 2],
        [1, 0],
        [2, 0],
      ])
    ).toBe('The winner is player B');
  });

  test('Draw', () => {
    expect(
      ticTacToe([
        [0, 0],
        [1, 1],
        [2, 0],
        [1, 0],
        [1, 2],
        [2, 1],
        [0, 1],
        [0, 2],
        [2, 2],
      ])
    ).toBe('Draw');
  });

  test('Pending', () => {
    expect(
      ticTacToe([
        [0, 0],
        [1, 1],
      ])
    ).toBe('Pending');
  });
});

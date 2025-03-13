/*
Challenge name: Find Winner on a Tic Tac Toe Game
Description: Tic-tac-toe is played by two players A and B on a 3 x 3 grid. 

In this Tic-Tac-Toe challenge, you are given a 3 x 3 grid representing the game board. Two players, A and B, 
take turns placing their respective characters ('X' and 'O') into empty squares of the grid. The game continues 
until there are three of the same characters in a row, column, or diagonal, resulting in a win for the player 
with the matching characters. If all squares are filled without any player achieving a winning combination, 
the game ends in a draw. Additionally, if there are still empty squares on the grid and no winner has been 
determined, the game is considered to be ongoing (pending).

You can assume that moves is valid (i.e., it follows the rules of Tic-Tac-Toe), the grid is initially empty, 
and A will play first.

Your task is to implement a function/method that takes the 3 x 3 array as input and returns the winner of the 
game (A or B) if there is one, or "Draw" if the game ends in a draw, or "Pending" if the game is still ongoing.
Your implementation should also include the necessary unit test cases to verify the correctness of your solution.
*/

function ticTacToe(moves) {
  // Step 1: Initialize a 3x3 board
  const board = Array.from({ length: 3 }, () => Array(3).fill(''));

  // Step 2: Place moves on the board
  for (let i = 0; i < moves.length; i++) {
    const [row, col] = moves[i];
    board[row][col] = i % 2 === 0 ? 'X' : 'O'; // A -> "X", B -> "O"
  }
  console.log('board ==> ', board);

  // Step 3: Check for a winner
  const checkWinner = (player) => {
    // Check rows and columns
    for (let i = 0; i < 3; i++) {
      if (board[i].every((cell) => cell === player)) return true; // Row win
      if (
        [board[0][i], board[1][i], board[2][i]].every((cell) => cell === player)
      )
        return true; // Column win
    }
    // Check diagonals
    if (
      [board[0][0], board[1][1], board[2][2]].every((cell) => cell === player)
    )
      return true; // Main diagonal
    if (
      [board[0][2], board[1][1], board[2][0]].every((cell) => cell === player)
    )
      return true; // Anti-diagonal

    return false;
  };

  if (checkWinner('X')) return 'The winner is player A';
  if (checkWinner('O')) return 'The winner is player B';

  // Step 4: Check game status
  return moves.length === 9 ? 'Draw' : 'Pending';
}

// Example test cases
console.log(
  ticTacToe([
    [0, 0],
    [2, 0],
    [1, 1],
    [2, 1],
    [2, 2],
  ])
); // "A"
console.log(
  ticTacToe([
    [0, 0],
    [1, 1],
    [0, 1],
    [0, 2],
    [1, 0],
    [2, 0],
  ])
); // "B"
console.log(
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
); // "Draw"
console.log(
  ticTacToe([
    [0, 0],
    [1, 1],
  ])
); // "Pending"

module.exports = { ticTacToe };

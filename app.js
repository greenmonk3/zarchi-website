//tictactoe
const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
//turn identifers
let currentPlayer = 'X';
let gameActive = true;
//winner
function checkWinner() {
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
    [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
  ];
  for (let combo of winningCombos) {
    const [a, b, c] = combo;
    if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
      cells[a].style.backgroundColor = 'lightgreen';
      cells[b].style.backgroundColor = 'lightgreen';
      cells[c].style.backgroundColor = 'lightgreen';
      gameActive = false;
      return true;
    }
  }

  if ([...cells].every(cell => cell.textContent !== '')) {
    console.log("OK2");
    gameActive = false;
    return true;
  }
  console.log("OK3s");
  return false;
}
function handleClick() {
  if (!gameActive || this.textContent !== '') return; /*{
    console.log("textContent: ", this.textContent);
    return;
  }*/
  this.textContent = currentPlayer;
  console.log("OK1");
  if (checkWinner()) {
    alert(currentPlayer + 'wins');
    return;
  }

  if (currentPlayer === 'X') {
    currentPlayer = 'O';
  } else {
    currentPlayer = 'X';
  }
}
//retrieving function
cells.forEach(cell => cell.addEventListener('click', handleClick));


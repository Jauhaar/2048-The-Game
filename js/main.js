// TODO: Load game with two 2's or one 2 and one 4 in random cells

// change the class of the child of each cell

var gameBoard = document.querySelector('game-board-grid');
// Cells
// ROW 1
var cell_1_1 = document.querySelector('.cell-1-1');
var cell_2_1 = document.querySelector('.cell-2-1');
var cell_3_1 = document.querySelector('.cell-3-1');
var cell_4_1 = document.querySelector('.cell-4-1');
// ROW 2
var cell_1_2 = document.querySelector('.cell-1-2');
var cell_2_2 = document.querySelector('.cell-2-2');
var cell_3_2 = document.querySelector('.cell-3-2');
var cell_4_2 = document.querySelector('.cell-4-2');
// ROW 3
var cell_1_3 = document.querySelector('.cell-1-3');
var cell_2_3 = document.querySelector('.cell-2-3');
var cell_3_3 = document.querySelector('.cell-3-3');
var cell_4_3 = document.querySelector('.cell-4-3');
// ROW 4
var cell_1_4 = document.querySelector('.cell-1-4');
var cell_2_4 = document.querySelector('.cell-2-4');
var cell_3_4 = document.querySelector('.cell-3-4');
var cell_4_4 = document.querySelector('.cell-4-4');

window.addEventListener('load', InitialiseGame());

function InitialiseGame() {
  let cell1 = GetRandomCell();
  let cell2 = GetRandomCell();

  // Make sure cell1 & cell2 aren't equal
  if (cell2 == cell1) {
    console.log('EQUAL');
    console.log(cell2);
    while (cell2 == cell1) {
      cell2 = GetRandomCell();
    }
  }

  // Cell1 is always 2
  SetCell(cell1, 'empty', 'num-2', '2');
  // Cell2 is either 2 or 4
  const random = Random(0, 2);
  if (random == 0) {
    SetCell(cell2, 'empty', 'num-2', '2');
  } else {
    SetCell(cell2, 'empty', 'num-4', '4');
  }
}

function SetCell(cell, removeClassName, addClassName, value = null) {
  element = cell.firstElementChild;
  element.classList.remove(removeClassName);
  element.classList.add(addClassName);
  element.textContent = value;
}

function GetRandomCell() {
  let cell = null;
  let column = Random(1, 5);
  let row = Random(1, 5);

  cell =
    // Row 1
    column == 1 && row == 1
      ? cell_1_1
      : column == 2 && row == 1
      ? cell_2_1
      : column == 3 && row == 1
      ? cell_3_1
      : column == 4 && row == 1
      ? cell_4_1
      : // Row 2
      column == 1 && row == 2
      ? cell_1_2
      : column == 2 && row == 2
      ? cell_2_2
      : column == 3 && row == 2
      ? cell_3_2
      : column == 4 && row == 2
      ? cell_4_2
      : // Row 3
      column == 1 && row == 3
      ? cell_1_3
      : column == 2 && row == 3
      ? cell_2_3
      : column == 3 && row == 3
      ? cell_3_3
      : column == 4 && row == 3
      ? cell_4_3
      : // Row 4
      column == 1 && row == 4
      ? cell_1_4
      : column == 2 && row == 4
      ? cell_2_4
      : column == 3 && row == 4
      ? cell_3_4
      : column == 4 && row == 4
      ? cell_4_4
      : null;

  return cell;
}

//Function to generate a random number within a min and max range
function Random(min, max) {
  var randomNumber = Math.floor(Math.random() * (max - min) + min);

  return randomNumber;
}

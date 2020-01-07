// TODO: Implement movement (WORKING ON)
// TODO: Implement on screen controls
// TODO: Implement score tracking
// TODO: Implement restart
//
// DONE: Game Initialisation

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

// -- INITIALISE GAME --
window.addEventListener('load', InitialiseGame());

document.addEventListener('keyup', function(e) {
  console.log(e.key);
  // Game Interaction takes place here
});

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
  cell1.replaceChild(Node('2'), cell1.firstElementChild);
  // Cell2 is either 2 or 4
  const random = Random(0, 2);
  if (random == 0) {
    cell2.replaceChild(Node('2'), cell2.firstElementChild);
  } else {
    cell2.replaceChild(Node('4'), cell2.firstElementChild);
  }

  // LEGACY

  // // Cell1 is always 2
  // SetCell(cell1, 'empty', 'num-2', '2');
  // // Cell2 is either 2 or 4
  // const random = Random(0, 2);
  // if (random == 0) {
  //   SetCell(cell2, 'empty', 'num-2', '2');
  // } else {
  //   SetCell(cell2, 'empty', 'num-4', '4');
  // }
}

function Move() {
  let row1 = [cell_1_1, cell_2_1, cell_3_1, cell_4_1];
  var count = row1.length * row1.length;
  let canMove;

  // Main Loop
  for (let index = 0; index < count; index++) {
    const cell = row1[index % row1.length]; //makes it loop through the row 4 times
    // console.log(cell);

    var cellChildClassList = cell.firstElementChild.classList;
    var siblingChildClassList =
      cell.nextElementSibling.firstElementChild.classList;

    // CAN BE MADE INTO SEPERATE FUNCTION
    if (cellChildClassList.contains('empty')) {
      canMove = false;
    } else {
      if (cell != row1[3] && siblingChildClassList.contains('empty')) {
        canMove = true;
      } else {
        canMove = false;
      }
    }

    if (canMove) {
      cell.firstElementChild.classList.remove('num-2');
      cell.firstElementChild.classList.add('empty');
      cell.nextElementSibling.firstElementChild.classList.remove('empty');
      cell.nextElementSibling.firstElementChild.classList.add('num-2');
    }
  }
}
// var test = Move();

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

// This function creates the node that will replace existing nodes in cells
function Node(className) {
  // Example of how to replace a node in a cell using this function:
  // cell_1_1.replaceChild(Node('2048'), cell_1_1.firstElementChild);
  if (className == 'empty') {
    var node = document.createElement('div');
    node.classList = `cell ${className}`;
  } else {
    var node = document.createElement('div');
    node.classList = `cell num-${className}`;
    var textNode = document.createTextNode(className);
    node.appendChild(textNode);
  }

  return node;
}

// LEGACY FUNCTION USE: Move()
function LegacyMove(dir) {
  let direction = dir;
  let canMove;
  let row1 = [cell_1_1, cell_2_1, cell_3_1, cell_4_1];
  row1.forEach(cell => {
    var cellChildClassList = cell.firstElementChild.classList;
    var siblingChildClassList =
      cell.nextElementSibling.firstElementChild.classList;

    // CAN BE MADE INTO SEPERATE FUNCTION
    if (cellChildClassList.contains('empty')) {
      console.log('cant move');
    } else {
      if (cell != row1[3] && siblingChildClassList.contains('empty')) {
        canMove = true;
      } else {
        canMove = false;
      }
    }

    if (canMove) {
      cell.firstElementChild.classList.remove('num-2');
      cell.firstElementChild.classList.add('empty');
      cell.nextElementSibling.firstElementChild.classList.remove('empty');
      cell.nextElementSibling.firstElementChild.classList.add('num-2');
    }
  });
}

// LEGACY FUNCTION USE: Node()
function SetCell(cell, removeClassName, addClassName, value = null) {
  element = cell.firstElementChild;
  element.classList.remove(removeClassName);
  element.classList.add(addClassName);
  element.textContent = value;
}

function ModTest(count) {
  var modArray = [1, 2, 3, 4, 5];
  for (let index = 0; index < count; index++) {
    const element = modArray[index % modArray.length];
    console.log(element);
  }
}

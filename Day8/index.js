const unitLength = 9;
const boxColor = "yellow";
const strokeColor = 100;
let columns; /* To be determined by window width */
let rows;    /* To be determined by window height */
let currentBoard;
let nextBoard;
let fr = 30
let start = true;
let survival = 2
let reproduction = 3
let times = 0
let keyboardX = 0
let keyboardY = 0





function setup() {
   /* Set the canvas to be under the element #canvas*/
   const canvas = createCanvas(windowWidth - 40, windowHeight - 100);
   canvas.parent(document.querySelector('#canvas'));

   /*Calculate the number of columns and rows */
   columns = floor(width / unitLength);
   rows = floor(height / unitLength);

   /*Making both currentBoard and nextBoard 2-dimensional matrix that has (columns * rows) boxes. */
   currentBoard = [];
   nextBoard = [];
   for (let i = 0; i < columns; i++) {
      currentBoard[i] = [];
      nextBoard[i] = []
   }
   // Now both currentBoard and nextBoard are array of array of undefined values.
   init();  // Set the initial values of the currentBoard and nextBoard
}

/**
* Initialize/reset the board state
*/
function init() {
   for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
         currentBoard[i][j] = { value: 0, times: 0, static: false };
         nextBoard[i][j] = { value: 0, times: 0, static: false };
      }
   }
}

function randomGame() {
   for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
         currentBoard[i][j] = { value: Math.round(Math.random()), times: 0, static: false };
         nextBoard[i][j] = { value: 0, times: 0, static: false };
      }
   }

}




function draw() {
   if (!start) {
      return
   }
   background(255);
   frameRate(fr);


   generate();
   drawOnCanvas();





}
function drawOnCanvas() {
   for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
         if (currentBoard[i][j].value == 1 && currentBoard[i][j].static == false) {
            fill(random(0, 255), mouseX, mouseY);
            if (currentBoard[i][j].times > 1 && currentBoard[i][j].times <= 4 && currentBoard[i][j].static == false) {
               fill("yellow");
            } else if (currentBoard[i][j].times > 4 && currentBoard[i][j].times <= 8 && currentBoard[i][j].static == false) {
               fill(255, 100, 0);
            } else if (currentBoard[i][j].times > 8 && currentBoard[i][j].times <= 12 && currentBoard[i][j].static == false) {
               fill(85, 85, 85);
            } else if (currentBoard[i][j].times > 12 && currentBoard[i][j].times <= 16 && currentBoard[i][j].static == false) {
               fill(68, 51, 85);
            } else if (currentBoard[i][j].times > 20 && currentBoard[i][j].static == false) {
               fill(51, 51, 51);
            }
            // console.log(currentBoard[i][j].times)
         } else {
            fill(255);
         }
         stroke(strokeColor);
         rect(i * unitLength, j * unitLength, unitLength, unitLength);
      }
   }
}

function windowResized() {
   noLoop();
   resizeCanvas(windowWidth - 80, windowHeight);
   setup();
   loop();

}


let pattern1 = `..............O.OO....O.....
..............OO.O...O.O....
.....................O.O....
............OOOOO...OO.OOO..
...........O..O..O........O.
...........OO...OO..OO.OOO..
....................OO.O....
...........................O
.........................OOO
..O.....................O...
O...O...................OO..
.....O......................
O....O......................
.OOOOO......................
............................
.....................OO.....
....................O..O....
.....................OO.....
.............OO.............
............O.O.............
............O...............
...........OO...............
........................OO..
........................O...
.........................OOO
...........................O`

let pattern2 = `.....OO
......O
....O
OO.O.OOOO
OO.O.....O.O
...O..OOO.OO
...O....O
....OOO.O
.......O
......O
......OO`

let pattern3 = `....OO......OO....
...O.O......O.O...
...O..........O...
OO.O..........O.OO
OO.O.O..OO..O.O.OO
...O.O.O..O.O.O...
...O.O.O..O.O.O...
OO.O.O..OO..O.O.OO
OO.O..........O.OO
...O..........O...
...O.O......O.O...
....OO......OO....`

let pattern4 = `.......O......
......OO......
.....OO.......
....O.........
...O.OOOO.....
..O.O....O....
.OO.O.OO.O..OO
OO..O.OO.O.OO.
....O....O.O..
.....OOOO.O...
.........O....
.......OO.....
......OO......
......O.......`

let pattern5 = `.........................OO.....OO
.........................OO.....OO
..................................
..................................
..................................
..................................
..................................
..................................
..................................
..................................
..................................
..................................
..................................
...........................OO.OO..
..........................O.....O.
..................................
.........................O.......O
.........................O..O.O..O
.........................OOO...OOO
..................................
..................................
.................OO...............
OO...............O.O..............
OO.................O..............
.................OOO..............
..................................
..................................
..................................
.................OOO..............
OO.................O..............
OO...............O.O..............
.................OO...............`


let pattern6 = `.OO..................................OO.
O.O..................................O.O
OOO..................................OOO
........................................
.OO..................................OO.
OOOO................................OOOO
O...O......OO......OO......OO......O...O
.....O....O..O....O..O....O..O....O.....
..O..O...O....O..O....O..O....O...O..O..
.....O....O..O....O..O....O..O....O.....
O...O......OO......OO......OO......O...O
OOOO................................OOOO
.OO..................................OO.
........................................
OOO..................................OOO
O.O..................................O.O
.OO..................................OO.`

let pattern7 = `...O.O.......
.....O.......
O.O...OO.OO..
OO....OO...O.
.O...O.OO...O
.O...O.OO..O.
.O....O.O....
.OOOOOOO.OOO.
..O.......OO.
....OOOOOO...
..OO.........
..O..OO......
..O..OO......`

let pattern8 = `......OOO...OOO......
..O.OO...O.O...OO.O..
.OOO...O.O.O.O...OOO.
O...O....O.O....O...O
.O.......O.O.......O.
........O.O.O........
........O.O.O........
.....................
..........O..........
.........O.O.........
.......OO...OO.......
.......O.O.O.O.......
.......OO...OO.......`

let pattern9 = `................OO....OO......
................O.....OO......
.................O............
................OO..OOOO......
..............O..O.O....O.....
..............OO...O.OOOO.....
..................O..O...OO...
..................O..O.OO..O..
......................O.O.OO..
....................O.O.O.....
...............OO...O...O.....
...............O..O...OO......
..............................
..............................
.............O....O...........
.............O..OO............
.............OO...............
.........OO...................
.........OOO......O.O.........
........O...O........OO.......
...........OOO..OO...OO.......
.O..O...O...O....O.O.O........
.....O....OO......OOO.........
O....O....O........O...OOO....
OO.....................O......
......O.....................OO
....OOO...O........O....O....O
.........OOO......OO....O.....
........O.O.O....O...O...O..O.
.......OO...OO..OOO...........
.......OO........O...O........
.........O.O......OOO.........
...................OO.........
...............OO.............
............OO..O.............
...........O....O.............
..............................
..............................
...........O..O...............
.............OO...............`

let pattern10 = `OO........................OO
OO........................OO
..................OO
.................O..O
..................OO
..............O
.............O.O
............O...O
............O..O

............O..O
...........O...O
............O.O
.............O
........OO
.......O..O
........OO
OO........................OO
OO........................OO`

let pattern11 = `.......O.OO..OO.O.......
......O...OOOO...O......
OO....O.OO.OO.OO.O....OO
OO.....OO......OO.....OO
........................
........................
........................
........................
........................
........................
........................
OO.....OO......OO.....OO
OO....O.OO.OO.OO.O....OO
......O...OOOO...O......
.......O.OO..OO.O.......
........................
........................
........................
........................
........................
.........OOOOOO.........
.........O....O.........
..........O..O..........
........O.O..O.O........
........OO....OO........`


const patternArray = [pattern1, pattern2, pattern3, pattern4, pattern5, pattern6, pattern7, pattern8, pattern9, pattern10, pattern11]

// console.log(patternArray);

// let patternArray = pattern.split("\n")
// function getPattern(str) {
//    let result = [];
//    for (let i = 0; i < str.length; i++) {
//       let p = [];
//       for (let j = 0; j < str[i].length; j++) {
//          if (str[i][j] == "O") {
//             p.push(1)
//          } else if (str[i][j] == ".") {
//             p.push(0)
//          }

//       } result.push(p);
//    }
//    return result;
// }

// // console.log(getPattern(patternArray))

// function drawPattern(pattern, x, y) {
//    for (let i = 0; i < pattern.length; i++) {
//       for (let j = 0; j < pattern[i].length; j++) {
//          // console.log(pattern[i][j]);
//          if (pattern[i][j] === 1) {
//             // console.log(pattern[i][j]);
//             currentBoard[j + x][i + y].value = 1;
//          } else {
//             currentBoard[j + x][i + y].value = 0;
//          }
//       }
//    }
// }
// // drawPattern(getPattern(patternArray), 0, 0)





function getPatternArray(pattern) {
   let patternArray = pattern.replaceAll(".", 0).replaceAll("O", 1).split("\n")
   let newPatternArray = patternArray.map(function (str) {
      return str.split("");
   })
   return newPatternArray;
}
function getPattern(newPatternArray, x, y) {
   for (let i = 0; i < newPatternArray.length; i++) {
      for (let j = 0; j < newPatternArray[i].length; j++) {
         newPatternArray[i][j] === "1" ? currentBoard[j + x][i + y].value = 1 : currentBoard[j + x][i + y].value = 0;

      }
   }
}




function generate() {
   //Loop over every single box on the board
   for (let x = 0; x < columns; x++) {
      for (let y = 0; y < rows; y++) {
         // Count all living members in the Moore neighborhood(8 boxes surrounding)
         let neighbors = 0;
         for (let i of [-1, 0, 1]) {
            for (let j of [-1, 0, 1]) {
               if (i == 0 && j == 0) {
                  // the cell itself is not its own neighbor
                  continue;
               }
               // The modulo operator is crucial for wrapping on the edge
               neighbors += currentBoard[(x + i + columns) % columns][(y + j + rows) % rows].value;
            }
         }

         // Rules of Life
         if (currentBoard[x][y].value == 1 && neighbors < survival && currentBoard[x][y].static == false) {
            // Die of Loneliness
            nextBoard[x][y].value = 0;
            nextBoard[x][y].times = 0;
         } else if (currentBoard[x][y].value == 1 && neighbors > reproduction) {
            // Die of Overpopulation
            nextBoard[x][y].value = 0;
         } else if (currentBoard[x][y].value == 0 && neighbors == reproduction) {
            // New life due to Reproduction
            nextBoard[x][y].value = 1;
            let time = nextBoard[x][y].times + 1;
            nextBoard[x][y].times = time;
         } else {
            // Stasis
            nextBoard[x][y] = currentBoard[x][y];
         }
      }
   }

   // Swap the nextBoard to be the current Board
   [currentBoard, nextBoard] = [JSON.parse(JSON.stringify(nextBoard)), JSON.parse(JSON.stringify(currentBoard))];
}

function mouseDragged() {
   /**
    * If the mouse coordinate is outside the board
    */
   if (mouseX > unitLength * columns || mouseY > unitLength * rows) {
      return;
   }
   const x = Math.floor(mouseX / unitLength);
   const y = Math.floor(mouseY / unitLength);
   currentBoard[x][y] = { value: 1, times: 0, static: false };;
   fill(boxColor);
   stroke(strokeColor);
   rect(x * unitLength, y * unitLength, unitLength, unitLength);
}

/**
* When mouse is pressed
*/
function mousePressed() {
   noLoop();
   mouseDragged();
}

/**
* When mouse is released
*/
function mouseReleased() {
   loop();
}
function keyboardMode() {
   const preventDefaultKeys = ["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight", "Space", "Enter"]
   window.addEventListener("keydown", function (event) {
      if (preventDefaultKeys.indexOf(event.code) != - 1) {
         event.preventDefault();
         noLoop()
      } else {
         console.log('By pass keydown, not arrow key ')
         return
      }
      // fill('BlueViolet')
      // rect(keyboardX * unitLength, keyboardY * unitLength, unitLength, unitLength);

      switch (event.code) {
         case "Enter":
            loop()
            break
         case "Space":
            console.log('pressing space');
            currentBoard[keyboardX][keyboardY] = { value: 1, times: 0, static: false }

            break;
         case "ArrowDown":
            console.log('pressing down');
            keyboardY += 1
            // code for "down arrow" key press.
            break;
         case "ArrowUp":
            keyboardY -= 1;
            // code for "up arrow" key press.
            break;
         case "ArrowLeft":
            keyboardX -= 1
            // code for "left arrow" key press.
            break;
         case "ArrowRight":
            keyboardX += 1;
            // code for "right arrow" key press.
            break;
         default:
            console.log('By pass keydown :', event.key)
            return; // Quit when this doesn't handle the key event.
      }

      drawOnCanvas()
      fill('BlueViolet')
      rect(keyboardX * unitLength, keyboardY * unitLength, unitLength, unitLength);
      console.log('draw rect on :', { keyboardX, keyboardY });
      // Cancel the default action to avoid it being handled twice
   }, true);
}


document.querySelector('#reset-game')
   .addEventListener('click', function () {
      init();
   });

document.querySelector('.slider')
   .addEventListener('click', function (event) {
      fr = parseInt(event.currentTarget.value)
      frameRate(fr)
   });




stopGame = document.querySelector('#stop-game')
   .addEventListener('click', function (event) {
      let currentstate = event.currentTarget.innerHTML
      console.log(currentstate)
      if (start) {
         start = false;
         draw()
         event.currentTarget.innerHTML = "PLAY AGAIN"
      } else if (!start) {
         start = true;
         draw();
         event.currentTarget.innerHTML = "STOP"
      }
   });


document.querySelector('#random-game')
   .addEventListener('click', function () {
      init();
      randomGame();
      draw()
   });

document.querySelector('#random-add-pattern')
   .addEventListener('click', function () {
      let randomPattern = Math.floor(Math.random() * 8)
      getPattern(getPatternArray(patternArray[parseInt(randomPattern)]), parseInt(random(5, 50)), parseInt(random(5, 50)))
      // getPattern(getPatternArray(patternArray[8]), 30, 10)
      console.log(randomPattern);
   });

document.querySelector('#pattern-mode')
   .addEventListener('click', function () {
      getPattern(getPatternArray(patternArray[6]), 30, 0)
      let box1 = setInterval(function (box1) { setTimeout(function () { getPattern(getPatternArray(patternArray[6]), 50, 0) }, 0) }, 20000)
      setTimeout(function () { clearInterval(box1) }, 60000)
      getPattern(getPatternArray(patternArray[4]), 80, 15)
      getPattern(getPatternArray(patternArray[9]), 20, 25)
      setTimeout(function () { getPattern(getPatternArray(patternArray[1]), 60, 30) }, 15000)
      setTimeout(function () { getPattern(getPatternArray(patternArray[10]), 60, 30) }, 120000)

   });

document.querySelector('#keyboard-game')
   .addEventListener('click', function () {
      keyboardMode();
   });

document.querySelector('.change-survival-btn')
   .addEventListener('click', function (event) {
      if (event.target.matches(".change-survival-btn")) {
         survival = document.querySelector(".change-survival-input").value
         draw();
      } else {
         return survival
      }

   });

document.querySelector(".change-reproduction-btn").addEventListener('click', function (event) {
   if (event.target.matches(".change-reproduction-btn")) {
      reproduction = document.querySelector(".change-reproduction-input").value
      draw();
   } else {
      return reproduction
   }

});



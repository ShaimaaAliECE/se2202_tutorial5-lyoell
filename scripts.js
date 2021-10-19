let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns
//initialize the game
let counter=0;
let board = document.querySelector('b');

// use the value stored in the nextPlayer variable to indicate who the next player is


//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{
    let cells = document.querySelectorAll('td');
for(var c=0; c<9; c++){
    cells[c].innerHTML = '<button>[]</button>';
}
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
   
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
if(nextPlayer=='X'){
    nextPlayer = 'O'
    event.target.innerHTML = '[X]';
    event.target.disabled = true;
document.getElementById('next-lbl').innerText =nextPlayer;
counter++;
}
else{
    nextPlayer = 'X'
    event.target.innerHTML = '[O]';
    event.target.disabled = true;
document.getElementById('next-lbl').innerHTML = nextPlayer; 
counter++;
}
        }
    
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */

    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )

    // Check if the game is over
    if (isGameOver())
    {
       document.getElementById('game-over-lbl').innerHTML = '<h1>Game Over</h1>';
       
       // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 


function isGameOver()
{
  if(counter==9){
      return true
  }
  else return false
    // This function returns true if all the buttons are disabled and false otherwise 
   
}

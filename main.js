
const prompt = require('prompt-sync')({ sigint: true });


const clear = require('clear-screen');


const hat = '^';
const hole = 'O';
const pathCharacter = '*';
const height = 10;       
const width = 10;        
const fieldCharacter = '░';
const field = [[]];       
let characterRow = 0;
let characterCol = 0;
let characterPosition = field[characterRow][characterCol];

//Create 10x10 field
function generateField() {
      for (let row = 0; row < height; row++)
    {
       field[row] = [];        
    
        for (let col = 0; col < width; col++)
        {
           
            field[row][col] = fieldCharacter;  
             
        }   
           
    } 
}
// Starting point of path character
function startingPoint(){
    field[characterRow][characterCol] = pathCharacter;
}
// random position of hat
function randomHat(){
    let randomRow = Math.floor(Math.random()*10) ;
    let randomCol = Math.floor(Math.random()*10) ;
    field[randomRow][randomCol] = hat;

}

//random hole position

for (let i = 0; i < 10; i++ ){
function randomHoles(i){
   let randomRow1 = Math.floor(Math.random()*10) 
   let randomCol1 = Math.floor(Math.random()*10) 
        field[randomRow1][randomCol1] = hole;
             
    } 
  }
  
// Join field characters together without spaces
function print() {

    clear();

    const displayString = field.map(row => {    
      return row.join('');
    }).join('\n');      
    console.log(displayString);     

    
 
}
// Prompt user for input
function askQuestion() {
   
    
       const charMove = prompt('Which Way?: ').toUpperCase();
    function move(charMove){
      // Moves to determine which position the pathCharacter will populate
      if (charMove === "U"){
        characterRow -= 1;
      }
      else if (charMove === "D"){
        characterRow += 1;
      }
      else if (charMove === "L"){
        characterCol -= 1;
      }
      else if (charMove === "R"){
        characterCol += 1;
      }
      // If invalid move is keyed in
      else {
        console.log("Enter (u, d, l or r)")
      }
    }
    // move pathCharacter according to move inputted
    field[characterRow][characterCol] = pathCharacter;


}

function startGame() {
 
    let isPlaying = true;


    while (isPlaying) {     


        print();

      //End game when user pathcharacter enters holes
        if (characterPosition == randomHoles()) {
            
            console.log( "Sorry, you fell down a hole!")
            isPlaying = false;      
        }
        // //End game in victory when user pathcharacter enters hat and
        else if (characterPosition == randomHat()) {
            
            console.log( "Congrats, you found your hat!")
            isPlaying = false;      
        }
         //if pathcharacter moves out of bounds the 10x10 field game ends
        else if (characterRow < 0 || characterCol < 0 || characterRow > 10 || characterCol > 10) {
            
            console.log( "Out of bounds - Game End!")
            isPlaying = false;      
        }
        else{
            askQuestion();
        }
       
    }
}


generateField(); 
startingPoint();  
randomHat();
randomHoles() ;
startGame();      


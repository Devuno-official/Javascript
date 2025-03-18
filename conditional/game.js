/*
 Description :
 * @game.js   
 *   create a game where you start with any random game number. Ask the user to keep 
 *   guessing the game number unit user enters correct number value.
 *
 *
*/
 // do with for-while statement
  var userNum = prompt("solve a puzzula, enter the correct number");
  let gameNum = 25 ;
  while(userNum != gameNum){
     userNum = prompt("Sorry , this is not a correct number , try again");
  }
        console.log("congratulations , You solve this puzzula");


s

// // do this with if statement 
// let x = prompt("solve a puzzula, enter the correct number");
//  if (x == 5  || x == 25 || x == 50 || x == 75 || x == 99) {
//                    console.log("wow,YOU break the Puzzula");
//  }else{
//           console.warn("Sorry,this is not a correct value,try again");
//  }
//       console.trace("thanks for playing game");
// function mySum(){
//     let x = 2 + 2
//     console.log(x);
// }
// mySum ();


// let help = 0 ;
// const myFunc = function () {
// help = 3 * 3;
// console.log(help);

// };
// help();


// function theReturningSum(num1, num2, num3) {
//     let sum = num1 + num2 ;
//     let sumDivided = sum / num3 ;
//     return sumDivided;
// }
// console.log(theReturningSum(30,30,3));

// function yourName ()
// { let user= prompt ("what is your name")
//     return document.write(userColor)
// }



// function timeOfDay (){
//     let time = prompt ("what hour is it")
//     let location = prompt ("what country are you in")
//     let message = ""
// if (time <= 11){
//     message = "good morning";
// }
// else if (time <= 18 || location ==="England") {
//     message="Good afternoon";
// }
// else{
//     message= "yo, thats not a time dude";
// }
// return document. write(message);
//     return document.write(time);
// }


// //while
// let answer;
// while (answer != 7) {
//   answer = prompt("Guess a number between 1 and 10");
//   if (answer != 7) {
//     alert("try again");
//   } else {
//     alert("congratulations");
//   }
// }


// let answer1= confirm ("Are you ready to rumble?" );
// console.log(answer1);

// if (answer1){
//     console.log("lets get ready");}
//     else{
//         console.log("jab jab right hook");
//     }



//     let color = prompt("what is your fav color?")

//     switch (color.toLocaleLowerCase()){
//         case"red" :
//         console.log("your fave color is red");
//         break;
//         case"blue";
//         console.log("your fave is blue");
//     }




//      const number = 5;
//   let attempts =5;
// let answer = prompt("Guess a number between 1 and 10");
//   for (let i = 0; i < attempts; i--) {
// if (i === 0) {alert("sorry you are out of attempts");
// break;
// }
//   }

//   if (answer < number ) {
//     alert("try again,too low.");}
//     else if (answer>number){ alert("try again,too high.");
//   } else { 
//     points ++;
//     alert("Are you a mind reader?");
// }
// });





// btnSecond.addEventListener("click", function () {

//   function startGame() {

//   attempts = 0;
//   makeGuess();

// }
// function makeGuess() {
//   const guess = parseInt(prompt("Guess a number between 1 and 20:"));


// if (guess < num) {
//     alert("too low, please try again input.");
//     makeGuess();
//     return;
//   }
  
//   attempts++;

//   if (guess === num) {
//     alert(`Congratulations! You guessed the correct number in ${attempts} attempts.`);
//   } 
//   else if (attempts === maxAttempts) {
//     alert("Game over!");
//   }
//    else {
//     alert("Too high!");
//     makeGuess(); }
//    }
//    startGame();


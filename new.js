function mySum(){
    let x = 2 + 2
    console.log(x);
}
mySum ();


let help = 0 ;
const myFunc = function () {
help = 3 * 3;
console.log(help);

};
help();


function theReturningSum(num1, num2, num3) {
    let sum = num1 + num2 ;
    let sumDivided = sum / num3 ;
    return sumDivided;
}
console.log(theReturningSum(30,30,3));

function yourName ()
{ let user= prompt ("what is your name")
    return document.write(userColor)
}



function timeOfDay (){
    let time = prompt ("what hour is it")
    let location = prompt ("what country are you in")
    let message = ""
if (time <= 11){
    message = "good morning";
}
else if (time <= 18 || location ==="England") {
    message="Good afternoon";
}
else{
    message= "yo, thats not a time dude";
}
return document. write(message);
    return document.write(time);
}


//while
let answer;
while (answer != 7) {
  answer = prompt("Guess a number between 1 and 10");
  if (answer != 7) {
    alert("try again");
  } else {
    alert("congratulations");
  }
}
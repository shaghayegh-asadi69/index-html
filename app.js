//const welcomingMsg = alert("Welcome to my page ");
//console.log(welcomingMsg);


let text;
if (confirm("Do you want to join us on instagram?!") == true) {
  document.write = "Yeeey welcome!";
} else {
  text = "You canceled!";
}



let userColor = prompt("Choose a color!")

document.body.style.color = userColor;
console.log(userColor);

if (userColor === "pink") {document.write("same here")}



let answer;
while (answer != 7) {
  answer = prompt("Guess a number between 1 and 10");
  if (answer != 7) {
    alert("try again");
  } else {
    alert("congratulations");
  }
}




let userColor = prompt("Choose a color!")

document.body.style.backgroundColor = userColor;
console.log(userColor);

if (userColor === "pink") {document.write("same here")};

const welcomingMsg = alert("Welcome to my page ");
console.log(welcomingMsg);

//document.write("Hello " + userName + " thank you for trying to save our World");

let text;
if (confirm ("Are you Sure You Want To Continue?!") == true) {
 text = "You pressed OK!";
} else {
  text = "You canceled!";}


  //loops

  let myPets = ["dog","cat","goldfish"]

  for(let i = 0; i < myPets.length; i ++){
    console.log("I love my pet " + myPets[i]);
  }


  //while condition

let answer
while (answer != 7) {
  answer= prompt ("Guess a number between 1 and 10")
  if (answer != 7){
    alert("try again")
  } else{
    alert( "congratulations")
  }
}




function displayRating(){
  let output = ""
  let rating = prompt(
    "on a scale of 1 - 5, how much do you rate this page? "
  )
  for (let i = 0; i < rating; i++){
    output += "<img src='./star.jpg' alt= 'star rating'>"
  }
  return document.write(output)
}
// Class imported
const cards = document.querySelectorAll(".cards"),
  opponentChoiceText = document.querySelector(".opponent-choice"),
  resultText = document.querySelector(".result");

// Creation of the variables
let userChoice = "",
  opponentChoice = "",
  opponentChoiceNumber;

// For each of the choices, we apply the eventListener
for (let i = 0; i < 3; i++) {
  cards[i].addEventListener("click", () => {
    for (let a = 0; a < 3; a++) {
      cards[a].style.fontWeight = "normal";
    }
    cards[i].style.fontWeight = "bold";
    userChoice = cards[i].textContent.slice(2); //2 because a special caracter takes the space of 2 caracters.

    opponentChoiceNumber = Math.floor(Math.random() * 3); //choses a number between 0 and 2

    //links the random number to a text :
    if (opponentChoiceNumber == 0) {
      opponentChoice = "🪨rock";
    } else if (opponentChoiceNumber == 1) {
      opponentChoice = "📜paper";
    } else {
      opponentChoice = "✂️scissors";
    }
    opponentChoiceText.textContent = opponentChoice; //applies the text to the <p> in the HTML

    resultText.classList.add("result-active"); //adds an animation to the result then remove it at the end
    setTimeout(() => {
      resultText.classList.remove("result-active");
    }, 300);

    if (userChoice == opponentChoice.slice(2)) {
      //if the text is the same, then the result is equal
      resultText.textContent = "EQUAL!";
      resultText.style.color = "yellow";
    } else if (
      //just applying the rules of the game here ▼ ▼ ▼
      (userChoice == "scissors" && opponentChoice == "📜paper") ||
      (userChoice == "rock" && opponentChoice == "✂️scissors") ||
      (userChoice == "paper" && opponentChoice == "🪨rock")
    ) {
      resultText.textContent = "WIN!";
      resultText.style.color = "lightGreen";
    } else {
      // and if it is anything else, you lose
      resultText.textContent = "LOSE!";
      resultText.style.color = "pink";
    }
  });
}
//A really simple code, but nice to train yourself into learning JS, really liked it!

var readlineSync = require('readline-sync');
var userName = readlineSync.question('Hi! Whats your name? ');
console.log("Welcome " + userName);
var score = 0
var userQues = readlineSync.question('Do you want to play a quiz? (say yes or no)');
if (userQues === "yes") {

  var ques = [
    {
      question: "What country has the highest life expectancy? ",
      answer: "Hongcong"
    },
    {
      question: "Where would you be if you were standing on the Spanish Steps? ",
      answer: "Rome"
    },
    {
      question: "What is the most common surname in the United States? ",
      answer: "Smith"
    },// {
    //   question: "What disease commonly spread on pirate ships? ",
    //   answer: "Scurvy"
    // }, {
    //   question: "Who was the Ancient Greek God of the Sun? ",
    //   answer: "Apollo"
    // }, {
    //   question: "What was the name of the crime boss who was head of the feared Chicago Outfit? ",
    //   answer: "Al Pocono"
    // }, {
    //   question: "What year was the United Nations established? ",
    //   answer: "1945"
    // }, {
    //   question: "Who has won the most total Academy Awards? ",
    //   answer: "Walt Disney"
    // }, {
    //   question: "What artist has the most streams on Spotify? ",
    //   answer: "Drake"
    // }
  ]

  for (var i = 0; i < ques.length; i++) {
    var currQues = ques[i];
    game(currQues.question, currQues.answer)
  }
  
  var highestScore = 3;
  console.log("Highest score is ", highestScore);
  if (highestScore ===  score) {
    console.log("congratulations you are the high scorer")
  }
} else {
  console.log("EXIT GAME")
}


function game(question, answer) {
  var userResponse = readlineSync.question(question);
  if (userResponse === answer) {
    console.log("Right!");
    score = score + 1;
  } else {
    console.log("Wrong!")
  }
  console.log("Your score is ", score);
}


// game("where do i live?", "Bangalore");







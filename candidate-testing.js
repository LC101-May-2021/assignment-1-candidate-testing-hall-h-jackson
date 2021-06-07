const input = require('readline-sync');


// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = '';
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5+3)/2*10=? ", "Given the array [8, 'Orbit', 'Trajectory', 45]. what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];

let ca = 0;
// let score = (ca/questions.length)*100;



function askForName() {
    candidateName = input.question("What is your name? ");
    
}

 

function askQuestion() {
  for (let i = 0; i < questions.length; i++) {
      candidateAnswers.push(input.question(questions[i]));
  }
}



function gradeQuiz(questions) {
     for (let i = 0; i < candidateAnswers.length; i++) {
        if (candidateAnswers[i].toLowerCase()===correctAnswers[i].toLowerCase()) {
          ca++
        }
     }
}






function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("Hello " + candidateName + ".");

  askQuestion();
  console.log(candidateAnswers);
  gradeQuiz(this.candidateAnswers);
  console.log(ca);
  
4
  let score = (ca/questions.length)*100;

  console.log(score);  
}



// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
}


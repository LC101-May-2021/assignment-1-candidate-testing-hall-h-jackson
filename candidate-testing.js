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
  console.log("Hello " + candidateName + ".");

  askQuestion();
  gradeQuiz(this.candidateAnswers);
 
  
let score = (ca/questions.length)*100;

  if (score < 80) {
    console.log("\n\nCandidate Name: ", candidateName,"\n1) ", questions[0], "\nYour Answer: ", candidateAnswers[0], "\nCorrect Answer: ", correctAnswers[0], "\n\n2) ", questions[1], "\nYour Answer: ", candidateAnswers[1], "\nCorrect Answer: ", correctAnswers[1], "\n\n3) ", questions[2], "\nYour Answer: ", candidateAnswers[2], "\nCorrect Answer: ", correctAnswers[2], "\n\n4) ", questions[3], "\nYour Answer: ", candidateAnswers[3], "\nCorrect Answer: ", correctAnswers[3], "\n\n5) ", questions[4], "\nYour Answer: ", candidateAnswers[4], "\nCorrect Answer: ", correctAnswers[4], "\n\n>>> Overall Grade: ", score, "% (", ca, "of 5 responses correct) <<<\n>>> Status: FAILED <<<")
  } else {
    console.log("\n\nCandidate Name: ", candidateName,"\n1) ", questions[0], "\nYour Answer: ", candidateAnswers[0], "\nCorrect Answer: ", correctAnswers[0], "\n\n2) ", questions[1], "\nYour Answer: ", candidateAnswers[1], "\nCorrect Answer: ", correctAnswers[1], "\n\n3) ", questions[2], "\nYour Answer: ", candidateAnswers[2], "\nCorrect Answer: ", correctAnswers[2], "\n\n4) ", questions[3], "\nYour Answer: ", candidateAnswers[3], "\nCorrect Answer: ", correctAnswers[3], "\n\n5) ", questions[4], "\nYour Answer: ", candidateAnswers[4], "\nCorrect Answer: ", correctAnswers[4], "\n\n>>> Overall Grade: ", score, "% (", ca, "of 5 responses correct) <<<\n>>> Status: PASS <<<")
  }

 
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


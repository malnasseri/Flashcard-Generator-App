// Require the 'inquirer' npm
var inquirer = require("inquirer");


//importing our instructors
var flashCards = require("./flashCards.js");
//importing our questions
var questions = require("./questions.js").questions;

//creating a variable that holds the current questions
var currentQuestion = 0;
//creating a variable that holds the right answers
var answerRight = 0;
//creating a variable that holds the wrong answers
var answerWrong = 0;

//creating an array that holds cloze questions
var clozeQuestions = []; 
//for loop that loops through questions 
for (var i = 0; i < questions.length; i++) {
			//creating a variable that holds cloze-deleted questions
			var q = new flashCards.ClozeCard(questions[i].full, questions[i].cloze);
				//pushing to the array
				clozeQuestions.push(q);
}

	//creating a function that's going to ask a question
 function askQuestion() {
 	//using inquirer to display the question and at the same time take the answer as input
	inquirer.prompt([
		{
			type: 'input',
			message: clozeQuestions[currentQuestion].partial + '\nAnswer: ',
			name: 'userAnswer'
		}
	]).then(function (answers) {
		console.log('\n');

		// Check if the user answered correctly
		if (answers.userAnswer.toLowerCase() === clozeQuestions[currentQuestion].cloze.toLowerCase()) {

			console.log('Your Answer is Correct!');
			answerRight++;

		} 
		else {

					console.log('Nope, Your Answer is Incorrect!');
					answerWrong++;
		}

				// This will display the correct answer
				console.log(clozeQuestions[currentQuestion].full);
				console.log('-------------------------------------\n');


		if (currentQuestion < clozeQuestions.length - 1) {
			currentQuestion++;

					askQuestion();

		} 

		else {

					console.log('Game Over!');
					console.log('-------------------------------------\n');
					console.log("Here is your Answers: ")
					console.log('-------------------------------------\n');
					console.log('Correct Answers: ' + answerRight);
					console.log('Incorrect Answers: ' + answerWrong);

					console.log('-------------------------------------\n');


			//creating a prompt inquirer function that asks the user if they want to play again		
		inquirer.prompt([

						{
							type: 'confirm',
							message: 'Play Again?',
							name: 'playAgain'
						}

		]).then(function (answers) {

				// if user chose play again
				if (answers.playAgain) {
					//reset our counters
					currentQuestion = 0;
					answerRight = 0;
					answerWrong = 0;

					//call the function to start the questions
					askQuestion();	

				} 
				else {
					// if user answered no to play again 
					console.log("See You Next Time pal!");

				}
		})

		}


})
}

askQuestion();

         




var quizElements = document.getElementById('quiz');
var resultsElements = document.getElementById('results');
var submitButton = document.getElementById('submit');

displayQuiz(quizElements, resultsElements, submitButton);
function displayQuiz(quizElements, resultsElements, submitButton) {
	var questions = [
		{
			question: "1. Number of primitive data types in Java are?",
			answers: {
				a: '6',
				b: '7',
				c: '8',
				d: '9'
			},
			correctAnswer: 'b'
		},
		{
			question: "2. Which of the below is valid way to instantiate an array in java?",
			answers: {
				a: 'int myArray [] = {1, 3, 5};',
				b: 'int myArray [] [] = {1,2,3,4};',
				c: 'int [] myArray = (5, 4, 3);',
				d: 'int [] myArray = {“1”, “2”, “3”};'
			},
			correctAnswer: 'a'
		},
		{
			question: "3. Which of the below are not core concepts of OOPS?",
			answers: {
				a: 'Abstraction',
				b: 'Inheritance',
				c: 'Generics',
				d: 'Polymorphism'
			},
			correctAnswer: 'c'
		},
		{
			question: "4. What is the size of float and double in java?",
			answers: {
				a: '32 and 64',
				b: '32 and 32',
				c: '64 and 64',
				d: '64 and 32'
			},
			correctAnswer: 'a'
		},
		{
			question: "5. Automatic type conversion is possible in which of the possible cases?",
			answers: {
				a: 'byte to int',
				b: 'int to long',
				c: 'long to int',
				d: 'short to int'
			},
			correctAnswer: 'b'
		},
		{
			question: "6. When an array is passed to a method, what does the method receive?",
			answers: {
				a: 'The reference of the array',
				b: 'A copy of the array',
				c: 'Length of the array',
				d: 'Copy of first element'
			},
			correctAnswer: 'a'
		},
		{
			question: "7. Automatic type conversion is possible in which of the possible cases?",
			answers: {
				a: 'Byte to int',
				b: 'Int to long',
				c: 'Long to int',
				d: 'Short to int'
			},
			correctAnswer: 'b'
		},
		{
			question: "8. Arrays in java are ",
			answers: {
				a: 'Object references',
				b: 'Objects',
				c: 'Primitive data type',
				d: 'None'
			},
			correctAnswer: 'b'
		},
		{
			question: "9. When is the object created with new keyword?",
			answers: {
				a: 'At run time',
				b: 'At compile time',
				c: 'Depends on the code',
				d: 'None'
			},
			correctAnswer: 'a'
		},
		{
			question: "10. compareTo() returns",
			answers: {
				a: 'boolean value',
				b: 'int value',
				c: 'String value',
				d: 'None'
			},
			correctAnswer: 'b'
		}
	];
	showQuestions(questions, quizElements);
	submitButton.onclick = function() {
		displayResults(questions, quizElements, resultsElements);
	}
}

function showQuestions(questions, quizElements) {
	var output = [];
	var answers;

	for (var i = 0; i < questions.length; i++) {
		answers = [];
		for (letter in questions[i].answers) {
			if (letter == questions[i].correctAnswer) {
				answers.push(
					'<div class="right">'
					+ '<input type="radio" name="question' + i + '" value="' + letter + '">  '
					+ questions[i].answers[letter]
					+ '</div>'
				);
			}
			else {
				answers.push(
					'<div>'
					+ '<input type="radio" name="question' + i + '" value="' + letter + '">  '
					+ questions[i].answers[letter]
					+ '</div>'
				);
			}
		}
		output.push(
			'<div class="MCQ"><div class="question">' + questions[i].question + '</div>'
			+ '<div class="option">' + answers.join('') + '</div></div>'
		);
	}
	quizElements.innerHTML = output.join(' ');
	return quizElements;

}

function displayResults(questions, quizElements, resultsElements) {

	var answerElements = quizElements.querySelectorAll('.option');
	var correctAnswer = quizElements.querySelectorAll('.right');
	//var optionChoosen;
	var userAnswer = '';
	var score = 0;

	for (var i = 0; i < questions.length; i++) {
		userAnswer = (answerElements[i].querySelector('input[name="question' + i + '"]:checked')).value;
		//optionChoosen = answerElements[i].querySelector('input[name="question' + i + '"]:checked');
		if (userAnswer === questions[i].correctAnswer) {
			score++;
		}
	}
	//for (var i = 0; i < questions.length; i++) {
	//	optionChoosen[i].style.color = 'red';
	//}
	for (var i = 0; i < questions.length; i++) {
		correctAnswer[i].style.color = 'lightgreen';
	}
	
	resultsElements.innerHTML = 'You have got ' + score + ' answers correct';
	documents.write('<div class="modal-container"><div class="model">Score<button id="close">ok</button></div></div>');

}
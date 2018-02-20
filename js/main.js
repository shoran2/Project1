
// Defines what to do when surveySubmit() mechanic is triggered through the HTML document.
function surveySubmit() {
// Creates a variable to hold the number of correct answers.
	var userScore = 0;
// Question 1
	// Creates a variable linked to the section of radio buttons. Determines which radio button is checked by the user, and holds that value until called on to write it to the HTML document.
	var q1 = document.querySelector('input[name="question1"]:checked').value;
	if (q1 == 1) {
		document.querySelector('.quest1').
			innerHTML = 'Family Guy';
	}
	else if (q1 == 2) {
		userScore = userScore + 1;
		document.querySelector('.quest1').
			innerHTML = 'The Walking Dead';
	}
	else if (q1 == 3) {
		document.querySelector('.quest1').
			innerHTML = 'The Sopranos';
	}
	else {
		document.querySelector('.quest1').
			innerHTML = 'Please pick one.';
	}

// Question 2
	var q2 = document.querySelector('input[name="question2"]:checked').value;
	if (q2 == 1) {
		userScore = userScore + 1;
		document.querySelector('.quest2').
			innerHTML = 'Glee';
	}
	else if (q2 == 2) {
		document.querySelector('.quest2').
			innerHTML = 'This Is Us';
	}
	else if (q2 == 3) {
		document.querySelector('.quest2').
			innerHTML = 'Altered Carbon';
	}
	else {
		document.querySelector('.quest2').
			innerHTML = 'Please pick one.';
	}

// Question 3
	var q3 = document.querySelector('input[name="question3"]:checked').value;
	if (q3 == 1) {
		userScore = userScore + 1;
		document.querySelector('.quest3').
			innerHTML = 'The Bachelor';
	}
	else if (q3 == 2) {
		document.querySelector('.quest3').
			innerHTML = 'Game of Thrones';
	}
	else if (q3 == 3) {
		document.querySelector('.quest3').
			innerHTML = 'The Vikings';
	}
	else {
		document.querySelector('.quest3').
			innerHTML = 'Please pick one.';
	}

// Question 4
	var q4 = document.querySelector('input[name="question4"]:checked').value;
	if (q4 == 1) {
		userScore = userScore + 1;
		document.querySelector('.quest4').
			innerHTML = 'The Big Bang Theory';
	}
	else if (q4 == 2) {
		document.querySelector('.quest4').
			innerHTML = 'Greys Anatomy';
	}
	else if (q4 == 3) {
		document.querySelector('.quest4').
			innerHTML = 'Black Mirror';
	}
	else {
		document.querySelector('.quest4').
			innerHTML = 'Please pick one.';
	}

// Question 5
	var q5 = document.querySelector('input[name="question5"]:checked').value;
	if (q5 == 1) {
		document.querySelector('.quest5').
			innerHTML = 'Shameless';
	}
	else if (q5 == 2) {
		document.querySelector('.quest5').
			innerHTML = 'The Flash';
	}
	else if (q5 == 3) {
		userScore = userScore + 1;
		document.querySelector('.quest5').
			innerHTML = 'The Voice';
	}
	else {
		document.querySelector('.quest5').
			innerHTML = 'Please pick one.';
	}

// Question 6
	var q6 = document.querySelector('input[name="question6"]:checked').value;
	if (q6 == 1) {
		document.querySelector('.quest6').
			innerHTML = 'Spiderman';
	}
	else if (q6 == 2) {
		userScore = userScore + 1;
		document.querySelector('.quest6').
			innerHTML = 'Frozen';
	}
	else if (q6 == 3) {
		document.querySelector('.quest6').
			innerHTML = 'Dunkirk';
	}
	else {
		document.querySelector('.quest6').
			innerHTML = 'Please pick one.';
	}

// Question 7
	var q7 = document.querySelector('input[name="question7"]:checked').value;
	if (q7 == 1) {
		userScore = userScore + 1;
		document.querySelector('.quest7').
			innerHTML = 'Fast and Furious 7';
	}
	else if (q7 == 2) {
		document.querySelector('.quest7').
			innerHTML = 'Pirates of the Carribean';
	}
	else if (q7 == 3) {
		document.querySelector('.quest7').
			innerHTML = 'Wonder Woman';
	}
	else {
		document.querySelector('.quest7').
			innerHTML = 'Please pick one.';
	}

// Question 8
	var q8 = document.querySelector('input[name="question8"]:checked').value;
	if (q8 == 1) {
		document.querySelector('.quest8').
			innerHTML = 'Jigsaw';
	}
	else if (q8 == 2) {
		document.querySelector('.quest8').
			innerHTML = 'The Girl on the Train';
	}
	else if (q8 == 3) {
		userScore = userScore + 1;
		document.querySelector('.quest8').
			innerHTML = 'Godzilla';
	}
	else {
		document.querySelector('.quest8').
			innerHTML = 'Please pick one.';
	}

// Question 9
	var q9 = document.querySelector('input[name="question9"]:checked').value;
	if (q9 == 1) {
		document.querySelector('.quest9').
			innerHTML = 'Mr. Fox';
	}
	else if (q9 == 2) {
		document.querySelector('.quest9').
			innerHTML = 'Moonrise Kingdom';
	}
	else if (q9 == 3) {
		userScore = userScore + 1;
		document.querySelector('.quest9').
			innerHTML = 'Napoleon Dynamite';
	}
	else {
		document.querySelector('.quest9').
			innerHTML = 'Please pick one.';
	}

// Question 10
	var q10 = document.querySelector('input[name="question10"]:checked').value;
	if (q10 == 1) {
		userScore = userScore + 1;
		document.querySelector('.quest10').
			innerHTML = 'Harrison Ford';
	}
	else if (q10 == 2) {
		document.querySelector('.quest10').
			innerHTML = 'Carrie Fisher';
	}
	else if (q10 == 3) {
		document.querySelector('.quest10').
			innerHTML = 'Mark Hamill';
	}
	else {
		document.querySelector('.quest10').
			innerHTML = 'Please pick one.';
	}

// Writes the amount of correct answers to the DOM.
document.querySelector('.uScore').
			innerHTML = userScore + ' ' + '/ 10';

}
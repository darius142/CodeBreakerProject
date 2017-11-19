let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
	let input = document.getElementById('user-guess');

	// 8 Only set the answer and attempt hidden inputs when they aren't already set
	if(answer.value === '' || attempt.value === ''){
		setHiddenFields();
	}

	// 11 Call the validateInput function from the guess function
	if(!validateInput(input.value)){
		return;
	} 
	attemot.value++;

	// 14 Setup Win Condition
	if(getResults(input.value)){
		setMessage("You Win! :)");
		// 19 Add showAnswer and showReplay to Win / Lose Conditions
		showAnswer(true);
		showReplay();
		// 15 Setup Lose Condition
	} else if(attempt.value >= 10) {
		setMessage("You Lose! :(");
		showAnswer(false);
		showReplay();
		// 16 Continue Play Condition
	} else {
		setMessage("Incorrect, try again.");
	}
}

// 5 Create setHiddenFields Function
function setHiddenFields(){
	var answer.value = Math.floor(Math.random() * 10000).toString();
	
	//6 Make sure the hidden input answer's value is exactly 4 characters long
	while(answer.value.length < 4){
		answer.value = '0' + answer.value;
	} 
	console.log(answer.length);
	console.log(answer);

	// 7 Set the hidden input attempt's value to zero
	attempt.value = 0;
};

// 9 Create setMessage function
function setMessage(message){
	document.getElementById('message').innerHTML = message;
};

// 10 Create validateInput function
function validateInput(input){
	if(param.length !== 4){
		setMessage("Guesses must be exactly 4 characters long.");
		return false;
	}
	return true;
};

// 12 Create getResults function
function getResults(input) {
	let html = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';
	for(i = 0; i < input.length < 4; i++){
		if(input.charAt(i) == answer.value.charAt(i)) {
			html += '<span class="glyphicon glyphicon-ok"></span>';
		} else if(answer.value.indexOf(input.charAt(i)) > -1) {
			html += '<span class="glyphicon glyphicon-transfer"></span>';
		} else {
			html += '<span class="glyphicon glyphicon-remove"></span>';
		}
	}
	html += '<div></div>'
	document.getElementById('results').innerHTML += html;

	// 13 Check for correct guess
	if(input === answer.value){
		return true;
	}
	return false;
};

// 17 Create a showAnswer function
function showAnswer(success) {
	let code = document.getElementById('code');
	if(success) {
		code.className += ' success';
	} else {
		code.className += ' failure';
	}
	code.innerHTML = answer.value;
};

//18 Create a showReplay function
function showReplay() {
	document.getElementById('guessing-div').style.display = 'none';
	document.getElementById('replay-div').style.display = 'block';
};



//Array for functions of crystals, variables for crystals (store a random function from crystalFunctions inside of each upon reset)
//Variables for scores, wins, losses

$(document).ready(function() {
	var amethyst;
	var ruby;
	var quartz;
	var bismuthh;
	var arrayNum=[1, 2, 3, 4];
	var targetScore=0;
	var currentScore=0;
	var crystalFunctions=[
		function addFive(){
			currentScore+=5;
			$('#currScore').html(currentScore);
			},
		function addThree(){
			currentScore+=3;
			$('#currScore').html(currentScore);
			},
		function addTwo(){
			currentScore+=2;
			$('#currScore').html(currentScore);
			},
		function doubleScore(){
			currentScore*=2;
			$('#currScore').html(currentScore);
			} ];
	var wins = 0;
	var losses = 0;



//imported from the internets; get a random number between (including) min and max
	function getRandomIntInclusive(min, max) {
  		min = Math.ceil(min);
  		max = Math.floor(max);
  		return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
	}

	function newTarget() {
		targetScore = getRandomIntInclusive(19, 120);
	}

	function setTarget() {
		$("#targScore").html(targetScore);
	}

//Would I be able to reference this in one of the functions within the crystalFunctions array that was previously declared?
	function setCurrent () {
		$("#currScore").html(currentScore)
	}


//Assign functions randomly to the gems from crystalFunctions;
//Couldn't quite get this function to work. Not sure if I was inserting the functions into variables incorrectly or if that's just a no-no in general

	function setFunct(){
		for (var i = 0; i < 4; i++) {
			//function that pulls a random number (Math.floor(Math.random()*arrayNum.length)) out of arrayNum and stores into temporary var
			var randVar = arrayNum.splice(Math.floor(Math.random()*arrayNum.length), 1);

			//if statements, each of the crystal functions is assigned to 0-3 in array; (if randVar = 1, store crystalFunctions[i] into first crystal)
			if (randVar === 1) {
				amethyst = crystalFunctions[i];
			}
			else if (randVar === 2) {
				ruby = crystalFunctions[i];
			}
			else if (randVar === 3) {
				quartz = crystalFunctions[i];
			}
			else if (randVar === 4) {
				bismuth = crystalFunctions[i];
			} 
		}
	}

//Reset game
	function reset() {
		newTarget();
		setTarget();
		currentScore=0;
		setCurrent();
		setFunct();

	}

	// reset();
//Wins and losses both cap at 5
//Functions for a round win or loss
	function win(){
		wins++;
		alert("You won this round!");
		$("winCount").text(wins);
			if(wins===5){
				alert("You have won the game!");
				reset();
			}
	}

	function loss() {
		losses++;
		alert("You lost this round!");
		$("loseCount").text(losses);
			if(losses===5){
				alert("You have lost the game. :(")
				reset();
			}
	}
//If currentScore === targetScore, WIN!

//If currentScore > targetScore, LOSE

//Each gem (onclick) modifies currentScore
//	$("#id").on("click", function() {
//		something;	
//		})
//Clicking will also compare current score against the target, notifying user of a win or loss
	$("#amethyst").on('click', function () {
		amethyst();
		if(currentScore===targetScore){
			win();
		}
		if (currentScore > targetScore) {
			lose();
		}
	});

	$("#ruby").on('click', function() {
		ruby();
		if(currentScore===targetScore){
			win();
		}
		if (currentScore > targetScore) {
			lose();
		}
	});

	$("quartz").on('click', function() {
		quartz();
		if(currentScore===targetScore){
			win();
		}
		if (currentScore > targetScore) {
			lose();
		}
	});

	$("bismuth").on('click', function() {
		bismuth();
		if(currentScore===targetScore){
			win();
		}
		if (currentScore > targetScore) {
			lose();
		}
	});


});
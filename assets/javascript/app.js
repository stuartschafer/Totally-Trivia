$(document).ready(function() {

var questions = ["1. How do crickets hear?",
"2. Which American city invented plastic vomit?",
"3. The electric chair was invented by...", 
"4. What was Karl Marx's favorite color?",
"5. What's the best way to stop crying while peeling onions?",
"6. How old was the youngest Pope?",
"7. Which animal sleeps for only five to thirty minutes a day?",
"8. How many words in the English language end in 'dous'?",
"9. One human hair can support how many kilograms?",
"10. The bikini was originally called the what?",
"1. Which hit song featured the following lyric - The love we share seems to go nowhere and I’ve lost my light",
"2. Who sang the title track of the late 80s James Bond film Licence to Kill?",
"3. The Magic Number was a 1989 hit for the band De La Soul. Which album of theirs did it appear on?",
"4. Which Duran Duran song opened with a sample of laughter from the keyboardist’s girlfriend?",
"5. Now known as a songwriter of hits like the Britney Spears song Toxic, Cathy Dennis was once a solo artist. Which 80s song marked her debut?",
"6. ‘Need You Tonight’ was released by which rock band?",
"7. Which Peter Gabriel song was not a gigantic hit in the 80s?",
"8. Which female singer was responsible for the song Could’ve Been?",
"9. Which Eurythmics song featured the lead singer entering a derelict cottage in a nightgown?",
"10. Which Roxette song featured the line - 'I'm not afraid, a trembling flower, I'll feed your heart and blow the dust from your eyes'",
"1. Trabzon is a coastal city in north-eastern Turkey. Which sea does it border?",
"2. Which country contains the most languages?",
"3. Which is the youngest American city?",
"4. The Nile River is the longest river in the world (at 4,160 miles). Which one’s the next longest?",
"5. What do Grenada and Costa Rica have in common?",
"6. Ouagadougou is the capital city of which African country?",
"7. As of July 2011, Kosovo and the Vatican City are still not members of the United Nations. Who else isn't?",
"8. The second longest coastline, after Canada, is where?",
"9. Which country actually has the world’s longest official name (except it’s known by a shortened version)?",
"10. Which one of these countries is NOT landlocked?" ];

var answers = [3,1,2,3,4,1,3,2,1,4,
			   2,3,1,2,2,3,1,4,1,3,
			   2,1,2,3,1,2,2,4,1,4];

var answerInfo = ["Crickets use a type of ear drum on the front of their legs to feel the vibration from sounds.",
"Fake vomit was designed in the 1950s by an employee of Marvin Glass and Associates, the design company that also created Chattery Teeth",
"In 1881, Alfred Southwick conceived the idea of electrical execution when he heard the story of an intoxicated man who touched a live electric generator. Given that the man died so quickly, Southwick concluded that electricity could be used as an alternative to hanging for executions.",
"Marx's own 'Confessions,' written in answer to a parlor game interview by his daughters sometime in the 1860s",
"Chewing gum while cutting onions prevents tears by forcing you to breathe through your mouth. This disperses the irritant so that a significantly smaller amount reaches the lachrymal glands, preventing them from being irritated enough to release tears.",
"The youngest popes was Pope Benedict IX (pope three times finally ending in 1048), who became pope at the estimated age of 11",
"Getting up once they lie down could take precious seconds and make them incredibly vulnerable to predators like lions and crocodiles. These tall mammals have therefore evolved to have very skimpy sleep needs.",
"Those words are: tremendous, horrendous, stupendous, and hazardous", "The combined hair of a whole head could support 12 tonnes, or the weight of two elephants.",
"French engineer Louis Reard introduced the modern bikini, modeled by Micheline Bernardini, on July 5, 1946, borrowing the name for his design from the Bikini Atoll, where post-war testing on the atomic bomb was happening.",
"Soft Cell", "Gladys Knight", "De La Soul", "Duran Duran", "Cathy Dennis", "INXS",
"Peter Gabriel", "Tiffany", "Eurythmics", "Roxette",
"The Black Sea", "Papua New Guinea", "Jacksonville, NC", "The Amazon River", "Army-less",
"Burkina Faso", "Taiwan", "Indonesia", "Al Jumahiriyah al Arabiyah al Libiyah ash Shabiyah al Ishtirakiyah al Uzma",
"Croatia" ]

var answerPic = ["cricket.jpg", "vomit.jpg", "electricchair.gif",
"marx.jpg", "onions.jpg", "pope.jpg", "giraffe.jpg", "english.jpg", "hair.jpg", "bikini.jpeg",
"softcell.jpg", "gladysknight.jpg", "delasoul.png", "duranduran.jpg", "cathydennis.jpeg",
"inxs.jpg", "petergabriel.png", "tiffany.jpg", "eurythmics.jpeg", "roxette.jpg",
 "blacksea.png", "papuanewguinea.gif", "jacksonville.gif", "amazonriver.jpg", "armyless.jpg",
 "burkinafaso.jpg", "taiwan.png", "indonesia.png", "libya.jpg", "croatia.jpg"]

var boxOneChoices = ["Through their wings", "Chicago", "A boxer", "Brown", "Lick almonds", "11",
"Chameleon", "Two", "Three", "Poke",
"Teardrops", "Tina Turner", "3 Feet High and Rising", "Is There Something I Should Know?",
"Pump Up the Volume", "The Cure", "Red Rain", "Debbie Gibson", "Here Comes the Rain Again",
"Listen to Your Heart",
"The Mediterranean Sea", "Papua New Guinea", "Killeen, TX", "Yangtze River", "They have no army",
"Chad", "Rwanda", "Chile", "Libya", "Zambia"];

var boxTwoChoices = ["Through their belly", "Detroit", "A dentist", "Blue", "Suck Lemons", "17", 
"Koala", "Four", "Five", "Range",
"Tainted Love", "Patti LaBelle", "Buhloone Mindstate", "Hungry Like the Wolf",
"C'mon and Get My Love", "Metallica", "Games Without Frontiers", "Paula Abdul",
"Right by Your Side", "The Look",
"The Black Sea", "China", "Jacksonville, NC", "Congo River", "They sit on the Equator",
"Burkina Faso", "Taiwan", "Australia", "Tajikistan", "Paraguay"];

var boxThreeChoices = ["Through their legs", "Columbus", "A receptionist", "Red", "Eat cheese",
"22", "Giraffe", "Six", "Seven", "Half",
"Love Action (I Believe In Love)", "Gladys Knight", "De La Soul Is Dead",
"Girls on Film", "Theme from S'Express", "INXS", "Don’t Give Up", "Belinda Carlisle",
"Would I Lie to You", "Dressed for Success",
"The Thracian Sea", "Australia", "Paramount, CA", "Amazon River", "Voted world’s best place to live",
"Eritrea", "Afghanistan", "Russia", "Guatemala", "Slovakia"];

var boxFourChoices = ["Through their tongue", "Baltimore", "A chemical engineer", "Purple", "Chew gum",
"29", "Beaver", "Eight", "Nine", "Atom",
"Superwoman", "Shirley Bassey", "The Grind State", "The Wild Boys", "It Doesn’t Have To Be", 
"Aerosmith", "Sledgehammer", "Tiffany", "Sweet Dreams (Are Made of This)", "Dangerous",
"The Balearic Sea", "Jamaica", "Layton, UT", "Hunang He", "Countries with the least crime",
"Djibouti", "El Salvador", "Indonesia", "Mongolia", "Croatia"];

var clap = new Audio("assets/audio/clap.wav");
var wrong = new Audio("assets/audio/wrong.mp3");

var i = 0;
var guess = 1;
var madeGuess = 0;
var time = 15;
var timeBetween = 6;
var wins = 0;
var losses = 0;
var unanswered = 0;
var timerExp = 0;

$(".begin").hide();
$(".answerConfirmation").hide();
$(".summary").hide();
$(".answer").hide();

// This is the category for USELESS TRIVIA
$("#useless").click(function() {
	$("body").css("background-image","url('assets/images/background.jpg')");
	$(".begin").fadeIn();
	$(".chooseGame").fadeOut("slow");
	$(".summary").hide();
	$(".answer").hide();
	nextQuestion();
	i = 0;
});

// This is the category for 80'S TRIVIA
$("#eighty").click(function() {
	$("body").css("background-image","url('assets/images/background3.jpg')");
	$(".begin").fadeIn();
	$(".chooseGame").fadeOut("slow");
	$(".summary").hide();
	$(".answer").hide();
	i = 10;
	nextQuestion();
});

// This is the category for GEOGRAPHY TRIVIA
$("#geography").click(function() {
	$("body").css("background-image","url('assets/images/background2.jpg')");
	$(".begin").fadeIn();
	$(".chooseGame").fadeOut("slow");
	$(".summary").hide();
	$(".answer").hide();
	i = 20;
	nextQuestion();
});

// This is when the user clicks on box 1 for a guess. 
// madeGuess is so the user cannot select another box.
$("#boxOne").click(function() {
	$("#timer").html("");
	if (madeGuess === 0) {
		guess = 1;
		madeGuess = 1;
		checkAnswer(); }
});

// This is when the user clicks on box 2 for a guess. 
// madeGuess is so the user cannot select another box.
$("#boxTwo").click(function() {
	$("#timer").html("");
	if (madeGuess === 0) {
		guess = 2;
		madeGuess = 1;
		checkAnswer(); }	
});

// This is when the user clicks on box 3 for a guess. 
// madeGuess is so the user cannot select another box.
$("#boxThree").click(function() {
	$("#timer").html("");
	if (madeGuess === 0) {
		guess = 3;
		madeGuess = 1;
		checkAnswer(); }
});

// This is when the user clicks on box 4 for a guess. 
// madeGuess is so the user cannot select another box.
$("#boxFour").click(function() {
	$("#timer").html("");
	if (madeGuess === 0) {
		guess = 4;
		madeGuess = 1;
		checkAnswer(); }
});

// This is so the buttons all look the same for each question.
$(".btn").mouseup(function() {
	$(this).blur();
});

// This starts the 20 second timer for each question
function timer () {
	intervalId = setInterval(count, 1000);
}

function count () {
	if (time === 0) { clearInterval(intervalId);
					  unanswered++;
					  timerExp = 1; 
					  checkAnswer(); }
	$("#timer").html(time);
	time--;
}

// This happens after each inBetween question timer and at the beginning of the game
function nextQuestion() {
	// This checks to see if 10 questions have been answered.
	if (wins + losses + unanswered === 10) { gameOver(); }
	else {	time = 15;
			madeGuess = 0;
			timeBetween = 6;
			$(".answerConfirmation").fadeOut();
			$(".btn-info").hide();
			$(".btn-info").css("background-color", "orange");
			$(".btn-info").fadeIn();
			$("#questionArea").text(questions[i]);
			$("#boxOne").text(boxOneChoices[i]);
			$("#boxTwo").text(boxTwoChoices[i]);
			$("#boxThree").text(boxThreeChoices[i]);
			$("#boxFour").text(boxFourChoices[i]);
			timer(); }
}

// This checks the user's guess and compares it to the answer.  
// Occurs after the user clicks a box, or time runs out.
function checkAnswer() {
	clearInterval(intervalId);	
	$("#timer").html("");
	if (guess === answers[i]) { clap.play();
								$(".bg-success").fadeIn();
								wins++; }
	else {	wrong.play();
			$(".bg-danger").fadeIn();
		// This cheecks to see if the user ran out of time.
		// If they did, then losses will not go up.
		if (timerExp === 0) { losses++; }
		timerExp = 0;

		// This chnages the color of the user's guess to left them know the wrong answer they guessed.
		if (guess === 1) { $("#boxOne").css("background-color", "#f2dede"); }
		else if (guess === 2) { $("#boxTwo").css("background-color", "#f2dede"); }
		else if (guess === 3) { $("#boxThree").css("background-color", "#f2dede"); }
		else { $("#boxFour").css("background-color", "#f2dede"); }
		    }

	// This changes the color of the correct answer to let the user know what answer is correct,.
	if (answers[i]===1) { $("#boxOne").css("background-color", "green"); }
	else if (answers[i]===2) { $("#boxTwo").css("background-color", "green"); }
	else if (answers[i]===3) { $("#boxThree").css("background-color", "green"); }
	else { $("#boxFour").css("background-color", "green"); }

	$("#answerPic").attr("src", "assets/images/" + answerPic[i]);
	$(".answer").fadeIn("slow");
	$("#answerInfo").fadeIn("slow");
	$("#answerInfo").html(answerInfo[i]);
	guess = 0;

	// This is the 5 second timer in-between questions. So the user can see the correct answer.
	intervalId = setInterval(betweenQuestions, 1000);
	
}

function betweenQuestions() {
	$("#inBetween").html(timeBetween);
	if (timeBetween === 0) { i++;
							clearInterval(intervalId);
							$(".answer").fadeOut("slow");
							nextQuestion(); }
	timeBetween--;
}

// This resets the game and allows the user to pick a category and start over
function gameOver() {
	$("#timer").fadeOut("slow");
	$(".summary").fadeIn("slow");
	$(".begin").fadeOut("slow");
	$(".answerConfirmation").fadeOut("slow");
	clearInterval(intervalId);
	$("#wins").html(wins);
	$("#losses").html(losses);
	$("#unanswered").html(unanswered);
	$(".chooseGame").fadeIn("slow");
	wins = 0;
	losses = 0;
	unanswered = 0;
	guess = 0;
	madeGuess = 0;
	i = 0;
}

});
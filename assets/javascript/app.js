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
"1. Odessa is a coastal city in southern Ukraine. Which sea does it border?",
"2. Which country contains the most languages?",
"3. Which American city is the youngest (by avergae age of person)?",
"4. The Amazon River is the longest river in the world (at 4,345 miles). Which one’s the next longest?",
"5. What do Grenada and Costa Rica have in common?",
"6. Kinshasa is the capital city of which African country?",
"7. As of July 2011, Kosovo and the Vatican City are still not members of the United Nations. Who else isn't?",
"8. Canada's coastline is 125,567 miles long. What country has the 2nd longest?",
"9. Which country actually has the world’s longest english name (except it’s known by a shortened version)?",
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
"The Black Sea", "Over 850 languages are spoken in Papua New Guinea", "The avergae age is 22.8 years old. This is attributed due to the military in the area.",
"4,258 miles long", "Grenada has not had a standing army since 1983 because of an American-led invasion & Costa Rica's constitution has forbidden a standing military since 1949.",
"Population is over 11 million", "Taiwan wants to become a member of the United Nations. However, it lost its seat in that body in 1971, when the U.N. chose to recognize the People's Republic of China instead. There can be only one China in the world, the U.N. decided, and the government in Beijing runs it.",
"Indonesia's coastline is 33,999 miles long", "United Kingdom of Great Britain and Northern Ireland. Libya was the longest up until 2013. Up until then, it was the Socialist People's Libyan Arab Jamahiriya",
"Croatia" ]

var answerPic = ["cricket.jpg", "vomit.jpg", "electricchair.gif",
"marx.jpg", "onions.jpg", "pope.jpg", "giraffe.jpg", "english.jpg", "hair.jpg", "bikini.jpeg",
"softcell.jpg", "gladysknight.jpg", "delasoul.png", "duranduran.jpg", "cathydennis.jpeg",
"inxs.jpg", "petergabriel.png", "tiffany.jpg", "eurythmics.jpeg", "roxette.jpg",
 "blacksea.png", "papuanewguinea.gif", "jacksonville.gif", "nile.png", "armyless.jpg",
 "congo.gif", "taiwan.png", "indonesia.png", "uk.gif", "croatia.jpg"]

var boxOneChoices = ["Through their wings", "Chicago", "A boxer", "Brown", "Lick almonds", "11",
"Chameleon", "Two", "Three", "Poke",
"Teardrops", "Tina Turner", "3 Feet High and Rising", "Is There Something I Should Know?",
"Pump Up the Volume", "The Cure", "Red Rain", "Debbie Gibson", "Here Comes the Rain Again",
"Listen to Your Heart",
"The Mediterranean Sea", "Papua New Guinea", "Killeen, TX", "Yangtze River", "They have no army",
"Chad", "Rwanda", "Chile", "UK", "Zambia"];

var boxTwoChoices = ["Through their belly", "Detroit", "A dentist", "Blue", "Suck Lemons", "17", 
"Koala", "Four", "Five", "Range",
"Tainted Love", "Patti LaBelle", "Buhloone Mindstate", "Hungry Like the Wolf",
"C'mon and Get My Love", "Metallica", "Games Without Frontiers", "Paula Abdul",
"Right by Your Side", "The Look",
"The Black Sea", "China", "Jacksonville, NC", "Congo River", "They sit on the Equator",
"Democratic Republic of the Congo", "Taiwan", "Australia", "Tajikistan", "Paraguay"];

var boxThreeChoices = ["Through their legs", "Columbus", "A receptionist", "Red", "Eat cheese",
"22", "Giraffe", "Six", "Seven", "Half",
"Love Action (I Believe In Love)", "Gladys Knight", "De La Soul Is Dead",
"Girls on Film", "Theme from S'Express", "INXS", "Don’t Give Up", "Belinda Carlisle",
"Would I Lie to You", "Dressed for Success",
"The Thracian Sea", "Australia", "Paramount, CA", "Nile River", "Voted world’s best place to live",
"Tanzania", "Afghanistan", "Russia", "Guatemala", "Slovakia"];

var boxFourChoices = ["Through their tongue", "Baltimore", "A chemical engineer", "Purple", "Chew gum",
"29", "Beaver", "Eight", "Nine", "Atom",
"Superwoman", "Shirley Bassey", "The Grind State", "The Wild Boys", "It Doesn’t Have To Be", 
"Aerosmith", "Sledgehammer", "Tiffany", "Sweet Dreams (Are Made of This)", "Dangerous",
"The Balearic Sea", "Jamaica", "Layton, UT", "Hunang He", "Countries with the least crime",
"Kenya", "El Salvador", "Indonesia", "Mongolia", "Croatia"];

var clap = new Audio("assets/audio/clap.wav");
var wrong = new Audio("assets/audio/wrong.mp3");

var i = 0;
var guess = 1;
var madeGuess = 0;
var time = 1500;
var timeBetween = 7;
var wins = 0;
var losses = 0;
var unanswered = 0;
var timerExp = 0;
var pointsEnabled = 0;
var points = 0;
var totalPointsEarned = 0;

$(".begin").hide();
$(".answerConfirmation").hide();
$(".summary").hide();
$(".answer").hide();
$(".pointsArea").hide();

// This is the category for USELESS TRIVIA
$("#useless").click(function() {
	$("body").css("background-image","url('assets/images/background.jpg')");
	$(".begin").fadeIn();
	$(".chooseGame").fadeOut("slow");
	$(".summary").hide();
	$(".answer").hide();
	$("#timer").fadeIn("slow");
	$("#pointsMode").hide();
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
	$("#timer").fadeIn("slow");
	$("#pointsMode").hide();
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
	$("#timer").fadeIn("slow");
	$("#pointsMode").hide();
	i = 20;
	nextQuestion();
});

// This is when the user clicks on the Points button. 
// activated is the toggle for on/off.
$("#pointsMode").click(function() {
	if (pointsEnabled === 0) {
		pointsEnabled = 1;
		$(".pointsArea").fadeIn("slow");
		 }
	else { pointsEnabled = 0;
		$(".pointsArea").fadeOut("slow"); }
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

// This happens after each inBetween question timer and at the beginning of the game
function nextQuestion() {
	// This checks to see if 10 questions have been answered.
	if (wins + losses + unanswered === 10) { gameOver(); }
	else {	madeGuess = 0;
			// Time is done this way to keep track of score AND keep track of time
			time = 1500;
			timeBetween = 7;
			$("#pointsEarned").hide();
			$(".answerConfirmation").fadeOut();
			$(".btn-info").hide();
			$(".btn-info").css("background-color", "orange");
			$(".btn-info").fadeIn();
			$("#questionArea").text(questions[i]);
			$("#boxOne").text(boxOneChoices[i]);
			$("#boxTwo").text(boxTwoChoices[i]);
			$("#boxThree").text(boxThreeChoices[i]);
			$("#boxFour").text(boxFourChoices[i]);
			$("#inBetween").html("");
			timer(); }
}

// This starts the 15 second timer for each question.
// It is done in .010 seconds for use in score.
function timer () {
	intervalId = setInterval(count, 10);
}

// This runs the timer for each question and keeps track of the score via the variable time
function count () {
	if (time === 0) { clearInterval(intervalId);
					  unanswered++;
					  timerExp = 1; 
					  checkAnswer(); }
	else if (time % 100 === 0) { $("#timer").html(time/100); }
	time--;
}

// This checks the user's guess and compares it to the answer.  
// Occurs after the user clicks a box, or time runs out.
function checkAnswer() {
	clearInterval(intervalId);	
	$("#timer").html("");
	if (pointsEnabled === 0) { $("#pointsEarned").hide(); }
	else { $("#pointsEarned").show(); }
	if (guess === answers[i]) {	$(".bg-success").fadeIn();
								$("#pointsEarned").css("color", "greenyellow");
								$("#pointsEarned").html("You earned " + time + " points for that question.");
								totalPointsEarned = totalPointsEarned + time;
								clap.play();
								wins++; }
	else {	wrong.play();
			// The pointsEarned only shows if the user enabled the points mode.
			$("#pointsEarned").css("color", "red");
			$("#pointsEarned").html("You lost -" + time + " points for that question.");
			totalPointsEarned = totalPointsEarned - time;
			$(".bg-danger").fadeIn();

			// This cheecks to see if the user ran out of time.
			// If they did, then losses will not go up.
			if (timerExp === 0) { losses++; }
			timerExp = 0;

			// This changes the color of the user's guess to left them know the wrong answer they guessed.
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

			// This section displays the picture associated with the question and any info about it.
			$("#answerPic").attr("src", "assets/images/" + answerPic[i]);
			$(".answer").fadeIn("slow");
			$("#answerInfo").fadeIn("slow");
			$("#answerInfo").html(answerInfo[i]);
			guess = 0;

			// This is the 9 second timer in-between questions.
			// So the user can see the correct answer and read any info about it.
			intervalId = setInterval(betweenQuestions, 1000);
	
}

function betweenQuestions() {
	if (wins + losses + unanswered === 10) { $("#inBetween").html("Fianl results displayed in " + timeBetween); }
	else { $("#inBetween").html("Next question in " + timeBetween); }
	if (timeBetween === 0) { i++;
							clearInterval(intervalId);
							$(".answer").fadeOut("slow");
							nextQuestion(); }
	timeBetween--;
}

// This resets the game and allows the user to pick a category and/or enable Points Mode and start over
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
	$("#pointsMode").fadeIn("slow");
	$("#totalPointsEarned").html(totalPointsEarned);
	$(".pointsArea").hide();
	$("#pointsEarned").html("");
	$("#inBetween").html("");
	wins = 0;
	losses = 0;
	unanswered = 0;
	guess = 0;
	madeGuess = 0;
	i = 0;
	totalPointsEarned = 0;
	pointsEnabled = 0;
}

});
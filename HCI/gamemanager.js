<<<<<<< Updated upstream
function initialize(){
    document.getElementsByClassName("countryButtons").style.display = 'none';
    document.getElementById("score").style.display = 'none';
}

function startGame(){
    document.getElementById("score").style.display = 'block';
=======
let score = 0;
let questionsRemaining = 5;
let questions = ["cnTowerQuestion", "madagascarQuestion", "tanzaniaQuestion", "indonesiaQuestion", "easterIslandQuestion", "germanyQuestion"];
currentQuestionIndex = 0;

//Code below obtained from: 
//https://www.educative.io/answers/how-to-shuffle-an-array-in-javascript
function shuffleQuestions(array){
    array.sort(() => Math.random() - 0.5);
}

function init(){
    shuffleQuestions(questions);
    currentQuestionIndex = 0;
    questionsRemaining = 5;
    score = 0;
    //document.getElementsByClassName("countryButtons").style.display = 'none';
    document.getElementById("scoreGroup").style.display = 'none';
    document.getElementById("scoreVal").innerHTML = "0";
    document.getElementById("finalScoreDisplay").style.display = 'none';
    document.getElementById("questionsRemaining").style.display = 'none';
    document.getElementById("playbutton").style.display = 'block';
}

function displayInstructions(){
    document.getElementById("instructions").style.display = 'block';
    document.getElementById("playbutton").style.display = 'none';
}

function startGame(){
    //init();

    shuffleQuestions(questions);
    currentQuestionIndex = 0;
    document.getElementById("instructions").style.display = 'none';
    questionsRemaining = 5;
    score = 0;
    document.getElementById("scoreGroup").style.display = 'none';
    document.getElementById("scoreVal").innerHTML = "0";
    document.getElementById("questionsRemaining").style.display = 'none';
>>>>>>> Stashed changes
    document.getElementById("selectCountry").style.display = 'block';
    document.getElementById("finalScoreDisplay").style.display = 'none';
    document.getElementById("canadaButton").style.display = 'block';
    document.getElementById("brazilButton").style.display = 'block';
}

function startLandmarks(){
    document.getElementById("brazilButton").style.display = 'none';
    document.getElementById("selectCountry").textContent = "Your first destination is CN Tower";
    document.getElementById("canadaButton").style.display = 'none';
<<<<<<< Updated upstream
}
=======
    document.getElementById("cnTowerQuestion").style.display = 'block';
    document.getElementById("selectCountry").style.display = 'none';
    document.getElementById("scoreGroup").style.display = 'block';
    document.getElementById("scoreVal").innerHTML = score.toString();
    document.getElementById("questionsRemaining").style.display = 'block';
    document.getElementById("questionsRemainingElement").innerHTML = questionsRemaining.toString();
}

function resultScreen(correct){
    //document.getElementById("cnTowerQuestion").style.display = "none";
    questionsArray = document.getElementsByClassName("triviaQuestion");
    for(let i=0; i<questionsArray.length; i++){
        questionsArray[i].style.display = 'none';
    }

    if (correct == 1) {
        score = score + 1;
        document.getElementById("correctDisplay").style.display = "block";
    }
    else {
        document.getElementById("incorrectDisplay").style.display = "block";
    }   
    questionsRemaining = questionsRemaining - 1;
    document.getElementById("scoreVal").innerHTML = score.toString();
    document.getElementById("questionsRemainingElement").innerHTML = questionsRemaining.toString();

}

function displayResults(){
    document.getElementById("finalScoreDisplay").style.display = "block";
}

function loadQuestion(){
    if(questionsRemaining <= 0){
        displayResults();
    }
    else{
        currentQuestionIndex++;
        document.getElementById(questions[currentQuestionIndex]).style.display = "block";
    }
    document.getElementById("correctDisplay").style.display = "none";
    document.getElementById("incorrectDisplay").style.display = "none";
}

// function update_test_value(){
//     let position = positionCheck();
//     document.getElementById(inputtest).innerHTML = position.toString();
// }
>>>>>>> Stashed changes

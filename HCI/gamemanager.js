let score = 0;
let questionsRemaining = 5;
let questions = ["cnTowerQuestion", "madagascarQuestion", "tanzaniaQuestion", "indonesiaQuestion", "easterIslandQuestion", "germanyQuestion"];
let mapQuestions = ["nyMap", "denmarkMap", "thailandMap", "SFMap", "BostonMap"];
var questionList;
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

function startGame(type){
    if(type==1){
        questionList = questions;
    }
    else{
        questionList = mapQuestions;
    }
    shuffleQuestions(questionList);
    currentQuestionIndex = 0;
    questionsRemaining = 5;
    score = 0;
    document.getElementById("instructions").style.display = 'none';
    document.getElementById("canadaButton").style.display = 'block';
    document.getElementById("brazilButton").style.display = 'block';
    document.getElementById("finalScoreDisplay").style.display = 'none';
    document.getElementById("scoreGroup").style.display = 'none';
    document.getElementById("scoreVal").innerHTML = score.toString();
    document.getElementById("questionsRemaining").style.display = 'none';
}

function startTrivia(type){
    if(type==1){
        questionList = questions;
    }
    else{
        questionList = mapQuestions;
    }
    questionsRemaining = 5;
    currentQuestionIndex = 0;
    score = 0;
    shuffleQuestions(questionList);
    document.getElementById("brazilButton").style.display = 'none';
    document.getElementById("canadaButton").style.display = 'none';
    document.getElementById("selectCountry").style.display = 'none';
    document.getElementById("scoreGroup").style.display = 'block';
    document.getElementById("scoreVal").innerHTML = score.toString();
    document.getElementById("questionsRemaining").style.display = 'block';
    document.getElementById("questionsRemainingElement").innerHTML = questionsRemaining.toString();
    loadQuestion();
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
        currentQuestionIndex = 0;
        displayResults();
    }
    else{
        currentQuestionIndex++;
        document.getElementById(questionList[currentQuestionIndex]).style.display = "block";
    }
    document.getElementById("correctDisplay").style.display = "none";
    document.getElementById("incorrectDisplay").style.display = "none";
}

// function update_test_value(){
//     let position = positionCheck();
//     document.getElementById(inputtest).innerHTML = position.toString();
// }

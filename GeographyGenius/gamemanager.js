let score = 0;
let questionsRemaining = 5;
let questions = ["cnTowerQuestion", "madagascarQuestion", "tanzaniaQuestion", "indonesiaQuestion", "easterIslandQuestion", "germanyQuestion"];
let mapQuestions = ["nyMap", "denmarkMap", "thailandMap", "SFMap", "BostonMap", "PNGmap"];
var questionList;
var currentQuestionIndex = 0;
var currentSceneType = "titleScreen";
var gameMode = "landmarks";
var currentQuestionName = null;
var currentSelection = "none";

//Variables for detecting left and right input for each option

//LANDMARK QUESTIONS
var cnTowerQuestion = {
    left: 1,
    right: 0
};

var madagascarQuestion = {
    left: 0,
    right: 1
};

var tanzaniaQuestion = {
    left: 0,
    right: 1
};

var indonesiaQuestion = {
    left: 1,
    right: 0
};

var easterIslandQuestion = {
    left: 0,
    right: 1
};

var germanyQuestion = {
    left: 1,
    right: 0
};

//MAP QUESTIONS
var nyMap = {
    left: 1,
    right: 0
};

var denmarkMap = {
    left: 0,
    right: 1
};

var thailandMap = {
    left: 0,
    right: 1
};

var SFMap = {
    left: 1,
    right: 0
};

var BostonMap = {
    left: 1,
    right: 0
};

var PNGmap = {
    left: 0,
    right: 1
};

//Code below obtained from: 
//https://www.educative.io/answers/how-to-shuffle-an-array-in-javascript
function shuffleQuestions(array){
    array.sort(() => Math.random() - 0.5);
}

function initialize(){
    resetTimer();
    questionsArray = document.getElementsByClassName("triviaQuestion");
    optionsArray = document.getElementsByClassName("optionsContainer");
    document.getElementById("instructions").style.display = 'none';
    currentSceneType = "titleScreen";
    document.getElementById("titlePage").style.display = 'block';
    shuffleQuestions(questions);
    currentQuestionIndex = 0;
    questionsRemaining = 5;
    score = 0;
    //document.getElementsByClassName("countryButtons").style.display = 'none';
    document.getElementById("scoreGroup").style.display = 'none';
    document.getElementById("scoreVal").innerHTML = "0";
    document.getElementById("finalScoreDisplay").style.display = 'none';
    document.getElementById("questionsRemaining").style.display = 'none';
    document.getElementById("titlePage").style.display = 'block';
    //document.getElementById("topBarContainer").style.display = 'none';
    document.getElementById("correctDisplay").style.dispay = 'none';
    document.getElementById("incorrectDisplay").style.display = 'none';
    for(let i=0; i<questionsArray.length; i++){
        //console.log(questionsArray.length.toString());
        questionsArray[i].style.display = 'none';        
    }
    for(let j=0; j<optionsArray.length; j++){
        optionsArray[j].style.display = 'none';
    }
}

function displayInstructions(){
    currentSceneType = "instructionsScreen";
    document.getElementById("instructions").style.display = 'block';
    document.getElementById("titlePage").style.display = 'none';
}

function startGame(type){
    currentSceneType = "pickGameMode";
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
    // document.getElementById("instructions").style.display = 'none';
    // document.getElementById("canadaButton").style.display = 'block';
    // document.getElementById("brazilButton").style.display = 'block';
    // document.getElementById("finalScoreDisplay").style.display = 'none';
    // document.getElementById("scoreGroup").style.display = 'none';
    // document.getElementById("scoreVal").innerHTML = score.toString();
    // document.getElementById("questionsRemaining").style.display = 'none';
}

function startTrivia(type){
    currentSceneType = "question";
    if(type==1){
        questionList = questions;
        gameMode = "landmarks";
    }
    else{
        questionList = mapQuestions;
        gameMode = "maps";
    }
    questionsRemaining = 5;
    currentQuestionIndex = 0;
    score = 0;
    shuffleQuestions(questionList);
    document.getElementById("instructions").style.display = 'none';
    document.getElementById("scoreGroup").style.display = 'block';
    document.getElementById("scoreVal").innerHTML = score.toString();
    document.getElementById("questionsRemaining").style.display = 'block';
    document.getElementById("questionsRemainingElement").innerHTML = questionsRemaining.toString();
    document.getElementById("questionsAndScore").style.display = 'block';
    loadQuestion();
}

function resultScreen(correct){
    currentSceneType = "results";
    // clearInterval(timerId);
    // document.getElementById("cnTowerQuestion").style.display = "none";
    resetTimer();
    optionsArray = document.getElementsByClassName("optionsContainer");
    questionsArray = document.getElementsByClassName("triviaQuestion");
    questionTextArray = document.getElementsByClassName("questionText");
        
    // for(let i=0; i<questionsArray.length; i++){
    //     questionsArray[i].style.display = 'none';        
    // }

    for(let i=0; i<optionsArray.length; i++) {
        optionsArray[i].style.display = 'none';
    }

    if (correct == 1) {
        score = score + 1;
        document.getElementById("correctDisplay").style.display = "block";
        //document.getElementById("questionText").innerHTML = "Correct!";  

        for(let i=0; i<questionTextArray.length; i++){
            questionTextArray[i].innerHTML = "Correct!";
        }
    }
    else {
        document.getElementById("incorrectDisplay").style.display = "block";
        //document.getElementById("questionText").innerHTML = "Incorrect!";  
        for(let i=0; i<questionTextArray.length; i++){
            questionTextArray[i].innerHTML = "Incorrect!";
        }
    }   
    questionsRemaining = questionsRemaining - 1;
    document.getElementById("scoreVal").innerHTML = score.toString();
    document.getElementById("questionsRemainingElement").innerHTML = questionsRemaining.toString();
}

function displayResults(){
    currentSceneType = "final results";
    document.getElementById("finalScoreDisplay").style.display = "block";        
}

function loadQuestion(){
    //document.getElementById("questionText").innerHTML = "What is this geographic landmark?"; 
    //currentSceneType = "question" 
    currentSceneType = "null";
    currentSelection = "none";
    questionsArray = document.getElementsByClassName("triviaQuestion");
    questionTextArray = document.getElementsByClassName("questionText");
    document.getElementById("timerDiv").style.display = 'block';


    if(gameMode == "landmarks"){
        for(let i=0; i<questionTextArray.length; i++){
            questionTextArray[i].innerHTML = "What is this geographic landmark?";
        }
    }
    else{
        for(let i=0; i<questionTextArray.length; i++){
            questionTextArray[i].innerHTML = "What location is depicted in the map?";
        }
    }

    for(let i=0; i<questionsArray.length; i++){
        questionsArray[i].style.display = 'none';        
    }

    startTimer();
    if(questionsRemaining <= 0){
        currentSceneType = "final results"
        currentQuestionIndex = 0;
        resetTimer();
        displayResults();
        //currentSceneType = "finalresults";
    }
    else{
        currentSceneType = "question";
        currentQuestionIndex++;
        currentQuestionName = questionList[currentQuestionIndex];
        document.getElementById(questionList[currentQuestionIndex]).style.display = "block";
        document.getElementById(questionList[currentQuestionIndex] + "Options").style.display = "flex";
    }
    document.getElementById("correctDisplay").style.display = "none";
    document.getElementById("incorrectDisplay").style.display = "none";
    document.getElementById("questionsRemaining").style.display = "block";

}

let timerId = null;
let secondsLeft = 10;
function startTimer() {    
    const timerElement = document.getElementById("timer");
    timerElement.style.display = "block";
    timerId = setInterval(() => {
        secondsLeft--;
        if (secondsLeft < 0) {
            if(currentSelection == "left"){
                let leftString = currentQuestionName + "[\"left\"]";
                let leftdigit = eval(leftString);
                resultScreen(leftdigit);
            }
            else if(currentSelection == "right"){
                let rightString = currentQuestionName + "[\"right\"]";
                let rightdigit = eval(rightString);
                resultScreen(rightdigit);
            }
            else{
                resultScreen(0);
            }
            clearInterval(timerId);
            secondsLeft = 10;
        }
        else {
        timerElement.innerHTML = formatTime(secondsLeft);
        }
    }, 1000);
}

function resetTimer() {
    console.log('resetting timer');
    clearInterval(timerId);
    secondsLeft = 10;
    document.getElementById("timer").innerHTML = formatTime(secondsLeft);
    document.getElementById("timer").style.display = "none";         
}

function smallResetTimer(){
    clearInterval(timerId);
    secondsLeft = 3;
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${padZeroes(minutes)}:${padZeroes(remainingSeconds)}`;
}

function padZeroes(value) {
    return value < 10 ? `0${value}` : value;
}



// function update_test_value(){
//     let position = positionCheck();
//     document.getElementById(inputtest).innerHTML = position.toString();
// }

var socket = new WebSocket("ws://cpsc484-04.yale.internal:8888/frames");

var host = "cpsc484-04.yale.internal:8888";

$(document).ready(function () {
    frames.start();
});

var currentPlayer;

var frames = {
    socket: null,

    start: function () {
        var url = "ws://" + host + "/frames";
        frames.socket = new WebSocket(url);
        frames.socket.onmessage = function (event) {
            frames.show(JSON.parse(event.data));
            //My own line below:
            let frame = JSON.parse(event.data);
            console.log(frame.people.length.toString());
            if(frame.people.length > 0){
                var leftSideElements = document.getElementsByClassName("leftContainer");
                var rightSideElements = document.getElementsByClassName("rightContainer");
                if(currentSelection == "left"){
                    for(let i=0; i < leftSideElements.length; i++){
                        leftSideElements[i].style.background = "green";
                        rightSideElements[i].style.background = "white";
                    }
                }
                else if(currentSelection == "right"){
                    for(let i=0; i < rightSideElements.length; i++){
                        rightSideElements[i].style.background = "green";
                        leftSideElements[i].style.background = "white";
                    }
                }
                else{
                    for(let i=0; i < rightSideElements.length; i++){
                        rightSideElements[i].style.background = "white";
                        leftSideElements[i].style.background = "white";
                    }
                }
                document.getElementById("inputtest").innerHTML = "Someone at display";
                //console.log(cnTowerQuestion["left"]);

                //Identify person that is closest to the center of the screen
                if(frame.people.length > 1){
                    // var minX = Math.abs(frame.people[0].joints[0].position.x);
                    // for(let i=0; i < frame.people.length; i++){
                    //     if(frame.people[i].joints[0].position.x < minX){
                    //         currentPlayer = frame.people[i];
                    //     }
                    // }
                    currentPlayer = frame.people[0];
                }
                else{
                    currentPlayer = frame.people[0];
                }

                // document.getElementById("postest").innerHTML = frame.people[0].joints[8].position.x.toString();
                // let lh = frame.people[0].joints[8].position.y;
                // let ls = frame.people[0].joints[5].position.y;
                // let rh = frame.people[0].joints[15].position.y;
                // let rs = frame.people[0].joints[12].position.y;

                // let lhx = frame.people[0].joints[8].position.x;
                // let lsx = frame.people[0].joints[5].position.x;
                // let rhx = frame.people[0].joints[15].position.x;
                // let rsx = frame.people[0].joints[12].position.x;

                let lh = currentPlayer.joints[8].position.y;
                let ls = currentPlayer.joints[5].position.y;
                let rh = currentPlayer.joints[15].position.y;
                let rs = currentPlayer.joints[12].position.y;

                let lhx = currentPlayer.joints[8].position.x;
                let lsx = currentPlayer.joints[5].position.x;
                let rhx = currentPlayer.joints[15].position.x;
                let rsx = currentPlayer.joints[12].position.x;
                
                if(leftArmSelection(lhx, lsx)){
                    //Select left option
                    //resultsScreen(1);
                    document.getElementById("selectionTester").innerHTML = "left selection";
                }
                else if(rightArmSelection(rhx, rsx)){
                    //Select right option
                    //resultsScreen(0);
                    document.getElementById("selectionTester").innerHTML = "right selection";
                }
                else{
                    document.getElementById("selectionTester").innerHTML = "no selection";
                }

                //console.log(lhx.toString());
                //console.log(lsx.toString());

                //Allow user to select answers with their hands
                if(currentSceneType == "question"){
                    if(leftArmSelection(lhx, lsx) && rightArmSelection(rhx, rsx)){
                        //Nothing happens
                    }
                    else if(leftArmSelection(lhx, lsx)){
                        currentSelection = "left";
                        //Select left option
                        // let leftString = currentQuestionName + "[\"left\"]";
                        // console.log(leftString);
                        // let leftdigit = eval(leftString);
                        // console.log(leftdigit);
                        //resultScreen(leftdigit);
                        //currentSceneType = "results";
                    }
                    else if(rightArmSelection(rhx, rsx)){
                        currentSelection = "right";
                        //Select right option
                        // let rightString = currentQuestionName + "[\"right\"]";
                        // console.log(rightString);
                        // let rightDigit = eval(rightString);
                        // console.log(rightDigit);
                        // resultScreen(rightDigit);
                        //currentSceneType = "results";
                    }
                    else{
                        //nothing happens;
                    }
                }
                
                if(currentSceneType == "instructionsScreen"){
                    if(leftArmSelection(lhx, lsx) && rightArmSelection(rhx, rsx)){
                        //Nothing happens
                    }
                    else if(leftArmSelection(lhx, lsx)){
                        //Select left option
                        console.log("left");
                        startTrivia(1);
                        //currentSceneType = "question";
                    }
                    else if(rightArmSelection(rhx, rsx)){
                        //Select right option
                        console.log("right");
                        startTrivia(2);
                        //currentSceneType = "question";
                    }
                }

                //Allow user to transition with their arms.
                if(currentSceneType == "titleScreen"){
                    if(armsRaised(lh, ls, rh, rs) == "left" || armsRaised(lh, ls, rh, rs) == "right"){
                        displayInstructions();
                        //currentSceneType = "instructionsScreen";
                    }
                }

                if(currentSceneType == "results"){
                    if(armsRaised(lh, ls, rh, rs) == "left" || armsRaised(lh, ls, rh, rs) == "right"){
                        loadQuestion();
                        //currentSceneType = "question";
                    }
                }

                if(currentSceneType == "final results"){
                    if(armsRaised(lh, ls, rh, rs) == "both"){
                        initialize();
                        //currentSceneType = "question";
                    }
                }
            }
            else{
                initialize();
                document.getElementById("inputtest").innerHTML = "Nobody at display";
                document.getElementById("postest").innerHTML = 'no people';
            }
        }
    },

    show: function (frame) {
        console.log(frame);
    }
};

var twod = {
    socket: null,

    // create a connection to the camera feed
    start: function () {
        var url = "ws://" + host + "/frames";
        twod.socket = new WebSocket(url);

        // whenever a new frame is received...
        twod.socket.onmessage = function (event) {

            // parse and show the raw data
            twod.show(JSON.parse(event.data));
        }
    },

    // show the image by adjusting the source attribute of the HTML img object previously created
    show: function (twod) {
        $('img.twod').attr("src", 'data:image/pnjpegg;base64,' + twod.src);
    },
};

//EDITED CODE
function sendPositionToDisplay(){
    let position = positionCheck();
    document.getElementById("inputtest").innerHTML = position.toString();
}

function leftArmRaised(lh, ls){
    if(lh < ls){
        return true;
    }
    else{
        return false;
    }
}

function rightArmRaised(rh, rs){
    if(rh < rs){
        return true;
    }
    else{
        return false;
    }
}

function leftArmSelection(lhx, lsx){
    if((lhx - lsx) > 450){
        return true;
    }
    else{
        return false
    }
}

function rightArmSelection(rhx, rsx){
    if((rsx - rhx) > 450){
        return true;
    }
    else{
        return false;
    }
}

function isPlayerPresent(frameinput){
    if(frameinput.people.length > 0){
        return true;
    }
    else{
        return false;
    }
}

function displayPosition(frame){
    if(positionCheck(frame) == "left"){
        document.getElementById("postest").innerHTML = "left";
    }
    else if(positionCheck(frame) == "right"){
        document.getElementById("postest").innerHTML = "right";
    }
    else{
        document.getElementById("postest").innerHTML = "nobody here!";
    }
}

function armsRaised(lh, ls, rh, rs){
    if(leftArmRaised(lh, ls) && rightArmRaised(rh, rs)){
        document.getElementById("armtest").innerHTML = "both arms raised";
        return "both";
    }
    else if(leftArmRaised(lh, ls)){
        document.getElementById("armtest").innerHTML = "left arm raised";
        return "left";
    }
    else if(rightArmRaised(rh, rs)){
        document.getElementById("armtest").innerHTML = "right arm raised";
        return "right";
    }
    else{
        document.getElementById("armtest").innerHTML = "no arms raised";
        return "none";
    }
}
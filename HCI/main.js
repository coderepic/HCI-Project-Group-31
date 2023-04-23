var socket = new WebSocket("ws://cpsc484-04.yale.internal:8888/frames");

var host = "cpsc484-04.yale.internal:8888";

$(document).ready(function () {
    frames.start();
});

var frames = {
    socket: null,

    start: function () {
        var url = "ws://" + host + "/frames";
        frames.socket = new WebSocket(url);
        frames.socket.onmessage = function (event) {
            frames.show(JSON.parse(event.data));
            //My own line below:
            //updateText();
            let frame = JSON.parse(event.data);
            if(frame.people.length > 0){
                document.getElementById("inputtest").innerHTML = "Someone at display";
                //document.getElementById("postest").innerHTML = frame.people[0].x_pos.toString();
                document.getElementById("postest").innerHTML = frame.people[0].joints[8].position.x.toString();
            }
            else{
                document.getElementById("inputtest").innerHTML = "Nobody at display";
                document.getElementById("postest").innerHTML = 'no people';
            }
            //displayArmRaised(frame);
            //displayPosition(frame);
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
function positionCheck(frame){
    if(frame.people[0] != null){
        if(frame.people[0].joint[0].position.x < 0){
            return "left";
        }
        else{
            return "right";
        }
    }
    else{
        return "nobody!";
    }
}

function sendPositionToDisplay(){
    let position = positionCheck();
    document.getElementById("inputtest").innerHTML = position.toString();
}

let number = 0
function updateText(){
    number++
    document.getElementById("inputtest").innerHTML = number;
    // if(people.length > 0){
    //     document.getElementById("inputtest").innerHTML = "hello!";
    // }
    // else{
    //     document.getElementById("inputtest").innerHTML = "bye!";
    // }
}

function isOneArmRaised(frameinput){
    let leftHandHeight = frameinput.people[0].joints[8].position.y;
    let rightHandHeight = frameinput.people[0].joints[15].position.y;
    let leftShoulderHeight = frameinput.people[0].joints[5].position.y;
    let rightShoulderHeight = frameinput.people[0].joints[12].positon.y;

    if((leftHandHeight > leftShoulderHeight) && !(rightHandHeight > rightShoulderHeight)){
        return true;
    }
    else if((rightHandHeight > rightShoulderHeight) && !(leftHandHeight > leftShoulderHeight)){
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

function displayArmRaised(frame){
    if(isOneArmRaised(frame) == true){
        document.getElementById("armtest").innerHTML = "arm raised";
    }
    else{
        document.getElementById("armtest").innerHTML = "arm not raised";
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
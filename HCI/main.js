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
            if(frame.people.length > 2){
                document.getElementById("inputtest").innerHTML = "more than 2 people at display";
            }
            else{
                document.getElementById("inputtest").innerHTML = "2 or less people at display";
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
var positionCheck = function(){
    if(frames.people[0] != null){
        if(frames.people[0].joint[0].position.x < 0){
            return "left";
        }
        else{
            return "right";
        }
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

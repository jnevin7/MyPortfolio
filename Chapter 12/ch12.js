// function smileyIt(theText) {
//     theText += " :)";
//     return theText;
// }
// console.log(smileyIt("Hi There!"))
// alert(smileyIt("Hi there!"));

// function whatsTheNumber(){
//     return 3000;
// }

// let theTotal = whatsTheNumber() + 80;
// console.log(theTotal)

let trainSpeed = 250;
let trainPosition = 0;
let animation;
let train = document.getElementById("train");
train.addEventListener("click", speedUp);
let stopButton = document.getElementById("stopButton")
stopButton.addEventListener("click", stopTrain);
function speedUp() {
if (trainSpeed > 10) {
trainSpeed -= 10;
clearInterval (animation);
animation = setInterval (frame, trainSpeed);
}
    function frame() {
       trainPosition += 2;
       train.style.left = trainPosition + 'px';
       checkPosition(trainPosition);
    }
}

function checkPosition(currentPosition) {
if (currentPosition === 260) {
alert("CRASH!");
consle.log("CRASH!");
clearInterval(animation);
}
}

function stopTrain() {
if (trainPosition < 260) {
clearInterval (animation);
}
}

"use strict";
// document.getElementById("lefteye").style.backgroundColor = "purple";
// document.getElementById("head").style.transform = "rotate(-15deg)";
// document.getElementById("body").style.border = "2px black solid";
// document.getElementById("mouth").style.borderRadius = "4px";
// document.getElementById("righteye").style.border = "4px yellow dotted";
// document.getElementById("leftarm").style.backgroundColor = "#FF00FF"
// document.getElementById("body").style.color = "#FF0000";
// document.getElementById("head").style.borderTop = "5px black solid";
// document.getElementById("rightarm").style.backgroundColor = "green";
// document.getElementById("nose").style.borderRadius = "50%";
// document.getElementById("mouth").style.border = "4px #e234c5 solid"

// let rightEye = document.getElementById("righteye");
// rightEye.addEventListener("click", moveUpDown);
// let leftEye = document.getElementById("lefteye");
// leftEye.addEventListener("click", moveUpDown);
// let leftArm = document.getElementById("leftarm");
// leftArm.addEventListener("click", moveRightLeft);
// let leftLeg = document.getElementById("leftleg");
// leftLeg.addEventListener("click", moveLeftRight);


function moveUpDown(e) {
    let robotPart = e.target;
    let top = 0;
    let animation = setInterval(frame, 0.1)


    function frame() {
        robotPart.style.top = top + "%";
        top++;
        if (top === 20) {
            clearInterval(animation);
        }
    }
}

function moveRightLeft(e) {
    let robotPart = e.target;
    let left = 0;
    let animation = setInterval(frame, 10)

    function frame() {
        robotPart.style.left = left + "%";
        left++;
        if (left === 70) {
            clearInterval(animation)
        }
    }
}

function moveLeftRight(e){
    let robotPart = e.target;
    let left = 100;
    let animation = setInterval(frame, 10)

    function frame(){
        robotPart.style.left = left + "%";
        left--
        if (left === 64){
            clearInterval(animation)
        }
    }
}

let rightEye = document.getElementById("righteye");
let leftEye = document.getElementById("lefteye");
let leftArm = document.getElementById("leftarm");
let leftLeg = document.getElementById("leftleg");


rightEye.addEventListener("click", moveUpDown);
leftEye.addEventListener("click", moveUpDown);
leftArm.addEventListener("click", moveRightLeft);
leftLeg.addEventListener("click", moveLeftRight);




function moveUpDown(e) {
    let robotPart = e.target;
    let top = 0;
    let id = setInterval(frame, 10) // draw every 10ms

    function frame() {
        robotPart.style.top = top + '%';
        top++;
        if (top === 20) {
            clearInterval(id);
        }
    }

}


function moveRightLeft(e) {
    let robotPart = e.target;
    let left = 0;
    let id = setInterval(frame, 10) // draw every 10ms
    function frame() {
        robotPart.style.left = left + '%';
        left++;
        if (left === 70) {
            clearInterval(id);
        }
    }
}




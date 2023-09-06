// let myNumber = prompt("Enter your favourite day of the week:");
// let theResponse;

// switch (myNumber){
//     case "Monday":
//         theResponse = "Ack!";
//         break;
//     case "Tuesday":
//         theResponse = "Taco day!";
//         break;
//     case "Wednesday":
//         theResponse = "Halfway there!";
//         break;
//     case "Thursday":
//         theResponse = "It's the new Friday!";
//         break;
//     case "Friday":
//         theResponse = "TGIF! Yeah!";
//         break;
//     case "Saturday":
//         theResponse = "What a day!";
//         break;
//     case "Sunday":
//         theResponse = "Sunday = Funday!";
//         break;
//     default:
//         theResponse = "I haven't heard of that one!";
//         break;
// }
// alert (theResponse);

// let myDate = new Date ()
// let myNewDate = new Date();
// myNewDate.setMonth(9)

let todayDate = document.getElementById("todaysdate");
let todoButton = document.getElementById("whattodo");

// // add a listener to the whattodo button
todoButton.addEventListener("click", displayActivity);

// // create a new Date object
let d = new Date();

// // call the displayDate() function
displayDate();

function displayDate() {
    //     // todo: display the current date in the todaysdate div
    todayDate.innerHTML = d.toDateString();
}

function displayActivity() {
    let dayOfWeek = d.getDay();
    let youShould;
    switch (dayOfWeek) {
        case 0:
            youShould = "You should do some work!";
            break;
        case 1:
            youShould = " You should go out with friends!";
            break;
        case 2:
            youShould = "You should have a picnic!";
            break;
        case 3:
            youShould = "You should go for a walk!";
            break;
        case 4:
            youShould = "You should phone your parents!";
            break;
        case 5:
            youShould = "You should go to the park!";
            break;
        case 6:
            youShould = "You should get some fresh air!";
            break;
        default:
            youShould = "Hmmm. Something is going wrong...";
            break;
    }
    document.getElementById("thingToDo").innerHTML = youShould;
    //     // todo: find out the day of the week.

    //     /* todo: set a variable, called youShould, with a different
    //        string based on what day of the week it is. */

    //     // todo: output the value of youShould into the thingToDo div
}
// for (let counter = 0; counter<500; counter++){
//     console.log(counter + ": Hello, Javascript!");
// }

// for (let i = 10; i>0; i--){
//     alert(i);
// }
// alert("Blast Off!");

// let myFriends = ["Agatha", "Agnes", "Jermaine", "Jack"];

// for (let i = 0; i < myFriends.length; i++){
//     alert(myFriends[i] + " is my friend.");
// }

// alert(Math.random());

// alert(Math.random() * 11);

// let myFriends = ["Agatha", "Agnes", "Jermaine", "Jack"];
// let randomFriend = Math.floor(Math.random() * myFriends.length);
// alert(myFriends[randomFriend]);

let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
let weather = ["Sunny", "Partly Sunny", "Partly Cloudy", 
"Cloudy", "Raining", "Snowing", "Thunderstorm", 
"Foggy"];

let minTemp = 0;
let maxTemp = 100
let weatherToday;
let tempToday; 

generateWeather();

function generateWeather(){
    for(let i = 0; i < days.length; i++){
    weatherToday = weather[Math.floor(Math.random()
    *weather.length)];
    tempToday = Math.floor(Math.random()*(maxTemp - minTemp));
    document.getElementById("5DayWeather").innerHTML += 
    "<div id='" + days[i] + "' class='" + weatherToday + 
    "'><b>Forecast for " + days[i] + ":</b><br><br>" + 
    weatherToday + " and " + tempToday + " degrees.</div>"
    }
}



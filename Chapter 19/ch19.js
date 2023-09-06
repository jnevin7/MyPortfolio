let days = ["Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday"
];
let weather = ["Sunny", "Partly sunny", "Partly cloudy",
    "Cloudy", "Rainning", "Snowing", "Thunderstorm", "Foggy"
];

let maxTemp = 110;
let minTemp = 32;

let lemonadeCost = 0.5;

let dailyTemp = [];

document.getElementById("OpenTheStand")
    .addEventListener("click", openTheStand);

generateWeather();

function generateWeather() {
    let weatherToday;
    let tempToday;
    for (let i = 0; i < days.length; i++) {
        weatherToday = weather[Math.floor(Math.random()
            * weather.length)];
        tempToday = Math.floor(Math.random()
            * (maxTemp - minTemp) + minTemp)
        dailyTemp[i] = tempToday
        document.getElementById("5DayWeather").innerHTML
            += "<div id= '" + "'><b>Forecast for " + days[i] +
            ":</b><br><br>" + weatherToday + " and " + tempToday +
            " degrees.</div>";
    }
}

let glassesSold;
let totalGlasses;
let glassesLeft;
let numGlasses;
let glassPrice;

function openTheStand() {
    glassesSold = 0;
    totalGlasses = 0;
    glassesLeft = 0;
    resetForm();
    numGlasses = Number(document.getElementById("numGlasses").value);
    glassPrice = Number(document.getElementById("glassPrice").value);
    for (let i = 0; i < days.length; i++) {
        glassesSold = Math.floor(dailyTemp[i] / glassPrice);
        glassesLeft = numGlasses - totalGlasses;
        if (glassesSold > glassesLeft) {
            glassesSold = glassesLeft;
        }
        totalGlasses = glassesSold + totalGlasses;
        document.getElementById("result").innerHTML +=
            "<p>" + days[i] + ", you sold " + glassesSold +
            " glasses of lemonade.</p>";
    }
    displayResults(numGlasses, glassPrice, totalGlasses);
}

let revenue;
let expense;
let leftOver;
let profit;

function displayResults(weeklyInventory, glassPrice, weeklySales) {
    revenue = weeklySales * glassPrice;
    expense = weeklyInventory * lemonadeCost;
    leftOver = weeklyInventory - weeklySales;
    profit = revenue - expense;

    document.getElementById("result").innerHTML +=
        "<p>You sold a total of " + weeklySales +
        " glasses of lemonade this week.</p>";
    document.getElementById("result").innerHTML +=
        "<p>Total revenue: $" + revenue + ".</p>";
    document.getElementById("result").innerHTML +=
        "<p>You have " + leftOver +
        " glasses of lemonade left over.</p>"
    document.getElementById("result").innerHTML +=
        "<p>Each glass costs you $" + lemonadeCost +
        ". Your profit was $" + profit + "."
}

function resetForm() {
    document.getElementById("result").innerHTML = "";
}
// while (money > 0) {
//     buyThings();
//     saveMoney();
//     payTaxes();
// }

// let i = 0;
// while (i < 500) {
//  console.log(i + ": Hello, JavaScript!");
//  i++;
// }

// let fcount = 10;
// while (fcount > 0) {
//     alert(fcount);
//     fcount--;
// }
// alert("Blast Off!");

// let people = ["Deborah", "Carla","Mary", "Suzen"]
// let i = 0
// while (people[i]){
//     alert(people[i]);
//     i++;
// }


let money = 20;
let lunches = 0;

document.getElementById("money").innerHTML = money;
document.getElementById("placeOrder").addEventListener("click", buyLunches);

function buyLunches() {
    resetForm();
    let day = 0;
    while (money > 0) {
        let priceToday = getSandwichPrice();
        let numberOfSandwiches = document.getElementById("numSandwiches").value;
        let totalPrice = numberOfSandwiches * priceToday;
        if (money >= totalPrice) {
            money = money - totalPrice;
            day++;
            lunches++;
            document.getElementById("receipt").innerHTML += "<p>On day " + day + ", sandwiches are: $" + priceToday + ".  You have $ " + money.toFixed(2) + " left.</p>";
        } else {
            document.getElementById("receipt").innerHTML += "<p>On day " + day + ", sandwiches are: $" + priceToday + ".  You don't have enough money. Maybe your sister will give you some of her sandwich.</p>";
            money = 0;
        }
    }
    document.getElementById("receipt").innerHTML += "<p>You were able to buy " + lunches + " lunches this week.</p>";
}

function getSandwichPrice() {
    let sandwichPrice = (Math.random() * (5 - 1) + 1).toFixed(2);
    return sandwichPrice;
}

function resetForm() {
    money = 20;
    lunches = 0;
    document.getElementById("receipt").innerHTML = "";

}
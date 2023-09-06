// console.log(typeof 8)

// let doThemath =7 + 8 + 36 + 18 + 12
// console.log(typeof doThemath)

// console.log(typeof"the cat's favorite toy")
// console.log(typeof automobile)

let dreamCar = {
    make:"Oldsmobile",
    model: "98",
    color: "brown",
    year: 1983,
    bodyStyle: "Luxury Car",
    price: 4500
};

// alert("The type of dreamCar is: " + typeof dreamCar)

document.getElementById("pricetag").innerHTML = dreamCar.price;
document.getElementById("modelyear").innerHTML = dreamCar.year;
document.getElementById("body").style.backgroundColor = dreamCar.color;
document.getElementById("body").innerHTML= dreamCar.make + " " + dreamCar.model;


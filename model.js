const car = {
    image:"",
    coolFactor: calculateFactor(),
    inventory:"",
};

const lame = -10;
const fine = 0;
const cool = 10;

const coolMeter = document.getElementById('coolmeter');

const coolFactors = ["lame", "fine", "cool"];

let points = 0;

const friend = [{
    name:"Martin",
    greetings:chooseGreetings(),
}];

const objects = [
    { name:"Apple", coolFactor:"lame" },
    { name:"iPad", coolFactor:"cool" },
    { name:"Samsung", coolFactor:"fine" },
    { name:"Lamp", coolFactor:"lame" },
];

function chooseGreetings(){
    return coolFactors[Math.floor(Math.random()*coolFactors.length)]
}

function calculateFactor(points) {
    if (points >= 100) {
        coolFactor = "cool";
    } else if (points >= 50) {
        coolFactor = "fine";
    } else {
        coolFactor = "lame";
    }

    return coolFactor;
}

function show(){
    document.getElementById('app').innerHTML = `
    <img src="${car.image}">
    <div class="coolFactor">${coolFactor}</div>
    <div class="points">${points}</div>
    `
    updateView()
}

function updateView(){
    olj
}
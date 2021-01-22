var database = [];
var currentIndex = 0;
var currentIdNumber = 1;

var passengerList = [];

class Person{
    constructor(firstName, lastName, dateOfBirth, depart, destination, dateLeave, dateReturn, bags, mealOne, mealTwo, mealThree, legroom, windowSeat, headphones, extraFood, extraCost, canDrink, timeGone){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.depart = depart;
        this.destination = destination;
        this.dateLeave = dateLeave;
        this.dateReturn = dateReturn;
        this.bags = bags;
        this.mealOne = mealOne;
        this.mealTwo = mealTwo;
        this.mealThree = mealThree;
        this.legroom = legroom;
        this.windowSeat = windowSeat;
        this.headphones = headphones;
        this.extraFood = extraFood;
        this.id = currentIdNumber; //Math.floor(Math.random() * 1000000 + 1);
        this.extraCost = extraCost;
        this.canDrink = canDrink;
        this.timeGone = timeGone;
    }
}

function createPerson(){
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var dateOfBirth = new Date(`${document.getElementById("birthMonth").value}-${document.getElementById("birthDay").value}-${document.getElementById("birthYear").value}`);
    var depart = document.getElementById("cityLeave").value;
    var destination = document.getElementById("cityDest").value;
    var dateLeave = new Date(`${document.getElementById("leaveMonth").value}-${document.getElementById("leaveDay").value}-${document.getElementById("leaveYear").value}`);
    var dateReturn = new Date(`${document.getElementById("returnMonth").value}-${document.getElementById("returnDay").value}-${document.getElementById("returnYear").value}`);
    var bags = parseInt(document.getElementById("bags").value);
    var mealOne = document.getElementById("mealSelectOne").checked;
    var mealTwo = document.getElementById("mealSelectTwo").checked;
    var mealThree = document.getElementById("mealSelectThree").checked;
    var legroom = document.getElementById("legroom").checked;
    var windowSeat = document.getElementById("windowSeat").checked;
    var headphones = document.getElementById("headphones").checked;
    var extraFood = document.getElementById("extraFood").checked;
    
    var extraCost = 0;
    switch(true){
        case legroom:
            extraCost += 10;
        case windowSeat:
            extraCost += 10;
        case headphones:
            extraCost += 10;
        case extraFood:
            extraCost += 10;
    }
    extraCost += (bags * 20);

    var canDrink = false;
    var today = new Date("1-21-2021");
    if(today - dateOfBirth >= 662695992000){
        canDrink = true;
    }

    var timeGone = Math.ceil((dateReturn - dateLeave) / (8.66 * Math.pow(10, 7))); //gives time gone in days

    //string[0].toUpperCase() + string.substring(1)
    passengerList[currentIndex] = `${firstName[1].toUpperCase() + firstName[1].substring(1)} ${lastName[1].toUpperCase() + lastName[1].substring(1)} ${currentIdNumber}`;
    database[currentIndex] = new Person(firstName, lastName, dateOfBirth, depart, destination, dateLeave, dateReturn, bags, mealOne, mealTwo, mealThree, legroom, windowSeat, headphones, extraFood, extraCost, canDrink, timeGone);
    currentIndex++;
    currentIdNumber++;
}
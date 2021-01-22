//variables below sets up the database
var database = [];
var currentIndex = 0;
var currentIdNumber = 1;
var passengerList = [];

// class below creates a person when used
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

// function below uses the Person class to create a new person
function createPerson(){
    //all of the variables below take in the information from the personal info section of the site
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
    
    // code below calculates the extra costs from bags and the checkboxes
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

    //code below checks if the passenger is able to drink, and yes that big number is how many milliseconds are in 21 years
    var canDrink = false;
    var today = new Date("1-21-2021");
    if(today - dateOfBirth >= 662695992000){
        canDrink = true;
    }

    // calulates time gone in days
    var timeGone = Math.ceil((dateReturn - dateLeave) / (8.66 * Math.pow(10, 7))); //gives time gone in days

    // code below updates the passenger list and database with name and id
    passengerList[currentIndex] = `${firstName[0].toUpperCase()}${firstName.substring(1)} ${lastName[0].toUpperCase()}${lastName.substring(1)} ${currentIdNumber}`;
    database[currentIndex] = new Person(firstName, lastName, dateOfBirth, depart, destination, dateLeave, dateReturn, bags, mealOne, mealTwo, mealThree, legroom, windowSeat, headphones, extraFood, extraCost, canDrink, timeGone);
    
    //this puts the database entry on the site
    addDatabaseEntry(`${firstName[0].toUpperCase()}${firstName.substring(1)} ${lastName[0].toUpperCase()}${lastName.substring(1)}`, currentIdNumber)

    //increments the passenger list counter
    currentIndex++;
    currentIdNumber++;
}

// this puts database entries on the site
function addDatabaseEntry(name, id){
    document.getElementById("database").innerHTML +=
'            <div class="databaseEntry" onclick="showPerson('+ currentIndex +')">'+
'                <table>'+
'                    <tr>'+
'                        <td style="width: 13rem">Name: '+ name +'</td>'+
'                        <td style="text-align: right, width: 50%">ID: '+ id + '</td>'+
'                    </tr>'+
'                </table>'+
'            </div>';
}

function showPerson(id){
    document.getElementById("passenger").innerHTML = 
    '<table>'+
'            <tr>'+
'                <td>First Name: '+ database[id].firstName +'</td>'+
'                <td>Last Name: '+ database[id].lastName + '</td>'+
'                <td>ID: '+ database[id].id + '</td>'+
'            </tr>'+
'            <tr>'+
'                <td>Date of Birth: '+ database[id].dateOfBirth + '</td>'+
'                <td>21+: '+ database[id].canDrink + '</td>'+
'            </tr>'+
'            <tr>'+
'                <td>Departing From: '+ database[id].depart + '</td>'+
'                <td>Going to: '+ database[id].destination + '</td>'+
'            </tr>'+
'            <tr>'+
'                <td>Date Leaving: '+ database[id].dateLeave + '</td>'+
'                <td>Date Returning: '+ database[id].dateReturn + '</td>'+
'                <td>Trip Length: '+ database[id].timeGone + '</td>'+
'            </tr>'+
'            <tr>'+
'                <td>Bags: '+ database[id].bags + '</td>'+
'                <td>Meal: '+ database[id].firstName + '</td>'+
'            </tr>'+
'            <tr>'+
'                <td>Extras: '+ database[id].firstName + '</td>'+
'                <td>Extra Cost: '+ database[id].extraCost + '</td>'+
'            </tr>'+
'        </table>';
}
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
        this.dateOfBirth = dateOfBirth.toString().substring(4,15);
        this.depart = depart;
        this.destination = destination;
        this.dateLeave = dateLeave.toString().substring(4,15);
        this.dateReturn = dateReturn.toString().substring(4,15);
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
    var firstName = document.getElementById("firstName").value.toLowerCase();
    var lastName = document.getElementById("lastName").value.toLowerCase();
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
    database[currentIndex] = new Person(firstName, lastName, dateOfBirth, depart, destination, dateLeave, dateReturn, bags, mealOne, mealTwo, mealThree, legroom, windowSeat, headphones, extraFood, `$${extraCost}`, canDrink, `${timeGone} Days`);
    
    //this puts the database entry on the site
    addDatabaseEntry(`${firstName[0].toUpperCase()}${firstName.substring(1)} ${lastName[0].toUpperCase()}${lastName.substring(1)}`, currentIdNumber)

    //increments the passenger list counter
    currentIndex++;
    currentIdNumber++;
}

// this puts database entries on the site
function addDatabaseEntry(name, id){
    document.getElementById("database").innerHTML +=
'            <div class="databaseEntry" onclick="showPerson('+ id +')">'+
'                <table>'+
'                    <tr>'+
'                        <td style="width: 13rem">Name: '+ name +'</td>'+
'                        <td style="text-align: right, width: 50%">ID: '+ id + '</td>'+
'                    </tr>'+
'                </table>'+
'            </div>';
}

function showPerson(id){
    var food = '';
    var extras = [];
    var is21 = '';
    switch(true){
        case database[id].mealOne:
            food = "Chicken";
            break;
        case database[id].mealTwo:
            food = "Fish";
            break;
        case database[id].mealThree:
            food = "Vegetarian";
            break;
    }
    switch(true){
        case database[id].legroom:
            extras.push("More Legroom");
        case database[id].windowSeat:
            extras.push("Window Seat");
        case database[id].headphones:
            extras.push("Headphones");
        case database[id].extraFood:
            extras.push("Extra Food");
    }
    if(database[id].canDrink){
        is21 = "Yes";
    }else{
        is21 = "No";
    }

    document.getElementById("passenger").innerHTML = 
    '<table>'+
'            <tr>'+
'                <td>First Name: '+ `${database[id].firstName[0].toUpperCase()}${database[id].firstName.substring(1)}` +'</td>'+
'                <td>Last Name: '+ `${database[id].lastName[0].toUpperCase()}${database[id].lastName.substring(1)}` + '</td>'+
'                <td>ID: '+ database[id].id + '</td>'+
'            </tr>'+
'            <tr>'+
'                <td>Date of Birth: '+ database[id].dateOfBirth + '</td>'+
'                <td>21+: '+ is21 + '</td>'+
'            </tr>'+
'            <tr>'+
'                <td>Departing From: '+ `${database[id].depart[0].toUpperCase()}${database[id].depart.substring(1).toLowerCase()}` + '</td>'+
'                <td>Going to: '+ `${database[id].destination[0].toUpperCase()}${database[id].destination.substring(1).toLowerCase()}` + '</td>'+
'            </tr>'+
'            <tr>'+
'                <td>Date Leaving: '+ database[id].dateLeave + '</td>'+
'                <td>Date Returning: '+ database[id].dateReturn + '</td>'+
'                <td>Trip Length: '+ database[id].timeGone + '</td>'+
'            </tr>'+
'            <tr>'+
'                <td>Bags: '+ database[id].bags + '</td>'+
'                <td>Meal: '+ food + '</td>'+
'            </tr>'+
'            <tr>'+
'                <td>Extras: '+ extras + '</td>'+
'                <td>Extra Cost: '+ database[id].extraCost + '</td>'+
'            </tr>'+
'        </table>';
}

//code below is search thingy
function searchForPassenger(){
    document.getElementById("database").innerHTML = '';

    var searchTerm = document.getElementById("search").value;
    for(i = 0; i < database.length; i++){
        if(searchTerm == database[i].firstName|| searchTerm == database[i].lastName || searchTerm == `${database[i].firstName} ${database[i].lastName}` || searchTerm == database[i].id){
            addDatabaseEntry(`${database[i].firstName[0].toUpperCase()}${database[i].firstName.substring(1)} ${database[i].lastName[0].toUpperCase()}${database[i].lastName.substring(1)}`, database[i].id);
        }
    }
}
function clearSearch(){
    document.getElementById("database").innerHTML = '';
    for(i = 0; i < database.length; i++){
        addDatabaseEntry(`${database[i].firstName[0].toUpperCase()}${database[i].firstName.substring(1)} ${database[i].lastName[0].toUpperCase()}${database[i].lastName.substring(1)}`, database[i].id);
    }
}

//function below clears all fields
function clearFields(){
    document.getElementById("firstName").value = '';
    document.getElementById("lastName").value = '';
    document.getElementById("birthMonth").value = '';
    document.getElementById("birthDay").value = '';
    document.getElementById("birthYear").value = '';
    document.getElementById("cityLeave").value = '';
    document.getElementById("cityDest").value = '';
    document.getElementById("leaveDay").value = '';
    document.getElementById("leaveMonth").value = '';
    document.getElementById("leaveYear").value = '';
    document.getElementById("returnDay").value = '';
    document.getElementById("returnYear").value = '';
    document.getElementById("bags").value = '';
    document.getElementById("returnMonth").value = '';
    document.getElementById("mealSelectOne").checked = false;
    document.getElementById("mealSelectTwo").checked = false;
    document.getElementById("mealSelectThree").checked = false;
    document.getElementById("legroom").checked = false;
    document.getElementById("headphones").checked = false;
    document.getElementById("windowSeat").checked = false;
    document.getElementById("extraFood").checked = false;
}
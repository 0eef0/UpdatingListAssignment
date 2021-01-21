function createPerson(){
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var dateOfBirth = `${document.getElementById("birthMonth").value} - ${document.getElementById("birthDay").value} - ${document.getElementById("birthYear").value}`;
    var depart = document.getElementById("cityLeave").value;
    var destination = document.getElementById("cityDest").value;
    var dateLeave = `${document.getElementById("leaveMonth").value} - ${document.getElementById("leaveDay").value} - ${document.getElementById("leaveYear").value}`;
    var dateReturn = `${document.getElementById("returnMonth").value} - ${document.getElementById("returnDay").value} - ${document.getElementById("returnYear").value}`;
    var bags = document.getElementById("bags").value;

    console.log(dateOfBirth);
}

/*
class Person{
    constructor()
}
*/
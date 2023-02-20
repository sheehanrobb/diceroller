function rollDice() {

    // to get dice sides from input field
    var diceSides = document.getElementById("diceSides").value;

    // generates a random number between 1 and no. of sides
    var randomNumber = Math.floor(Math.random() * diceSides) + 1;
        
        
    document.getElementById("result").innerHTML = "You rolled a " + randomNumber + "!";
 

}

//roll dice on button click

document.getElementById("rollButton").addEventListener("click", rollDice);
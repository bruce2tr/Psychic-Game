console.log("working");
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var compGuess = null;
var letters = ["a", "b", "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

//Computer guesses and updates "compGuess" variable
function guessLetter (){
    var a = letters[Math.floor(Math.random()*letters.length)];
    compGuess = a;
    console.log(compGuess);
}

//reset function for when guessesLeft = 0
function reset (){
    guessLetter();
    guessesLeft=9;
    guessesSoFar = null;
}

//Once a key is pressed...
document.onkeyup = function(event) {
    //variable stores the user's entry
    var testLetter = event.key;

    //check that the user's entry is in the array    
    if(letters.includes(event.key)){

        // console.log("so far so good");
        

        //if the letters are the same...
        if(event.key==compGuess){
            wins = wins+1;
            var grabWins = document.getElementById("winsID");
            grabWins.innerHTML = "Wins: " + wins;
            var grabLosses = document.getElementById("lossesID");
            grabLosses.innerHTML = "Losses: " + losses;

            //since the user wins need to reset gueesses to 9 and guess a new letter here 
            reset();
            }
        //if the letters are not the same     
        else {
            //guessesLeft goes down by one here
            guessesLeft = guessesLeft-1;
            console.log("guesses" + guessesLeft);

            //need to add the guess to the array. 
            

            if(guessesLeft == 0){
                reset();
            }
            // else{
            //     //here is where i need to add the the "Your Guesses so far div"
            // }
            // console.log("you missed it");
            // guessesLeft = guessesLeft - 1;;
            // var grabWins = document.getElementById("wins");
            // grabWins.textContent = "Wins: " + wins;
            // var grabLosses = document.getElementById("losses");
            // grabLosses.textContent = "Losses: " + losses;
        }
    
    
         
        

        //GuessesLeft is updated
        var grabGuessesLeft = document.getElementById("guessesLeftID");
        grabGuessesLeft.innerHTML = "Guesses Left: " + guessesLeft;
    
        }
    else {
    console.log("Pick a letter a-z!");
    }
}
















// var userText = document.getElementById("user-text");

//       // Next, we give JavaScript a function to execute when onkeyup event fires.
//       document.onkeyup = function(event) {
//         userText.textContent = event.key;
//       };
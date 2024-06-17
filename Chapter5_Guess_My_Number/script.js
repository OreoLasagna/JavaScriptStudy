'use strict';

//GUESS MY NUMBER

//This is how we select classes and ids from the html file
//console.log(document.querySelector(`.message`).textContent);

//Here we are selecting the message class from the html file.
//If we wanted to grab an id we would put a # instead of a . in front of the element
//The .textContent method will spit out what text the message class contains specifically



//WHAT IS DOM MANIPULOATION

//DOM = Document Object Model
//DOM is basically the connection point between HTML and Javascript
//The DOM is created as soon as the page loads. Whatever is in the HTML has to be in the DOM

//Please note that document.queryselector is not actually Javascript. They're a library used to interact with web APIs that are just by default enabled and available to programming languages by and large



//SELECTING AND MANIPULATING ELEMENTS

/*

document.querySelector(`.message`).textContent = `Correct Number! 🎉`
//This will update and forcefully change the text on the page itself. This visually updates and changes the webpage itself!
console.log(document.querySelector(`.message`).textContent);

document.querySelector(`.number`).textContent = 13
document.querySelector(`.score`).textContent = 10

//Using the inspect element right click option is very important for DOM manipulation

document.querySelector(`.guess`).value = 23
console.log(document.querySelector(`.guess`).value);
//The guess class is an input field. You're manually supposed to type something into there.
//You cannot use .textContent method. You have to use the .value method to populate what is an otherwise empty field.

*/

//HANDLING CLICK EVENTS

//We need to listen for events so we can react to it. Things like clicks!

/*

document.querySelector(`.check`).addEventListener(`click`, function() {
    const guess = Number (document.querySelector(`.guess`).value);
    console.log(guess);
    console.log(typeof guess);

    //Note: By default if you do not enter anything into the guess field and then hit the Check! button it spits out and stores a value of 0. A falsy value. Therefore we want to check what happens when the guess variable is false. Spit out a warning if its blank/empty.

    if (!guess) {
        document.querySelector(`.message`).textContent = ` No number!`
    }
})

*/

//Event Listeners expect two arguments: What event do they react to/listen for and then a function to execute in response

//Note that we do not call this function anywhere. That function we defined in it only gets executed when the event we're listening for comes to pass.


//IMPLEMENTING THE GAME LOGIC

let secretNumber = Math.trunc((Math.random()) * 20) + 1;
//We need to define the secret number outside of the Event Listener.

let score = 20;
let highScore = 0;
//Defining the score outside of the function/DOM. We want this available to edit and interact with.


//It is possible to refactor code such that we cram document.querySelector into a reusable function

function displayMessage (message) {
    document.querySelector(`.message`).textContent = message;
}


document.querySelector(`.check`).addEventListener(`click`, function() {
    const guess = Number (document.querySelector(`.guess`).value);
    console.log(guess);
    console.log(typeof guess);

    //Note: By default if you do not enter anything into the guess field and then hit the Check! button it spits out and stores a value of 0. A falsy value. Therefore we want to check what happens when the guess variable is false. Spit out a warning if its blank/empty.

    if (!guess) { //NO INPUT
        displayMessage(` No number!`);
    }

    else if (guess === secretNumber) { //PLAYER WINS

        displayMessage(`Correct Number! 🎉`);
        
        //Here we're changing the color when the player wins
        document.querySelector(`body`).style.backgroundColor = `#60b347`; //No (.) for the body. Since it's not a class.

        //Increasing width of the guess field after you win
        document.querySelector(`.number`).style.width = `30rem`;
        //All of these settings have to be set to strings. Very important to note!

        document.querySelector(`.number`).textContent = secretNumber;

        if (score > highScore) {            
            highScore = score;
            document.querySelector(`.highscore`).textContent = highScore;
            
        }



    }

     //Doing some refactoring of code

     else if (guess !== secretNumber) {
        
        if (score > 1) {
            score --;            
            document.querySelector(`.score`).textContent = score;

            //Using a ternary operator here even though the ? mark isn't being properly highlighted.
            //The formatting for this is weird and stupid and annoying but it works
            //The text content eqausl too low if guess is less than secretNumber. Otherwise it's too high.
            
            //document.querySelector(`.message`).textContent = guess < secretNumber ? `📉 Too low!` : `📈 Too high!`;  
            //Remember that ternary expressions can be shoved into functions as arguments when refactoring
            displayMessage(guess < secretNumber ? `📉 Too low!` : `📈 Too high!`);
        }

        else {
            score --;
            displayMessage(`You lost the game 💥!`);
            document.querySelector(`.score`).textContent = score;
        }

    }

    

//    else if (guess < secretNumber) { //GUESS TOO LOW
//        
//        if (score > 1) {document.querySelector(`.message`).textContent = `📉 Too low!`;
//        score --;
//        document.querySelector(`.score`).textContent = score;

//        }

//        else {
//           document.querySelector(`.message`).textContent = `You lost the game 💥!`;
//            score --;
//            document.querySelector(`.score`).textContent = score;
//        }

//    }

//    else if (guess > secretNumber) { //GUESS TOO HIGH
        
//        if (score > 1) {
//        document.querySelector(`.message`).textContent = `📈 Too high!`;
//        score --;
//        document.querySelector(`.score`).textContent = score;

//        }

//        else {
//            document.querySelector(`.message`).textContent = `You lost the game 💥!`;
//            score --;
//            document.querySelector(`.score`).textContent = score;
//        }
//    }

})


//MANIPULATING CSS STYLES

//Let's change the background color when someone wins the game.



//CODING CHALLENGE #1

/*
Implement a game reset functionality, so that the player can make a new guess!
Your tasks:

1. Select the element with the 'again' class and attach a click event handler

2. In the handler function, restore initial values of the 'score' and 
'secretNumber' variables

3. Restore the initial conditions of the message, number, score and guess input 
fields

4. Also restore the original background color (#222) and number width (15rem)
GOOD LUCK 

*/


document.querySelector(`.again`).addEventListener(`click`, function() {
    
    //Let's reset everything!
    secretNumber = Math.trunc((Math.random()) * 20) + 1; //Obviously need to reset and rerandomize the number
    
    score = 20; //This is fairly simple just set it right back to 20
    document.querySelector(`.score`).textContent = score;
    
    displayMessage(`Start guessing...`); //Restoring the default message

    document.querySelector(`.guess`).value = `` //Clearing out the guess field

    document.querySelector(`.number`).textContent = `?`; //Setting the number class back to a ? mark
    document.querySelector(`body`).style.backgroundColor = `#222`; //Set the background back to black in case you've won
    document.querySelector(`.number`).style.width = `15rem`; //Setting the width of the guess class back to normal



})
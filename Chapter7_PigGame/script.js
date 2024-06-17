'use strict';

//STARTING VARIABLES
const score0El = document.querySelector(`#score--0`);
//Remember to use # symbol when selecting ids

//const score1El = document.getElementById(`#score--1`);
//This works exactly the same as the above line! Just another way to code and work with stuff.
//HOWEVER. I found that this fails when trying to use .textContent. It just keeps throwing null erorrs.
//So we are chucking and getting rid of it. It appears to be failing because I am trying to getElementByID before the information and DOM elements load on the page?

const score1El = document.querySelector(`#score--1`);
const diceEl = document.querySelector(`.dice`);

const btnNew = document.querySelector(`.btn--new`);
const btnRoll = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);

const currrentScore0El = document.querySelector(`#current--0`);
const currrentScore1El = document.querySelector(`#current--1`);

const player0El = document.querySelector(`.player--0`);
const player1El = document.querySelector(`.player--1`);

let currentScore = 0;
let activePlayer = 0;

//SETTING STARTING GAME CONDItIONS

let scores = [0,0]; //Storing the scores for both players in an array

score0El.textContent = 0;
score1El.textContent = 0;

diceEl.classList.add(`hidden`);
//Remember when adding classes you don't need to use dot notation



//SWITCH PLAYER

function switchPlayer () {
     //Switch players
     currentScore = 0;
     document.getElementById(`current--${activePlayer}`).textContent = currentScore;

     //Here we are using a ternary operator. If activePlayer is equal to 0 set it to 1. Otherwise if it is 1 set it to 0.
     //I set it up to swap the active player after we have changed the active focus
     activePlayer = (activePlayer === 0 ? 1: 0);

      //The toggle method adds a class if it isn't there... and removes it if it is! Handy!
      player0El.classList.toggle(`player--active`); 
      player1El.classList.toggle(`player--active`);
}



//COPY PASTING MY INIT/RESET BUTTON

function init () {
     //Setting everything back to 0
     scores = [0,0];
 
     currentScore = 0;
     activePlayer = 0;
 
     currrentScore0El.textContent = currentScore;
     currrentScore1El.textContent = currentScore;
 
     score0El.textContent = currentScore;
     score1El.textContent = currentScore;

     //Adding back buttons
    btnRoll.classList.remove(`hidden`);
    btnHold.classList.remove(`hidden`);

    //Getting rid of the winner class
    document.querySelector(`.player--${activePlayer}`).classList.remove(`player--winner`);

    //Now just have to make sure Player 0 goes back to being the active player
    //There's no harm in double adding a class if they already
    //Since we set it up so that the active class is removed upon winning... we just add it right back to Player 0!
    player0El.classList.add(`player--active`); 
    player1El.classList.remove(`player--active`);

}


init(); 
//Just making sure everything is zeroed out before we ever start the game


//ROLLING A DICE

btnRoll.addEventListener(`click`, function () {
    //Generate a random dice
    const dice = Math.floor((Math.random() * 6) +1);
    
    //Display rolled dice
    diceEl.classList.remove(`hidden`);
    diceEl.src = `dice-${dice}.png`;
    //Here we are changing the image shown/referenced by the dice class based on what dice is rolled. Pretty cool!

    //Check for rolled 1
    if (dice !== 1) {
        //Add dice to current score
        currentScore += dice;

        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        //This is how we dynamically update scores. We use the activePlayer variable, which wobbles between 0 and 1, to be able to toggle between calling the current-score class. The current-score class can have an id of current--0 or current--1.        
    }
    else {
       switchPlayer();

        
        
         //Switching the active player. Or at least how I originally wrote the code before watching the video
        //if (activePlayer === 0) {
           


            //player0El.classList.remove(`player--active`); How I originally wrote this own my own
            //player1El.classList.add(`player--active`);
        //}
        //    else {
        //    player1El.classList.remove(`player--active`); How I originally wrote this
        //    player0El.classList.add(`player--active`);
            
            //player1El.classList.remove(`player--active`); How I originally wrote this
            //player0El.classList.add(`player--active`);
        //}

    }
    
});


//HOLDING A SCORE
btnHold.addEventListener(`click`, function () {
//ADD CURRENT SCORE TO HELD SCORE
            
        scores[activePlayer] += currentScore;
        //Filling the scores array at the active player index

        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        //Updating the UI


        //Checking if score is >= 100
        if (scores[activePlayer] >= 100) {
            document.querySelector(`.player--${activePlayer}`).classList.add(`player--winner`);
            document.querySelector(`.player--${activePlayer}`).classList.remove(`player--active`);

            //Hiding Dice
            diceEl.classList.add(`hidden`);

            //Hiding Roll Dice and Hold Buttons
            btnRoll.classList.add(`hidden`);
            btnHold.classList.add(`hidden`);

            //Jonas's lessons suggested triggering and hiding stuff behind a true false of whether or not you are still playing the game. But I think that's stupid and my way is easier/faster


        }
        
        else {
            switchPlayer();
        }

        });



//RESETTING THE GAME

btnNew.addEventListener(`click`, init)
'use strict';

const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const btnCloseModal = document.querySelector(`.close-modal`);

//const btsnOpenModalOLD = document.querySelector(`.show-modal`);

//console.log(btsnOpenModalOLD);
//This only prints the first element when there are multiple that share the class!

const btnsOpenModal = document.querySelectorAll(`.show-modal`);
//This selects ALL of the elements that share a class and stores them like an array
//And you know how to loop through arrays!


function openModal () {
        modal.classList.remove(`hidden`);
        //Here we are making use of our previously defined modal variable
        //What we want to do is make it so that when you click on a button we remove the hidden class hiding the modal from showing normally
        //DO NOT USE THE (.) notatation for the remove method. You onlu use (.) notation when selecting stuff

        overlay.classList.remove(`hidden`);
        //Here we make the overlay fuzzy. Normally the overlay is fuzzy but... it's hidden. So by clicking on a button we want to introduce the fuzz.
        
        //WHEN YOU WANT TO MANIPULATE STYLES MAKE SURE TO ADD THEM AS CLASSES SO YOU CAN MESS AROUND WITH THEM IN JAVASCRIPT
}

function closeModal ()  {
    modal.classList.add(`hidden`);
    overlay.classList.add(`hidden`);
}


for (let i = 0; i < btnsOpenModal.length ; i++) {
    //Don't forget that you have to use array indexes to identify what part of the array you're interacting with
    
    btnsOpenModal[i].addEventListener(`click`, openModal);
     //Now let's make something happen when we click on the buttons
}





 btnCloseModal.addEventListener(`click`, closeModal);
     //When we close a modal we wanna do the opposite of what we did before
     //We want to make sure that the modal closes when we click outside of it too

 overlay.addEventListener(`click`, closeModal);
     //Remember that the second argument for an Event Listener is always a function! If you predefine and create a function you can just... slap that in! No problem!
     //Also I don't need to include an empty argument for these. Important thing to know.

 document.addEventListener(`keydown`, function(e) {
    
    //We need to verify that they key pressed is ESC though. Otherwise any keyboard will suffice
    console.log(`A button was clicked.`);

    console.log(e);
    //Keyboard press events are stored and recorded as objects. Objects with a fair few classes!
    //There is a 'key' class that spits out the name of the keyboard pressed

    if (e.key === `Escape` && !modal.classList.contains(`hidden`)) {

            //Here we are double checking that the modal DOES NOT contain the hidden class
            //If it's missing then we close the modal by adding back the hidden classes

            closeModal();
    }
 })

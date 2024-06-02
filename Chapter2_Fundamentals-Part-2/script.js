//CHAPTER 2

"use strict";

//STRICT MODE. CRITICALLY IMPORTANT FOR WRITING SECURE AND SAFE CODE
//Strict mode must be the very first line entered into your file

/*

"use strict";

//Strict mode creates visible errors for us and prevents us from doing stupid stuff.

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive!`);

*/


//FUNCTIONS

/*


function logger() {
    console.log(`Not quite my first function in Javascript!`); //Here we are defining the function
}


logger(); //Here we are calling/running/invoking the function. This spits out the console.log!
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

//Apples and Oranges are the parameters you slap into the function. You DO NOT have to provide variables literally named apples and oranges into the function as its arguments.
//Creating a variable within a function is possible and just be sure to return it! So the function spits it back out for use outside of the, well, function!

const appleJuice = fruitProcessor(5, 0); //Assigning the variable to be equal to the value/string returned by the function
console.log(appleJuice);

console.log(fruitProcessor(5, 0));
//This spits out the exact same thing as the line above BUT. The value returned by the function isn't stored.

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//Not all functions need to accept parameters. Not all functions need to return values.
//Just keep that in mind! They can do just about everything! They can even call other functions!

//Calling a function doesn't always mean you'll return a value. Just keep that in mind!
//Functions are valuable because they let us write reusable chunks of code!!!
//Don't. Repeat. Yourself. DRY

//console.log() Number() String() these are all functions! I've used them before plenty.
const num = Number(`23`);
console.log(num);


*/



//FUNCTION DECLARATIONS VS EXPRESSIONS

/*


const age1 = calcAge1(1990);
console.log(age1);   //YOU CAN CALL AND REFERENCE DECLARED FUNCTIONS BEFORE THEY EVEN GET DEFINED IN THE CODE. YOU CANNOT DO THAT FOR FUNCTION EXPRESSIONS

function calcAge1(birthYear) {
    return (2037 - birthYear);
}

//Remember. I don't always have to define a variable within a function if I'm returning data. I can simply take the parameters and just return them right out after slapping them into an expression



//ALL THE ABOVE IS AN EXAMPLE OF A FUNCTION DECLARATION ^^^


//THE BELOW IS AN EXAMPLE OF A FUNCTION EXPRESSION. STUFFING A FUNCTION INTO A VARIABLE
//WE'RE CREATING A VALUE AND STORING IT INTO A VARIABLE


const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

//This right here is an expression. And expressions produce values.
//Now calcAge2 is kind of set up like how console.log() is. We can store a function in a variable. It's tricky but cool.

const age2 = calcAge2(1991);

console.log(age1, age2);


//The main practical difference between them is that we can call function declarations before they are defined in the code.

//It's up to me to decide which one I wanna use. It's my personal coding style if I prefer declarations over expressions. I still need to know how to read them though when I poke at code that's not my own.

*/



//ARROW FUNCTIONS

//This is one of my least favorite ways to write a function. I think it sucks ass.

/*

//Function Expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

//Arrow Function
const calcAge3 = birthYear => 2037 - birthYear;

// A special form of a function expression. All of it is still assigned to a variable.
//The big deal with arrow functions is that the value of the arrow function is returned implicitly.
//You do not have to specify it returns something.

//birthYear is the parameter in this arrow function

//Arrow functions are goof for simple single line functions. Terrible for anything more complicated.

const age3 = calcAge3(1990);
console.log(age3);


const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`;
    //When your arrow function spans multiple lines/values you have to manually return values
    //You also have to wrap things in brackets!
    //Arrow functions will only implicitly return one value. Have to use returns for things beyond that
    //Then if your arrow function requires multiple parameters you must wrap them in parentheses
};

console.log(yearsUntilRetirement(1990, `Brian`));
console.log(yearsUntilRetirement(1980, `Jonas`));

*/



//FUNCTIONS CALLING OTHER FUNCTIONS

/*

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}


console.log(fruitProcessor(2, 3));

//Calling the fruitProcessor function now also calls the cutFruitPieces function

//The apples and oranges parameter we pass into fruitProcess become the arguments used to pass into the cutFruitPieces function that is called twice

*/



//REVIEWING FUNCTIONS

/*

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`);
        return retirement;
    }
    else {
        return -1;
        console.log(`${firstName} has already retired.`) //Since these console.logs come after the return they are NEVER RUN.
    }


};

//Note that you can reuse parameter names as much and as often as you want. So long as they aren't already or pre-existing defined variables you're golden. Parameters are basically local variables for each function.

console.log(yearsUntilRetirement(1991, `Jonas`));
console.log(yearsUntilRetirement(1970, `Mike`));

//VERY IMPORTANT THING TO KNOW.
//THE RETURN KEYWORD CAUSES YOU TO IMMEDIATELY EXIT OUT OF THE FUCNTION.
//DO NOT FORGET THAT.

//VERY HANDY WAY TO MOVE CODE LINES.
//Alt + ^ (Up Arrow)
//Alt + v (Down Arrow)

//VERY HANDY WAY TO EDIT ALL INSTANCES OF A VARIABLE AT ONCE
//Double click ona  variable like say birthYear
//Then hit 'Cmd + d'. Can also hit 'Ctrl + d' to select them one by one.


*/

//INTRODUCTION TO ARRAYS

/*

const friend1 = `Michael`;
const friend2 = `Steven`;
const friend3 = `Peter`;

//Making lists of variables like this kind of sucks ass doesn't it?
//Good thing we have arrays!

const friends = [`Michael`, `Steven`, `Peter`];
console.log(friends);
//Much easier way of setting up a list of variables

const years = new Array(1991, 1984, 2008, 2020);
//Observe that this is an array method!
//This uses parentheses instead of brackets so do keep that in mind!

console.log(friends[0]);
//Don't forget arrays are indexed starting at zero.
//So friends[0] pulls out the first entry into an array
console.log(friends[2]);

console.log(friends.length);
//Use the length property to find how many elements/pieces of data populate an array
//Using the length is handy to get the last element of an array!

console.log(friends[friends.length - 1]);
//Voila! This returns the last element in the array


friends[2] = `Jay`;
console.log(friends);
//We can edit and mutate specific individual elements within the array without issue!

//But our array is a const variable. Why can we change it?
//Only primitive values cannot be changed. Arrays aren't one of those things though!
//We can actually mutate arrays even if they are declared with const

//YOU CANNOT CHANGE AN ENTIRE ARRAY THOUGH. Just individual elements!
//friends = [`Bob`, `Alice`];


//Arrays can hold different types of variables all at once. It doesn't have to be all strings or all numbers
const firstName = `Jonas`;
const jonas = [firstName, `Schmedtmann`, 2037 - 1991, `teacher`, friends];

//YOU CAN EVEN PUT ARRAYS AND OTHER VARIABLES INSIDE OTHER ARRAYS

console.log(jonas);


//Exercise
function calcAge1(birthYear) {
    return (2037 - birthYear);
}

const newYears = [1990, 1967, 2002, 2010, 2018];

//console.log(calcAge1(years)); //This spits out NaN. You can't subtract an array from a number.

const age1 = calcAge1(years[0]);
const age2 = calcAge1(years[1]);
const age3 = calcAge1(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge1(years[0]), calcAge1(years[1]), calcAge1(years[years.length - 1])];
//Arrays accept expressions since they produce values. So you can slap whole functions into arrays.
console.log(ages);


*/




//BASIC ARRAY OPERATIONS 'METHODS'

/*

const friends = [`Michael`, `Steven`, `Peter`];


//ADD ELEMENTS

const newLength = friends.push(`Brian`);

//'push' is a function we can add to the end of an array. We attach this function to the friends array we made
//'push' lets us add an element to the end of an array

console.log(friends);
console.log(newLength);
//Also very cool tidbit. The push method does return the new/updated length of an array after you add a new element to it

friends.unshift(`John`);
//The 'unshift' method adds an element to the very beginning of an array!
//'unshift' also returns the new length of the array
console.log(friends);



//REMOVE ELEMENTS
friends.pop();
//'pop' removes the very last element from an array

const popped = friends.pop();
//The 'pop' method does return the element that was removed.

console.log(friends);
console.log(popped);

friends.shift();
//The 'shift' method oddly named enough removes the very first element of an array
//'shift' also returns what element it removed

console.log(friends);

console.log(friends.indexOf(`Steven`));
//The 'indexOf' method returns the index value of where a given value is. Which can be handy!

console.log(friends.indexOf(`Bob`));
//If you try to use 'indexOf' for an element that doesn't exist it'll return a -1

friends.push(23);
console.log(friends.includes(`Steven`));
//The 'includes' method gives you a straight true or false if a given element exists within the array! Very handy!
console.log(friends.includes(`Bob`));

//BE VERY MINDFUL THAT INCLUDES USES STRICT/EXACT MATCHES
console.log(friends.includes(`23`));
//If I ask if the string 23 exists in the array but only the number 23 exists in the array... it'll say false

if (friends.includes(`Steven`)) {
    console.log(`You have a friend called Steven!`);
}

*/



//INTRODUCTIONS TO OBJECTS

/*

const jonas = {
    firstName: `Jonas`,
    lastName: `Schemedtmann`,
    age: 2037 - 1991,
    job: `teacher`,
    friends: [`Michael`, `Peter`, `Steven`]
}

//Use curly braces for objects

//key-value pairs
//keys are the variable names
//The stuff after the : is the value

//Each of these keys is considered a property of the object
//Jonas has 5 properties. The properties are firstName, lastName, etc.

//The order of properties in a class does not matter

*/


//DOT VS. BRACKET NOTATION

/*

const jonas = {
    firstName: `Jonas`,
    lastName: `Schmedtmann`,
    age: 2037 - 1991,
    job: `teacher`,
    friends: [`Michael`, `Peter`, `Steven`]
}

console.log(jonas);

//Retrieving properties - DOT NOTATION
console.log(jonas.lastName);

//Retrieving properties - BRACKET NOTATION
console.log(jonas[`lastName`]);

//For bracket notation you can slide in expressions.
const nameKey = `Name`; //We're making a vairable for Name since it repeats in firstName and lastName
console.log(jonas[`first` + nameKey]);
console.log(jonas[`last` + nameKey]);

//The strings combine together to form firstName. We then retrieve the firstName property

//YOU CAN ONLY USE EXPRESSIONS IN BRACKET NOTATION
//console.log(jonas.`first` + nameKey); //THIS THROWS AN ERROR

const interestedIn = prompt(`What do you want to know about Jonas? Choose between firstName, lastName, job, and friends.`);
console.log(interestedIn);

//console.log(jonas.interestedIn); //This throws undefined. Since such a property doesn't actually exist
//console.log(jonas[interestedIn]); //This works because bracket notation interprets expressions


//if the User doesn't enter in a valid value we'll get an undefined value. Since undefined is a falsy value we can use that as part of if/else statements...

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn])
}
else {
    console.log(`Wrong request! Note that your answers are case sensitive!`);
    console.log(`What do you want to know about Jonas? Choose between firstName, lastName, job, and friends.`);
}


//HOW TO ADD NEW PROPERTIES

jonas.location = `Portugal`;
jonas[`twitter`] = `@jonasschmedtmann`;
console.log(jonas);

//Really is as simple as adding a new property at the end of a dot notation or bracket notation statement

//Challenge
//Jonas has three friends. And his best friend is Michael

console.log(`${jonas.firstName} has ${jonas.friends.length} friends and ${jonas.friends[0]} is his best friend.`);


*/



//OBJECT METHODS

/*

const jonas = {
    firstName: `Jonas`,
    lastName: `Schmedtmann`,
    birthYear: 1991,
    job: `teacher`,
    friends: [`Michael`, `Peter`, `Steven`],
    hasDriversLicense: true,


    //calcAge: function (birthYear) {
    //    console.log(this); //Neat way to print out the contents of an object
    //    return 2037 - 1991;


    //It's very important that we define our function as an expression. Can't be a declaration

    //calcAge: function () {
    //    console.log(this); //Neat way to print out the contents of an object
    //    return 2037 - this.birthYear;
    //Within this function we are already inside of the 'jonas' object.
    //So 'this' intuitively knows and is looking at the jonas object and it's properties
    //So if we go this.birthYear it's the same as jonas.birthYear
    //this is preferable because if we ever change the name of the object... this already has us covered!

    //We can then remove the parameter for the function. Leave it completely blank.
    //Within the return statement we can just say hey use this.birthYear to retrieve data elsewhere inside the object to complete this calculation
    //}

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;

        //Here we are, within the method, defining and creating a new property for the object itself.
        //Setting this.age = 2037 - this.birthYear creates a new property
        //We then return the age out of the function
    },

    getSummary: function () {
        this.summary = `${this.firstName} is a ${this.calcAge()} year old ${this.job} and he has ${this.hasDriversLicense ? `a` : `no`} driver's license.`;
        return this.summary;
    }


}

//Objects are just like arrays. They can hold multiple different kinds of data and even other objects. Even functions!
//We can create functions within objects and call that function as a method.

//console.log(jonas.calcAge(1991)); //Calling a method with dot notation
//console.log(jonas[`calcAge`](1991)); //Calling a method with bracket notation

//console.log(jonas.calcAge(jonas.birthYear)); //Calling the method by passing in another property of the object itself
//HOWEVER! THERE IS A BETTER WAY. By making use of the 'this' keyword.

console.log(jonas.calcAge());
console.log(jonas.age);
//These both return the same thing! Super cool!


//Challenge
//Create a new method getSummary that writes the following
//"Jonas is a 46 year old teacher and he has a/no driver's license."
//The a/no depends on if jonas.hasDriversLicense is true or false. Will have to use a ternary expression!
//Ternary: (if conditional) ?  (Evaluate this if true) : (Evaluate this if false)

console.log(jonas.getSummary());
console.log(jonas.summary);

*/



//ITERATION: THE 'for' LOOP

/*

//console.log(`Lifting weights repetittion 1 🏋️‍♂️`);
//console.log(`Lifting weights repetittion 2 🏋️‍♂️`);
//console.log(`Lifting weights repetittion 3 🏋️‍♂️`);
//console.log(`Lifting weights repetittion 4 🏋️‍♂️`);
//console.log(`Lifting weights repetittion 5 🏋️‍♂️`);

//Copy pasting this a ton sucks doesn't it?
//This violates the don't repeat yourself rules and it's a hassle.
//There has to be a better way!

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
}

//Parts of a for loop || Each part separated by ;
//The counter: You define a variable with let and its initial value
//The logical condition: This is iterated before each cycle through the loop. As soon as this condition is false the loop stops. The loop keeps running while this condition is true
//Update the counter after each iteration: Either you increase or decrease the value since you need to tick off the condition at some point

*/



//LOOPING ARRAYS, BREAKING, AND CONTINUING


//One of the most used applications of for loops is to loop through arrays


/*

const jonasArray = [
    `Jonas`,
    `Schmedtmann`,
    2037 - 1991,
    `teacher`,
    [`Michael`, `Peter`, `Steven`]
];

const types = []; //Create an empty array

for (let i = 0; i < jonasArray.length; i++) {
    console.log(jonasArray[i], typeof jonasArray[i]);

    //types[i] = typeof jonasArray[i]
    types.push(typeof jonasArray[i]) //Alternatively you can use the push method to populate an empty loop!

    //Populate the empty array with a new element every time we loop through!
}

console.log(types);

//Setting the loop to stop at the length of the array is smart. Since this array has five elements in it... but given that indexing starts at 0 it will stop spitting out information at jonasArray[4]. So stopping at 5 means we never try to print jonasArray[5] which would be empty!

//Then we can be sneaky and populate empty arrays while we zoom through a loop

const years = [1991, 2007, 1969, 2020];
const ages = [];

//We're gonna loop through years and fill up the ages array

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);


//CONTINUE AND BREAK STATEMENTS

//CONTINUE: IS TO EXIT THE CURRENT ITERATION OF THE LOOP AND CONTINUE TO THE NEXT ONE
//BREAK: USED TO TERMINATE THE WHOLE LOOP

//Take note of where you slap the continue and break logic right after the if loop conditional

console.log(`---ONLY STRINGS---`)
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] != `string`) continue;
    console.log(jonasArray[i], typeof jonasArray[i]);
}

//Basically this says if the element in the array isn't a string... just move to the next element in the loop. Otherwise if it is a string then print stuff!

console.log(`---BREAK WITH NUMBER---`)
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] == `number`) break;
    console.log(jonasArray[i], typeof jonasArray[i]);
}

//Literally as soon as a number is found the loop har shuts off


*/


//LOOPING BACKWARDS AND LOOPS IN LOOPS

/*

const jonasArray = [
    `Jonas`,
    `Schmedtmann`,
    2037 - 1991,
    `teacher`,
    [`Michael`, `Peter`, `Steven`]
];

for (let i = jonasArray.length - 1; i >= 0; i--) {
    console.log(i, jonasArray[i]);
}

//Working backwards. We set i to have an initial value equal to the final index in the element
//We set the loop to break once i hits 0. So long as it is greater or equal to 0 it works. Since the first element in the array is jonasArray[0]
//Then we set i to decrement by 1 every iteration


//NOW TO MAKE A LOOP INSIDE A LOOP

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`---Starting exercise ${exercise}---`);

    for (let rep = 0; rep < 6; rep++) {
        console.log(`Lifting weight repetition ${rep}... 🏋️‍♂️`);
    }
}

*/



//WHILE LOOPS

console.log(`---FOR LOOP---`)

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
}

//for loop as comparison


//Components of a while loop
//Counter:
//Condition:
//Counter Increment/Decrement

console.log(`---WHILE LOOP---`)

let rep = 1;

while (rep <= 10) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`)
    rep++;
}

//Note that with the 'while' loop...
//The variable used for the conditional HAS TO BE DEFINED OUTSIDE OF THE WHILE LOOP
//The COUNTER OR CONDITION MUST BE MODIFIED WITHIN THE WHILE LOOP ITSELF IN ORDER TO EVENTUALLY BREAK OUT


let dice = Math.trunc((Math.random() * 6)) + 1;
//Math.random creates a number between 0 and 1. So it'll be a decimal and we need to get rid of that.
//Math.trunc() removes the decimals


//For this while loop... we want it to run until we get a 6

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc((Math.random() * 6)) + 1;
    if (dice === 6) {
        console.log(`Loop is about to end...`);
    }
}

//While loops are ideal when you honestly do not know how many times you'll iterate through it
//for loops are when you have a finite and known number of loops to cycle through
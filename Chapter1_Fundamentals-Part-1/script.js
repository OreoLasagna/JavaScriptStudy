/*

let js = 'amazing';
if (js == 'amazing') alert('Javascript is fun!')


//console.log(40 + 8 + 23 - 10); - Using comments is great! For notes and disabling code without deleting it

//Values and Variables

console.log('Jonas');
console.log(23);   //Seeing all this stuff in the Console tab of the index.htmml file when open in Chrome

let firstName = 'Matilda';
console.log(firstName);
console.log(firstName);
console.log(firstName);

//Camel Case = For variables comprised of multiple words you write the first word in lowercase and every word after in upper case

let threeYears = 3; //Remember you can never ever start a variable name with a numeral. 3Years doesn't work!
//Can't use & either

let $function = 27; //Can use $ as part of variable names if I am interested

let Person = 'Jonas'; //This is legal but BAD. Always start variable names with lower case
let PI = 3.1415; //When describing constants, like chemical or physics constants, you can go all caps on those

let myFirstJob = "Quality Assurance";
let myCurrentJob = "Senior Quality Assurance";

let job1 = "Quality Assurance";
let job2 = "Senior Quality Assurance";

//job1 and job2 are bad variable names. We want very descriptive stuff. Go with very descriptive stuff!

console.log(myFirstJob);

*/

//The 7 Primitive data types

//1. Numbers - 23 . Floating point numbers. Used for decimals and integers. All numbers are of the type numbers
//2. Strings - Sequences of characters. Always put these in quotes! Double or single!
//3. Boolean - Logical data type. Can only be true or false. You know this!
//4. Undefined - Value taken by a variable that's not yet defined. Example: let children;
//Undefined = empty value
//5. null - Also an empty value but it is its own separate thing
//6. Symbol - Value that is unique and cannot be changed
//7. Bigint - Numbers larger than the number data type can even hold

//JAVASCRIPT HAS DYNAMIC TYPING. WE DO NOT HAVE TO DEFINE A VARIABLE TYPE WHEN WE CREATE IT. THE VALUE WE ASSIGN TO A VARIABLE DEFINES ITS TYPE

//Ctrl + / is the comment shortcut

/*

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Discipline')
//typeof() is useful for finding out what DATA TYPE a given variable is

javascriptIsFun = "YES!"; //After you've defined a variable for the first time with LET do not invoke let again. What let does is allow you to change the VALUE and the DATA TYPE of the variable itself as much as you please

console.log(typeof javascriptIsFun)

let year;
console.log(year)
console.log(typeof year); //This spits out undefined!

year = 1991; //Remember. You only use let once!
console.log(typeof year); //This spits out number now!

console.log(typeof null); //This is a bit of a known error. typeof null returns a type of OBJECT. Should just return null. Little bit of goofiness is all

*/

//LET, CONST, aand VAR

/*

//VAR is the old way of defining a variable
//LET is the new and improved war

let age = 30;
age = 29;

//LET allows us to reassign or mutate the value of a variable
//LET is perfect for declaring empty variables or mutating variables

const birthYear = 1990;
//birthYear = 1991; //THIS THROWS AN ERROR. YOU CANNOT REDEFINE A CONST. This will throw an error of assignment to const variable

//const job; //THIS ALSO THROW AN ERROR. CONST must have a value assigned to it upon creation. Will say missing initializer in const declaration

//CONST is terrific for when you have a value that you will know will never ever change.


//Best Practice: Use CONST by and large. Otherwise if you KNOW a variable is going to change over the course of a program use LET. You want as little mutation as possible in your program.

//For VAR we are only learning this for the sake of identifying legacy code. It looks similar to LET

var job = "Programmer";
job = "Automation Engineer";

//Either way. NEVER USE VAR.

lastName = "Schmitty";
console.log(lastName);

//Creating a variable without using LET or CONST is allowed... but it is bad bad bad bad bad. DO NOT DO IT.

*/


//BASIC OPERATORS

/*

//Math Operators
const now = 2037;
const ageJonas = now - 1990; //Using variables to calculate other variables. Pretty cool!
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah); //You can log multiple things in a single console.log() call!!!

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3); //Look at us calculating and changing values in the console.log

const firstName = "Jonas";
const lastName = "Schmitty";
console.log(firstName + " " + lastName); //Concatenating strings!


//Assignment Operators
let x = 10 + 5; //= is an operator. As is +. Two operators on this line right here.
console.log(x);
x += 10; //Remember how this works? It's saying x = x + 10
console.log(x);
x *= 4; //This is x + x * 4
console.log(x); //So 25 * 4 = 100
x++; //This is just x + 1
x--; //This is just x - 1

//Comparison Operators - These are all boolean territory
console.log(ageJonas > ageSarah); //We have: >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = (ageSarah >= 18); //Store comparisons and results of these operators into variables
console.log((now - 1991) > (now - 2018)); //This works! But it's messy. Next lesson is order of operations

*/


//ORDER OF OPERATIONS AND OPERATOR PRECEDENCE

//From Math I always remember 'Please Excuse My Dear Aunt Sally"
//Parentheses. Exponents. Multiplication. Division. Addition. Subtraction.

//MND Operator Precedence
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence
//Just scroll down to the numbered/ordered list at the bottom of the page

/*

//Plus the whole left to right for math
console.log(25 - 10 - 5);

//Whereas assignment is right to left and therefore very low on the priority list compared to math operators.
let x, y; //I CAN DEFINE MULTIPLE EMPTY VARIABLES AT THE SAME TIME
x = y = 25 - 10 - 5;

console.log(x, y); //In this scenario assignment moves from right to left. So y gets defined first. Then x gets defined. Even though the math was solved left to right going 25 - 10 then 15-5.

const now = 2037;
const ageJonas = now - 1990;
const ageSarah = now - 2018;

const averageAge = (ageJonas + ageSarah) / 2 // The parentheses is needed. Since otherwise it would just go ageJonas + (ageSarah/2)
console.log(ageJonas, ageSarah, averageAge);

*/

//STRINGS AND TEMPLATE LITERALS

/*

const firstName = "Jonas";
const job = "teacher";
const birthYear = "1990";
const year = 2024;

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!"
console.log(jonas)

//Type coercion is a thing. I guess adding numbers to an already existing string just forces it into a string. Will learn more in the next lesson.


const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);
//Time for template literals baby!!!
//So for this I'm using backticks. ` is the thing above the tab key. Don't hold shift. You replace quotation marks with the backticks. Definitely didn't learn this the first time around.

console.log(`I'm using backticks for a regular old string!`)
//This is a template string. You can use backticks for regular old strings too even!

console.log(`String with \n
multiple \n
lines.`);
//Can even use backticks for multiline strings! This is easy and terrific!

console.log(`String
using Enter key
to make multiple
lines.`);
//This works as well! I don't even need the \n to make a new line! This fucking rocks!

*/

//TAKING DECISIONS: if AND else STATEMENTS

/*

const age = 15;
const isOldEnough = (age >= 18);

if (isOldEnough) {
    console.log('Sara can start her driving license. 🚗');
}

else {
    const yearsLeft = 18 - age;
    console.log(`Sara is too young. Wait another ${yearsLeft} years.`);
}

//Use Windows Key + . (Period) to activate emojis.
//Remember that if Statements are set up such that you just slap in the requirement. If true then run it. Else false run something else.
//Remembering to use the backticks for every string going forward is going to be tough.

const birthYear = 1991;
let century;

if (birthYear <= 2000) {
    century = 20;
}
else {
    century = 21;
}

//NOTE: I cannot create and define variables inside of an if/else code block. I can reassign values within them. But I cannot create the century variable within it. It has to be defined and created outside of the loop.

console.log(century);

*/

//TYPE CONVERSION AND COERCION

/*

const inputYear = 1991;
console.log(inputYear + 18); //This works fine. Since we are adding a number to a number

const inputYearStr = '1991';
console.log(inputYearStr + 18); //This spits out 199118. Since it's trying to concatenate strings
console.log(Number(inputYearStr) + 18); //This works!!! Since we convert the string to a number and THEN add a number to it

console.log(Number('Jonas')); //Let's try and fail to convert a string that has no numbers in it.
//This produces a value of NaN. NOT A NUMBER.
console.log(typeof (NaN)); //NaN is considered a number... it's just not one. It's weird.

//Now let's convert numbers to strings!

console.log(String(inputYear)); //It spits out '1991' instead of 1991!

//Type Coercion
console.log(`I am ` + 23 + ' years old.');
//We're combining strings and numbers. Whenever there is an operation between a string and a number the number will be coerced into a string.

console.log('23' - '10' - 3); //Here conversion works in reverse! When you subtract a number from a string... the string gets turned into a number! It's wild isn't it.

console.log('23' * 2); //And here conversion works again! The multiplication operator turns whatever it plays with into a number.

let n = '1' + 1; //Here we have addition. This turns the number(1) into a string. So we get 11.
console.log(n);
n = n - 1; //Here we have subtraction. This turns '11' string into the number 11 and then subtracts by 1. So we get 10.
console.log(n); //This prints out a number with a value of 10!

*/

//TRUTHY AND FALSY VALUES

/*

//5 Falsy values: 0, '' empty string, null, undefined, NaN - These will all get converted to false if you try to convert them to a Boolean

console.log(Boolean(0)); //Falsy
console.log(Boolean('')); //Falsy
console.log(Boolean({})); //Empty Object - Truthy!
console.log(Boolean('Brian')); //Actual strings are Truthy

const money = 0; //We can in a cute example test if this person has money or not

if (money) {
    console.log(`Don't spend it all.`);
}
else {
    console.log(`You should get a job.`)
}

//The money = 0 is a falsy value. So it fails the if check. And goes straight to else.
//As soon as I change money to a value > 0 it works

let height;

if (height) {
    console.log(`Yay! Height is defined!`);
}
else {
    console.log(`Height is undefined.`);
}

//Undefined variables, like height, are considered falsy. So the if check fails. So until height has something assigned to it height is considered falsy.

*/



//EQUALITY OPERATORS

/*

const age = 18;

if (age === 18) console.log(`You just became an adult!`);

//If your if statement is only a single line you can just write it like this. No brackets needed

//=== is the equals equality operator. It must be an EXACT match. The strict equality operator requires both valeus to be exactly the same.


if (age == '18') console.log('You just became an adult');

//== is the loose equality operator. It can equate strings and numbers! Can be a close match not an exact one! Exact operator would require number equals a number. Loose is a string can equal a number.
//Either way it's best practice to use exact equality. Always use the ===

const favorite = prompt(`What's your favorite number?`);
console.log(typeof (favorite));
//REMEMBER THAT PROMPT COMMANDS ARE ALWAYS RETURNED AS STRINGS. DO NOT FORGET THAT

if (favorite === 23) console.log(`Cool! 23 is an amazing number.`);
//Note: By default the prompt is a string. '23' the string is not an exact match of 23 the number. So this fails.

if (Number(favorite) === 23) console.log(`Cool! 23 for real is awesome!`);

//An easier way to convert prompts is code like this
const newFavorite = Number(prompt(`What's your second favorite number?`));
console.log(typeof (newFavorite));

if (newFavorite === 23) {
    console.log(`Cool! 23. Yeah.`)
}
else if (newFavorite === 7) {
    console.log(`7 is pretty great too.`);
}
else if (newFavorite === 9) {
    console.log(`9 is alright.`);
}
else {
    console.log(`Your number is not 23 OR 7 OR 9.`);
}

if (newFavorite !== 23) console.log(`Why not 23?`);

*/



//BOOLEAN LOGIC

//It was a video on ! (Not) operator along with AND as well as OR logic. You already know how that works.




//LOGICAL OPERATORS

/*

const hasDriversLicense = true;
const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision); //true and false = true
// console.log(hasDriversLicense || hasGoodVision); //true or false = true
// console.log(!hasDriversLicense);//not true

// const shouldDrive = (hasDriversLicense && hasGoodVision); //true and false = false

// if (shouldDrive) {
//     console.log(`Sara is able to drive!`);
// }

// else {
//     console.log(`Someone else should drive`);
// }

const isTired = true;

console.log(hasDriversLicense || hasGoodVision || !isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log(`Sara is able to drive`);
}
else {
    console.log(`Someone else should drive.`);
}

*/


//THE SWITCH STATEMENT


/*

const day = `Monday`;

switch (day) {
    case `Monday`:
        console.log(`Plan course structure`);
        console.log(`Go to coding meetup.`);
        break;
    case `Tuesday`:
        console.log(`Prepare theory videos.`);
        break;
    case `Wednesday`:
    case `Thursday`: //NOTE! WHEN YOU SET UP A BLANK CASE IT JUST COPIES AND REUSES THE INFORMATION SHOWN IN THE CASE BENEATH IT. WEDNESDAY IS BLANK SO IT USES WHAT IS ENTERED FOR THURSDAY.
        console.log(`Write code examples`);
        break;
    case `Friday`:
        console.log(`I record videos.`);
        break;
    case `Saturday`:
    case `Sunday`:
        console.log(`Enjoy the weekend`);
        break;
    default:
        console.log(`Not a valid day!`);
}


//Switches are basically exceedingly fancy if/else statements. If the variable provided is a exact match for a case then the code inside will be executed. The default is essentially the else statement.

//Do not forget how crucially important the breaks are! They are what stop code from executing in a case! Otherwise it keeps on going to the next case!


//Challenge! Rewrite the switch as if/else code

if (day === `Monday`) {
    console.log(`Plan course structure`);
    console.log(`Go to coding meetup.`);
}
else if (day === `Tuesday`) {
    console.log(`Prepare theory videos.`);
}
else if (day === `Wednesday` || day === `Thursday`) {
    console.log(`Write code examples`);
}
else if (day === `Friday`) {
    console.log(`I record videos.`);
}
else if (day === `Saturday` || day === `Sunday`) {
    console.log(`Enjoy the weekend!`);
}
else {
    console.log(`Not a valid day!`);
}

//Switch statements are a bit cleaner in comparison. So just something to keep in mind since both are valid means of coding! Granted I say this as Jonas said that the switch statement is falling out of use. Just good to keep in mind you have options when tackling coding problems.

*/



//STATEMENTS AND EXPRESSIONS

//Expression: An expression is a piece of code that produces value
//3 + 4 (This is an expression. It produces a value of 7)
//1991 (This too is an expression since it produces a value in Javascript)
//true && false && !false (Also an expression! This produces a value)

//Statement: Statements are the verbs of programming. Like the if/else structure and framework. They don't do anything on their own until stuff is shoved into them.

//if (23 > 10) {
//  const str = `23 is bigger`;
//}

//The string inside the if/else statement is an expression. But the if/else framrwork itself is a statement.
//Anything that ends with a semicolon is a statement.

//console.log(`I'm ${2037 - 1991} years old.`); //This works since template literals want expressions



//THE CONDITIONAL (TERNARY) OPERATOR

const age = 23;

//age >= 18 ? console.log(`I like to drink wine 🍷.`) : console.log(`I like to drink water 💧.`);

//This is basically a very different way to write an if/else statement. Personally I fucking hate it.
//Lets you write an if else statement all in one line. The ? is the ternary operator.
//Condition: If Part: Else Part. (Three sections/requirements of the ternary operator)

const drink = age >= 18 ? `wine 🍷` : `water 💧`;
console.log(drink);

//The benefit of ternary operators though is... you can define a variable within it. Whereas with if/else statements you have to define a variable before the statement. If I wanted to do this in an if/else I would have to do this.

let drink2;
if (age >= 18) {
    drink2 = `wine 🍷`;
}
else {
    drink2 = `water 💧`;
}
console.log(drink2);

//Look how much more code is needed. That and the thing is... you can cram ternary statements into template literals.

console.log(`I am ${age} years old and like to drink ${age >= 18 ? `wine 🍷` : `water 💧`}.`);
//It's a little confusing but. Hey ternary operators work in template literals since this chunk right here is considered an expression.

//TERNARY IS NOT A REPLACEMENT FOR IF/ELSE. IT IS GOOD FOR VERY TINY 'EITHER OR' CHUNKS OF CODES.
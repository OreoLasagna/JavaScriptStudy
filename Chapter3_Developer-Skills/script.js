// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/*

const x = 23;

if (x === 23) console.log(23);

const calcAge = (birthYear) => 2037 - birthYear;
const test = `Don't mess with this`;

//We created a global snippets file via File > Preferences > Configure User Snippets
//brian.code-snippets
//And made it so that all we have to do is type cl in order for console.log to pop up. Pretty handy!

console.log(`Testing this live!`);
//Running LiveServer is handy by just hitting the LiveServer button at the bottom of the page



//LEARNING HOW TO CODE 

//4 Steps to Coding

//1. Make sure you 100% understand the problem. Ask as many questions as needed.
//2. Divide and conquer. Break a big problem into smaller sub-problems.
//3. Don't be afraid to do as much research as you have to.
//4. For bigger problems write pseudo-code before actual code.



//PRACTICE PROBLEM SOLVING FOR REALSIES

//PROBLEM 1
//We work for a company building a smart home thermometer. Our most recent task is this: ""Given an array of temperatures in one day, calculate the temperature amplitude. Keep in mind that sometimes there might be system errors.

const temperatures = [3, -2, -6, -1, `error`, 9, 13, 17, 15, 14, 9, 5];


//Let's break up the problem!
//First let's find a way to capture the min and max values. We want the difference between them to capture the amplitude.


//MY WAY OF SOLVING IT

let minTemp;
let maxTemp;
let delta;

function minTemperature (temperatures) {
    let minimum = 0;
    for (let i = 0; i < temperatures.length; i++) {
        if (typeof(temperatures[i]) == 'number' && temperatures[i] < minimum) {
            minimum = temperatures[i];
        }
    }

    return minimum;
}

function maxTemperature (temperatures) {
    let maximum = 0;

    for (let i = 0; i <temperatures.length; i++) {
        if (typeof(temperatures[i]) === 'number' && temperatures[i] > maximum) {
            maximum = temperatures[i];
        }
    }

    return maximum;
}

function deltaTemperature (minTemp, maxTemp) {
    return delta = maxTemp - minTemp;
}

console.log(minTemperature(temperatures)); //It works! 
console.log(maxTemperature(temperatures));
console.log(deltaTemperature(minTemperature(temperatures), maxTemperature(temperatures)));


//LESSON WAY OF SOLVING IT

//We can cram the min and max logic into a single function!

const calcTempAmplitude = function (temps) {
    let max = 0;
    let min = 0;

    for (let i = 0; i < temps.length; i++) {
        if (typeof(temps[i]) != 'number') {
            continue; //What this does is say if we are not dealing with a number just move on to the next iteration of the for loop.
        }
        
        if (temps[i] < min) {
            min = temps[i];
        }
        if (temps[i] > max) {
            max = temps[i];
        }
    }

    return max - min;
    
}

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);


//PROBLEM 2
//Function should now receive two arrays of temperatures

//So think it through. You want the minimum and maximum of all the arrays. Hum hum hum.
//The function as is obviously works fine for a single array. I guess what I can do is just... rerun the for loop again quite honestly.

//OR. BETTER YET. We just merge the arrays together.

const temperatures2 = [-13, 2, 6, 1, `error`, `gwag`, 27];


//MY ATTEMPT



const calcTempAmplitude2 = function (temps1, temps2) {
    let max = 0;
    let min = 0;

    for (let i = 0; i < temps1.length; i++) {
        if (typeof(temps1[i]) != 'number') {
            continue; //What this does is say if we are not dealing with a number just move on to the next iteration of the for loop.
        }
        
        if (temps1[i] < min) {
            min = temps1[i];
        }
        if (temps1[i] > max) {
            max = temps1[i];
        }
    }

    for (let i = 0; i < temps2.length; i++) {
        if (typeof(temps2[i]) != 'number') {
            continue; //What this does is say if we are not dealing with a number just move on to the next iteration of the for loop.
        }
        
        if (temps2[i] < min) {
            min = temps2[i];
        }
        if (temps2[i] > max) {
            max = temps2[i];
        }
    }

    console.log(min, max);
    return max - min;
    
}

const amplitude2 = calcTempAmplitude2(temperatures, temperatures2);
console.log(amplitude2);




//LESSON ANSWER

const calcTempAmplitude2 = function (temps, temps2) {
    
    const tempsTotal = temps.concat(temps2); //This is how we combine arrays together! I just goggled this. Ideally reference the Mozilla Dev Docs.
    
    let max = 0;
    let min = 0;

    for (let i = 0; i < tempsTotal.length; i++) {
        if (typeof(tempsTotal[i]) != 'number') {
            continue; //What this does is say if we are not dealing with a number just move on to the next iteration of the for loop.
        }
        
        if (tempsTotal[i] < min) {
            min = tempsTotal[i];
        }
        if (tempsTotal[i] > max) {
            max = tempsTotal[i];
        }
    }

    return max - min;
    
}

const amplitude2 = calcTempAmplitude2(temperatures, temperatures2);
console.log(amplitude2);

*/


//DEBUGGING AND BREAK POINTS

/*
const measureKelvin = function () {
    const measurement = {
        type:  `temp`,
        unit: `celsius`,
        value: Number(prompt(`Degrees celsius:`)),
    }

    console.log(measurement.value);
    //console.warn(measurement.value);
    //console.error(measurement.value);

    const kelvin = measurement.value + 273;
    return kelvin;
}

console.log(measureKelvin());

*/

/*

const calcTempAmplitudeBug = function (t1, t2) {
    
    const tempsTotal = t1.concat(t2); //This is how we combine arrays together! I just goggled this. Ideally reference the Mozilla Dev Docs.
    
    let max = 0;
    let min = 0;

    for (let i = 0; i < tempsTotal.length; i++) {
        if (typeof(tempsTotal[i]) != 'number') {
            continue; //What this does is say if we are not dealing with a number just move on to the next iteration of the for loop.
        }


        debugger; //JUST TYPING IN DEBUGGER WILL LAUNCH IT FOR ME IN THE BROWSER BY DEFAULT. VERY HANDY
        if (tempsTotal[i] > max) {
            max = tempsTotal[i];
        }

        if (tempsTotal[i] < min) {
            min = tempsTotal[i];
        }

    }

    console.log(max, min);
    return max - min;
    
}

const amplitudeBug = calcTempAmplitudeBug([3,5,1], [9,4,5]);
console.log(amplitudeBug);

*/
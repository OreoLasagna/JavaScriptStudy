let country = "United States";
let continent = "North America";
let population = 330;

console.log(country);
console.log(continent);
console.log(population);

//CHALLENGE 1

/*


const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark/(heightMark ** 2);
const BMIJohn = massJohn/(heightJohn ** 2);

const markHigherBMI = (BMIMark > BMIJohn);

console.log(BMIMark, BMIJohn, markHigherBMI);

*/

//CHALLENGE 2

/*

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);


if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
}
else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}

*/


//CHALLENGE 3

/*

const scoreDolphins = (96 + 108 + 89)/3 ;
const scoreKoalas = (88 + 91 + 110)/3 ;

if (scoreDolphins > scoreKoalas) {
    console.log(`Dolphins win the trophy`);
}
else if (scoreKoalas > scoreDolphins) {
    console.log(`Koalas win the trophy`);
}
else if (scoreDolphins === scoreKoalas) {
    console.log(`Both win the trophy`);
}

*/


//CHALLENGE 4

/*


const bill = 275;

const tip = bill >= 50 && bill <= 300 ? (bill * 0.15) : (bill * 0.20);  

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);


*/
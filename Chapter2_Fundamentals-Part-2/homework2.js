//CHAPTER 2 HOMEWORK

//CHALLENGE 1

/*

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3)/3;

const scoreDolphins = calcAverage(23, 23, 23);
const scoreKoalas = calcAverage(23, 23, 23);

function checkWinner (avgDolphins, avgKoalas) {
    if (avgDolphins > avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    }
    else if (avgKoalas > avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    }
    else if (avgDolphins == avgKoalas) {
        console.log(`No team wins...`);
    }
}

checkWinner(scoreDolphins, scoreKoalas);

*/



//CHALLENGE 2

/*

function calcTip (bill) {
    if (bill >= 50 && bill <= 300 ) {
        return bill * 0.15;
    }
    else {
        return bill *0.20;
    }
}

console.log(calcTip(100));

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]

console.log(tips);
console.log(total);


*/



//CHALLENGE 3

/*

const mark = {
    fullName: `Mark Miller`,
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass/(this.height * this.height);
        return this.bmi;
    }
}

const john = {
    fullName: `John Smith`,
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass/(this.height * this.height);
        return this.bmi;
    }
}

//console.log(mark.calcbmi(), john.calcbmi());


if (mark.calcBMI() > john.calcBMI()) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
}
else {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);
}

*/


//CHALLENGE #4

/*

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  }
  
  
  const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
  const tips = [];
  const totals = [];
  
  for (let i = 0; i < bills.length; i++) {
      tips.push(calcTip(bills[i]));
      totals.push(tips[i] + bills[i]);
  }
  
  //console.log(bills);
  //console.log(tips);
  //console.log(totals);
  
  
  //BONUS
  
  const calcAverage = function (arr) {
      let sum = 0;
      for (let i = 0; i < arr.length ; i ++) {
          sum = sum + arr[i];
      }
      sum = sum/arr.length;
      return sum;
  }
  
  
  console.log(totals);
  console.log(calcAverage(totals));

  */
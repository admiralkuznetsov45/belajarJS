'use strict'
//Strict Mode merupakan mode di JS agar lebih aman dan terbebas dari Bug dan Error 

//Function
/*Sekumpulan Kode yang bisa diulang-ulang kembali seperti variable namun isinya kode*/
/*
//Fungsi Tanpa Parameter
function logger() {  
    console.log("Iseng");
}

logger();
logger();

//Fungsi Dengan Parameter
function fruitProcessor(apples,oranges){
    console.log(apples,oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;

    return juice //Kalau dikomen ini undefined 
}

//hanya logging ke console
fruitProcessor(5,4);
//menyimpan data yg diambil dari juice
let Jus = fruitProcessor(2,2);
console.log(Jus);

//Challenge
function describeCountry(country,population,capitalCity){
    const negara = `${country} has ${population} million people and its capital city is ${capitalCity}`
    return negara;
}

const Indonesia = describeCountry('Indonesia','250','Jakarta');
const Netherlands = describeCountry('Netherlands','4','Amsterdam');
console.log(Indonesia,Netherlands);


//FUNCTION DECLARATION AND EXPRESSION

//function declaration disimpan sebagai deklarasi
function calcAge1(birthYear){
    return 2037 - birthYear;
}
const age1 = calcAge1(1994);
console.log(age1);

//function expression disimpan sebagai expression dari const
const calcAge2 = function(birthYear){
    return 2037 - birthYear ; 
}

const age2 = calcAge2(1993);

console.log(age2);


//Challenge Function Declaration and Expression
function percentageOfWorld(population){
    return (population/7900 )* 100;
}

const percentageOfWorld2 = function(population){
    return (population/7900 )* 100;
}

const usa = percentageOfWorld(1440);
const china = percentageOfWorld2(300);

console.log(usa,china);

//Arrow Function
//Fungsi sederhana dan lebih cepat dari Fungsi normal menggunakan tanda panah

//Satu Baris
const calcAge3 = birthYear => 2037 - birthYear;

//Fungsi dengan multibaris
const yearsUntillRetirement = (birthYear,firstName) => {
    const age = 2037 - birthYear; 
    const retirement = 65 - age;
    
    //masih butuh returun
    return `${firstName} will retire in ${retirement} years`;
}
console.log(yearsUntillRetirement(1990,`Joko`));

//Challenge 
const percentageOfWorld3 = population => (population/7900) * 100 ; 

const singapore = percentageOfWorld3(30);
console.log(singapore); */

//Functions Calling Other Functions
//other function 
/*
function potong(buah){
    return buah*4;
}

//fungsi pake arrow
const potong1 = buah => buah*6; 

//main function
function fruitProcessor(apple , orange ){

    const applePieces = potong1(apple) ;
    const orangePieces = potong1(orange);
    
    const juice = ` Juice Apple have ${applePieces} and Orange Juice have ${orangePieces}`

    return juice;
}

console.log (fruitProcessor(5,4)); 

//Challenge Fungsi Menghitung Persentase
const percentageOfWorld = population => (population/7900) * 100 ; 

function describePopulation (country,population){
    const percentage = percentageOfWorld(population);
    const description = `${country} has ${population} million people  , which is about ${percentage} %
    of the world`

    //tidak direturn melainkan langsung dikeluarkan
    console.log(description);
}

//Cukup memanggil nama saja , sudah bisa print out deskripsi
describePopulation('China',1441);
describePopulation('Indonesia',250);


//Review Materi Fungsi

//memanggil fungsi yang atas
const calcAge = function (birthYear){
    return 2037 - birthYear;
}

function yearsUntillRetirement(birthYear,firstName){
    const age = calcAge(birthYear); 
    const retirement = 65 - age;
    
    //masih butuh returun
    if (retirement > 0){
        console.log(`${firstName} will retired in ${retirement} years`)
        return retirement;
    } else {
        console.log(`${firstName} already retired`)
        return -1;
    }
}

//tidak di store dlm variable
console.log(yearsUntillRetirement(1950,'Joko'));
console.log(yearsUntillRetirement(1992,'Bambang')); 

// Coding Challenge #1

const calcAverage = (a,b,c) => {
    return (a+b+c)/3;
}

//Menghitung Skor dari Dolhins dan Koalas , lalu menghitung rata-rata nya 
//Menggunakan Let karena data bisa diubah2
let scoreDolhins = calcAverage(44,23,71);
let scoreKoalas = calcAverage(65,54,49);

function checkWinner(avgDolhins,avgKoalas){
    if (avgDolhins > 2* avgKoalas) {
        console.log(`Dolhins Wins (${avgDolhins} vs ${avgKoalas})`);
    } else if (avgKoalas > 2 * avgDolhins) {
        console.log(`Koalas Wins (${avgDolhins} vs ${avgKoalas})`);
    } else {
        console.log("No Teams Wins . . .");
    }

}

checkWinner(scoreDolhins,scoreKoalas);


//Test Data 2
scoreDolhins = calcAverage(85,54,41);
scoreKoalas = calcAverage(23,34,27);

//calling function 
checkWinner(scoreDolhins,scoreKoalas);



//Introduction to Array
const friends = ['Michael', 'Steven' , 'Peter'];

//Print Index
console.log(friends[0]);
console.log(friends[1]);

//Print panjang array
console.log(friends.length);
console.log(friends.length - 1);

//Mengganti Index Array
friends[2] = 'Hadi' ; 
console.log(friends);

//Array Baru yang ada batas nya 
const firstName = 'Jonas';
const jonas = [firstName,'Schmedtann', 2037-1991,'teacher',friends];

console.log(jonas);
console.log(jonas.length);

//Exercise
function calcAge1(birthYear){
    return 2037 - birthYear;
}

const years = [1990,2003,2001,2004];

const age1 = calcAge1(years[1]);
const age2 = calcAge1(years[0]);
const age3 = calcAge1(years[years.length-1]);

console.log(age1,age2,age3);

//Challenge : Introduction to Array
const populations = [10,1441,332,83];
console.log(populations.length === 4);

function percentageOfWorld(populations){
    return (populations/7900 )* 100;
}

const percentages = [
percentageOfWorld(populations[0]),
percentageOfWorld(populations[1]),
percentageOfWorld(populations[2]),
percentageOfWorld(populations[3]),
];

console.log(percentages);


//Basic Array Operations (Methods)

//Penambahan Isi Array
let friends = ["Michael","Steven","Peter"]
friends.push("Jay")
console.log(friends)

friends.unshift("John");
console.log(friends)

//Pengurangan Isi Array
friends.pop()
console.log(friends)

friends.shift()
console.log(friends)

//mencari posisi pada array
console.log(friends.indexOf('Steven'))

console.log(friends.indexOf('Anwar')) //minus kalau tidak ada 

//Mengecek apakah terdapat dalam array atau tidak
console.log(friends.includes('Steven'))
console.log(friends.includes('Bob'))



//Challenge Javascript Basic Array Operations (Methods)
let neighbours = ['Malaysia','Brunei','Thailand']

neighbours.push('Utopia')

neighbours.pop()

if(neighbours.includes("Germany")){
    console.log("Probably not a central European country :D'")
}

console.log(neighbours.indexOf('Malaysia'))

let replacedItem = neighbours.splice(neighbours.indexOf('Malaysia'), 1, 'Kingdom of Malaysia')

console.log(neighbours)



//Coding Challenge #2
function calcTip (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
}

const bills = [125,55,44];
const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])]

const totals = [bills[0]+tips[0] , bills[1]+tips[1] , bills[2]+tips[2]];

console.log(bills,tips,totals);



//Introduction to Objects

const Jonas = {
    firstName :'Jonas',
    lastName : 'Schdetmann',
    age: 2037-1991,
    job:'Teacher',
    friends = ['Joko','Anwar','Ahmad']  
}

const myCountry = {
    country : "Indonesia",
    capital : "Jakarta",
    language : "Indonesian",
    Population : "250000000",
    neighbours : ['Malaysia','Thailand','New Zealand']
}

const Jonas = {
    firstName :'Jonas',
    lastName : 'Schdetmann',
    age: 2037-1991,
    job:'Teacher',
    friends : ['Joko','Anwar','Ahmad']  
}

//console.log(Jonas.friends)

//Penggunaan Dot Notation
console.log(jonas.lastName)
console.log(jonas[lastName])

const nameKey = "Name"
console.log(jonas['first' + nameKey])
console.log(jonas['last' + nameKey])

const interestedIn = prompt('What do you want to know about Jonas ? Choose between firstName , lastName , age , job and friends')

console.log(jonas[interestedIn])

//Nambah properti
jonas.location = "Portugal"
jonas['Twitter'] = '@jonasschdetmann'

console.log(jonas)


//Challenge
console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friends is called ${jonas.friends[0]}` )

//Object Methods
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYeah: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
  
    // calcAge: function (birthYeah) {
    //   return 2037 - birthYeah;
    // }
  
    // calcAge: function () {
    //   // console.log(this);
    //   return 2037 - this.birthYeah;
    // }
  
    calcAge: function () {
      this.age = 2037 - this.birthYeah;
      return this.age;
    },
  
    getSummary: function () {
      return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
  };
  
  console.log(jonas.calcAge());
  
  console.log(jonas.age);
  console.log(jonas.age);
  console.log(jonas.age);
  
  // Challenge
  // "Jonas is a 46-year old teacher, and he has a driver's license"
  console.log(jonas.getSummary()); 


//Coding Challenge 3
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
      this.bmi = this.mass / this.height ** 2;
      return this.bmi;
    }
  };
  
  const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
      this.bmi = this.mass / this.height ** 2;
      return this.bmi;
    }
  };
  
  mark.calcBMI();
  john.calcBMI();
  
  console.log(mark.bmi, john.bmi);
  
  // "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
  
  if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
  } else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
  }
  


//Iteration : The for loop
// console.log('Lifting weights repetition 1 🏋️‍♀️');
// console.log('Lifting weights repetition 2 🏋️‍♀️');
// console.log('Lifting weights repetition 3 🏋️‍♀️');
// console.log('Lifting weights repetition 4 🏋️‍♀️');
// console.log('Lifting weights repetition 5 🏋️‍♀️');
// console.log('Lifting weights repetition 6 🏋️‍♀️');
// console.log('Lifting weights repetition 7 🏋️‍♀️');
// console.log('Lifting weights repetition 8 🏋️‍♀️');
// console.log('Lifting weights repetition 9 🏋️‍♀️');
// console.log('Lifting weights repetition 10 🏋️‍♀️');

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 30; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
  }


// Looping Arrays, Breaking and Continuing
// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037-1991,
//     'teacher',
//     ['Michael','Peter','Steven'],
//     true
// ];

// const types = []

// for (let i = 0; i < jonas.length; i++) {
//     //Membaca dari array jonas
//     console.log(jonas[i],typeof jonas[i]);

//     //Mengisi data array
//     types.push( jonas[i])
//   }

// console.log(types)

// const years = [1991,2007,1969,2020]
// const ages = []

// for(let i=0 ; i < years.length ; i++){
//     ages.push(2037 - years[i])
// }

// console.log(ages)

// console.log('--- ONLY STRINGS ---')
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] !== 'string') continue;

//   console.log(jonas[i], typeof jonas[i]);
// }

// console.log('--- BREAK WITH NUMBER ---')
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] === 'number') break;

//   console.log(jonas[i], typeof jonas[i]);
// }

*/

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end...');
}

///////////////////////////////////////
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/


const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));

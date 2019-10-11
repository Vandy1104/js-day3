console.log('Hello js!');

// To find the bigger number

var firstNum = 20;
var secondNum = 27;

// if (firstNum > secondNum) {
//   document.getElementById('result').innerHTML = firstNum +' ' + "is the biggest<br>";
// } else {
//   document.getElementById('result').innerHTML = secondNum +' ' + "is the biggest<br>";
// }
//
// var age1 = 74;
// var age2 = 99;
// var age3 = 67;
//
// if ((age1 > age2) && (age1 > age3)) {
//   document.getElementById('result').innerHTML = age1 +' ' + "is the eldest<br>";
// } else if (age2 > age3) {
//   document.getElementById('result').innerHTML = age2 +' ' + "is the eldest<br>";
// } else {
//   document.getElementById('result').innerHTML = age3 +' ' + "is the eldest<br>";
// }


//calculate coffee price consider discount.. condition 5 Coffee

// var coffeePrice = 3.45;
//
// var quantity = prompt("how many coffee(s)?");
//
// var cost = coffeePrice * quantity;
//
// var discountCost = coffeePrice * (50/100) * quantity;
//
//
//
// if (quantity >= 5) {
//   document.getElementById('result').innerHTML = "<br>The bill is$" + discountCost;
// } else {
//   document.getElementById('result').innerHTML = "<br>The bill is$" + cost;
// }
//
// var coffeeType = prompt ('What coffee - Mocha or Flatwhite?');
//
// if (coffeeType=== "mocha") {
//   document.getElementById('coffeeImage').innerHTML = '<img src="images/mocha.jpeg">';
// } else if (coffeeType === "flatwhite") {
//   document.getElementById('coffeeImage').innerHTML = '<img src="images/flat-white.jpeg">';
// }

// Exercise 2 Muffin (MyStyle)

// var muffinPrice = 2.35;
//
// var Mquantity = prompt("how many Muffin(s)?");
//
// var Mcost = muffinPrice * Mquantity;
//
// var discountCost1 = 2.10 * Mquantity;
//
// var discountCost2 = 1.90 * Mquantity;
//
// if (Mquantity < 10) {
//   document.getElementById('result').innerHTML = "<br>The bill is$" + Mcost;
// } else if (Mquantity < 25) {
//   document.getElementById('result').innerHTML = "<br>The bill is$" + discountCost1;
// } else {
//   document.getElementById('result').innerHTML = "<br>The bill is$" + discountCost2;
// }


//OR

//Beula Style

// var muffinQuantity = prompt ("How many muffins?");
//
// if(muffinQuantity < 9) {
//   var muffinPrice = 2.35;
// } else if (muffinQuantity < 25) {
//   var muffinPrice = 2.10;
// } else {
//   muffinPrice = 1.90;
// }
//
// var muffinCost = muffinPrice * muffinQuantity;
// document.getElementById('result').innerHTML = "<br>The bill is$" + muffinCost;

//Steaks cost and free steaks number display

// var steakQuantity = parseInt(prompt("How many Steaks?"));
// var sauceQuantity = 0;
// var freeSteaks = Math.floor(steakQuantity/2);
//
// // var sauceQuantity = prompt ("How many Sauces?");
//
// if(steakQuantity >= 2 ) {
//   document.getElementById('result').innerHTML = "You will get "+ freeSteaks +" free steak.";
//   var sauce = prompt("Do you want sauce? Please enter yes or no.").toLowerCase();
//   if(sauce=== "yes") {
//     var sauceQuantity = parseInt(prompt("How many sauces?"));
//
//   }
// }
//
// var steakCost = steakQuantity * 25.60 + sauceQuantity * 2;
//
// document.getElementById('result').innerHTML+= " steakCost = $" + steakCost.toFixed(2) + " " + "Total Steaks"+" "+ steakQuantity;




//By me
//Person1
// var food1 = parseInt(prompt("Enter Food cost for person1"));
// console.log(food1)
// var transport1 = parseInt(prompt("Enter Transport cost for person1"));
// console.log(transport1)
// var bills1 = parseInt(prompt("Enter Bills cost for person1"));
// console.log(bills1);
// var total1 = food1 + transport1 + bills1;
// console.log(total1);
// document.getElementById('result').innerHTML+= "Person1 Total Expense is $"+ total1;
//
// //Person2
// var food2 = parseInt(prompt("Enter Food cost for person2"));
// console.log(food2)
// var transport2 = parseInt(prompt("Enter Transport cost for person2"));
// console.log(transport2)
// var bills2 = parseInt(prompt("Enter Bills cost for person2"));
// console.log(bills2);
// var total2 = food2 + transport2 + bills2;
// console.log(total2);
// document.getElementById('result').innerHTML+= "<br>Person2 Total Expense is $"+ total2;
//
// //Person3
// var food3 = parseInt(prompt("Enter Food cost for person3"));
// console.log(food3)
// var transport3 = parseInt(prompt("Enter Transport cost for person3"));
// console.log(transport3)
// var bills3 = parseInt(prompt("Enter Bills cost for person3"));
// console.log(bills3);
// var total3 = food3 + transport3 + bills3;
// console.log(total3);
// document.getElementById('result').innerHTML+= "<br>Person3 Total Expense is $"+ total3;
//
// var avgEx = math.round((total1 + total2 + total3)/3);
// document.getElementById('exResult').textContent+= "<br>Average cost to live in Wellington is $"+ avgEx;

//I tried this, was not appropriate.
// var food2 = prompt("Enter Food cost");
// var transport2 = prompt("Enter Transport cost");
// var bills2 = prompt("Enter Bills cost");
// var total2 = food2 + transport2 + bills2;
// document.getElementById('result').innerHTML = "Person2 Total Expense is $"+ total1;
//
// var food3 = prompt("Enter Food cost");
// var transport3 = prompt("Enter Transport cost");
// var bills3 = prompt("Enter Bills cost");
// var total3 = food3 + transport3 + bills3;
// document.getElementById('result').innerHTML = "Person3 Total Expense is $"+ total1;


//By Beula
var person1Food = 250;
var person1Transport  = 45;
var person1Bills = 225;
var total1 = (person1Food + person1Transport + person1Bills) ;
document.getElementById('result1').textContent = 'The total expense of person1 is $' + total1;

// person2
var person2Food = 100;
var person2Transport  = 125;
var person2Bills = 175;
var total2 = (person2Food + person2Transport + person2Bills);
document.getElementById('result2').textContent = 'The total expense of person2 is $' + total2;

// person3
var person3Food = 185;
var person3Transport  = 160;
var person3Bills = 155;
var total3 = (person3Food + person3Transport + person3Bills) ;
document.getElementById('result3').textContent = 'The total expense of person3 is $'+ total3;

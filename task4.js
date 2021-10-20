//How to compare two JSON have the same properties without order?

var obj1 = { name: "Person 1", age: 5 };
var obj2 = { age: 5, name: "Person 1" };
let values1 = Object.values(obj1);
let values2 = Object.values(obj2);

let flag = true;
//checking length
if (values1.length === values2.length) {
  for (let i in values1) {
    //if values are included then flag will be true and true will be printed in console
    if (values2.includes(values1[i])) {
    } else {
      // if values are not included then flag will be false and false will be printed in console
      flag = false;
      break;
    }
  }
}
if (flag) {
  console.log("true");
} else {
  console.log("false");
}

//XML Http request
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function () {
  var countries = JSON.parse(this.response);
  console.log(countries);
  for (let i in countries) {
    console.log(countries[i].name);
    console.log(countries[i].flag);
    console.log(countries[i].region);
    console.log(countries[i]["subregion"]);
    console.log(countries[i].population);
    console.log(" --------"); //for a gap
  }
};
xhr.onerror = function () {
  console.log("Error", this.statusText);
};
xhr.send();

// 1. Declare four variables without assigning values and print them in console
let a, b, c, d;
console.log(a, b, c, d);

//How to get value of the variable myvar as output
let myVar = 5;
console.log(myVar);

// Declare variables to store your first name, last name, marital status, country and age in multiple lines
let fName = "Abhishek";
let lName = "Raam";
let marital_Status = "unmarried";
let Country = "India";
let Age = 22;

//Declare variables to store your first name, last name, marital status, country and age in a single line
let firstName = "Abhishek",
  lastName = "Raam",
  marital_status = "unmarried",
  country = "India",
  age = 22;

// Declare variables and assign string, boolean, undefined and null data types
let ab = true;
let string = "I am String";
let cd = null;
let dc;
let ba = false;

// Convert the string to integer
let str = "66";
let integer = +str;

//Write 6 statement which provide truthy & falsey values
let truthy1 = "a";
let truthy2 = "6";
let truthy3 = true;
let falsey1 = null;
let falsey2;
let falsey3 = false;

//Task 2: Simple Programs todo for Operators-

//Square of a number
function square(n) {
  return n * n;
}

//Swapping 2 numbers
function swap(n1, n2) {
  (n1 = 5), (n2 = 6);
  let arr = [];
  arr.push(n1);
  arr.push(n2);
  arr[0] = n2;
  arr[1] = n1;
  return arr.join();
}
console.log(swap());

//Addition of 3 numbers

function sum(n1, n2, n3) {
  return n1 + n2 + n3;
}

//Celsius to Fahrenheit conversion
// (0°C × 9/5) + 32 = 32°F
function conversion(n) {
  let a = n * (9 / 5);
  return a + 32;
}

//Meter to miles
//divide the length value by 1609
function con(n) {
  return n / 1609;
}

//Pounds to kg
// divide the mass value by 2.205
function conv(n) {
  return n / 2.205;
}

//Calculate Batting Average for given array
function avg(arr) {
  let n = arr.length;
  let sum = 0;
  for (let i in arr) {
    sum += arr[i];
  }
  return sum / n;
}

//Calculate five test scores and print their average
console.log(avg([25, 45, 67, 100, 150]));

//Power of any number x ^ y.
function pow(a, b) {
  return Math.pow(a, b);
}

//Calculate Simple Interest
function sI(p, r, t) {
  return (p * r * t) / 100;
}

//Calculate area of an equilateral triangle
function eqiTriArea(a) {
  let squrt = Math.sqrt(3);
  let square = Math.pow(a, 2);
  return (squrt * square) / 4;
}

//Area Of Isosceles Triangle
function isoTriArea(b, h) {
  return (b * h) / 2;
}

//Volume Of Sphere
function volSphere(r) {
  let cube = Math.pow(r, 3);
  return (4 * Math.PI * cube) / 3;
}

//Volume Of Prism
//The formula for the volume of a prism is V=Bh , where B is the base area and h is the height. The base of the prism is a rectangle. The length of the rectangle is 9 cm and the width is 7 cm.
function prismVol(B, h) {
  return B * h;
}

//Find area of a triangle.
function triArea(b, h) {
  return (b * h) / 2;
}

//Give the Actual cost and Sold cost, Calculate Discount Of Product
function actCost(n1, n2) {
  return n1 - n2;
}

//Given their radius of a circle and find its diameter, circumference and area.
function findDiameter(r) {
  let diameter = 2 * r;
  return diameter;
}
function findArea(r) {
  let area = Math.PI * Math.pow(r, 2);
  return area;
}
function findCircum(r) {
  let circum = 2 * Math.PI * r;
  return circum;
}
console.log(findCircum(2));

//Given two numbers and perform all arithmetic operations.
// let addition = num1 + num2;
// let subtraction = num1 - num2;
// let multiplication = num1 * num2;
// let division = num1 / num2;

//Display the asterisk pattern as shown below(No loop needed):
// *****
// *****
// *****
// *****
// *****
let number = 5;
for (let i = 0; i < number; i++) {
  for (let j = 0; j < number; j++) {
    console.log("*");
  }
  console.log("\n");
}

//Calculate electricity bill?
//For example, a consumer consumes 100 watts per hour daily for one month. Calculate the total energy bill of that consumer if per unit rate is 10?
function bill(w, r, t) {
  let kwh = (w * t) / 1000;
  let perDayBill = kwh * r;
  let monthlyBill = perDayBill * 30;
  return monthlyBill;
}

console.log(bill(100, 10, 1));

//Program To Calculate CGPA
//percentage/9.5
function calcCgpa(marks, totalMarks) {
  let percentage = (marks / totalMarks) * 100;
  return percentage / 9.5;
}
console.log(calcCgpa(480, 600));
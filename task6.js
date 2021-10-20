//Task 3: Simple Programs todo for Condition , Looping and Arrays

//Write a loop that makes seven calls to console.log to output the  triangle:
let n = 5;
for (let i = 0; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    console.log("#");
  }
  console.log("\n");
}

//Iterate through the string array and print it contents
var strArray = [
  "<option>Jazz</option>",
  ,
  "<option>Blues</option>",
  ,
  "<option>New Age</option>",
  ,
  "<option>Classical</option>",
  ,
  "<option>Opera</option>",
];
for (let i in strArray) {
  console.log(strArray[i]);
}

//write a code to count the elements in the array . Don’t use length property
var myarray = [11, 22, 33, 44, 55];
let count = 0;
for (let i in myarray) {
  count++;
}
console.log(count);

//Create an array called foods holds the names of your top 20 favorite foods, starting with the best food.
//let foods=[]
// — — — — — — — — — — — — — — — -
// Foods variable holds the names of your top 20 favorite foods, starting with the best food. How can you find your fifth favorite food?
// let foods=[]
// Find the length of your foods array
let foods = [
  "Biryani",
  "chicken masala",
  "chicken curry",
  "chicken tandoori",
  "chicken mughali",
  "fried rice",
  "burger",
  "pizza",
  "naan",
  "chocolate",
  "mango",
  "pineapple",
  "idli",
  "dosa",
  "paratha",
  "roti",
  "rajma chawal",
  "potato curry",
  "egg curry ",
  "fish curry",
];
console.log(foods[4]); // it will be fifth favourite food.
console.log(foods.length); // it will be length of foods array

//Starting from the existing friends variable below, change the element that is currently “Mari” to “Munnabai”.
let friends = [
  "Mari",
  "MaryJane",
  "CaptianAmerica",
  "Munnabai",
  "Jeff",
  "AAk chandran",
];
function dataHandling(arr) {
  for (var i = 0; i < arr.length; i++) {
    let j = arr.indexOf("Mari");
    arr[j] = "Munnabai";
  }
}
dataHandling(friends);
console.log(friends);

// Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica.
let friends1 = [
  "Mari",
  "MaryJane",
  "CaptianAmerica",
  "Munnabai",
  "Jeff",
  "AAk chandran",
];
function dataHandling(input) {
  for (var i = 0; i < input.length; i++) {
    if (input[i] === "CaptianAmerica") {
      break;
    } else {
      console.log(input[i]);
    }
  }
}
dataHandling(friends1);

//Find the person is ur friend or not.
function dataHandling(input, name) {
  for (var i = 0; i < input.length; i++) {
    if (input[i] === "Jeff") {
      return "friends";
    }
  }
}
let found = dataHandling(friends1, "Jeff");
console.log(found);

//We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list.
var friends2 = [
  "Mari",
  "MaryJane",
  "CaptianAmerica",
  "Munnabai",
  "Jeff",
  "AAk chandran",
];
var friends3 = ["Gabbar", "Rajinikanth", "Mass", "Spiderma", "Jeff", "ED"];

function dataHandling(arr1, arr2) {
  let res = [];
  for (let i in arr1) {
    res.push(arr1[i]);
  }
  for (let i in arr2) {
    res.push(arr2[i]);
  }
  res.sort((a, b) => {
    if (a < b) return -1;
    else if (a > b) return 1;
    return 0;
  });
  return res;
}

console.log(dataHandling(friends2, friends3));

var friends4 = [
  "Mari",
  "MaryJane",
  "CaptianAmerica",
  "Munnabai",
  "Jeff",
  "AAk chandran",
];
//Get the first item, the middle item and the last item of the array
let m = friends4.length / 2;
let n1 = friends4.length - 1;
console.log(friends4[0]);
console.log(friends4[m]);
console.log(friends4[n1]);

// 2. Add your name to the end of the friends array, and add another name to beginning.
friends4.push("Arpit");
friends4.unshift("rahul");

// 3. Add Mr or Ms to the names in the friends array.
// friends4[0] = "Ms Mari";
// friends4[1] = "Ms MaryJane";
// friends4[2] = "Mr CaptianAmerica";
// friends4[3] = "Ms Munnabai";
// friends4[4] = "Mr Jeff";
// friends4[5] = "Mr AAK chandran";

// 4. Concat all the names the friends array and return as comma “,” seperated string.
console.log(friends4.join(","));

// 5. Find the friends names who has letter ‘a’ and return the list.
let res = friends4.filter((e) => {
  if (e.includes("a")) {
    return e;
  }
});
console.log(res);

// 6. Find the avg length of all the friends names. Get the individual length of the names and do the avg.
let lenArr = [];
for (let i in friends4) {
  lenArr.push(friends4[i].length);
}
console.log(lenArr);
let sum = 0;
for (let i in lenArr) {
  sum += lenArr[i];
}
console.log(sum / friends4.length); //avergae length of names

// 7. Find the names and return the list starting with letter M.
let res1 = friends4.filter((e) => {
  if (e[0] === "M") {
    return e;
  }
});
console.log(res1);

// 8. Find the name with max characters and return the name.
function maxChar(arr) {
  let obj = {};
  for (let i of friends4) {
    obj[i] = i.length;
  }

  let values = Object.values(obj);
  let char = "";
  let max = Math.max(...values);
  for (let i in obj) {
    if (obj[i] === max) {
      char += i;
    }
  }
  return char;
}
console.log(maxChar(friends4));

// 9. Find the name with min characters and return the name.
function minChar(arr) {
  let obj = {};
  for (let i of friends4) {
    obj[i] = i.length;
  }
  let values = Object.values(obj);
  let char = "";
  let min = Math.min(...values);
  for (let i in obj) {
    if (obj[i] === min) {
      char += i + ",";
    }
  }
  return char;
}
console.log(minChar(friends4));

//Find the average in the array below.
//Make sure you add only the numbers and do avg.
const friendsInfo = [
  6,
  12,
  "Mari",
  1,
  true,
  "Munnabai",
  "200",
  "CaptianAmerica",
  8,
  10,
];
let sum1 = 0;
let count1 = 0;
for (let i of friendsInfo) {
  if (typeof i === "number") {
    sum1 += i;
    count1++;
  }
}
console.log(sum1 / count1); //average of all numbers in array

// Print the contents of the input variable
var input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
];
function dataHandling1(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (let j in arr[i]) {
      console.log(arr[i][j]);
    }
  }
}
dataHandling1(input);

//Add a new key value pair to myobject
// key : ten
// value : ten
let myobject = { 1: "one", 11: 1, name: "arun" };
//your code goes here
myobject.ten = "ten";
console.log(myobject);

// Write out an object literal to represent the data below.
// Guvi, Geek, 6, IIT-M RP,Chennai.
let obj1 = { name: "Guvi Geek", roadNo: 6, address: "IIT-M RP, Chennai" };

// How would you represent the following data using a combination of object literals and arrays? (You can describe a strategy without typing or writing out the whole thing.)
// Guvi, Geek, 6, IIT-M RP,Chennai.
// Amazon, Inc, 31, SP Infocity, Chennai.
// Google, Alphabet, 34 Amphitheater Parkway, MountainView.
// Tesla, Inc , 32, 333 Santana Row,San Jose.

let obj2 = [
  { name: "Guvi Geek", roadNo: 6, address: "IIT-M RP, Chennai" },
  { name: "Amazon Inc", roadNo: 31, address: "SP Infocity, Chennai" },
  {
    name: "Google Alphabet",
    roadNo: 34,
    address: "Amphitheater Parkway, MountainView",
  },
  { name: "Tesla Inc", roadNo: 32, address: "333 Santana Row,San Jose" },
];

//Part 1: Find the culprits and nail them — debugging javascript

//Find the culprit
// fix.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script>
//  alert( “I’m JavaScript!’);
//  </script>
//  Whats the error in this ?
// </body>
// </html>

alert("I'am Javascript"); //this line was incorrect , it didn't had closing " .

// explain how it works
// script.js
// alert("I'm JavaScript!");
// alert('Hello') // this line is not having semicolon
// alert(`Wor
//  ld`)
// alert(3 +
// 1
// + 2); // this is multiple line code and its working

//they are working because the code is corret , there is no error

// Fix the below to alert Guvi geek
// let admin=9, fname=10.5;
// fname = "Guvi";
// lname = "geek"
// admin = fname+lname;
// alert( admin ); // "Guvi geek"

let admin = 9,
  fname = 10.5;
fname = "Guvi";
let lname = "geek";
admin = fname + lname;
alert(admin); // "Guvi geek"

//fix below to alert Guvi geek
// let fname=10.5;
// fname = "Guvi";
// lname = "geek"
// let name = fname+lname;
// alert( 'hello ${name}' );

let fname1 = 10.5;
fname1 = "Guvi";
let lname1 = "geek";
let name = fname1 + lname1;
alert(`hello ${name}`);

// fix code to alert sum of two numbers
//let a = prompt("First number?");
//let b = prompt("Second number?");
//alert(a + b);

//Explain Why the Code is blasted and how to diffuse it and get “Diffused”.
var a = "2" > "12"; // here we are comparing strings we should compare numbers then we will get diffused
//Don't touch below this
if (a) {
  console.log("Code is Blasted");
} else {
  console.log("Diffused");
}

//fix the code
// let value = prompt("How many runs you scored in this ball");
// if (value === 4) {
//   console.log("You hit a Four");
// } else if (value === 6) {
//   console.log("You hit a Six");
// } else {
//   console.log("I couldn't figure out");
// } // here the closing '}' (curly bracket) was missing

//Fix the code to welcome the Employee
let login = "Employee";
let message =
  login == "Employee"
    ? "Welcome Employee"
    : login == "Director"
    ? "Greetings"
    : login == ""
    ? "No login"
    : "";
console.log(message);

//Fix the code to welcome the boss
// You cant change the value of the msg
let message1;
if (null || 2 || undefined) {
  message1 = "welcome boss";
} else {
  message1 = "Go away";
}
console.log(message1);

//Fix the code to welcome the boss
let message2;
let lock = false; //changed lock value to false
//Dont change any code below this
if (null || lock || undefined) {
  message2 = "Go away";
} else {
  message2 = "welcome";
}
console.log(message2);

//Fix the code to welcome the boss
let message3;
let lock1 = false; //changed lock value to false
//Dont change any code below this
if ((lock1 && " ") || undefined) {
  message3 = "Go away";
} else {
  message3 = "welcome";
}
console.log(message3);

//Change the code to print
// 3
// 2
// 1
//You can change only 2 characters

let i = 3;
while (i > 0) {
  // changed to condition to fix the loop
  console.log(i--); //i-- done to print i then reduce it
}

// Change the code to print 1 to 10 in 4 lines
for (let i = 1; i <= 10; i++) {
  // used for loop to print numbers 1 to 10
  console.log(i);
}

//Change the code to print even numbers
//You are allowed to modify only one character
for (let num = 2; num <= 20; num += 1) {
  if (num % 2 === 0) {
    // using if condition to get even numbers
    console.log(num);
  }
}

//Change the code to print all the gifts
let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < gifts.length; i++) {
  console.log(`Wrapped ${gifts[i]} and added a bow!`); //used back ticks and removed inverted commas inside ${} to fix code
}

//Fix the code to disarm the bomb.
let countdown = 100;
while (countdown > 0) {
  if (countdown == 0) {
    console.log("bomb triggered");
  }
  countdown--; // reducing the value of countdown after checking condition so the ocuntdown never reaches 0, moved countrdown-- below
}

//Whats the msg printed and why?
var lemein = "0";
var lemeout = 0;
var msg = "";
if (lemein) {
  msg += "hi";
}
if (lemeout) {
  msg += "hello";
}
console.log(msg); // it will print hi only because the first condition is met , it will not check for second condition

//Whats the msg printed and why? Guess you answer before running it.
var lemein = "0";
var lemeout = 0;
var msg = "";
if (lemein) {
  msg += "hi";
}
if (lemeout) {
  msg += "hello";
}
console.log(msg); //it will print hi only because the first condition is met , it will not check for second condition

// Part 2 : Find the culprits and nail them — debugging javascript loops
//Write a code to print the numbers in the array
//Output: 1234567891011
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";

for (let i = 0; i < 11; i++) {
  //fixed the condition to give the result
  new_string += numsArr[i];
}
console.log(new_string);

//Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)
//Output: 11 10 9 8 7 6 5 4 3 2 1
var new_string1 = "";

for (let i = 10; i >= 0; i--) {
  if (i === 0) {
    new_string1 += numsArr[i];
  } else {
    new_string1 += numsArr[i] + " ";
  }
}
console.log(new_string1);

//Write a code to replace the array value — If the number is even, replace it with ‘even’.
//Output:[ 1, “even”, 3, “even”, 5, “even”, 7, “even”, 9, “even”, … ]
var numsArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (let i = 0; i <= 10; i++) {
  if (numsArr2[i] % 2 == 0) {
    numsArr2[i] = "even";
  }
}
console.log(numsArr2);

//Write a code to add all the numbers in the array
//Output: 66
let sum3 = 0;
var numsArr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (let i = 0; i < 11; i++) {
  sum3 += numsArr[i];
}
console.log(sum3);

//Write a code to add the even numbers only
//Output: 30
var numsArr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let res2 = 0;
for (let i = 0; i <= 10; i++) {
  if (numsArr4[i] % 2 === 0) {
    res2 += numsArr4[i];
  }
}
console.log(res2);

//Write a code to add the even numbers and subract the odd numbers
//Output: 94
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var result = 100;
for (let i = 0; i <= 10; i++) {
  if (num[i] % 2 === 0) {
    result += num[i];
  } else {
    result -= numsArr[i];
  }
}
console.log(result);

//Write a code to print inner arrays
// Output:
// Array(5) [ 1, 2, 3, 4, 5 ]
// Array(6) [ 6, 7, 8, 9, 10, 11 ]
var num1 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10, 11],
];
for (let i = 0; i < num1.length; i++) {
  console.log(num1[i]);
}

//Write a code to print elements in the inner arrays
//Output: 1234567891011
let num2 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10, 11],
];
let newArr = [];
for (let i in num2) {
  for (let j in num2[i]) {
    newArr.push(num2[i][j]);
  }
}
console.log(newArr.join(""));

// Write a code to replace the array value — If the index is even, replace it with ‘even’.
// Output: [ [“even”, 2, “even”, 4, “even”], [6, “even”, 8, “even”, 10, …] ]
var numbers = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10, 11],
];
let str_all = 0;
for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers[i].length; j++)
    if (j % 2 == 0) {
      numbers[i][j] = "even";
    }
}
console.log(numbers);

//Write a code to print elements in the inner arrays in reverse
//Output: 11 10 9 8 7 6 5 4 3 2 1
var numbers1 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10, 11],
];
let array1 = [];
for (let i = numbers1.length - 1; i >= 0; i--) {
  let inner_array = numbers1[i];
  for (let j = inner_array.length - 1; j >= 0; j--) {
    array1.push(inner_array[j]);
  }
}
console.log(array1.join(" "));

//Write a code to add elements in the inner arrays based on odd or even values
// Output:
// 36
// 30
var numbers3 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10, 11],
];
var sum_odd = 0;
var sum_even = 0;
for (let i = 0; i < numbers3.length; i++) {
  let inner_array1 = numbers3[i];
  for (let j = 0; j < inner_array1.length; j++) {
    if (numbers3[i][j] % 2 != 0) {
      sum_odd += numbers3[i][j];
    } else {
      sum_even += numbers3[i][j];
    }
  }
}
console.log(sum_odd);
console.log(sum_even);

// Part 3: Find the culprits and nail them — debugging javascript

//Fix the code to get the largest of three.
let aa = (f, s, t) => {
  //console.log(f, s, t);
  if (f > s && f > t) {
    console.log(f);
  } else if (s > f && s > t) {
    console.log(s);
  } else {
    console.log(t);
  }
};
aa(1, 2, 3);

//Fix the code to Sum of the digits present in the number
function add(n) {
  let sum = 0;
  let str = n.toString();
  let arr = str.split("");
  for (let i in arr) {
    arr[i] = +arr[i];
  }
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
let n2 = 123;
console.log(add(n2));

//Fix the code to Sum of all numbers using IIFE function
const arr = [9, 8, 5, 6, 4, 3, 2, 1];
(function (array) {
  let sum5 = 0;
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    sum5 += array[i];
  }
  console.log(sum5);
})(arr);

//Fix the code to gen Title caps.
let arr1 = ["guvi", "geek", "zen", "fullstack"];
let ano = function (arro) {
  for (let i = 0; i < arro.length; i++) {
    console.log(arro[i][0].toUpperCase() + arro[i].slice(1));
  }
};
ano(arr1);

//Fix the code to return the Prime numbers
const numbers2 = [1, 3, 2, 5, 10];
const myPrime = numbers2.filter((num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
});
console.log(myPrime);

//Fix the code to sum the number in that array
const num9 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let total = num9.reduce((sum, e) => {
  return sum + e;
}, 0);
console.log(total);

// Fix the code to rotate an array by k times and return rotated array using IIFE function
var numb1 = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
(function (arr) {
  for (let i = 0; i < 3; i++) {
    arr.unshift(arr.pop());
  }
  console.log(arr);
})(numb1);

// var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
// var k = 3;
// k = arr.length % k;
// (function() {
//  arr = {};
//  out = arr.slice(k + 1, arr.length);
//  var count = out.length;
//  for (var i = 0; i < k + 1; i++) {
//  out[count] = arr[i];
//  count += 1;
//  }
//  console.log(out);})();

// Fix the code to gen Title caps.
let names = ["guvi", "geek", "zen", "fullstack"];
(function () {
  for (let i = 0; i < names.length; i++) {
    console.log(names[i][0].toUpperCase() + names[i].substr(1));
  }
})();

//print all odd numbers in an array using IIFE function
var numb = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function () {
  for (let i = 0; i < numb.length; i++) {
    if (numb[i] % 2 !== 0) {
      console.log(numb[i]);
    }
  }
})();

//Fix the code to reverse.
(function (str) {
  let str1 = str.split("").reverse().join("");
  console.log(str1);
})("abcd");

//Fix the code to remove duplicates.
let new1 = function (arr) {
  let resu = [];
  for (let i = 0; i < arr.length; i++) {
    if (resu.indexOf(arr[i]) === -1) {
      resu.push(arr[i]);
    }
  }
  console.log(resu);
};
new1(["guvi", "geek", "guvi", "duplicate", "geeK"]);

//Fix the code to give the below output:
//Sum of odd numbers in an array
var as = [12, 34, 5, 6, 2, 56, 6, 2, 1];
var s = as.reduce(function (a, c) {
  if (c % 2 !== 0) {
    return a + c;
  }
  return a;
}, 0);
console.log(s);

//Fix the code to give the below output:
//Swap the odd and even digits

function swap(str) {
  let arr = str.split("");
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      res.push(arr[i + 1]);
    } else {
      res.push(arr[i - 1]);
    }
  }
  return res.join("");
}
console.log(swap("1234"));

// let aa = (data)=>{
//  let a=data;
// for(i=0;i<a.length;i++){
//  let l=""
//  let s=a[i+1]
//  let b=a[i]
//  l+=s
//  l+=b
//  i=i+1
// }
// if((a.length%2)!=0){
//  l+=a[a.length-1]
// }
// console.log(1)
// aa("1234");

//Fix the code to give the below output:
//Expected Output:
[
  { firstName: "Vasanth", lastName: "Raja", age: 24, role: "JSWizard" },
  { firstName: "Sri", lastName: "Devi", age: 28, role: "Coder" },
];

var arrays = [
  [
    ["firstname", "vasanth"],
    ["lastname", "Raje"],
    ["age", 24],
    ["role", "JSWizard"],
  ],
  [
    ["firstname", "Sri"],
    ["lastname", "Devi"],
    ["age", 28],
    ["role", "Coder"],
  ],
];

var final = [];
while (arrays.length != 0) {
  var outer_remove = arrays.shift();
  let new_object = {};
  while (outer_remove.length != 0) {
    var inner_remove = outer_remove.shift();
    var key = inner_remove[0];
    var value = inner_remove[1];
    new_object[key] = value;
  }
  final.push(new_object);
}
console.log(final);
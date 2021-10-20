//1) Do the below programs in anonymous function & IIFE

//Print odd numbers in an array

(function (arr) {
    let odd = [];
    for (let i in arr) {
      if (arr[i] % 2 !== 0) {
        odd.push(arr[i]);
      }
    }
    console.log(odd);
  })([2, 4, 9, 7, 17, 26]);
  
  //Convert all the strings to title caps in a string array
  let capital = function (str) {
    return str[0].toUpperCase() + str.slice(1);
  };
  
  console.log(capital("abhishek"));
  
  //Sum of all numbers in an array
  (function (arr) {
    let sum = 0;
    for (let i in arr) {
      sum += arr[i];
    }
    console.log(sum);
  })([2, 3, 10, 15]);
  
  //Return all the prime numbers in an array
  //prime number is number divisible by 1 and number itself
  let prime = function (arr) {
    return arr.filter((n) => {
      for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
      }
      return n > 1;
    });
  };
  console.log(prime([7, 16, 9, 3]));
  
  //Return all the palindromes in an array
  let palindromes = function (arr) {
    let arr1 = [];
    for (let i in arr) {
      // console.log(arr[i].split("").reverse());
      // console.log(arr[i].split(""));
      if (arr[i].split("").reverse().join("") === arr[i].split("").join("")) {
        arr1.push(arr[i]);
      }
    }
  
    return arr1;
  };
  console.log(palindromes(["eye", "aaa", "abhi", "arcade", "aya"]));
  
  //Return median of two sorted arrays of same size
  (function (arr1, arr2) {
    let n = arr1.length;
    let m = arr2.length;
    let a = n / 2;
    let b = m / 2;
    let a1 = (n + 1) / 2 - 1;
    let b1 = (m + 1) / 2 - 1;
    let median1 = 0;
    let median2 = 0;
  
    if (n % 2 === 0) {
      median1 += (arr1[a - 1] + arr1[a]) / 2;
    } else {
      median1 += arr1[a1];
    }
  
    if (m % 2 === 0) {
      median2 += (arr2[b - 1] + arr2[b]) / 2;
    } else {
      median2 += arr2[b1];
    }
  
    console.log(median2);
    console.log((median1 + median2) / 2);
  })([1, 2, 3, 4], [1, 2, 3, 4, 5]);
  
  //Remove duplicates from an array
  (function (arr) {
    let arr1 = [];
    for (let i in arr) {
      if (arr1.indexOf(arr[i]) === -1) {
        arr1.push(arr[i]);
      }
    }
    console.log(arr1);
  })([2, 2, 4, 4, 9, 15]);
  
  //Rotate an array by k times
  let rotated = function (arr, k) {
    for (let i = 0; i < k; i++) {
      arr.unshift(arr.pop());
    }
    return arr;
  };
  console.log(rotated([2, 3, 4], 2));
  
  //2) Do the below programs in arrow functions
  
  //Print odd numbers in an array
  const odd = (arr) => {
    let arr1 = [];
    for (let i in arr) {
      if (arr[i] % 2 !== 0) {
        arr1.push(arr[i]);
      }
    }
    return arr1;
  };
  console.log(odd([2, 4, 9, 7, 18, 27]));
  
  //Convert all the strings to title caps in a string array
  const capital1 = (str) => {
    let arr = str.split(" ");
    //console.log(arr);
    let res = [];
    for (let i in arr) {
      res.push((arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)));
    }
    return res.join(" ");
  };
  console.log(capital1("hello how summer"));
  
  //Sum of all numbers in an array
  let sum1 = (arr) => {
    let sum = 0;
    for (let i in arr) {
      sum += arr[i];
    }
    console.log(sum);
  };
  sum1([1, 5, 10]);
  
  //Return all the prime numbers in an array
  let primes = (arr) => {
    return arr.filter((e) => {
      for (let i = 2; i < e; i++) {
        if (e % i === 0) {
          return false;
        }
      }
      return e > 1;
    });
  };
  console.log(primes([1, 2, 5, 16, 25, 99, 101]));
  
  //Return all the palindromes in an array
  let pali = (arr) => {
    let arr1 = [];
    for (let i in arr) {
      if (arr[i].split("").reverse().join("") === arr[i]) {
        arr1.push(arr[i]);
      }
    }
    return arr1;
  };
  console.log(pali(["eye", "arcade", "aya"]));
  
  // 3. Write the following functions
  
  //Write a function called “addFive”.
  //Given a number, “addFive” returns 5 added to that number.
  
  function addFive(n) {
    return n + 5;
  }
  
  //Write a function called “getOpposite”
  //Given a number, return its opposite (sign)
  function getOpposite(n) {
    if (typeof n == "number") {
      return -n;
    } else {
      return -1;
    }
  }
  console.log(getOpposite(-8));
  
  //Fill in your code that takes an number minutes and converts it to seconds.
  //Examples
  //toSeconds(5) ➞ 300
  //toSeconds(3) ➞ 180
  //toSeconds(2) ➞ 120
  function toSeconds(n) {
    return n * 60;
  }
  
  //Create a function that takes a string and returns it as an integer.
  //Examples
  //toInteger(“6”) ➞ 6
  //toInteger(“1000”) ➞ 1000
  //toInteger(“12”) ➞ 12
  function toInteger(str) {
    return parseInt(str);
  }
  
  //Create a function that takes a number as an argument, increments the number by +1 and returns the result.
  //Examples
  //nextNumber(0) ➞ 1
  //nextNumber(9) ➞ 10
  //nextNumber(-3) ➞ -2
  function nextNumber(n) {
    return n + 1;
  }
  
  //Create a function that takes an array and returns the first element.
  //Examples
  //getFirstElement([1, 2, 3]) ➞ 1
  //getFirstElement([80, 5, 100]) ➞ 80
  //getFirstElement([-500, 0, 50]) ➞ -500
  function getFirstElement(arr) {
    return arr[0];
  }
  
  //Convert Hours into Seconds
  //Write a function that converts hours into seconds.
  function toHours(n) {
    return n * 60 * 60;
  }
  
  //Find the Perimeter of a Rectangle
  //Create a function that takes height and width and finds the perimeter of a rectangle.
  function periter(l, b) {
    return 2 * (l + b);
  }
  
  //Less Than 100?
  //Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
  function identify(n1, n2) {
    let sum = n1 + n2;
    if (sum < 100) {
      return true;
    } else return false;
  }
  console.log(identify(84, 8));
  
  //There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
  
  function rem(n1, n2) {
    console.log(n1 % n2);
  }
  rem(8, 9);
  
  // Old macdonald had a farm:
  // MacDonald is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
  // turkey = 2 legs
  // horse = 4 legs
  // pigs = 4 legs
  // The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.
  // Examples
  // CountAnimals(2, 3, 5) ➞ 36
  // CountAnimals(1, 2, 3) ➞ 22
  // CountAnimals(5, 2, 8) ➞ 50
  function CountAnimals(n1, n2, n3) {
    return n1 * 2 + n2 * 4 + n3 * 4;
  }
  console.log(CountAnimals(2, 3, 5));
  
  //Frames Per Second
  // Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
  // Examples
  // frames(1, 1) ➞ 60
  // frames(10, 1) ➞ 600
  // frames(10, 25) ➞ 15000
  function frames(n1, n2) {
    return n1 * n2 * 60;
  }
  
  // Check if an Integer is Divisible By Five
  // Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.
  // Examples
  // divisibleByFive(5) ➞ true
  // divisibleByFive(-55) ➞ true
  // divisibleByFive(37) ➞ false
  function divisibleByFive(n) {
    if (n % 5 === 0) {
      return true;
    }
    return false;
  }
  console.log(divisibleByFive(43));
  
  // Write a function called “isEven”.
  // Given a number, “isEven” returns whether it is even.
  function isEven(n) {
    console.log(typeof n);
    if (typeof n === "number") {
      if (n % 2 === 0) {
        return true;
      } else {
        return false;
      }
    } else return -1;
  }
  console.log(isEven("9"));
  
  // Write a function called “areBothOdd”.
  // Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.
  function areBothOdd(n1, n2) {
    if (n1 % 2 === 0 && n2 % 2 === 0) {
      return true;
    } else return false;
  }
  console.log(areBothOdd(2, 5));
  
  // Problem:
  // Write a function called “getFullName”.
  // Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space.
  
  // Input:
  // getFullName(“GUVI”, “GEEK”);
  // getFullName(“GUVI”, );
  // getFullName(, “GEEK”);
  // getFullName(“”, “”);
  // Output:
  // “GUVI GEEK”
  // “GUVI”
  // “GEEK”
  // “”
  function getFullName(str1, str2) {
    let arr = [];
    arr.push(str1);
    arr.push(str2);
  
    return arr.join(" ");
  }
  console.log(getFullName("Guvi", "Geek"));
  
  // Write a function called “getLengthOfWord”.
  // Given a word, “getLengthOfWord” returns the length of the given word.
  // Input:
  // getLengthOfWord(“GUVI”);
  // getLengthOfWord(“”);
  // getLengthOfWord();
  // getLengthOfWord(9);
  function getLengthOfWord(str) {
    if (typeof str === "string") {
      return str.length;
    } else {
      return -1;
    }
  }
  console.log(getLengthOfWord("arc"));
  
  //Write a function called “isSameLength”.
  // Given two words, “isSameLength” returns whether the given words have the same length.
  // Input:
  // isSameLength(“GUVI”, “GEEK”);
  // Output:
  // true
  function isSameLength(str1, str2) {
    if (str1.length === str2.length) {
      return true;
    } else return false;
  }
  
  // Create a function to calculate the distance between two points defined by their x, y coordinates
  function distance(x1, y1, x2, y2) {
    let x = Math.pow(x2 - x1, 2);
    let y = Math.pow(y2 - y1, 2);
    return Math.sqrt(x + y);
  }
  console.log(distance(1, 2, 4, 5));
  
  // Write a function called “getNthElement”.
  // Given an array and an integer, “getNthElement” returns the element at the given integer, within the given array. If the array has a length of 0, it should return ‘undefined’.
  // Input:
  // getNthElement([1, 3, 5], 1);
  // Output:
  // 3
  function getNthElement(arr, n) {
    return arr[n];
  }
  
  // Write a function called “getLastElement”.
  // Given an array, “getLastElement” returns the last element of the given array. If the given array has a length of 0, it should return ‘-1’.
  // Input:
  // getLastElement([1, 2, 3, 4]);
  // Output:
  // 4
  function getLastElement(arr) {
    let n = arr.length - 1;
    if (arr.length >= 1) {
      return arr[n];
    } else return -1;
  }
  
  // Write a function called “getProperty”.
  // Given an object and a key, “getProperty” returns the value of the property at the given key. If there is no property at the given key, it should return undefined.
  
  // var obj = {
  // mykey: “value”
  // };
  // Input:
  // getProperty(obj,’mykey’);
  // getProperty(obj,’dummykey’);
  // Output:
  // value
  // NA
  function getProperty(obj, key) {
    if (obj.hasOwnProperty(key)) {
      return obj[key];
    } else {
      return "NA";
    }
  }
  console.log(getProperty({ myKey: 87, dummyKey: 90 }, "myKey"));
  
  // Write a function called “addProperty”.
  // Given an object and a key, “addProperty” adds a new property on the given object with a value of true.
  
  // var obj = {
  // }
  // Input:
  // addProperty(obj, “mykey”);
  // Output:
  // {
  // mykey: true
  // }
  function addProperty(obj, key) {
    if (obj.hasOwnProperty(key)) {
      return "key exists";
    } else {
      obj.key = true;
    }
  }
  let obj = {};
  addProperty(obj, "myKey");
  console.log(obj);
  
  // Write a function called “removeProperty”.
  // Given an object and a key, “removeProperty” removes the given key from the given object.
  // Input:
  // removeProperty(obj, “name”);
  // Output:
  // undefined
  function removeProperty(obj, key) {
    if (obj.hasOwnProperty(key)) {
      delete obj[key];
    }
  }
  
  let obj1 = { name: "ara", myKey: 25 };
  removeProperty(obj1, "name");
  console.log(obj1);
  
  //Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
  
  // Create a function that receives an array of numbers and returns an array containing only the positive numbers
  function positive(arr) {
    let arr1 = [];
    for (let i in arr) {
      if (arr[i] >= 1) {
        arr1.push(arr[i]);
      }
    }
    return arr1;
  }
  
  //Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n (where n is an exponent)
  function powerOfTwo(n) {
    let res = [];
    for (let i = 0; i <= n; i++) {
      res.push(Math.pow(2, i));
    }
    return res.join(",");
  }
  console.log(powerOfTwo(2));
  
  //Find the maximum number in an array of numbers
  function max(arr) {
    return Math.max(...arr);
  }
  
  //Print the first 100 prime numbers
  function pri() {
    let arr = [];
    for (let i = 1; i <= 100; i++) {
      arr.push(i);
    }
    return arr.filter((e) => {
      for (let j = 2; j < e; j++) {
        if (e % j === 0) {
          return false;
        }
      }
      return e > 1;
    });
  }
  console.log(pri());
  
  //Reverse a string
  function reverse(str) {
    return str.split("").reverse().join("");
  }
  console.log(reverse("Javascript"));
  
  //Create a function that will merge two arrays and return the result as a new array
  function merge(arr1, arr2) {
    let res = [];
    for (let i in arr1) {
      res.push(arr1[i]);
    }
    for (let i in arr2) {
      res.push(arr2[i]);
    }
    return res;
  }
  console.log(merge([1, 2, 3], [4, 5, 6]));
  
  //Calculate the sum of numbers received in a comma delimited string
  function sumStr(str) {
    let arr = str.split(",");
    let sum = 0;
    //console.log(arr);
    for (let i in arr) {
      sum += +arr[i];
    }
    return sum;
  }
  console.log(sumStr("1,2,4,5.6,99"));
  
  //Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
  function countPositivesSumNegatives(arr) {
    let posCount = 0;
    let res = [];
    let sumNeg = 0;
    for (let i in arr) {
      if (arr[i] >= 1) {
        posCount++;
      } else {
        sumNeg += arr[i];
      }
    }
    res.push(posCount, sumNeg);
    return res;
  }
  console.log(countPositivesSumNegatives([-5, 10, -3, 12, -9, 5, 90, 0, 1]));
  
  //Create a function that will return in an array the first “nPrimes” prime numbers greater than a particular number “startAt”
  function primeAfter(nPrimes, startAt) {
    let n = startAt;
    let res = [];
  
    for (i = 2; i < n; i++) {
      if (n % i === 0) {
        n++;
      }
      if (res.length >= nPrimes) {
        break;
      }
      res.push(n);
      n++;
    }
    return res;
  }
  console.log(primeAfter(10, 100));

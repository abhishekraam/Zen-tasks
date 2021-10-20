class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
  getPG = function (arr) {
    return arr.filter((m) => {
      return m.rating === "PG";
    });
  };
}

let movie1 = new Movie("Casino Royale", "Eon Productions", "PG13");
let movie2 = new Movie("Avengers", "Disney", "PG15");
let movie3 = new Movie("Fight Club", "Dalmount", "PG18");
let movie4 = new Movie("Avengers End Game", "Disney");
let movie5 = new Movie("Lion King", "Disney");
const arr = [movie1, movie2, movie3, movie4, movie5];
let a = movie1.getPG(arr);
console.log(arr); //returns the array of movies
console.log(a); // return movies with PG rating

//Convert the UML diagram to Typescript class. - use number for double
class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }
  getCircumference() {
    let res = 2 * Math.PI * this.radius;
    return res;
  }
  getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

let circle1 = new Circle(2, "red");
let circle2 = new Circle(5, "yellow");
let circle3 = new Circle(10, "black");
console.log(circle3.getCircumference());
console.log(circle1.radius);
console.log(circle2.getArea());

//Write a “person” class to hold all the details.
class Person {
  constructor(name, age, city, highestQualification) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.highestQualification = highestQualification;
    this.hobby = [];
  }
  setHobby(hobby) {
    this.hobby.push(hobby);
  }
  getHobby() {
    return this.hobby;
  }
}

let person1 = new Person("Jane", 24, "Dubai", "MBA");
person1.setHobby("Swimming");
console.log(person1);
console.log(person1.getHobby());

//write a class to calculate uber price.
class UberPricing {
  constructor(distanceToTravel, initialDistance = 0) {
    this.distanceToTravel = distanceToTravel;
    this.initialDistance = initialDistance;
  }
  getPrice() {
    return (this.distanceToTravel - this.initialDistance) * 5.07;
  }
}

let uber1 = new UberPricing(5);
console.log(uber1.distanceToTravel);
console.log(uber1.getPrice());
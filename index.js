// 👇 COMPLETE YOUR WORK BELOW 👇
/* ❗❗ NOTE: PLEASE USE INDIVIDUAL KEYS FOR YOUR CONSTRUCTOR PARAMETERS, NOT OBJECTS. THE TESTS WILL NOT PASS WITH OBJECTS. ❗❗  */

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments (this means to put in arguments one by one).
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + .eat() should recieve a string as a parameter and take some type of edible as an argument
        + When eating an edible, it should be pushed into the `stomach` array.
        + The `eat` method should have no effect if there are 10 items in the `stomach` array - the person can't eat more than 10 things at a time.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` array should be empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}

Person.prototype.eat = function(edible){
  if(this.stomach.length < 10){
    this.stomach.push(edible);
  }
}

Person.prototype.poop = function(){
  this.stomach = [];
}

Person.prototype.toString = function(){
  return `${this.name}, ${this.age}`
} 

const person1 = new Person('Luiza', 23)
const person2 = new Person('Devon', 29)
const person3 = new Person('Matt', 443)

// console.log(person1.toString())
// console.log(person2.toString())
// console.log(person3.toString())

// person3.eat('fish')
// person3.eat('potatoes')
// person3.eat('lemon')

// console.log(person3.stomach)
// person3.poop()
// console.log(person3.stomach)



/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method
      + should take 'gallons' as an parameter which will take number of gallons as an argument
      + should add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}

Car.prototype.fill = function(gallons){
  return this.tank = this.tank + gallons;
}

//Below is testing to make sure Car and .fill() works:
const car1 = new Car('Subaru', 20);

// console.log(car1)
// console.log(car1.fill(6))
// console.log(car1)


Car.prototype.drive = function(distance){
  this.odometer = this.odometer + distance;
  this.tank = ((this.tank * this.milesPerGallon)-distance)/this.tank;
  if(this.tank <= 0){
    return `I ran out of fuel at ${this.odometer} miles!`
  }
}

// console.log(car1)
// console.log(car1.fill(6))
// console.log(car1)
// console.log(car1.drive(120))
// console.log(car1)
// console.log(car1.fill(10))
// console.log(car1)
// console.log(car1.drive(100))
// console.log(car1)
// console.log(car1.drive(330))
// console.log(car1)




/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies also have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/

function Baby(name, age, favoriteToy) {
  Person.call(this, name, age, favoriteToy);
  this.favoriteToy = favoriteToy;
}

Baby.prototype = Object.create(Person.prototype)

Baby.prototype.play = function(){
  return `Playing with ${this.favoriteToy}.`;
}

const baby1 = new Baby('Ana', .3, 'purple penguin')

baby1.eat('baby formula')
baby1.eat('Cheerios')
console.log(baby1.stomach)
baby1.poop()
console.log(baby1.stomach)
baby1.play()
console.log(baby1)



/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  1. Window Binding - when no other rules apply, 'this' defualts to the window unless you are in strict mode, then it returns undefined

  2. Implicit Binding - using dot notation when you are invoking a function in an Object, this applies to Objects with methods

  3. Explicit Binding - this forces a function to use a certain object as its 'this'. Is applied by .call(), .bind(), and .apply()
      - .call() immediately invokes the function, you pass arguments individually
      - .bind() returns a new function that is a copy of the original function and can be invoked later, you pass arguments indivually
      - .apply() immediately invokes the function, you pass arguments as an array
          - talked about it, but did not get an example of

  4. New Binding - 'this' refers to a newly created Object; if a function is invoked with a constructor function (a function whose purpose is to create new Objects), 'this' refers to the newly created Object
      - you can either pass in attributes individually or as a single object with the attributes inside of it
        - passing in attributes as an object is good for when you have more than 3 attributes - it is easier to read and to code
*/

///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working!');
  return 'bar';
}
foo();
module.exports = {
  foo,
  Person, 
  Car,
  Baby
}

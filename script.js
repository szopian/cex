/*
const num1 = 3.14;
console.log(num1);
const num2 = new Number(3.14);
console.log(num2);

/*
function message(issue, numSamples = 1) {
  const intro = "Pause before proceeding:";
  const timePerSample = 30;
  return `${intro} ${issue} Wait ${timePerSample * numSamples} secounds.`;
}

console.log(message("The samples are not ready.", 5));

/*
function greeting(greet, name) {
  let punct = ".";
  if (greet.toLowerCase().includes("good morning")) {
    punct = "!";
  }
  let result = greet.concat(" ", name, punct);
  return result;
}
console.log(greeting("Good Morning", "Bombom"));

/*

const str1 = "This is a str1.";
console.log(str1);

const str2 = new String("This is str2");
console.log(str2);

//======================================================//====================================================
/*
  1.Declare a variable named ‘numEmployees’ to store the number of employees on the page. Its initial value should be 0.
  2.Declare a constant named ‘maxEmployees’ to store the number 50 for the maximum employees that should be retrieved in eachrequest.
  3.Declare a variable named ‘name’ to store the name of the employee. Its initial value should be an empty string.
  4.Declare a variable named ‘salary’ to store the salary of the employee. Its initial value should be null.
  5.Declare an object named ‘address’ to store ‘number’, ‘street’, ‘city’, ‘state’, ‘zip’, and ‘country’. The ‘country’property should have an initial value of ‘United States’. All other values should be null.
  6.Declare a variable named ‘active’ to store whether the employee is active. Its initial value should be undefined.
  7.Declare a variable named ‘retrieved’ to store whether the employee information has been received. Its initial value shouldbe false.
*/

/*
let numEmployees = 0;
const maxEmployees = 50;
let name = "";
let salary = null;
let address = {
  number: null,
  street: null,
  city: null,
  state: null,
  zip: null,
  county: "United States",
};
let active;
let retrieved = false;

//=====================================================

/*

let record = {};
record = null;
console.log(record === null);
console.log(typeof record);

let und;
console.log(und === undefined);
console.log(typeof und);

console.log(Array.from("123 abc"));
console.log(Array.of(1, 2, 3, "abc", "efg"));
console.log(Array.isArray(["abc", 1, true]));



//===========================================

/*

"use strict";

fname = "Astro";
function printName() {
  console.log(`Charcter is ${fname}`);
}

printName();

var fname; //<--- No error Var is hoisted
// let fname; //<--- Throw an error
// const fname = ""; //<--- Throw an error

//enable strict mode in current code scpoe
topic = "Process Automation";


// ========.>>> OBJECT =====++++++

/*

function Animal() {
  this.type = "dog";
  this.sound = function () {
    console.log("woof");
  };
}

let dog = new Animal();
dog.sound();

// Object literal

let animal = {
  type: "dog",
  sound: function () {
    console.log("woof");
  },
};

animal.sound();

/*

//=======>>>TYPECASTING<<=============

//  parseFloat() parse argument returning a floating point NUMBER..
let q = parseFloat(3.14);
let w = parseFloat("3.14");
let e = parseFloat("  3.14  ");
let r = parseFloat("314e-2");
let t = parseFloat("0.0314E+2");
let y = parseFloat("3.14some non-digit characters");
let u = parseFloat({
  toString: function () {
    return "3.14";
  },
});

console.log(
  q + " | " + w + " | " + e + " | " + r + " | " + t + " | " + y + " | " + u
);

//  toString() converting number to string!!
let n = 7;
console.log(typeof n);
n = toString(n);
console.log(typeof n);
n = parseInt(n);
console.log(typeof n);

//  Number()
let num = "6";
console.log(typeof num);
num = Number(num);
console.log(typeof num);

//METHOD example..
let amount = 5123.1234;
console.log(amount.toFixed(2));


// HOISTING

let nameLet = "BooLet";

function printName() {
  console.log(`User name is ` + nameVar + " " + nameLet);
}

var nameVar = "BooVar";

printName();

// LOCAL Variable example..

var name = "Bob";

function printName() {
  changeName();
  console.log(`User name is ${name}`);
}

function changeName() {
  let name = "Ada";
  //console.log(name);
}
printName();


// GLOBAL Variable example..

var name = "ASTRO";

function printName() {
  changeName();
  console.log(`User name is ${name}`);
}

function changeName() {
  name = "Ada";
}
printName();



//===================================================


let role;
let visits;

if (typeof role == "undefined") {
  role = "Gust";
}

if (visits == null) {
  visits = 1;
}

let user = {
  mode: role,
  numVisits: visits,
  timestamp: new Date().getTime(),
};

*/

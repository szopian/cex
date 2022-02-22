// ================++++>>>---ARRAY---<<<+=++++=======

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

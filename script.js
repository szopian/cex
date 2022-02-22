// HOISTING

let nameLet = "BooLet";

function printName() {
  console.log(`User name is ` + nameVar + " " + nameLet);
}

var nameVar = "BooVar";

printName();

// LOCAL Variable example..
/*

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

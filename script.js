"use strict"
//==== DOM DOM DOM =======// ===== DOM DOM DOM ====///=====





const content = document.querySelector('.content');
//content.innerHTML += `<h2>WHO SAID BLA BLA BLA?!</h2>`
const people = ['bob', 'rob', 'tod'];
//people.forEach(person => content.innerHTML += `<p>${person}</p>`);

const para = document.querySelector('p');
//console.log(para.innerText += ' Hi, Greg!')

const paras = document.querySelectorAll('p');
//paras.forEach(para => console.log(para.innerText));

const errors = document.querySelectorAll('.error');

//errors.forEach(err => console.log(err));
//paras.forEach(para => console.log(para))

//console.log(errors);
//console.log(paras);


//===== OBJECTS =========//======================//=========
//=== Math Obj===============//==
// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);

const aarea = 7.7;
// console.log(Math.round(aarea)); // rounds 7.7 to 8 and 7.4 to 7 
// console.log(Math.floor(aarea)); // floors down
// console.log(Math.ceil(aarea));  // ceil up
// console.log(Math.trunc(aarea)); // takes away .7 

let random = Math.random();
//console.log(Math.round(random * 100));

//===================================
let bobguy = {
    name: 'Bob',
    blogs: ['oneBlog', 'twoBlog'],
    login: function(){
        console.log('bob is logged in!')
    },
    //logBlogs: function(){
    logBlogs(){ //<== is not arrow func //still can use 'this' 
        console.log(`${bobguy.name} blogs below:`)
        this.blogs.forEach(blog => console.log(blog));
    }
}
// bobguy.logBlogs();
// bobguy.login();
// console.log(bobGuy);
// console.log(bobGuy.name);
// console.log(bobGuy['name']);
// console.log(typeof bobGuy)

//===== FUNCTIONS =========//====================================
//== CALLBACKS AND FOREACH===================
const ul = document.querySelector('.classMates');
const classMates = ['Bob', 'Tob', 'Rob'];
let htmlClassMates = ``;

classMates.forEach((mate, index) => htmlClassMates += `<li>${index + 1}: ${mate}</li>`);

//ul.innerHTML = htmlClassMates;

/*
const myFunc = (callbackFunc) => {
    let value = 23;
    callbackFunc(value);
}
myFunc(value =>  console.log(value));

const logMate = (mate, index) => console.log(`${index + 1}: Hey ${mate}`)
classMates.forEach(logMate);
*/

// Function Decleration
function greet(){
    alert('Hey there!');
}
// Function Expression
const speak = function(name = 'Boss'){
    alert(`Good day, ${name}!!`)
};
//greet();
//speak('Bob');
//speak();

// Returning Values
const calcArea = function(radius){
    //let area = 3.14 * radius**2; //local scope
    //return area;
    // Clean up!!
    return 3.14 * radius**2;
};
// Arrow function =======
const calcAreaArrowFunc = radius => 3.14 * radius**2;

const areaTwo = calcAreaArrowFunc(5);
const area = calcArea(5);//store globaly area
//console.log(area, areaTwo);



//===== SWITCH STATMENT ================//==============
const grade = '';
switch(grade){
    case 'A':
        console.log(`You got ${grade}!`);
        break;
    case 'B':
        console.log(`You got ${grade}!`);
        break;
    case 'C':
        console.log(`You got ${grade}!`);
        break;
    case 'D':
        console.log(`You got ${grade}!`);
        break;
    case 'E':
        console.log(`You got ${grade}!`);
        break;
    default:
       // console.error(`Not valid grade! ==> ${grade} `);
}

//=== BREAK & CONTINUE =======//=======
const scores = [20,25,10,0,50,100,90,75];
for (let i = 0; i < scores.length; i++){
    if(scores[i] === 0){
        continue;
    }
    //console.log(`You SCORE ==> ${scores[i]}`)
    if(scores[i] === 100){
        //console.log(`Congrats You SCORE ${scores[i]} a MAX POINTS!!`);
        break;
    }
}

//====== LOGICAL NOT (!) ======//============
let user = false;
if(!user){
 //console.log('You must be TRUE now!! ')
}
 //console.log(!false); //true
 //console.log(!true); //false

//==== IF STATMENTS =======//================
const password = 'qwertyqwerty12345@';
if(password.length >= 12 && password.includes('@')){
    //console.log('Password STRONG enough!')
} else if(password.length >= 8 || password.includes('@')){
    //console.log('Password could be STRONGER you silly!!')
} else {
    //console.error('Password is F****ING WEAK!!! Aaaagh!!')
}

//===FOR LOOPS==========//===================
for (let i = 0 ; i < 5; i++){
    //Code Block
    //console.log('In Loop: ' + i);
}
//console.log('Loop finished!!');

const team = ['Bob', 'Rob', 'Tod'];
for (let i = 0; i < team.length; i++){
    let html = `<div>${i+1}. ${team[i]}</div>`
    //console.log(html)
}

//====WHILE LOOP=====//=============================
let whileLoop = 0;
while(whileLoop<=5){
    //console.log('in Loop', whileLoop);
    whileLoop++;
}
//====DO WHILE LOOP=====//=============================
let doWhileLoop = 5;
do {
    //console.log('In Loop', doWhileLoop);
    doWhileLoop++;
} while (doWhileLoop < 5);

//======================================//===========================
let name = 'Greg';
let program = 'JavaScript';
//Concatination
let str = 'I\'m ' + name + ' happy to learn ' + program + '!!';
//console.log(str);
//TEMPLATE STRING
let str1 = `I'm ${name} happy to learn ${program}!!`;
//console.log(str1);
//CREATING HTML TAMPLATE
let html = `
    <h1>I'm ${name} happy to learn ${program}!!</h1>
`
//console.log(html);

//STRINGS 
let email = 'szopian@gmail.com';

let emailSlice = email.slice(0,7);
let i = email.indexOf('@');
let ilast = email.lastIndexOf('a');
let emailSubstr = email.substr(7,6);
let replaceMethod = email.replace('z', 'h');
/*
console.log(`
${emailSlice} 
${i} 
${ilast} 
${emailSubstr}
${replaceMethod}
`);
*/
"use strict"
//================== ARRAY ++++++++++++++++//++++++++++++++++ ARRAY ==================
//=========== FILTER ====-=-=-=--
const prod = [
        {name: 'Bob', price: 20},
        {name: 'Rob', price: 15},
        {name: 'Bob', price: 10},
        {name: 'Tod', price: 35}
    ];

// const filterd = prod.filter(pro => pro.price > 10);
// console.log(filterd);
// const promo = filterd.map(prod => `the ${prod.name} is ${prod.price / 2} pounds`) 
// console.log(promo);

const promos = prod
    .filter(p => p.price > 10)
    .map(p => `The ${p.name} is ${p.price} pounds!`);
console.log(promos)


//===== SROT() ++++++++

// const scoresNum = [10, 30, 15 ,25 ,50 ,40 ,5];
// const namesxyz = ['Bob', 'Tod', 'Rob'];

// namesxyz.sort();
// namesxyz.sort().reverse();

// let r =  scoresNum.sort();
// console.log(r)

// ===== ====== ====== FIND METHOD ====// =-=-=-=-=-=
// const scoresNum = [10, 30, 15 ,25 ,50 ,40 ,5];

// const firstHighScore = scoresNum.find(score => score > 40);


//=======REDUCE METHOD +++_+_+_+_+_++

// const products = [
//     {name: 'Bob', price: 20},
//     {name: 'Rob', price: 15},
//     {name: 'Bob', price: 10},
//     {name: 'Tod', price: 35}
// ]

// const bobsBill = products.reduce((acc, curr) => {
//     if(curr.name === 'Bob'){
//         acc += curr.price;
//     }
//     return acc;
// }, 0);

// console.log(bobsBill);

//const scoresNum = [10, 30, 15 ,25 ,50 ,40 ,5];

// const r = scoresNum.reduce((acc, curr) => {
//     if(curr > 25){
//         acc+=curr;
//     }
//     return acc;
// }, 0);

// console.log(r);



//==== MAP METHOD +_+_+_+_+_+_+_+_+_+^^^^^^^

// const products = [
//     {name: 'Bob', price: 20},
//     {name: 'Rob', price: 15},
//     {name: 'Zac', price: 10},
//     {name: 'Tod', price: 35}
// ]

// let r = products.map(p => {
//     if(p.price > 15){
//         return {name: p.name, price: p.price / 2};
//     } else {
//         return p;
//     }
// });
// console.log(products);
// console.log(r);


// const slaesPrice = scoresNum.map(p => p / 2);
// console.log(slaesPrice);


//== FILTER METHOD _+_+_+_+_+_+_+_==============^^^^

// const usersx = [
//     {name:'Bob', premium: true},
//     {name:'Rob', premium: false}
// ];
// const usersxFilter = usersx.filter((u) => u.premium);
// console.log(usersxFilter);

// for (let i = 0; i < scoresNum.length; i++){
//     if(scoresNum[i] < 40){
//         //console.log(scoresNum[i]);
//     }
// }

// scoresNum.forEach(score => {
//     if(score > 15){
//         console.log('pass :)');
//     } else {
//         console.log('faild :(');
//     }
// });

// let r = scoresNum.filter((s) => s < 20);
// console.log(r);



//==== DOM DOM DOM =======// ===== DOM DOM DOM ====///=====

// const para = document.querySelector('p');
// const title = document.querySelector('h1');
// const link = document.querySelector('a');
// const content = document.querySelector('.content');
// const paras = document.querySelectorAll('p');
// const errors = document.querySelectorAll('.error');
// const article = document.querySelector('article');
// const button = document.querySelector('button');
// const items = document.querySelectorAll('li');
// const list = document.querySelector('ul');

// const form = document.querySelector('.signup-form');
// const myUser = document.querySelector('#username');
// const feedback = document.querySelector('.feedback');
// const usernamePattern = /^[a-zA-Z]{6,12}$/;






// form.addEventListener('submit', e => {
//     e.preventDefault();
//     const username = myUser.value;

//     if(usernamePattern.test(username)){
//         feedback.textContent = 'Valid username! :)';
//     } else {
//         feedback.textContent = 'NOT Valid username! :( letters only & 6 to 12 characters!!!';
//     }
// })

// myUser.addEventListener('keyup', e => {
//     //console.log(e.target.value, myUser.value);
//     if(usernamePattern.test(e.target.value)){
//         form.username.setAttribute('class', 'success');
//     }else{
//         form.username.setAttribute('class', 'error');
//     }
// })

/*
const guser = 'gregsz';
const pattern = /^[a-z]{6,}$/;
let result = pattern.test(guser);
console.log(result);
*/
// button.addEventListener('click', () => {
//     const li = document.createElement('li');
//     li.textContent = 'do somthing';
//     list.append(li);
// });

// list.addEventListener('click', (e) => {
//     if(e.target.tagName === 'LI'){
//         e.target.style.textDecoration = 'line-through';
//     }
// })

// list.addEventListener('dblclick', (e) => {
//     if(e.target.tagName === 'LI'){
//         e.target.remove();
//     }
// })

// button.addEventListener('click', () => {
//     console.log('Clicked');
// })

// Array.from(article.children).forEach((child) => {
//     child.classList.add('article-elem');
// });

// console.log(title.parentElement);
// console.log(title.parentElement.parentElement);
// console.log(title.nextElementSibling);
// console.log(title.previousElementSibling);
// console.log(title.nextElementSibling.parentElement.children);

/*
paras.forEach(para => {
    if(para.textContent.includes('error')){
        para.classList.add('error');
    } else if(para.textContent.includes('success')){
        para.classList.add('success');
    } else {
        para.style.textShadow = '2px 2px 2px gray'
    }
});
*/


//para.classList.add("error");
//para.classList.remove("error");
//para.classList.add('success');

//title.setAttribute('style', 'margin: 20%');

// title.style.margin = '20%';
// title.style.color = 'aqua';
// title.style.fontSize = '3rem';
// title.style.textShadow = '2px 2px 2px grey'

//console.log(link.getAttribute('href'));
//link.setAttribute('href', 'https://szopian.github.io/');
//link.innerText = 'My web...';
//link.setAttribute('style', 'color: red');
//link.setAttribute('class', 'newClass');

//content.innerHTML += `<h2>WHO SAID BLA BLA BLA?!</h2>`
const people = ['bob', 'rob', 'tod'];
//people.forEach(person => content.innerHTML += `<p>${person}</p>`);

//console.log(para.innerText += ' Hi, Greg!')

//paras.forEach(para => console.log(para.innerText));

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
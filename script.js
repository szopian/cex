"use strict"
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
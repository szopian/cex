"use strict"


let name = 'Greg';
let program = 'JavaScript';


//Concatination
let str = 'I\'m ' + name + ' happy to learn ' + program + '!!';
console.log(str);

//TEMPLATE STRING
let str1 = `I'm ${name} happy to learn ${program}!!`;
console.log(str1);

//CREATING HTML TAMPLATE
let html = `
    <h1>I'm ${name} happy to learn ${program}!!</h1>
`
console.log(html);

//STRINGS 
let email = 'szopian@gmail.com';

let emailSlice = email.slice(0,7);
let i = email.indexOf('@');
let ilast = email.lastIndexOf('a');
let emailSubstr = email.substr(7,6);
let replaceMethod = email.replace('z', 'h')


/*
console.log(`
${emailSlice} 
${i} 
${ilast} 
${emailSubstr}
${replaceMethod}
`);
*/
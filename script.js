let str = 'Playground';
console.log(str);

let d = new Date();

console.log(d);

console.log(d.toString());

console.log(d.toDateString());

console.log(d.toUTCString());

console.log(d.toISOString());



const start = new Date();

console.log(start - new Date(Date.UTC(2000, 0, 0, 0, 0, 0)));
console.log(Date.now() - Date.parse(start));

function dateFormat(date){
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
}
console.log(dateFormat(start));



console.log(start);


function stringToNum(str){
    if (Number.isNaN(str)){
        throw 'String can NOT be converted.'; 
    }

    if (Number.isInteger(str))  return Number.parseInt(str);
    return Number.parseFloat(str);
    
}

console.log(stringToNum('5.55.abcd'));

function message(issue, numSamples){
    let intro = 'Pause before proceeding:';
    let timePerSample = 30;
    let multiplyNumTimeSample = numSamples * timePerSample;
    return `${intro} ${issue} Wait ${multiplyNumTimeSample} seconds.`
}

console.log(message('The samples are NOT ready.', 5));


function greeting(greet, name){
    let punct = '.';
    if(greet.toLowerCase().includes('good morning')){
        punct = '!';
    }
    return greet.concat(' ', name, punct);
};

console.log(greeting('Welcome and Good Morning', 'Greg'));
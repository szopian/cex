let fruits = [    
    { name: 'Apple', qty: 40 },   
    { name: 'Orange', qty: 20 },    
    { name: 'Banana', qty: 5 },   
    { name: 'Tomato', qty: 10 },   
    { name: 'Mango', qty: 30 }
];

let abc = fruits.sort((a, b) => a.qty - b.qty);
//console.log(abc);

let students = ["Kate", "Lucy","Sheldon", "Barry","Zara"];
// Convert each element into a student object.
let studentsArray = students.map((value,index,array) => {
    return {    
        id:index,    
        name:value  
    };
});
// Print the array elements.
//console.log(studentsArray);

let maleSprinters = [    
    { name: "Usain Bolt", time: 9.58 },    
    { name: "Tyson Gay", time: 9.69 },    
    { name: "Yohan Blake", time: 9.69 },    
    { name: "Asafa Powell", time: 9.72 },    
    { name: "Justin Gatlin", time: 9.76 }
];
    
// Find total of sprint time.
let totalSprintTime = maleSprinters.reduce((acc, value) => acc  + value.name  + ' ', '');
//Print array elements.
console.log("Total Sprint Time => " + totalSprintTime);
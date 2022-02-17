
const btn = document.getElementById("btn-convert");
let blob;
btn.addEventListener("click", loadModule);

function loadModule() {
    import("../modules/utilities.js")        
    .then((module) => {            
        blob = module.convert(file); 
        // ‘file’ has been defined earlier in the code.        
    })
}





//==================CLASSES=======================================//=========================================================

class User { 
    constructor(user, email) {
        this.user = user;
        this.email = email; 
    }
};

class Employee extends User { 
    constructor(user, email, id) {   
        super(user, email);
        this.employeeId = id; 
    }
};

let employ1 = new Employee('team_lead', 'team@cosmicsoft.com', 345);
console.log(employ1);



// class MeetingRoom { 
//     constructor(capacity) {
//         this.capacity = capacity;
//         this.canReserve = false; 
//     };
//     set reservable(val) {
//         this.canReserve = val; 
//     };
//     get reservable() {
//         return this.canReserve; 
//     }
// };

// let boardRoom = new MeetingRoom(20);
// boardRoom.reservable = true;
// console.log(boardRoom.reservable);

// class User { 
//     constructor() {
//         this.validUser = true; 
//     }; 
//     isUser() {
//         return true; 
//     }
// };

// class Employee extends User { 
//     isEmployee() {
//         return true; 
//     }
// };
// let employee1 = new Employee();
// console.log(employee1);
// console.log(employee1.isUser());
// console.log(employee1.isEmployee());

//========================FUNCTIONS=================================//=========================================================

/*

let objGreet = {
    morningGreet(punct){
        console.log(`Good Morning ${this.firstName} ${punct}`);
    },
    eveningGreet(punct){
        console.log(`Good Evening ${this.firstName} ${punct}`);
    }
}

let user1 = {
    firstName: 'Adri'
}

let user2 = {
    firstName: 'Greg'
}

objGreet.morningGreet.call(user1, '!');
objGreet.eveningGreet.apply(user2, ['?']);
objGreet.eveningGreet.bind(user1, '.')();



let date;
let intro;
let start = document.querySelector('.start');

const showDate = function(){
    console.log(`${intro} ${date}`);
}

start.addEventListener('click', showDate);

date = new Date();
intro = "Today's date is ";
console.log('Program is running!!');



const nums = [1,2,3,4,5];
const multiplyByTwo = nums.map(num => num * 2);
console.log(multiplyByTwo);

const createMultiplyFunction = function(num) {
    return num1 => num1 * num;
}

const multiplyByTen = createMultiplyFunction(10);
console.log(multiplyByTen(5));

const greeting = function(name){
    let greet = `Hello, ${name}!! How are YOU??`;
    let greetDiv = document.querySelector('.greet');
    setTimeout(() => greetDiv.innerHTML = greet, 5000);
}
greeting('Tessa and Liya');

/*

 //====================DATA JSON====================================//=================================DATA JSON=================================//
 
 /*
 
 // This example shows how to use index position and dot notation to access parsed JSON data.
    
 const productJson = '{ "name": "White T-shirt", "price": 5.99, "inventory": [ { "size": "S", "quantity": 100 }, { "size": "M", "quantity": 150 }, { "size": "L", "quantity": 75 } ], "returnable": true, "brand": { "name": "Luxury", "origin": "Taiwan" }, "customization": null }';
    
 // Parsed JSON Data
     
    const productJs = JSON.parse(productJson);
 
 // Log Product Name
     
     console.log('Product Name => ', productJs.name);
 
 // Log Product Brand Name
 
     console.log('Product Brand Name => ', productJs.brand.name);
 
 
 // Log Product Inventory
 
     console.log('Product Inventory => ');
     console.log('Size Quantity');
     
 // Iterate over Product Inventory
     
     for (let index = 0; index < productJs.inventory.length; index++ ) {
         // Log Inventory Item  
         console.log(productJs.inventory[index].size, '\t', productJs.inventory[index].quantity);
 
     }
 
 // Log key-value pairs using for...in loop
 
    console.log('for...in loop => ');
    for (let item in productJs) {
     
        // Log Inventory Item  
        console.log(item,' => ',productJs[item]);
    }

// Log key-value pairs using Object.entries()
console.log('Object.entries() => ');
console.log(Object.entries(productJs));

*/
 
 //<<+===================================================/////=========================================================
 
 /*
 
 // This example shows how to make an HTTP request and parse the JSON string that is received in the response.
 // Create a new XMLHttpRequest object and store it in a variable\
 
    const xhr = new XMLHttpRequest();
 
 // Store the path of the JSON resource in a variable
 
    const url = 'http://somewebsite/data.json';
 
 // Use the responseType property to ensure that the response is in JSON format
 
    xhr.responseType = 'json';
 
 // Open the HTTP Request by specifying the method and url
 
    xhr.open('GET', url);
 
 // Send the HTTP Request 
 
   xhr.send();

// Handle the HTTP 


    Responsexhr.onreadystatechange = () => {
        
        // Check if HTTP request is done
        if (xhr.readyState === XMLHttpRequest.DONE) {
            
            // Convert the JSON data to a JavaScript object
            const jsObject = JSON.parse(xhr.responseText);    
        }
    };

*/






// const jsonString = '{ "job": { "title": "Manager", "salary": 100000, "location": "NY", "telecommuting": true }}';


// const jsObject = {   
     
//     job: {     
//             title: 'Manager',      
//             salary: 100000,     
//             location: 'NY',      
//             telecommuting: true  
//     }
// };


// Deserialized Data
// const jsObject = {   
//      song: {      
//            title: 'Together We\'re Friends',                
//            artist: 'Blue Jays Choir',        
//            length: 3.55,        
//            genre: 'Country'    
//         }
//     };

// const jsonString = JSON.stringify(jsObject);
// console.log(jsonString);


// const jsonString = '{"song":{"title":"Together We\'re Friends","artist":"Blue Jays Choir","length":3.55,"genre":"Country"}}';

// const jsObject = JSON.parse(jsonString);
// console.log(jsObject);
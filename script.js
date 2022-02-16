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
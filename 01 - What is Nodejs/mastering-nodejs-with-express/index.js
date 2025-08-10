
console.log('Hello Node.js');

console.log('Hello'); 
console.log(__dirname); 
console.log(__filename); 
console.log(module);
console.log(exports);

console.log(module.exports === exports);

// Blocking
const fs = require('fs');
const content = fs.readFileSync('./data.js', 'utf8');
console.log(content);
console.log('Next operation');

// Non-blocking
fs.readFile('./data.js', 'utf8', 
    function(err, content) {
        console.log(content);
    }
    
);
console.log('Next operation');
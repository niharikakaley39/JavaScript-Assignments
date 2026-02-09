// ## Write to a file

// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');
const text = "Good Morning";
fs.writeFile('b.txt', text, 'utf-8', (err) =>{
    if(err){
        console.log("Yes, there was an error", err);
    }
    else{
        console.log("File run successfully");
    }
})
fs.readFile('b.txt','utf-8',(err , data) =>{
    console.log("data");
})

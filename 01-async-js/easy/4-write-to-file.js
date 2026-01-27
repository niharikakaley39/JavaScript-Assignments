const fs = require('fs');

const data = "This is the new content written to the file.";

fs.writeFile('easy/test.txt', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});
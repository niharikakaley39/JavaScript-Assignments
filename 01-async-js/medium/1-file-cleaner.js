const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'dirty.txt');

fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) throw err;

    const cleanedData = data.replace(/\s+/g, ' ').trim();

    fs.writeFile(filePath, cleanedData, (err) => {
        if (err) throw err;
        console.log('File cleaned successfully!');
    });
});
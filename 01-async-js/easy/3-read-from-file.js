const fs = require('fs');

fs.readFile('easy/test.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log('File contents:', data);
});

// Expensive operation
let sum = 0;
for (let i = 0; i < 1000000000; i++) {
    sum += i;
}
console.log('Expensive operation done');

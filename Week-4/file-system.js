const fs = require('fs');

// Synchronous === Blocking
// const fileData = fs.readFileSync('public/home.html');
// console.log('File', fileData.toString());

// Asynchronous === Non-Blocking
fs.readFile('public/home.html', (error, data) => {
    if (error) {
        console.log('Error detected', error);
    } else {
        console.log('File', data.toString());
    }
});

console.log('File reading is complete');
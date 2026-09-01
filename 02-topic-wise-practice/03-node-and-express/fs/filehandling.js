const fs = require('fs');
const { writeFile } = require('fs/promises');

// fs.writeFileSync('test.txt', 'this is test');
// const data = fs.readFileSync('test.txt', 'utf8');
// console.log(data);

fs.writeFile('test.txt', 'this is with async', err => {
    if ( err ) throw err;
})

fs.readFile('test.txt','utf-8', (err,data) => {
    if (err) throw err;
    console.log(data);
})

fs.appendFile('test.txt', '/n this is appended text', err=>{
    if (err) throw err;
})

fs.readFile('test.txt','utf-8', (err,data) => {
    if (err) throw err;
    console.log(data);
})

fs.unlink('test.txt', err => {
    if (err) throw err;
})

// fs.readFile('test.txt','utf-8', (err,data) => {
//     if (err) throw err;
//     console.log(data);
// })

fs.access('test.txt', fs.constants.F_OK, err => {
    if (err){
        console.log('file not found');
    }
    else{
        console.log('file found');
    }
})

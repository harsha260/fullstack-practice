const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send('welcome');
})

app.listen(3000, '127.0.0.1', () => {
    console.log('from listen');
})

// // Catch server errors (like port conflicts)
// server.on('error', (e) => {
//     console.error('Server crashed with error:', e.code);
// });
//
// // See if the process is being killed forcefully
// process.on('exit', (code) => {
//     console.log(`Node process is exiting with code: ${code}`);
// });

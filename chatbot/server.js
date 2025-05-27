const express = require('express');

//this creates web server. now we can do app.something 
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('server is working');
});

//run server
app.listen(PORT);





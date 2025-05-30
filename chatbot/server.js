const express = require('express');

//this creates web server. now we can do app.something 
const app = express();

const PORT = 3000;

app.use(express.json());

//we do this becuz index.html is inside public folder



app.get('/', (req, res) => {
    res.send('server is working');
});

app.post('/chat',(req, res) => {
    console.log('Received POST /chat with body:', req.body);
    const user_message = req.body.input_message;
    console.log('User message:', user_message);
    const bot_reply = `You said ${user_message}!`;
    
    res.json({'reply': bot_reply});
})


//run server
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });





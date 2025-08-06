const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/submit',(req,res)=>{
    const {name , email} = req.body;
    res.send(`Thank you for you response ${name} with you mail ${email}`);
});


app.listen(3000,()=>{
    console.log("the server is running the port no 3000: http://localhost:3000");
})
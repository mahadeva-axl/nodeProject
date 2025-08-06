const express = require('express');
const app = express();




app.get('/',(req,res)=>{
    res.send("Hi you are accessing the simple http server");
});


app.listen(3000,()=>{
    console.log("the server is running the port no 3000: http://localhost:3000");
})
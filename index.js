const express = require('express');
const router = require('./router')

const app = express();
app.use('/file',router)

app.listen(8080,()=>{
    console.log("server run on port 8080")
})
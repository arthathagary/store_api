const express = require('express');
const productRouter = require('./routes/products');
const app = express();
require('dotenv').config


app.use('/',productRouter);


const port = 4000;

app.listen(port,()=>{
    console.log(`listening on ${port}`);
})
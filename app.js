const express = require('express');
const productRouter = require('./routes/products');
const app = express();
const connectDB =require('./db/connect')
require('dotenv').config()


app.use('/api/v1/product',productRouter);


const port = 4000;

const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,()=>{
            console.log(`listening on ${port}`);
        })
        
    } catch (error) {
        console.log(error);
    }
}

start();


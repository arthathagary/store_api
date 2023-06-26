const express = require('express');
const productRouter = require('./routes/products');
const app = express();
const connectDB =require('./db/connect')
require('dotenv').config()


app.use('/',productRouter);


const port = 4000;

const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        await Product.deleteMany()
        await Product.create(jsonProducts)
        app.listen(port,()=>{
            console.log(`listening on ${port}`);
        })
        
    } catch (error) {
        console.log(error);
    }
}

start();


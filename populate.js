require('dotenv').config()
const connectDB =require('./db/connect')
const jsonProducts = require('./products.json')
const Product = require('./models/product')

const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        await Product.deleteMany()
        await Product.create(jsonProducts)
        console.log("Success");
    } catch (error) {
        console.log(error);
    }
    

}

start()
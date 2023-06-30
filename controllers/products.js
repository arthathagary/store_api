const Product = require('../models/product');

getAllProductsStatic = async (req,res)=>{
    const products = await Product.find({
        name: 'modern poster'
    })
    res.status(200).json({products, nbHits:products.length})

}

getAllProducts = (req,res)=>{
    res.send('hello')
}


module.exports = {
    getAllProductsStatic,
    getAllProducts
}
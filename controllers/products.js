const Product = require('../models/product');

getAllProductsStatic = async (req,res)=>{
    const search ='oo'
    const products = await Product.find({
        name: {
            $regex:search,$options:'i'
        }
    })
    res.status(200).json({products, nbHits:products.length})

}

getAllProducts = async (req,res)=>{
    const {name,price,company} = req.query;
    const queryObject = {}
    if(name){
        queryObject.name = {$regex:name,$options:'i'}
    
    }
    if(company){
        queryObject.company = company
    }
    const products = await Product.find(queryObject)
    res.status(200).json({products,nbHits:products.length})
}


module.exports = {
    getAllProductsStatic,
    getAllProducts
}


getAllProductsStatic = (req,res)=>{
    res.send('Home')
}

getAllProducts = (req,res)=>{
    res.send('hello')
}


module.exports = {
    getAllProductsStatic,
    getAllProducts
}
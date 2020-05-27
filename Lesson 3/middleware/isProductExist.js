const  Product = require('../models/Product')
module.exports = async (req, res ,next)=>{
    try{
        const {id} = req.params;
        const product = await  Product.findByid(id);
        if(!product) throw new Error('PRODUCTS IS NOT FOUND')
        next();
    }catch (e) {
        res.json({error: true})
    }
}
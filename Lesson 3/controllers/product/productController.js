const Product = require('../../models/Product')

module.exports = {
    getProducts: async (req , res)=>{
        const products = await Product.fetchAll()
        res.json(products);
    },
   createProduct : async (req, res)=> {
        const {title, price} = req.body;
       const product = new Product(title, price)
      await  product.create();
       res.json({create: true})
    },
    getProduct: async (req, res )=>{
        const {id} =req.params;
        const product = await Product.findByid(id);
        res.json(product)

    },
    deleteProduct: async (req, res)=> {
        const {id} = req.params;

        const products = await  Product.deletedBYid(id)
        res.json({delete:true})
    },
    updateProduct: async(req, res)=>{
        const {id} = req.params;
        const {title, price} = req.body;

        const product = new Product (title, price, id)
        await product.update()
        res.json({updated: true})
    }
}
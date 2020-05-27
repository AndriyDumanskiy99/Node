

const path = require('path')

module.exports = class Product {
    constructor(title, price) {
        this.id || uuid();
        this.title = title;
        this.price = price;
    }


 async create(){
        const products  = await getProductFile()
        products.push(this)
        await  writeToProductsFile(products);
        }

async update(){
    const products  = await getProductFile()
    const existingProductIndex = products.findIndex(product =>product.id=== this.id)
    products[existingProductIndex] = this;
    await  writeToProductsFile(products);
}

static async fetchAll(){
        return await getProductFile();


}

static async findByid(id){
    const products  = await getProductFile()
    return products.find(product => product.id === id)
}

static async deleteBYid(id){
    let products  = await getProductFile()
    products.filter(product => product.id === id)
    await writeToProductsFile(products)
}

};
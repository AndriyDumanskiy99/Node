const fs = require('fs').promise;
const uuid = require('uuid').v4;
const  pathToProducts = path.join(process.cwd(),'data', 'products.json')


async function getProductFile() {
    const fileContent = await fsp.readFile(pathToProducts)
    return  JSON.parse(fileContent);
}
async  function  writeToProductsFile(products) {
    await fsp.writeFile(pathToProducts, JSON.stringify(products))

}

module.exports.getProductFile = getProductFile;
module.exports.writeToProductsFile = writeToProductsFile;
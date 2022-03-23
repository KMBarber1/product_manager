const ProductController = require('../controllers/product.controller')

module.exports = app =>{

    app.get("/api/message", ProductController.message)

    // Returns a list of all 
    app.get("/api/products", ProductController.allProducts) 

    // Returns One
    app.get("/api/products/:id", ProductController.oneProduct)
    
    // Creates (new)
    app.post("/api/products", ProductController.createProduct)

    // Updates 
    app.put("/api/products/:id", ProductController.updateProduct)

    // Removes
    app.delete("/api/products/:id", ProductController.deleteProduct)

}
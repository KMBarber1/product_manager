const { Product } = require('../models/product.model');


module.exports.message = (req, res) => {
    res.json("message from backend")
}


// Get All
module.exports.allProducts = (req, res) => {
    Product.find()
        .then(products => res.json(products))// successful response
        .catch(err => res.status(400).json(err)) // unsuccessful response
}

// Get One
module.exports.oneProduct = (req, res) => {
    const id = req.params.id
    Product.findOne({ _id: id })
        .then(product => res.json(product))
        .catch(err => res.status(400).json(err))
}

// Create (same as new)
module.exports.createProduct = (req, res) => {
    const createProduct = new Product(req.body)
    createProduct.save()
    .then(response => res.json(response))
    .catch(err => res.status(400).json(err))
}

// Update (getOne + create)
module.exports.updateProduct = (req, res) => {
    const id = req.params.id
    Product.findOneAndUpdate(
        { _id: id }, // filter out the pet with the id
        req.body, // the data to be updated
        { new: true, runValidators: true } // options
    )
    .then(response => res.json(response))
    .catch(err => res.status(400).json(err))
}

// Delete
module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
    .then(response => res.json(response))
    .catch(err => res.status(400).json(err))
}



const router = require('express').Router();
const productModel = require('../models/products/productModel');
const auth = require('../authentication/auth');

//Hämtar alla produkter
router.get('/', productModel.getProducts);

//Hämtar en produkt genom id
router.get('/:id', productModel.getProductById); // behövs auth om man ska kunna se id:t på användaren i consollen

//Skapar en ny produkt
router.post('/', auth.verifyToken, productModel.createProduct);

//Uppdaterar en produkt
router.put('/:id', auth.verifyToken, productModel.updateProduct);

router.delete('/:id', auth.verifyToken, productModel.deleteProduct);

module.exports = router;
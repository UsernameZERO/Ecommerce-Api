const express = require('express');
const router = express.Router();

// Added controller 
const productController = require('../../../controller/Api/v1/products');

//Routes
router.post('/create', productController.create); // to create the product
router.get('/', productController.view);          // To read products details
router.delete('/:id', productController.remove);  // To delete product 
router.post('/:id/update_quantity/?', productController.edit); //to update the quantity

module.exports = router;
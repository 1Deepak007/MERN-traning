const router = require('express').Router();

const { getAllProducts,getProductById } = require('../controllers/ProductsController');

router.get("/products",getAllProducts);
router.get("/product/:id",getProductById);

module.exports = router;


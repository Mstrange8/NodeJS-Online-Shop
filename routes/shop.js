const path = require('path');

const express = require('express');

const router = express.Router();

const shopController = require('../controllers/shop');

// /cart => GET
router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postCart);

router.post('cart-delete-item', shopController.postCartDeleteProduct);

// /products => GET
router.get('/products', shopController.getProducts);

// /products/id => GET
router.get('/products/:productId', shopController.getProduct);

// /checkout => GET
router.get('/checkout', shopController.getCheckout);

// /orders => GET
router.get('/orders', shopController.getOrders);

// / => GET
router.get('/', shopController.getIndex);

module.exports = router;
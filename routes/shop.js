const express = require('express');
const path = require('path');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

router.get('/cart', shopController.getCart);

router.post('/cart-delete-item', shopController.postCartRemoveProduct);

router.post('/cart', shopController.postCart);

router.get('/orders', shopController.getOrders);

router.post('/create-order', shopController.postOrder);

module.exports = router;

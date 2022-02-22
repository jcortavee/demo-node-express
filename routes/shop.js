const express = require('express');
const router = express.Router();
const path = require('path');

const productsController = require('../controllers/products');

const rootDir = require('../utils/path');

router.get('/', productsController.getProducts);

module.exports = router;

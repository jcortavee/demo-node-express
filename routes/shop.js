const express = require('express');
const router = express.Router();
const path = require('path');

const rootDir = require('../utils/path');
const adminData = require('./admin');

router.get('/', (req, res, next) => {
    const products = adminData.products;
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    res.render('shop', { products, path: '/', pageTitle: 'Shop', hasProducts: products.length > 0,
        activeShop: true, productCSS: true });
});

module.exports = router;

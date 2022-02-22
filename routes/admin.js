const express = require('express');
const path = require('path');
const router = express.Router();

const rootDir = require('../utils/path');

const products = [];

router.get('/add-product', (req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render('add-product', { path: '/admin/add-product',
        pageTitle: 'Add product',
        formsCSS: true,
        productsCSS: true,
        activeAddProduct: true
    });
});

router.post('/add-product', (req, res, next) => {
    products.push({title: req.body.title});
    res.redirect('/');
});

module.exports.routes = router;
module.exports.products = products;

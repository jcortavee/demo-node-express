const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render('add-product', { path: '/admin/add-product',
        pageTitle: 'Add product',
        formsCSS: true,
        productsCSS: true,
        activeAddProduct: true
    });
}

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    Product.fetchAll((products) => {
        console.log(products)
        res.render('shop', { products, path: '/', pageTitle: 'Shop', hasProducts: products.length > 0,
            activeShop: true, productCSS: true });
    });

};

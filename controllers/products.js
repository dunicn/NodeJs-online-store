const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  // console.log('In the first middleware');
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    productsCss: true,
    activeProduct: true,
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCss: true,
    });
  });
};

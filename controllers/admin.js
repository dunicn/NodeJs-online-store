const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  // console.log('In the first middleware');
  res.render('../views/admin/add-product.ejs', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productsCss: true,
    activeProduct: true,
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, imageUrl, description, price);
  product.save();
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products',
    });
  });
};

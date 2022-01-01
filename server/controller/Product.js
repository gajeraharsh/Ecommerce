const productmodel = require("../model/ProductsModel");
const ErrorResponse = require("../utils/ErrorResponse");
const Apifeatures = require("../utils/productfeatures");
// Create product
exports.CreateProduct = async (req, res, next) => {
  try {
    req.body.User = req.user._id;
    const product = await productmodel.create(req.body);
    res.status(201).json({ success: true, product });
  } catch (error) {
    next(error);
  }
};

// Get all products
exports.getAllProducts = async (req, res, next) => {
  try {
    const resultperpage = 4;
    const productcount = await productmodel.countDocuments();
    const apifeatures = new Apifeatures(productmodel.find(), req.query)
      .search()
      .filter()
      .pagination(resultperpage);
    const products = await apifeatures.query;

    res.status(200).json({
      success: true,
      products,
      productcount,
    });
  } catch (error) {
    next(error);
  }
};

exports.getOneproduct = async (req, res, next) => {
  try {
    const product = await productmodel.findById(req.params.id);
    if (!product) {
      return next(new ErrorResponse("Product Not found", 404));
    }
    res.status(200).json({ success: true, product });
  } catch (error) {
    next(error);
  }
};

exports.deleteproduct = async (req, res, next) => {
  try {
    const product = await productmodel.findById(req.params.id);
    if (!product) {
      return next(new ErrorResponse("product is not found", 400));
    }
    // Delete product
    await productmodel.remove(product);
    res.status(200).json({
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

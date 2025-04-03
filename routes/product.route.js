const express = require("express");
const router = express.Router();
const Product = require("../models/product.model");
const Category = require("../models/category.model");

// Lấy tất cả sản phẩm theo category slug
router.get("/slug/:categorySlug", async (req, res) => {
  try {
    const category = await Category.findOne({ slug: req.params.categorySlug });
    if (!category) return res.status(404).json({ message: "Category not found" });
    const products = await Product.find({ category: category._id });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Lấy một sản phẩm theo categorySlug và productSlug
router.get("/slug/:categorySlug/:productSlug", async (req, res) => {
  try {
    const category = await Category.findOne({ slug: req.params.categorySlug });
    if (!category) return res.status(404).json({ message: "Category not found" });
    const product = await Product.findOne({
      slug: req.params.productSlug,
      category: category._id
    });
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

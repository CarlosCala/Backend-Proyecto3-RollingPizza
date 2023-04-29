import Product from "../models/product";

const showProducts = async (req, res) => {
  try {
    const productList = await Product.find();
    res.status(200).json(productList);
  } catch (error) {
    console.error(error);
    res.status(404).json({ mesagge: "error getting product list" });
  }
};

const createProduct = async (req, res) => {
  try {
    const { productName, price, urlImg, category } = req.body;
    const newProduct = new Product({
      productName,
      price,
      urlImg,
      category,
    });
    await newProduct.save();
    res.status(201).json({ mesagge: "product created succesfully" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ mesagge: "error creating product" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Producto successfully deleted" });
  } catch (error) {
    console.error(error);
    res
      .status(404)
      .json({ mesagge: "error when searching for the requested product" });
  }
};

const getOneProduct = async (req, res) => {
  try {
    const productSearch = await Product.findById(req.params.id);
    res.status(200).json(productSearch);
  } catch (error) {
    console.error(error);
    res
      .status(400)
      .json({ mesagge: "error when searching for the requested product" });
  }
};

const updateProduct = async (req, res) => {
  try {
    await Product.findByIdAndUpdate(req.params.id, req.body);

    res.status(200).json({ message: "Product updated successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(404)
      .json({ mesagge: "error when searching for the requested product" });
  }
};

export {
  showProducts,
  createProduct,
  deleteProduct,
  getOneProduct,
  updateProduct,
};

import Product from "../models/product";

const showProducts = async (req, res) => {
  try {
    //obtener un array con los productos guardado en mi bd
    const productList = await Product.find();
    res.status(200).json(productList);
  } catch (error) {
    console.log(error);
    res.status(404).json({ mesagge: "error getting product list" });
  }
};

const createProduct = async (req, res) => {
  try {
    const { productName, price, urlImg, category } = req.body;
    // crear un objeto para guardarlo en la bd
    const newProduct = new Product({
      productName,
      price,
      urlImg,
      category,
    });
    // guardar en la base de datos

    await newProduct.save();
    res.status(201).json({ mesagge: "product created succesfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ mesagge: "error creating product" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    //buscar el producto por el id y eliminarlo
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Producto successfully deleted" });
  } catch (error) {
    console.log(error);
    res
      .status(404)
      .json({ mesagge: "error when searching for the requested product" });
  }
};

const getOneProduct = async (req, res) => {
  try {
    console.log(req.params);
    //buscamos el producto en nuestra base de datos
    const productSearch = await Product.findById(req.params.id);
    res.status(200).json(productSearch);
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ mesagge: "error when searching for the requested product" });
  }
};

const updateProduct = async (req, res) => {
  try {
    //buscamos el producto por el id y lo actualizo con los datos que nos llegan del body req
    await Product.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: "Product updated successfully" });
  } catch (error) {
    console.log(error);
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

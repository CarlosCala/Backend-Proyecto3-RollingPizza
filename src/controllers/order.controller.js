import Order from "../models/order";

const showOrders = async (req, res) => {
  try {
    const orderList = await Order.find();
    res.status(200).json(orderList);
  } catch (error) {
    console.error(error);
    res.status(404).json({ mesagge: "error getting order list" });
  }
};

const createOrder = async (req, res) => {
  try {
    const { order, email, delivery,total } = req.body;
    const newOrder = new Order({
      order,
      email,
      delivery,
      total
    });

    await newOrder.save();
    res.status(201).json({ mesagge: "Order sent succesfully" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ mesagge: "error sending order" });
  }
};

const getOneOrder = async (req, res) => {
  try {
    const orderSearch = await Order.findById(req.params.id);
    res.status(200).json(orderSearch);
  } catch (error) {
    console.error(error);
    res
      .status(400)
      .json({ mesagge: "error when searching for the requested order" });
  }
};
const updateOrder = async (req, res) => {
  try {
    //buscamos el producto por el id y lo actualizo con los datos que nos llegan del body req
    await Order.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: "Order updated successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(404)
      .json({ mesagge: "error when searching for the requested order" });
  }
};

export { createOrder, showOrders, updateOrder, getOneOrder };

import User from "../models/user";
import bcrypt from "bcryptjs";
import generateJTW from "../helpers/generateJWT";

const getOneUser = async (req, res) => {
  try {
    const userSearch = await User.findById(req.params._id);
    res.status(200).json(userSearch);
  } catch (error) {
    console.error(error);
    res
      .status(400)
      .json({ mesagge: "error when searching for the requested product" });
  }
};

const updateUser = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params._id, req.body);
    res.status(200).json({ message: "user updated successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(404)
      .json({ mesagge: "error when searching for the requested product" });
  }
};

const showUser = async (req, res) => {
  try {
    const userList = await User.find();
    res.status(200).json(userList);
  } catch (error) {
    console.error(error);
    res.status(404).json({ mesagge: "error getting product list" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "user or password incorrect" });

    const correctPasword = bcrypt.compareSync(password, user.password); // el metodo compara el password enviado con el guardado
    if (!correctPasword)
      return res.status(404).json({ message: "user or password incorrect" });

    const token = await generateJTW(user._id, user.name);

    res.status(200).json({
      message: "user name and email correct",
      userName: user.name,
      uid: user._id,
      email: user.email,
      token,
      admin: user.admin
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "User log in failed" });
  }
};

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userFound = await User.findOne({ email });
    if (userFound)
      return res
        .status(400)
        .json({ message: "a user with those email addresses already" });
    //encriptar el password
    let createdUser = new User(req.body);

    const SALT_ROUNDS = 10;
    createdUser.password = await bcrypt.hash(password, SALT_ROUNDS);

    const token = await generateJTW(createdUser._id, createdUser.name);

    await createdUser.save();
    res.status(201).json({
      message: "user successfully created",
      name: createdUser.name,
      uid: createdUser._id,
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "User registration failed" });
  }
};

export { login, register, showUser, updateUser, getOneUser };

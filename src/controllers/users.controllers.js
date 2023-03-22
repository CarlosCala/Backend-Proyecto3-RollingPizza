import User from "../models/user";
import bcrypt from "bcryptjs";
// import generateJTW from "../helpers/generateJWT";

const login = async (req, res) => {
  //   res.send("user logged is succesfully");
  try {
    const { email, password } = req.body;
    //verificar si el email existe
    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "user or password incorrect" });
    //confirmar si el password enviado es valido

    const correctPasword = bcrypt.compareSync(password, user.password); // el metodo compara el password enviado con el guardado
    if (!correctPasword)
      return res.status(404).json({ message: "user or password incorrect" });
    // generar el token

    // const token = await generateJTW(user._id, user.name)

    // si el password y el mail son correctos
    res.status(200).json({
      message: "user name and email correct",
      userName: user.name,
      uid: user._id,
      // token
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "User log in failed" });
  }
};

const register = async (req, res) => {
  //   res.send("user registered is succesfully");
  try {
    const { name, email, password } = req.body;
    // verificar si el email existe
    const userFound = await User.findOne({ email });
    // si existe
    if (userFound)
      return res
        .status(400)
        .json({ message: "a user with those email addresses already" });
    //encriptar el password
    let createdUser = new User(req.body);

    const SALT_ROUNDS = 10;
    createdUser.password = await bcrypt.hash(password, SALT_ROUNDS);

    //generar un token

    // const token = await generateJTW(createdUser._id, createdUser.name)

    //guardar en BD

    await createdUser.save();
    res.status(201).json({
      message: "user successfully created",
      userName: createdUser.name,
      uid: createdUser._id,
      // token
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "User registration failed" });
  }
};

export { login, register };

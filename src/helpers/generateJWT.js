import jwt from "jsonwebtoken";

const generateJTW = (uid, name) => {
  //devuelve una promesa
  return new Promise((resolve, reject) => {

    const payload = { uid, name };

    //fimar el token
    jwt.sign(
      payload,
      process.env.SECRET_JWT,
      { expiresIn: "2h" },
      (err, token) => {
        if (err) {
          console.error(err);
          reject("error generating token");
        }
        resolve(token);
      }
    );
  });
};

export default generateJTW;

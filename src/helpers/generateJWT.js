import jwt from "jsonwebtoken";

const generateJTW = (uid, name) => {
  //devuelve una promesa
  return new Promise((resolve, reject) => {
    //resolve + // reject -

    //agregar los datos al payload
    const payload = { uid, name };

    //fimar el token
    jwt.sign(
      payload,
      process.env.SECRET_JWT,
      { expiresIn: "2h" },
      (err, token) => {
        if (err) {
          console.log(err);
          reject("error generating token");
        }
        resolve(token);
      }
    );
  });
};

export default generateJTW;

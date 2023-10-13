const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Usuario = require("../models/userModel");

const registrarUsuario = async (req, res) => {
  const { username, email, password, rol } = req.body;

  try {
    const usuarioExistente = await Usuario.findOne({ email });
    if (usuarioExistente) {
      return res
        .status(400)
        .json({ mensaje: "El correo electrónico ya está en uso" });
    }

    const valorRol = rol === "admin" ? "admin" : "user";

    const hashedPassword = await bcrypt.hash(password, 10);

    const usuario = new Usuario({
      username,
      email,
      password: hashedPassword,
      rol: valorRol,
    });

    await usuario.save();

    return res
      .status(201)
      .json({ mensaje: "Usuario registrado correctamente" });
  } catch (error) {
    return res
      .status(500)
      .json({ mensaje: "Error al registrar usuario", error });
  }
};

const iniciarSesion = async (req, res) => {
  const { email, password } = req.body;

  try {
    const usuario = await Usuario.findOne({ email });

    if (!usuario) {
      return res.status(401).json({ mensaje: "Credenciales inválidas" });
    }

    const contraseñaValida = await bcrypt.compare(password, usuario.password);

    if (!contraseñaValida) {
      return res.status(401).json({ mensaje: "Credenciales inválidas" });
    }

    const token = jwt.sign(
      { id: usuario._id, email: usuario.email },
      "tu_secreto"
    );

    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ mensaje: "Error al iniciar sesión", error });
  }
};

module.exports = { registrarUsuario, iniciarSesion };

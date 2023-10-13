import { verify } from "jsonwebtoken";

const verificarToken = (req, res, next) => {
  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(401).json({ mensaje: "Token no proporcionado, autorización denegada" });
  }

  try {
    const decoded = verify(token, "tu_secreto");
    req.usuario = decoded;
    next();
  } catch (error) {
    res.status(400).json({ mensaje: "Token no válido" });
  }
};

const verificarRol = (rol) => {
  return (req, res, next) => {
    if (req.usuario && req.usuario.rol === rol) {
      next();
    } else {
      res.status(403).json({ mensaje: "Acceso no autorizado" });
    }
  };
};

module.exports = { verificarToken, verificarRol };
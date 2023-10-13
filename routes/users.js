const express = require("express");
const usersRouter = express.Router();
const usersController = require("../controller/usersController");

usersRouter.post("/register", usersController.registrarUsuario);
usersRouter.post("/login", usersController.iniciarSesion);

module.exports = usersRouter;

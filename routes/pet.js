const PetController = require("../controller/PetController");
const express = require("express");
const app = express();
const Router = express.Router();

Router.get("/", PetController.index);
Router.get("/add/:nome/:tipo/:raca/:idade/:vacinado/:genero", PetController.add);
Router.get("/show/:nome", PetController.show);

module.exports = Router;
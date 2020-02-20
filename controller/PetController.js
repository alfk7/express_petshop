const PetModel = require("../model/Pet");
const PetController = {
    index: (req,res) =>{
        res.send(PetModel.listarPets(PetModel.pets));
    },
    add: (req,res) => {
        let petNovo = req.params;
        res.send(PetModel.adicionarPet(petNovo));
    },
    show: (req,res) =>{
        let nomePet = req.params;
        console.log(nomePet.nome);
        let resultado = PetModel.buscarPet(nomePet.nome)
        res.send(PetModel.listarPets(resultado));
    }
};
module.exports = PetController;
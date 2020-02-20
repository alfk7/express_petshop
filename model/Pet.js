let pets = [{
    nome: "Scooby Doo",
    raca: "vira-lata",
    tipo: " cão",
    idade: 46,
    servicos: ["banho"],
    genero: "M",
    vacinado: false
},{
    nome: "Garfield",
    raca: "persa",
    tipo: "gato",
    idade: 20,
    servicos: ["banho"],
    genero: "M",
    vacinado: true
},{
    nome: "Bethoven",
    raca: "pastor alemão",
    tipo: " cão",
    idade: 10,
    servicos: ["banho","tosa"],
    genero: "M",
    vacinado: true
},{
    nome: "Felix",
    raca: "vira-lata",
    tipo: " gato",
    idade: 10,
    servicos: ["banho","tosa"],
    genero: "M",
    vacinado: false
}]

const listarPets = (pets)=>{
    let conteudo = ""
    for (const pet of pets) {
    conteudo+=(`-----------------------------<br>
    Nome: ${pet.nome}<br>
    Tipo: ${pet.tipo}<br>
    Raça: ${pet.raca}<br>
    Idade: ${pet.idade}<br>
    Vacinado: ${pet.vacinado ? "Sim":"Não"}<br>
    Genero: ${pet.genero == "F" ? "Femea":"Macho"}<br>
    Serviços: ${pet.servicos}<br>
    `);
    }
    return conteudo
}

const validarDados = (dadosPet)=>{
    if (dadosPet.vacinado =="false"){
        dadosPet.vacinado = false;
    }
    return(
        dadosPet.nome &&
        dadosPet.idade &&
        dadosPet.genero &&
        dadosPet.tipo &&
        dadosPet.raca &&
        dadosPet.genero=="M" ||
        dadosPet.genero=="F"
    );
}
const adicionarPet = novoPet =>{
    let mensagem = "";
    if (typeof novoPet == "object" && validarDados(novoPet)){
        novoPet.nome = novoPet.nome.toString();
        novoPet.idade = parseInt(novoPet.idade);
        pets.push(novoPet);
        mensagem+= `${novoPet.nome} foi adicionado com sucesso!`;
        !novoPet.servicos ? novoPet.servicos = [] :"";
    }else {
        mensagem+="ops, insira um objeto valido!";
    }
    return mensagem;
};
const buscarPets = nome =>{
    let resultado = pets.filter(pet =>pets.nome == nome);
    return resultado
};
const buscarPet = (nomeDoPet)=>{
    let resultadoDaBusca = pets.filter(pet=>pet.nome == nomeDoPet);
    return resultadoDaBusca;

}

module.exports = {listarPets, adicionarPet, buscarPet, pets};
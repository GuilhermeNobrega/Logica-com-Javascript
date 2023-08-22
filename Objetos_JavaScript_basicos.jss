const person = {nome:['Guima','Gomes'],
idade: 29,
comida:['sushi'],
information: function(){
    console.log(`${this.nome[0]} has ${this.idade}`);
},
testar: function(){
    console.log(`Salve, eu sou o ${this.nome[0]} ${this.nome[1]}`)
}
}
person.information()
person.testar()

//o uso do this aqui é fundamental para referenciar as propriedades do objeto no qual os métodos estão definidos, permitindo que os métodos acessem e manipulem as informações corretas associadas a esse objeto específico.


// Podemos utilizar uma simples sintaxe para definir essas funções, utilizando apenas: information(){} e testar(){}.
const person = {nome:['Guima','Gomes'],
idade: 29,
comida:['sushi'],
information (){
    console.log(`${this.nome[0]} has ${this.idade}`);
},
testar (){
    console.log(`Salve, eu sou o ${this.nome[0]} ${this.nome[1]}`)
}
}
person.information()
person.testar()

const pessoa = {
    nick:{
        first: 'Gui',
        second: 'gomes',
    },

};
console.log(`The name is ${pessoa.nick.first} ${pessoa.nick.second}`)
console.log(pessoa.nick.first);
console.log(pessoa.nick.second);
//-------------------------------------------------------------------------------------------------------------------------------------

const teste = {
    name:["777","Joji"],
    year: 2020,
};
function leitura_dados(valores){
    console.log(teste[valores]);
    console.log(`The music ${teste.name[0]} by ${teste.name[1]} was raised in ${teste.year}`);
    // result: The music 777 by Joji was raised in 2020

}
leitura_dados("name");
leitura_dados("year");

//Se usassemos os: "console.log(`The music ${this teste.name[0]} by ${this.name[1]} was raised in ${this.year}`);" O resultado seria == "The music undefined by undefined was raised in undefined"

/*O uso do this é mais comum quando você está dentro do contexto de um objeto (métodos de objeto) e deseja se referir às propriedades daquele objeto específico. Quando você está lidando com variáveis globais 
ou variáveis dentro do escopo de uma função, o this geralmente não é necessário.*/

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

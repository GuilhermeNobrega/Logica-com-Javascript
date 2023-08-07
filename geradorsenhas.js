let simbolos = '!@#$%&*?'
let letras = 'abcdefghijklmnopqrstuvwxyz';
//console.log(letras.split(''))
let numeros = '0123456789';
//console.log(numeros.split(''));
let aleatorio_numero = '';
let aleatorio_letras = '';
let aleatorio_simbolos = '';
for(let a=0;a<10;a++){
    let indice_aleatorio = Math.floor(Math.random()*letras.length);
    aleatorio_letras += letras.charAt(indice_aleatorio);
}
for(let b=0;b<5;b++){
    let indice_aleatorio = Math.floor(Math.random()*numeros.length);
    aleatorio_numero+= numeros.charAt(indice_aleatorio)
}
for(let c=0;c<5;c++){
    let indice_aleatorio = Math.floor(Math.random()*simbolos.length);
    aleatorio_simbolos+= simbolos.charAt(indice_aleatorio);
}
let combinar =  aleatorio_simbolos + aleatorio_letras + aleatorio_numero;
console.log(combinar)

--> Objetivo do código: Um simples gerador de senhas aleatórias.
--> Explicação algoritmo: Cada for irá realizar as seguintes etapas: 'Math.floor(Math.random()*letras.length);' nisto ele escolhe um valor aleatório dentro da faixa do tamanho da variável avaliada. 
    '+= letras.charAt(indice_aleatorio);' Neste trecho de código pegaremos o primeiro valor aleatório escolhido anteriomente, isso realizando a cada interação do for.

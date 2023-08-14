function random() {
    let number_random = Math.floor(Math.random() * 10);
    let letras = 'abcdefghij';
    let letra = letras.charAt(number_random);
    let valor_aleatorio = Math.floor(Math.random() * 10);
    let result = valor_aleatorio.toString() + letra;
    return result; 
}

var x = random();
console.log(x);

Gerador de senhas com função, porém sem parâmetros.

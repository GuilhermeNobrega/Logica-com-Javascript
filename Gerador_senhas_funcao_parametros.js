function random1(valores){
	let letras = 'abcdefghijk';
	let resultado = '';
	for(let c = 0;c<valores;c++){
	let number_random = Math.floor(Math.random()*11);
	let ler_letras = letras.charAt(number_random);
	let valor_aleatorio = Math.floor(Math.random()*10);
	resultado+= valor_aleatorio.toString()+ler_letras;
}
	return resultado;
}

let sequencia = 5;
let dar = random1(sequencia);
console.log(dar);

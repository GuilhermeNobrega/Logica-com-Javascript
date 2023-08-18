let number = 124;
let letter = "145"
let numero_to_char = number.toString();
let letter_to_char = Number(letter)
console.log(typeof(letter_to_char))
console.log(typeof(numero_to_char));

function conversao(){
    let a = prompt("Diga seu input (number or letter pls XD)");
    let x = prompt("Deseja passar para number ou string?");
    if(x =='number'){
        let letter_to_char = Number(a)
        console.log(letter_to_char)
        console.log(typeof(letter_to_char))

    }
    else{
        let numero_to_char = a.toString();
        console.log(numero_to_char);
        console.log(typeof(numero_to_char));

    }
}
conversao();
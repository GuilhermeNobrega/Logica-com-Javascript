let array = ['pato','foca','pelicano','walrus'];
console.log(array[1])
console.log(array.length)
for(let c=0;c<array.length;c++){
    let percorrer = array[c]
    console.log(percorrer)
}
console.log("Percorremos todos as posições do array");

let duplicados = [1,2,3,4,4,5,6,7,7,8,9,10];
console.log("Vamos tirar os valores duplicados desse array.");
for(let c = 0;c<duplicados.length;c++){
    for(let d = c+1;d<duplicados.length;d++){
        if(duplicados[c]==duplicados[d]){
            console.log(`valores duplicados` + duplicados[c])
            duplicados.splice(c,1)
        }
        
    }
}
console.log("Array sem valores duplicados:" + duplicados);


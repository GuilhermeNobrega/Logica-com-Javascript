let a = [1,2,3,4,4,5,6,7,8];
let b = [];
let tamanho = a.length; // 9 posições
//console.log(tamanho)
for(let i=0;i<tamanho;i++){
    if(b.indexOf(a[i])===-1){
        b.push(a[i])
    }
}
console.log(b)

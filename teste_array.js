var lista_de_valores = [1,2,3,4,5,1,2];
for(let i=0;i<lista_de_valores.length-1;i++){
    for(let j=i+1;j<lista_de_valores.length;j++){
        if(lista_de_valores[i]==lista_de_valores[j]){
            console.log("Elementos duplicados no array "
            + lista_de_valores[i]);
        }
    }
}

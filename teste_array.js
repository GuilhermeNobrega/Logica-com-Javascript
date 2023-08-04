var lista_de_valores = [1,2,3,4,5,4,5];
for(let i=0;i<lista_de_valores.length;i++){
    console.log("Etapa1");
    console.log(i);
    for(let j=i+1;j<lista_de_valores.length;j++){
        console.log("Etapa2");
        console.log(j);
        if(lista_de_valores[i]==lista_de_valores[j]){
            console.log("Elementos duplicados no array "
            + lista_de_valores[i]);
        }
    }
}

--> Explicação geral: A função deste código é ler um item do array e comparar ele com os outros itens, a fim de obter valores repetidos.
--> Explicação lógica: Na linha 2, temos o primeiro for para inicialização da variável i=0 e depois incrementar ela. Dentro deste for, temos outro for, que inicializará a variável j, que sempre começara com um indice depois do i (j=i+1). Ou seja.. ele pegará o primeiro
i, que esta na posição 0, e comparará com o valor de j, que esta na posição 1 e assim consequentemente com as outras posições, até finalizar essa laço for. Lembrando que a cada interação deste último, ele irá analisar se o array tem valores repetidos e depois apresentar
quais são os duplicados

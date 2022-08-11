// Calculadora

function adicionar(a, b){
    return a+b;
}

function subtracao(a, b){
    return a-b;
}

function multiplicacao(a, b){
    return a*b;
}

function divisao(a, b){
    return a/b;
}

console.log ("-----------Teste de Operações/Calcular--------------")

console.log(adicionar(10, 100));
console.log(subtracao(10, 100));
console.log(multiplicacao(15, 10));
console.log(divisao(15, 10));
console.log(divisao(0, 15));
console.log(divisao(15, 0));

// Função Quadrado

function quadradoDoNumero(x){
   return multiplicacao(x, 1) * multiplicacao(x, 1);
}
console.log(" O quadrado do numero é " + quadradoDoNumero(8));

// Media de 3 Numeros:

function mediaDeTresNumeros(a, b, c){
    return [(divisao(a, 1))+(divisao(b, 1))+(divisao(c, 1))] / 3;
}
console.log(" A médias dos três numeros é: " + mediaDeTresNumeros(10, 20, 30));

// Calcula porcentagem:

function calculaPorcentagem(x, y){
    return divisao(x, 100) * y;
}
console.log(" A porcentagem é : " + calculaPorcentagem(200, 20));

// Gerador de Porcentagem:

function geradorDePorcentagem(x, y){

    return multiplicacao(x, 100) / y;
}

console.log("A porcentagem é: " + geradorDePorcentagem(2, 200));
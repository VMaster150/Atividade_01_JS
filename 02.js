const numeros = [5, 10, 15, 20, 25, 30];

const numerosDobro = numeros.map((numero) => numero * 2);
console.log(numeros);
console.log(numerosDobro);

const numerosFiltro = numeros.filter((numero) => numero % 2 !== 0);
console.log(numerosFiltro)
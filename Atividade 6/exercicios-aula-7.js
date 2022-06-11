// Use `console.log(variavel)` para verificar suas respostas no Console
// do Inspetor da Web do navegador.

// 1. Gere uma lista contendo apenas os números pares (filter)
const numeros = [1, 4, 10, 23, 26, 27, 29, 30, 311, 320, 4490]
let pares = [];
for(let i of numeros){
	if(i % 2 == 0){
		pares.push(i);
	}
}
console.log(pares);

// 2. Faça uma lista que possua apenas frutas com quatro letras (filter)
// Dica: você pode usar 'string'.length para verificar a quantidade de
// caracteres de uma string.
const frutas = [
  'maçã', 'banana', 'pera', 'uva', 'coco', 'caqui', 'kiwi', 'acerola'
]
let frutas_quatro = [];
for(let i of frutas){
	if(i.length == 4){
		frutas_quatro.push(i);
	}
}
console.log(frutas_quatro);

// 3. Maiusculize os nomes dados (map)
// Dica: Maiusculizar é escrever cada palavra com a inicial em
// maiúsculo. Você pode conferir todos os métodos de String em:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String#m%C3%A9todos
const nomes = ['cecília', 'roberto', 'bruna', 'Osvaldo', 'Carlos']
let nomes_maiusculos = [];

for(let i of nomes){
	let char1 = i.slice(0, 1);
	let resto = i.slice(1, i.length);
	let char1_maiusculo = char1.toUpperCase();
	let nome_conv = char1_maiusculo.concat(resto);
	nomes_maiusculos.push(nome_conv);
}

console.log(nomes_maiusculos);


// 4. Concatene os nomes e sobrenomes da lista (map)
const nomesESobrenomes = [
  ['Fernanda', 'Montenegro'],
  ['Lázaro', 'Ramos'],
  ['Heloísa', 'Périssé'],
  ['Daniel', 'Furlan'],
  ['Adriana', 'Esteves'],
]

let nomes_concatenados = [];

for(let i of nomesESobrenomes){
	let nome_concat = i[0].concat(i[1]);
	nomes_concatenados.push(nome_concat);
}

console.log(nomes_concatenados);

// 5. Calcule a média das notas (reduce)
const notas = [7, 5, 4, 3, 8.5]

let soma = 0;
for (let i of notas){
	soma += i;
}
let media = soma/(notas.length);
console.log(media);

// 6. Calcule a média ponderada das notas (reduce)
// Cada item da lista é composto por uma sublista com a nota (na
// primeira posição) e o peso (na segunda posição).

const notasComPeso = [[7, 2], [5, 1], [4, 2], [3, 1], [8.5, 2]]

let soma_notas = 0;
let soma_pesos = 0;
for(let i of notasComPeso){
	soma_notas += i[0] * i[1];
	soma_pesos += i[1];
}
let media_ponderada = soma_notas/soma_pesos;
console.log(media_ponderada);


// 7. (Extra) Refaça o exercício 6 tirando as duas menores notas. Dica:
// Lembre dos métodos sort e slice.

let notas_sort = notasComPeso.sort(function (a, b){
	return a[0] - b[0];
});
let notas_slice = notas_sort.slice(2, notasComPeso.length);
console.log(notas_slice);

let num = [5, 8, 2, 9, 3]; // Vetor
num.push(1); // Adiciona o valor 1 ao final do vetor
num.sort(); // Ordena o vetor

console.log(num); // Exibe o vetor
console.log(`O vetor tem ${num.length} posições.`);
console.log(`O primeiro valor é ${num[0]}.`);

let pos = num.indexOf(8); // Busca o valor 8 no vetor
if (pos === -1) {
  // Se não encontrou o valor
  console.log("O valor não foi encontrado!");
} else {
    // Se encontrou o valor
    console.log(`O valor 8 está na posição ${pos}.`);
}
console.log("FIM");

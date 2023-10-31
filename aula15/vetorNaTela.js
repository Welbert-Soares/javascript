let valores = [8, 1, 7, 4, 2, 9]; // Vetor

console.log(valores); // Exibe o vetor
for (let pos = 0; pos < valores.length; pos++) {
  // Para cada posição do vetor

  console.log(`A posição ${pos} tem o valor ${valores[pos]}.`);
}
console.log("FIM");
console.log("Recomeçando...");

let numeros = [8, 1, 7, 4, 2, 9]; // Vetor
numeros.sort(); // Ordena o vetor
for (let ind in numeros) {
  // Para cada posição do vetor
  console.log(`A posição ${ind} tem o valor ${numeros[ind]}.`);
}


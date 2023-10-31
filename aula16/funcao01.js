//função par ou ímpar

function parImpar(n) {
  // Função que recebe um valor n
  if (n % 2 == 0) {
    // Se o resto da divisão de n por 2 for zero
    return "Par!";
  } else {
    return "Ímpar!";
  }
}

console.log(parImpar(4)); // Exibe valor retornado pela função

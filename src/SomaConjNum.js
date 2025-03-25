const prompt = require('prompt-sync')({ sigint: true });

function soma() {
  const n = parseInt(prompt("Quantidade de números:"));
  let soma = 0;

  for (let i = 0; i < n; i++) {
    const numero = parseInt(prompt("Número:"));
    soma += numero;
  }

  console.log(`Soma = ${soma}`);
}

soma();
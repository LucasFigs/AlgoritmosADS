const prompt = require('prompt-sync')({ sigint: true });

function contagem() {
  const n = parseInt(prompt("Digite o valor de N:"));

  const conjunto = [];
  console.log(`Digite os ${n} números do conjunto:`);
  for (let i = 0; i < n; i++) {
    conjunto[i] = parseInt(prompt(`Número ${i + 1}:`));
  }

  const primeiroValor = conjunto[0];
  let contagem = 0;

  for (const num of conjunto) {
    if (num >= primeiroValor && num <= n) {
      contagem++;
    }
  }

  console.log(
    `Quantidade de valores entre ${primeiroValor} e ${n}: ${contagem}`
  );
}

contagem();
const prompt = require('prompt-sync')({ sigint: true });

function ehPrimo(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function main() {
  const numero = parseInt(prompt("Digite um número: "));

  if (!ehPrimo(numero)) {
    console.log(`O número ${numero} NÃO é primo.`);
  } else {
    console.log(`O número ${numero} é primo.`);
  }
}

main();
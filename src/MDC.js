const prompt = require('prompt-sync')({ sigint: true });

function mdc(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function main() {
  const a = parseInt(prompt("Digite o primeiro número:"));
  const b = parseInt(prompt("Digite o segundo número:"));

  const resultado = mdc(a, b);
  console.log(`O MDC de ${a} e ${b} é: ${resultado}`);
}

main();
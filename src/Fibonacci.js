const prompt = require('prompt-sync')({ sigint: true });

function fibonacci() {
  const n = parseInt(prompt("Número de termos:"));

  let a = 0,
    b = 1,
    c;

  if (n <= 0) {
    console.log("Por favor, insira um número maior que zero.");
    return;
  } else if (n === 1) {
    console.log(a);
    return;
  }

  process.stdout.write(`${a}, ${b}`);

  for (let i = 2; i < n; i++) {
    c = a + b;
    process.stdout.write(`, ${c}`);
    a = b;
    b = c;
  }

  console.log();
}

fibonacci();
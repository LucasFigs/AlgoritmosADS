const prompt = require('prompt-sync')({ sigint: true });

function quicksort(arr, low, high) {
  if (low < high) {
    const pi = partition(arr, low, high);
    quicksort(arr, low, pi - 1);
    quicksort(arr, pi + 1, high);
  }
}

function partition(arr, low, high) {
  const pivot = arr[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]]; // Troca de valores usando destructuring
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // Troca de valores usando destructuring
  return i + 1;
}

function main() {
  const n = parseInt(prompt("Digite o tamanho do array:"));
  const array = [];

  console.log("Digite os elementos do array:");
  for (let i = 0; i < n; i++) {
    array[i] = parseInt(prompt(`Elemento ${i + 1}:`));
  }

  quicksort(array, 0, n - 1);

  console.log("Array ordenado:");
  console.log(array.join(" "));
}

main();
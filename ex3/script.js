let btn = document.getElementById('button');
btn.addEventListener('click', () => {
  let inicio = Number(document.getElementById('inicio').value);
  let fim = Number(document.getElementById('fim').value);
  let passo = Number(document.getElementById('passo').value);
  let result = document.getElementById('result');
  // 1. Limpa o resultado anterior
  result.innerHTML = '';
  // 2. Cria uma string para guardar a contagem
  let outputText = '';

  if (inicio <= fim) {
    for (let cont = inicio; cont <= fim; cont += passo) {
      outputText += `${cont} 👉 `; // Adiciona o número atual e um emoji à string
    }
  } else {
    for (let cont = inicio; cont >= fim; cont -= passo) {
      outputText += `${cont} 👉 `; // Adiciona o número atual e um emoji à string
    }
  }

  result.innerHTML = outputText + '🏁';
});

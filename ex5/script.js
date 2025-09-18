let btn = document.getElementById('end');
let ins = document.getElementById('inserir');
let ar = [];

ins.addEventListener('click', function call() {
  let num = Number(document.getElementById('num').value);
  if (num < 1 || num > 100 || ar.indexOf(num) != -1) {
    alert('Valor inválido ou já encontrado na lista.');
  } else {
    ar.push(num);
    let sel = document.getElementById('lista');
    let item = document.createElement('option');
    item.text = `Valor ${num} adicionado`;
    sel.appendChild(item);
    document.getElementById('num').value = '';
  }
});

function soma(ar) {
  return ar.reduce((a, b) => a + b, 0);
}

function media(ar) {
  return soma(ar) / ar.length;
}

btn.addEventListener('click', () => {
  let res = document.getElementById('res');
  res.innerHTML = `<p>Ao todo, temos ${ar.length} números cadastrados.</p>`;
  res.innerHTML += `<p>O maior número cadastrado é ${Math.max(...ar)}.</p>`;
  res.innerHTML += `<p>O menor número cadastrado é ${Math.min(...ar)}.</p>`;
  res.innerHTML += `<p>A soma dos números cadastrados é ${soma(ar)}.</p>`;
  res.innerHTML += `<p>A media dos números cadastrados é ${media(ar)}.</p>`;
});

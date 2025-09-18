let verify = document.getElementById('verify');

verify.addEventListener('click', () => {
  let number = Number(document.getElementById('num').value);
  for (let cont = 1; cont <= 10; cont++) {
    let item = document.createElement('option');
    item.text = `${number} x ${cont} = ${number * cont}`;
    document.getElementById('lista').appendChild(item);
  }
});

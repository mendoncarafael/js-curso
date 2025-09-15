var verify = document.getElementById('checkButton')
var image = document.getElementById('image')

verify.addEventListener('click', () => {
  var contImg = document.getElementById('imgCont')
  var anoNas = document.getElementById('yearInput').value
  var date = new Date()
  var idade = date.getFullYear() - Number(anoNas)
  var sexF = document.getElementById('sexF') // input
  var sexM = document.getElementById('sexM')
  var result = document.getElementById('result')
  // contImg.classList.toggle('expandido');
  contImg.style.height = '420px'
  image.style.display = 'block'

  if (sexF.checked) {
    if (idade >= 5 && idade < 10) {
      image.src = 'image/criancaF.jpeg'
      result.innerHTML = `Sexo: ${sexF.value} «» Idade: ${idade}`
      result.innerHTML += `<br><strong>Criança<strong>`
    } else if (idade >= 10 && idade < 18) {
      result.innerHTML = `Sexo: ${sexF.value} «» Idade: ${idade}`
      result.innerHTML += `<br><strong>Jovem<strong>`
      image.src = 'image/jovemF.jpeg'
    } else if (idade >= 18 && idade < 65) {
      image.src = 'image/adultaF.jpeg'
      result.innerHTML = `Sexo: ${sexF.value} «» Idade: ${idade}`
      result.innerHTML += `<br><strong>Adulta<strong>`
    } else if (idade >= 65 && idade < 120) {
      image.src = 'image/idosaF.jpg'
      result.innerHTML = `Sexo: ${sexF.value} «» Idade: ${idade}`
      result.innerHTML += `<br><strong>Idosa<strong>`
    } else if (idade >= 0 && idade < 5) {
      image.src = 'image/bebeF.jpeg'
      result.innerHTML = `Sexo: ${sexF.value} «» Idade: ${idade}`
      result.innerHTML += `<br><strong>Nénem<strong>`
    } else {
      window.alert('Error')
    }
  } else if (sexM.checked) {
    if (idade >= 5 && idade < 10) {
      image.src = 'image/criancaM.jpeg'
      result.innerHTML = `Sexo: ${sexF.value} «» Idade: ${idade}`
      result.innerHTML += `<br><strong>Criança<strong>`
    } else if (idade >= 10 && idade < 18) {
      result.innerHTML = `Sexo: ${sexF.value} «» Idade: ${idade}`
      result.innerHTML += `<br><strong>Jovem<strong>`
      image.src = 'image/jovemM.jpeg'
    } else if (idade >= 18 && idade < 65) {
      result.innerHTML = `Sexo: ${sexF.value} «» Idade: ${idade}`
      result.innerHTML += `<br><strong>Adulto<strong>`
      image.src = 'image/adultoM.jpeg'
    } else if (idade >= 65 && idade < 120) {
      result.innerHTML = `Sexo: ${sexF.value} «» Idade: ${idade}`
      result.innerHTML += `<br><strong>Idoso<strong>`
      image.src = 'image/idosoM.jpg'
    } else if (idade >= 0 && idade < 5) {
      result.innerHTML = `Sexo: ${sexF.value} «» Idade: ${idade}`
      image.src = 'image/bebeM.jpeg'
    } else {
      window.alert('Error')
    }
  }


})
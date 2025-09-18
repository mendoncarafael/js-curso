var body = document.getElementById('body');
var time = document.getElementById('hours');
var image = document.querySelector('img#image');

var date = new Date();
time = date.getHours();

if (time < 12 && time >= 6) {
  image.src = 'image/dia.jpg';
  hours.innerHTML = `Agora são ${time} horas.`;
  body.style.background = '#e2cd9f';
} else if (time >= 12 && time <= 18) {
  image.src = 'image/tarde.jpg';
  hours.innerHTML = `Agora são ${time} horas da tarde.`;
  body.style.background = '#b9846f';
} else if (time > 18 && time < 24) {
  image.src = 'image/noite.jpg';
  hours.innerHTML = `Agora são ${time} horas da noite.`;
  body.style.background = '#515154';
} else {
  image.src = 'image/noite.jpg';
  hours.innerHTML = `Agora são ${time} horas da madrugada.`;
  body.style.background = '#1a1a1aff';
}

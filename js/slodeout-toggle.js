var slideout = new Slideout({
  'panel': document.getElementById('panel'),
  'menu': document.getElementById('menu'),
  'padding': 256,
  'tolerance': 70
});

document.querySelector('.js-slideout-toggle').addEventListener('click', function() {
  slideout.toggle();
});

document.querySelector('.menu').addEventListener('click', function(eve) {
  if (eve.target.nodeName === 'A') { slideout.close(); }
});

function checkOpen(eve) {
  if (slideout.isOpen()) {
    eve.preventDefault();
    slideout.close();
  }
}

function addClick() {
  document.querySelector('#panel').addEventListener('click', checkOpen);
}

function removeClick() {
  document.querySelector('#panel').removeEventListener('click', checkOpen);
}

slideout.on('open', addClick);
slideout.on('close', removeClick);

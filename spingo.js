const resultElem = document.getElementById('result');
const introElem = document.getElementById('intro');
const gameElem = document.getElementById('game');

let alfabetet =
  'aaaaabbcdddeeeeeeffghiiijkkklllmmmmnnnooooprrrsssssttttuvxyåäö'

function starta() {
  introElem.style.display = 'none';
  gameElem.style.display = '';
}

function slumpa() {
  let slump = Math.random();
  let siffra = slump * alfabetet.length;
  return Math.floor(siffra);
}

function siffraTillBokstav(siffra) {
  return alfabetet[siffra].toUpperCase();
}

let interval;
function slaTarning() {
  if (interval) {
    return;
  }
  let loop = 100;
  let i = 0;

  interval = setInterval(() => {
    if (i > loop) {
      clearInterval(interval);
      interval = undefined;
      return;
    }
    resultElem.innerHTML = [
      siffraTillBokstav(slumpa()),
      siffraTillBokstav(slumpa()),
      siffraTillBokstav(slumpa()),
      siffraTillBokstav(slumpa())
    ].join(' ');
    i++;
  }, 20);
}

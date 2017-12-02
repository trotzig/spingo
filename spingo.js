const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

let alfabetet =
  'aaaaabbcdeeeeeeffghiiijklmmmmnnnooooprrrsssssttttuvxyåäö'

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
  let last;

  interval = setInterval(() => {
    if (i > loop) {
      process.stdout.clearLine();
      process.stdout.cursorTo(0);
      console.log('Bokstäverna är',
        siffraTillBokstav(last),
        siffraTillBokstav(slumpa()),
        siffraTillBokstav(slumpa()),
        siffraTillBokstav(slumpa())
      );
      console.log('-------------------------------')
        process.stdout.write('Tryck för att få nya bokstäver.');
      clearInterval(interval);
      interval = undefined;
      return;
    }
    i++;
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    last = slumpa();
    process.stdout.write(siffraTillBokstav(last));
  }, 20);
}

process.stdin.on('keypress', (str, key) => {
  if (key.ctrl && key.name === 'c') {
    process.exit();
  } else {
    slaTarning();
  }
});
slaTarning();

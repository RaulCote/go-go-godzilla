
function buildDom(html) {
  var div = document.createElement('div');
  div.innerHTML = html;
  return div.children[0];
}

function main() {
  var mainContainerElement = document.querySelector('#main-container');
  
  var splashElement = null;
  var splashButton = null;
  var controlsElement = null; // Alias real Splash
  var controlsButton = null;

  
  var startGame = function() {
    destroySplash();
    buildGame();
  }
  
  var controlsGame = function() {
    destroySplash();
    buildControls();
  }

  var controlsBackToMenu = function() {
    destroyControls();
    buildSplash();
  }

  function buildSplash() {
    splashElement = buildDom(`
    <main class="splash container">
      <h1 class="splash__title">Go Go Godzilla!</h1>
      <button class="button start">Start</button>
      <button class="button controls">Controls</button>
    </main>
    `)
    mainContainerElement.appendChild(splashElement);

    controlsButton = document.querySelector('.controls');
    controlsButton.addEventListener('click', controlsGame);

    splashButton = document.querySelector('.start');
    splashButton.addEventListener('click', startGame);
  }

  function destroySplash() {
    controlsButton.removeEventListener('click', controlsBackToMenu);
    splashButton.removeEventListener('click', startGame);
    splashElement.remove();
  }


function buildControls() {
  controlsElement = buildDom(`
  <main class="splash container">
    <div class ="history">
      <h2>History</h2>
      <p class="p-history">Yesterday Godzilla was partying with Gamera, it was a great Saturday night. Boozing around, playing billard, going from one pub to another. But suddenly Godzilla turned crazy just as Rottweilers do and now they are having the fight of their lives! Go Go Godzilla!</p>
    </div>
    <h2 class="controls-title">Controls</h2>
    <div class ="controls">
      <div class ="controls-godzilla">
        <p>Godzilla</p>
        <p>Fight : Arrow Left</p>
        <p>Scream : 0</p>
      </div>
      <div class="controls-gamera">
        <p>Gamera</p>
        <p>Fight : Arrow Right</p>
        <p>Scream : 1</p>
      </div>
    </div>
    <button class="button back-to-start">Back</button>
  </main>
  `)
  mainContainerElement.appendChild(controlsElement);

  backToStartButton = document.querySelector('.back-to-start');
  backToStartButton.addEventListener('click', controlsBackToMenu)
}

function destroyControls() {
  backToStartButton.removeEventListener('click', controlsBackToMenu)
  controlsElement.remove();
}

var game = null;
function handleGameOver() {
  destroyGame();
 buildGameover(game.godzilla.score, game.gamera.score, game.godzilla.coolness, game.gamera.coolness);
}

function buildGame() {
  game = new Game(mainContainerElement);
  game.onOver(handleGameOver);
}

function destroyGame() {
  game.destroy();  // Temporalmente.
  console.log('destroy')
}

var gameoverElement = null;
var gameoverButton = null;

var handleGameoverClick = function() {
  destroyGameover();
  buildSplash();
}

function buildGameover() {
  gameoverElement = buildDom(`
  <main class="gameover container">
  <h1>Game Over</h1>
  <p>Godzilla score: <span class="godzilla-score"></span></p>
  <p>Godzilla coolness: <span class="godzilla-coolness"></span></p>
  <p>Gamera score: <span class="gamera-score"></span></p>
  <p>Gamera coolness: <span class="gamera-coolness"></span></p>
  <button class="button restart">Restart</button>
  </main>
  `);
  mainContainerElement.appendChild(gameoverElement);
  
  gameoverButton = document.querySelector('button');
  gameoverButton.addEventListener('click', handleGameoverClick);
  
  var scoreGodzillaElement = document.querySelector('.godzilla-score');
  scoreGodzillaElement.innerText = game.godzilla.score;
  var coolnessGodzillaElement = document.querySelector('.godzilla-coolness');
  coolnessGodzillaElement.innerText = game.godzilla.coolness;

  var scoreGameraElement = document.querySelector('.gamera-score');
  scoreGameraElement.innerText = game.gamera.score;
  var coolnessGameraElement = document.querySelector('.gamera-coolness');
  coolnessGameraElement.innerText = game.gamera.coolness;
}

function destroyGameover() {
  gameoverButton.removeEventListener('click', handleGameoverClick);
  gameoverElement.remove();
}

buildSplash();

}

document.addEventListener('DOMContentLoaded', main);


// function destroyGame() {}
// function buildGameOver() {}
// function destroyGameOver() {}

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
    <h1 class="splash__title">Go Go Godzilla!</h1>
    <h2>History</h2>
    <p>Yesterday Godzilla was partying with Gamera, it was a great Saturday night. Boozing around, playing billard, going from one pub to another. But suddenly something happened! And now they are going to have the fight of their lives! Please, help Godzilla survive! Go Go Godzilla!</p>
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

function buildGame() {
  game = new Game(mainContainerElement)
}
// function destroyGame() {}
// function buildGameOver() {}
// function destroyGameOver() {}

buildSplash();

}

document.addEventListener('DOMContentLoaded', main);
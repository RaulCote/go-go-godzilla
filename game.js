function Game(parent) {
  var self = this;
  self.score = 0;
  self.coolness = 0;
  self.rounds = 0;

  self.parentElement = parent;
  self.gameElement = null;

  self._init();
}

Game.prototype._init = function () {
  var self = this;

  self.gameElement = buildDom(`
    <main class="game container">
      <header class="game__header">
        <div class="godzilla-div">
          <span class="godzilla">Godzilla</span>
          <span class="score">score:</span>
          <span class="score-value"></span>
          <span class="coolness">coolness:</span>
          <span class="cooness-value"><span>
        </div>
        <div class="rounds">
          <span ="rounds">Rounds:</span>
          <span="rounds-value"></span>
        </div>
        <div class="gamera-div">
          <span class="gamera">Gamera</span>
          <span class="gscore">score:</span>
          <span class="gscore-value"></span>
          <span class="gcooless">coolness:</span>
          <span class="gcoolness-value"></span>
        </div>
      </header>
      <div class="game__canvas">
        <canvas class="canvas"></canvas>
      </div>
    </main>
  `)
  self.parentElement.appendChild(self.gameElement);

  // self.canvasParentElement = document.querySelector('.game_canvas');
  // self.canvasElement = document.querySelector('.canvas');

  self.godzillaScore = document.querySelector('.score-value');
  self.godzillaCoolness = document.querySelector('.coolness-value');

  self.gameraScore = document.querySelector('.gscore-value');
  self.gameraCoolness = document.querySelector('.gcoolness-value');

  self.rounds = document.querySelector('.rounds-value');

  // self.width = self.canvasParentElement.clientWidth;
  // self.height = self.canvasParentElement.clientHeight;

  // self.canvasElement.setAttribute('width', self.width);
  // self.canvasElement.setAttribute('height', self.height);

  // self.ctx = self.canvas.getContext('2d');


  self.godzilla = new Player;
  self.gamera = new Player;
  
self.moves();
}

// Prueba, no va aquí

Game.prototype.moves = function() {
  var self = this; 

  self.handleKeyDown = function(evt) {
    if (evt.key === "ArrowLeft" && self.godzilla.push === 0) {
      self.godzilla.vel++;
      console.log(self.godzilla.vel)
    //  godzilla.x = godzilla.vel/10
      self.godzilla.push = 1;
    }
    else if (evt.key === "ArrowRight" && self.gamera.push === 0) {
      self.gamera.vel++;
      console.log(self.gamera.vel)
      self.gamera.push = 1
    }
  }
  document.addEventListener('keydown', self.handleKeyDown)
  
  self.handleKeyUp = function(evt) {
    if (evt.key === "ArrowLeft" && self.godzilla.push === 1)  {
      self.godzilla.push = 0;
    }
    else if (evt.key === "ArrowRight" && self.gamera.push === 1) {
      self.gamera.push = 0;
    }
  } 
  document.addEventListener('keyup', self.handleKeyUp)
};
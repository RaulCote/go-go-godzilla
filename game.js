function Game(parent) {
  var self = this;

  self.parentElement = parent;
  self.gameElement = null;

  self._init();
  self._startLoop();
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
          <span class="coolness-value"><span>
        </div>
        <div class="rounds">
          <span class="round">Round:</span>
          <span class="round-value"></span>
        </div>
        <div class="gamera-div">
          <span class="gamera">2nd tier average jap monster</span>
          <span class="gscore">score:</span>
          <span class="gscore-value"></span>
          <span class="gcoolness">coolness:</span>
          <span class="gcoolness-value"></span>
        </div>
      </header>
      <div class="game__canvas">
        <canvas class="canvas"></canvas>
      </div>
    </main>
  `)
  self.parentElement.appendChild(self.gameElement);

  self.canvasParentElement = document.querySelector('.game_canvas');
  self.canvasElement = document.querySelector('.canvas');

  self.godzillaScoreElement = document.querySelector('.score-value');
  self.godzillaCoolnessElement = document.querySelector('.coolness-value');

  self.gameraScoreElement = document.querySelector('.gscore-value');
  self.gameraCoolnessElement = document.querySelector('.gcoolness-value');

  self.roundElement = document.querySelector('.round-value');

  self.width = self.canvasParentElement//.clientWidth;
  self.height = self.canvasParentElement//.clientHeight;

  self.canvasElement.setAttribute('width', self.width);
  self.canvasElement.setAttribute('height', self.height);

  self.ctx = self.canvasElement.getContext('2d');
}

Game.prototype._startLoop = function() {
  var self = this;

  self.godzilla = new Player(self.canvasElement); 
  self.gamera = new Player();
  
  self.godzilla.score = 0;
  self.gamera.score = 0;
  self.godzilla.coolness = 0;
  self.gamera.coolness = 0;
  self.round = 1;

  function loop() {
    self._clearAll();
    self._moves();
    self._updateAll();
    self._renderAll();
  }

  requestAnimationFrame(loop);

}

Game.prototype._updateAll = function() {
  var self = this;


  
  self._moves();
  self._updateUI();
}


Game.prototype._moves = function() {
  var self = this; 

  //Godzilla & Gamera keyboard input//
  self.handleKeyDown = function(evt) {
    if (evt.key === "ArrowLeft" && self.godzilla.push === 0) {
      self.godzilla.vel++;
      console.log(self.godzilla.vel + ' vel is going Up! IM GODZILLLLA!!!!')
      self.godzilla.x = self.godzilla.vel/10
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

Game.prototype._renderAll = function() {
  var self = this;
  
  self.godzilla.ctx = self.canvasElement.getContext('2d');
  self.godzilla.ctx.fillRect(self.godzilla.x, self.godzilla.y, self.godzilla.size, self.godzilla.size);
}

Game.prototype._updateUI = function() {
  var self = this;
  
  self.roundElement.innerText = self.round;
  self.godzillaScoreElement.innerText = self.godzilla.score;
  self.godzillaCoolnessElement.innerText = self.godzilla.coolness;
  self.gameraScoreElement.innerText = self.gamera.score;
  self.gameraCoolnessElement.innerText = self.gamera.coolness;
}

Game.prototype._clearAll = function ()  {
  var self = this;
  // Recuerda, en _renderAll funciona con Godzilla pero todavía no actualiza, aquí no, aquí como self.ctx.clearRect
  self.ctx.clearRect(0, 0, self.width, self.height);
}
 

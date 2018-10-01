function Game(parent) {
  var self = this;

  self.parentElement = parent;
  self.gameElement = null;

  self._init();
  self._startLoop();
}

Game.prototype._init = function() {
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
          <span class="gamera">Gamera</span>
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

  self.canvasParentElement = document.querySelector('.game__canvas');
  self.canvasElement = document.querySelector('.canvas');

  self.godzillaScoreElement = document.querySelector('.score-value');
  self.godzillaCoolnessElement = document.querySelector('.coolness-value');

  self.gameraScoreElement = document.querySelector('.gscore-value');
  self.gameraCoolnessElement = document.querySelector('.gcoolness-value');

  self.roundElement = document.querySelector('.round-value');

  self.width = self.canvasParentElement.clientWidth;
  self.height = self.canvasParentElement.clientHeight;

  self.canvasElement.setAttribute('width', self.width);
  self.canvasElement.setAttribute('height', self.height);

  self.handleKeyDown = self.handleKeyDown.bind(self);
  document.addEventListener('keydown', self.handleKeyDown);
  self.handleKeyUp = self.handleKeyUp.bind(self);
  document.addEventListener('keyup', self.handleKeyUp);

  self.ctx = self.canvasElement.getContext('2d');

}

Game.prototype._startLoop = function() {
  var self = this;
              // Son los argumentos del Player(canvasElement, y, x)
  self.godzilla = new Player(self.canvasElement, self.canvasElement.height, self.canvasElement.width, 'left'); 
  self.gamera = new Player(self.canvasElement, self.canvasElement.height, self.canvasElement.width, 'right');
  
  // self.godzilla.side = 'left';
  // self.gamera.side = 'right';
  self.godzilla.score = 2;
  self.gamera.score = 22;
  self.godzilla.coolness = 10000;
  self.gamera.coolness = -5000;
  self.round = 1;
  //    ---- Ya pasado a Player()
  // self.godzilla.y = self.canvasElement.height - self.godzilla.size
  // self.gamera.x = self.canvasElement.width - self.gamera.size
  // self.gamera.y = self.canvasElement.height - self.gamera.size

  // self._moves();

  function loop() {
    self._clearAll();
    self._updateAll();
    self._renderAll();

    if (self.round <= 3) {
      requestAnimationFrame(loop);
    } else {
      self.onGameOverCallback();
    }
  }
  
  requestAnimationFrame(loop);
}




Game.prototype._moves = function() {
  var self = this; 
  console.log('Aquí estoy tú')
  //Godzilla & Gamera keyboard input//

}


Game.prototype.handleKeyDown = function(evt) {
  var self = this;

  if (evt.key === "ArrowLeft" && self.godzilla.push === 0) {
    self.godzilla.vel++;
    console.log(self.godzilla.vel + ' vel is going Up! IM GODZILLLLA!!!!')
    // self.godzilla.x = self.godzilla.vel*10
    // self.round = self.godzilla.vel // PRUEBA PARA GAME OVER
    self.godzilla.push = 1;
  }
  else if (evt.key === "ArrowRight" && self.gamera.push === 0) {
    self.gamera.vel++;
    // self.gamera.x = (self.canvasElement.width - self.gamera.size) - self.gamera.vel*10
    // console.log(self.gamera.vel)
    self.gamera.push = 1
  }
};
  
 Game.prototype.handleKeyUp = function(evt) {
   var self = this;

    if (evt.key === "ArrowLeft" && self.godzilla.push === 1)  {
      self.godzilla.push = 0;
    }
    else if (evt.key === "ArrowRight" && self.gamera.push === 1) {
      self.gamera.push = 0;
    }
  }; 



Game.prototype._fightMode = function() {
  var self = this;
  document.removeEventListener('keydown', self.handleKeyDown);
  document.removeEventListener('keyup', self.handleKeyUp);


 // console.log('HolahOla')
  // self.fightKeyDown = function(evt) {
  //    if (evt.key === "ArrowLeft" && self.godzilla.push === 0) {
  //      self.godzilla.strength++;
  //      console.log('soy fuerte' + godzilla.strength)
  //    }
  //    else if (evt.key === "ArrowRight" && self.gamera.push === 0) {
  //      self.gamera.strength++;
  //    }
  //  }
}

Game.prototype._updateAll = function() {
  var self = this;

  // self.godzilla.x = self.godzilla.vel*10

  //self.gamera.x = (self.canvasElement.width - self.gamera.size) - self.gamera.vel*10
  
  self._checkAllCollision();
  self.godzilla.update();
  self.gamera.update();
}

Game.prototype._renderAll = function() {
  var self = this;
  self._updateUI();
  self.godzilla.render();
  self.gamera.render();

    // ---- Ya pasado a Player()
    // self.godzilla.ctx = self.canvasElement.getContext('2d');
    // self.godzilla.ctx.fillStyle = 'white';
    // self.godzilla.ctx.fillRect(self.godzilla.x, self.godzilla.y, self.godzilla.size, self.godzilla.size);
    
    // ---- Ya pasado a Player()
    // self.gamera.ctx = self.canvasElement.getContext('2d');
    // self.gamera.ctx.fillStyle = 'red';
    // self.gamera.ctx.fillRect(self.gamera.x, self.gamera.y, self.gamera.size, self.gamera.size);
  }

  Game.prototype._clearAll = function ()  {
    var self = this;
    // Recuerda, en _renderAll funciona con Godzilla pero todavía no actualiza, aquí no, aquí como self.ctx.clearRect
    self.ctx.clearRect(0, 0, self.width, self.height);
  }

  Game.prototype._checkAllCollision = function() {
    var self = this;
    
    if (self.godzilla.checkCollision(self.gamera)) {

     // self.godzilla.checkCollision();
      self._fightMode();
     //console.log('godzi se choca')
    } else {
      self._moves();
    }

    // --- Ya está en Player.
    //  var crashRight = self.godzilla.x + self.godzilla.size > self.gamera.x;
    //  var crashBottom = self.godzilla.y + self.godzilla.size > self.gamera.y;
    //  var crashTop = self.godzilla.y < self.gamera.y + self.gamera.size;
    //  var crashLeft = self.godzilla.x < self.gamera.x + self.gamera.size;

    //  if (crashLeft & crashRight & crashTop & crashBottom) {
    //    console.log('godzilla collision!')
    //  }

  }


  
  Game.prototype._updateUI = function() {
    var self = this;
    
    self.roundElement.innerText = self.round;
    self.godzillaScoreElement.innerText = self.godzilla.score;
    self.godzillaCoolnessElement.innerText = self.godzilla.coolness;
    self.gameraScoreElement.innerText = self.gamera.score;
    self.gameraCoolnessElement.innerText = self.gamera.coolness;

  }





//////////////// GAME OVER

Game.prototype.onOver = function(callback) {
  var self = this;

  self.onGameOverCallback = callback;
}


Game.prototype.destroy = function() {
  var self = this;

  self.gameElement.remove();

//  document.removeEventListener('keydown', self.handleKeyDown);
//  document.removeEventListener('keyup', self.handleKeyUp);

}

 

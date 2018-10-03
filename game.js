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
          <span class="godzilla">GODZILLA  ||</span>
          <span class="score">score:</span>
          <span class="score-value"></span>
          <span class="coolness"> ||  coolness:</span>
          <span class="coolness-value"><span>
        </div>
        <div class="rounds">
          <span class="round">Round:</span>
          <span class="round-value"></span>
        </div>
        <div class="gamera-div">
          <span class="gamera">GAMERA  ||</span>
          <span class="gscore">score:</span>
          <span class="gscore-value"></span>
          <span class="gcoolness">||  coolness:</span>
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

  self.ctx = self.canvasElement.getContext('2d');  
  
  self.soundtrack = new Audio('./sounds/soundtrack-limpio-2.mp3');
  self.soundtrack.play();
  self.soundtrack.currentTime = 0;

  self._setupEventListener();
  self._screams();
}

Game.prototype._startLoop = function() {
  var self = this;
              // Son los argumentos del Player(canvasElement, y, x)
  self.godzilla = new Player(self.canvasElement, self.canvasElement.height, self.canvasElement.width, 'left', 'fighter-left'); 
  self.gamera = new Player(self.canvasElement, self.canvasElement.height, self.canvasElement.width, 'right', 'fighter-right');
  
  self.godzilla.score = 0;
  self.gamera.score = 0;
  self.godzilla.coolness = 0;
  self.gamera.coolness = 0;
  self.round = 1;

  function loop() {
    self._clearAll();
    self._updateAll();
    self._renderAll();

    if (self.round < 4) {
      requestAnimationFrame(loop);
    } else {
      self.onGameOverCallback();
    }
  }
  requestAnimationFrame(loop);
}




Game.prototype._moves = function() {
  var self = this; 

}

Game.prototype._setupEventListener = function () {
  var self = this;

  // document.removeEventListener('keyup', self.fightKeyDown)
  // document.removeEventListener('keydown', self.fightKeyDown)

  self.handleKeyDown = function(evt) {
    if (evt.key === "ArrowLeft" && self.godzilla.push === 0) {
      self.godzilla.vel++;
      console.log(self.godzilla.x + ' vel is going Up! IM GODZILLLLA!!!!')
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

  self.handleKeyUp = function(evt) {
 
     if (evt.key === "ArrowLeft" && self.godzilla.push === 1)  {
       self.godzilla.push = 0;
     }
     else if (evt.key === "ArrowRight" && self.gamera.push === 1) {
       self.gamera.push = 0;
     }
  }; 

   document.addEventListener('keydown', self.handleKeyDown);
   document.addEventListener('keyup', self.handleKeyUp);
}


Game.prototype._fightMode = function() {
  var self = this;
  document.removeEventListener('keydown', self.handleKeyDown);
  document.removeEventListener('keyup', self.handleKeyUp);

  self.isFightMode = true;

  self.fightKeyDown = function(evt) {
     if (evt.key === "ArrowLeft" && self.godzilla.push === 0) {
       self.godzilla.strength++;
       self.godzilla.x+=100;
       self.gamera.x+=100;
       self.godzilla.push = 1;
     }
     else if (evt.key === "ArrowRight" && self.gamera.push === 0) {
       self.gamera.strength++;
       self.godzilla.x-=100;
       self.gamera.x-=100;
       self.gamera.push = 1;
     }
   }
   
   self.fightKeyUp = function(evt) {
     if (evt.key === "ArrowLeft" && self.godzilla.push ===1) {
       self.godzilla.push = 0;
      }
      else if (evt.key === "ArrowRight" && self.gamera.push ===1) {
        self.gamera.push = 0;
      }
    }

    document.addEventListener('keydown', self.fightKeyDown)
    document.addEventListener('keyup', self.fightKeyUp)
  };

Game.prototype._screams = function() {
  var self = this;

  self.screamKey = function(evt) {
    if (evt.key === "0") {
      console.log('hey')
      var audioGodzilla = new Audio('./sounds/godzilla-scream-corto-2.mp3')
      audioGodzilla.play()
      self.godzilla.coolness += 100
    }

    else if (evt.key === "1") {
      var audioGamera = new Audio('./sounds/gamera-scream.wav')
      audioGamera.play()
      self.gamera.coolness += 100
    }
    
  }
    document.addEventListener('keydown', self.screamKey)
}


Game.prototype._updateAll = function() {
  var self = this;

  // self.godzilla.x = self.godzilla.vel*10

  //self.gamera.x = (self.canvasElement.width - self.gamera.size) - self.gamera.vel*10
  self._rounds();
  self._checkAllCollision();
  
  if (!self.isFightMode) {
    self.godzilla.update();
    self.gamera.update();
  }
}

Game.prototype._renderAll = function() {
  var self = this;
  self._updateUI();
  self.godzilla.render();
  self.gamera.render();
}

Game.prototype._clearAll = function ()  {
  var self = this;
  self.ctx.clearRect(0, 0, self.width, self.height);
}

Game.prototype._checkAllCollision = function() {
  var self = this;
  
  if (self.godzilla.checkCollision(self.gamera) && !self.isFightMode) {
    self._fightMode();
  }
  // } else {
  //   self._moves();
  // }
}


Game.prototype._rounds = function () {
  var self = this;
  
  if (self.gamera.x > self.canvasElement.width /*- self.gamera.size*/) {
    self.godzilla.score++;
    var audioGamera = new Audio('./sounds/gamera-scream.wav')
    audioGamera.play()
    // self.round++;
    self._nextRound();
  

    console.log('Round = ' + self.round)
  }

  else if (self.godzilla.x /* self.godzilla.size  */ < 0 - self.godzilla.size) {
    self.gamera.score++;
    var audioGodzilla = new Audio('./sounds/godzilla-scream-corto-2.mp3')
    audioGodzilla.play()
    // self.round++;
    self._nextRound();
  }
}

Game.prototype._nextRound = function() {
  var self = this;
  console.log('Round sin sumar = ' + self.round)
  self.round++;
  console.log('Round ya sumado = ' + self.round )
  document.removeEventListener('keyup', self.fightKeyDown)
  document.removeEventListener('keydown', self.fightKeyDown)
  self.godzilla.resetRound();
  self.gamera.resetRound();
  // PARECE QUE FUNCIONA - por ahora dejamos por si
  //self.godzilla.push = 0;
  //self.gamera.push = 0;
  //self.godzilla.x = 0
  //self.gamera.x = self.canvasElement.width - self.gamera.size;
  //self.godzilla.vel = 0;
  //self.gamera.vel = 0;
  self.isFightMode = false;
  self._setupEventListener();
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
  self.soundtrack.pause();
  document.removeEventListener('keydown', self.screamKey)
  // document.removeEventListener('keyup', self.fightKeyDown)
  // document.removeEventListener('keydown', self.fightKeyDown)
}

 

function Player() {
  var self = this;
  self.x = 0;
  self.y = 0;
  self.size = 60;
  self.vel = 0;
  self.push = 0;
 // self.side <---- Meter en cada uno de ellos
 // self.ctx = canvas.getContext('2d');
};

var godzilla = new Player;
var gamera = new Player;

// Player.prototype.update = function() {
//   var self = this;

//   player.x += player.vel
  
// }

Player.prototype.start = function() {
  var self = this;

  self.moves();
}

Player.prototype.update = function() {
  
}

Player.prototype.moves = function() {
  var self = this; 

  self.handleKeyDown = function(evt) {
    if (evt.key === "ArrowUp" && godzilla.push === 0) {
      godzilla.vel++;
      console.log(godzilla.vel)
     // godzilla.x += 0.1;
      godzilla.push = 1;
    }
    else if (evt.key === "ArrowDown" && gamera.push === 0) {
      gamera.vel++;
      console.log(gamera.vel)
      gamera.push = 1
    }
  }
  document.addEventListener('keydown', self.handleKeyDown)
  
  self.handleKeyUp = function(evt) {
    if (evt.key === "ArrowUp" && godzilla.push === 1)  {
      godzilla.push = 0;
    }
    else if (evt.key === "ArrowDown" && gamera.push === 1) {
      gamera.push = 0;
    }
  } 
  document.addEventListener('keyup', self.handleKeyUp)
}

  


// Player.prototype.moves();   <---- Cada uno tiene una dirección diferente. ¿Deben ir por separado?
// Player.prototype.isDead();
// Player.prototype.scream();





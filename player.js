function Player(canvasElement, canvasHeight, canvasWidth, side, fighterSide) {
  var self = this;
  self.canvasHeight = canvasHeight;
  self.canvasWidth = canvasWidth;
  self.size = 251;
  self.vel = 0;
  self.push = 0;
  self.strength = 0;
  self.fighting = 0;
  self.side = side;
  self.fighterSide = fighterSide;
  self.ctx = canvasElement.getContext('2d');
  self.x = 0;
  self.y = self.canvasHeight - self.size;

  if (self.side === 'left') {
    self.x = 0;
  } else if (self.side === 'right') {
    self.x = self.canvasWidth - self.size;
  }

};

Player.prototype.initialPosition = function() {
  
  if (self.side === 'left') {
    self.x = 0;
  } else if (self.side === 'right') {
    self.x = self.canvasWidth - self.size;
  }


}

Player.prototype.update = function() {
  var self = this;

//  self.y = self.canvasY - self.size;
  if (self.side === 'left') {
    self.x = self.vel*10;
  }
  else if (self.side === 'right') {
    self.x = self.canvasWidth - self.size;
    self.x = (self.canvasWidth - self.size) - self.vel*10;
  }
  // experimental ::: borrar también de los argumentos del new Player y el Constructor Player
  // if (self.fighterSide === 'fighter-left' && self.strength >= 9) {
  //   self.x += 50
  // }
  // else if (self.fighterSide === 'fighter-right' && self.strength >= 9) {
  //   self.x -= 50
  // }
}


Player.prototype.render = function() {
  var self = this;

  if (self.side === 'left') {
    var img = new Image();
    img.src = "./images/godzilla-tren-limpio-amarillo.png"
    self.ctx.drawImage(img, 0, 0, 486,350, self.x, self.y - 100, 486, 350 )
  //  self.ctx.fillStyle = 'white';
  }

  else if (self.side === 'right') {
    var img = new Image();
    img.src = "./images/gamera-amarillo.png"
    self.ctx.drawImage(img, 0, 0, 348,251, self.x, self.y, 348, 251 )
  //  self.ctx.fillStyle = 'red';
  }

  //self.ctx.fillRect(self.x, self.y, self.size, self.size);
}

Player.prototype.checkCollision = function(object) {
  var self = this;

  var crashRight = self.x + self.size > object.x;
  var crashBottom = self.y + self.size > object.y;
  var crashTop = self.y < object.y + object.size;
  var crashLeft = self.x < object.x + object.size;

  if (crashLeft && crashRight && crashTop && crashBottom) {
    //console.log('collision!')
   return true;
  }
 return false
}

// var godzilla = new Player;
// var gamera = new Player;

// Player.prototype.start = function() {
//   var self = this;


//   self.update();
//   self.moves();
// }

// Player.prototype.update = function() {
//   var self = this;
//    godzilla.x = godzilla.vel/10
  
// };

// Player.prototype.moves = function() {
//   var self = this; 

//   self.handleKeyDown = function(evt) {
//     if (evt.key === "ArrowLeft" && godzilla.push === 0) {
//       godzilla.vel++;
//       console.log(godzilla.vel)
//     //  godzilla.x = godzilla.vel/10
//       godzilla.push = 1;
//     }
//     else if (evt.key === "ArrowRight" && gamera.push === 0) {
//       gamera.vel++;
//       console.log(gamera.vel)
//       gamera.push = 1
//     }
//   }
//   document.addEventListener('keydown', self.handleKeyDown)
  
//   self.handleKeyUp = function(evt) {
//     if (evt.key === "ArrowLeft" && godzilla.push === 1)  {
//       godzilla.push = 0;
//     }
//     else if (evt.key === "ArrowRight" && gamera.push === 1) {
//       gamera.push = 0;
//     }
//   } 
//   document.addEventListener('keyup', self.handleKeyUp)
// };

  
// Player.prototype.render() = function() {
//   var self = this;

//   self.ctx.fillRect(self.x, self.y, self.size, self.size)
// }

// Player.prototype.isDead();
// Player.prototype.scream();





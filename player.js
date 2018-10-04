function Player(canvasElement, canvasHeight, canvasWidth, side) {
  var self = this;
  self.canvasHeight = canvasHeight;
  self.canvasWidth = canvasWidth;
  self.size = 251;
  self.vel = 0;
  self.push = 0;
  self.score = 0;
  self.coolness = 0;
  self.side = side;
  self.ctx = canvasElement.getContext('2d');
  self.x = 0;
  self.y = self.canvasHeight - self.size;

  // if (self.side === 'left') {
  //   self.x = 0;
  // } else if (self.side === 'right') {
  //   self.x = self.canvasWidth - self.size;
  // }
  // self.initialPosition();

};

Player.prototype.initialPosition = function() {
  var self = this; 

  if (self.side === 'left') {
    self.x = 0;
  } else if (self.side === 'right') {
    self.x = self.canvasWidth - self.size;
  }
}

Player.prototype.resetRound = function() {
  var self = this;

  self.vel = 0;
  self.push = 0;
  self.x = 0;
  self.initialPosition();

}

Player.prototype.update = function() {
  var self = this;

  if (self.side === 'left') {
    self.x = self.vel*10;
  }
  else if (self.side === 'right') {
    self.x = self.canvasWidth - self.size;
    self.x = (self.canvasWidth - self.size) - self.vel*10;
  }
}

Player.prototype.render = function() {
  var self = this;

  if (self.side === 'left') {
    var img = new Image();
    img.src = "./images/godzilla-tren-limpio-amarillo.png"
    self.ctx.drawImage(img, 0, 0, 486,350, self.x, self.y - 100, 486, 350 )
  }

  else if (self.side === 'right') {
    var img = new Image();
    img.src = "./images/gamera-amarillo.png"
    self.ctx.drawImage(img, 0, 0, 348,251, self.x, self.y, 348, 251 )
  }
}

Player.prototype.checkCollision = function(object) {
  var self = this;

  var crashRight = self.x + self.size > object.x;
  var crashBottom = self.y + self.size > object.y;
  var crashTop = self.y < object.y + object.size;
  var crashLeft = self.x < object.x + object.size;

  if (crashLeft && crashRight && crashTop && crashBottom) {
   return true;
  }
 return false
}

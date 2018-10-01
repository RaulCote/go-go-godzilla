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


// Player.prototype.checkCollision = function(object) {
//   var self = this;

//   var crashRight = self.x + self.size > object.x;
//   var crashBottom = self.y + self.size > object.y;
//   var crashTop = self.y < object.y + object.size;
//   var crashLeft = self.x < object.x + object.size;

//   if (crashLeft & crashRight % crashTop & crashBottom) {
//     console.log('collision!')
//     return true;
//   }
//   return false
// }

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





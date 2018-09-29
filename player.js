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

  

// Player.prototype.isDead();
// Player.prototype.scream();





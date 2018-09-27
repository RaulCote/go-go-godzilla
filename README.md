# Go Go Godzilla!

## Description
**Go Go Godzilla!** is a game to put in practice some basic concepts from JavaScript 00P and Canvas. The concept is easy, it's a multiplayer game, almost a sumo simulator. Godzilla and Gamera will be pushing each other until any of them gets out of the scenary. The players will control one of the monsters just by pushing a key, it will make it move forward until they touch each other, at that moment the player that pushes harder, the player that will win. To make it fun, there's an extra key to make either Godzilla or Gamera scream.  


## MVP (DOM - CANVAS)
The MVP version will be the concept itself working. One object pushing the other until one it's out of screen, next step is put Canvas to work on it and give it graphical appareance and sounds.

- Create Godzilla
- Create Gamera
- Make them move
- Collision between Godzilla & Gamera
- Collision with screen border

## Backlog
- Add points
- Images
- Design
- Music
- Player sounds

## Data structure
### main.js
```javascript

buildSplash();
destroySplash();
buildControls();
destroyControls();
buildGame();
destroyGame();
buildGameOver();
destroyGameOver();

```

### player.js
```javascript
Player {
  self.x
  self.y
  self.size
  self.vel 
  self.side
}

Godzilla.prototype.update();
Godzilla.prototype.render();
Godzilla.prototype.moves();
Godzilla.prototype.isDead();
Godzilla.prototype.scream();

```

### game.js
```javascript
Game() {
  self.score
  self.coolness
  self.rounds
}

Game.prototype._init
Game.prototype._startLoop {
  self._clearAll
  self._updateAll
  self._renderAll
}
Game.prototype._updateAll
Game.prototype._renderAll
Game.prototype._clearAll
Game.prototype._checkAllCollision
Game.prototype._isPlayerAlive
Game.prototype.onOver
Game.prototype.destroy

```


## States and States Transitions
Definition of the different states and their transition (transition functions)
```javascript
- splashScreen
  - destroyGameOver();
  - buildSplash();

- controlsScreen
  - destroySplash();
  - buildControls();
  - create New Game();

- gameScreen
  - destroyControls();

- gameoverScreen
  - destroyGame()
  - buildGameOver()
  - addEventListener( if splashScreen, else starGame) 

```

## Task
Task definition in order of priority
- Create files
- Main - buildDOM
- Main - Build Splash
- Main - addEventListener
- Main - destroySplash
- Game - buildDOM

## Links


### Trello
[Link url](https://trello.com)


### Git
URls for the project repo and deploy
[Link Repo](https://github.com/RaulCote/go-go-godzilla)
[Link Deploy](http://github.com)


### Slides
URls for the project presentation (slides)
[Link Slides.com](http://slides.com)
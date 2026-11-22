/*

The Game Project

*/
// Character properties
var pompom_x, pompom_y;
var isLeft, isRight, isFalling, isPlummeting, isOnTheGround;

// Game state
var stage = 0;
var lives;
var gameOver;
var game_score;
var cameraPosX;
var frame = 0;

// Game objects
var ravines;
var spoons;
var platforms;
var enemies;
var flagpole;
var groundPos_y;

function preload() {
  puddingHeart = loadImage("assets/puddingHeart.png");
  // Source: 	LuizMelo (2023), Pet Cats Pack [Source Image]. https://luizmelo.itch.io/pet-cat-pack
  cat = loadImage("assets/cat.png");
  catRun = loadImage("assets/cat-run.png");
  //Source: Own film photo
  gameOverImg = loadImage("assets/gameOver.jpg");
  soundFormats("mp3", "wav");
  //Source: riheko3606 (2016), Pom Pom Purin: Korokoro Daibouken [Source Audio]. https://downloads.khinsider.com/game-soundtracks/album/pom-pom-purin-korokoro-daibouken-3ds-gamerip-2016
  levelCompletedSound = loadSound("assets/levelCompleted.mp3");
  levelCompletedSound.setVolume(0.5);
  gameOverSong = loadSound("assets/gameOverSong.mp3");
  gameOverSong.setVolume(0.5);
  backgroundMusic = loadSound("assets/backgroundMusic.mp3");
  backgroundMusic.setVolume(0.3);
  //Source: Jason Steele (2023), FilmCow SFX [Source Audio]. https://filmcow.itch.io/filmcow-sfx
  plummetSound = loadSound("assets/plummeting.wav");
  plummetSound.setVolume(0.9);
  //Source: The Honk Project Authors (2023) [Source Font]. https://github.com/EkType/Honk
  honk = loadFont("assets/Honk.ttf");
  //Source: https://mixkit.co/free-sound-effects/game/
  jumpSound = loadSound("assets/jump.wav");
  jumpSound.setVolume(0.9);
  spoonSound = loadSound("assets/move.wav");
  spoonSound.setVolume(0.9);
  //Source: https://pixabay.com/sound-effects/search/enemy/
  stunSound = loadSound("assets/stun.mp3");
  stunSound.setVolume(0.9);
}

function setup() {
  createCanvas(1024, 576);
  setupScene();
  setupStartScreen();
  //int lives
  lives = 3;
  gameOver = false;
  //int starting variables
  intial();
  // Start background music
  if (backgroundMusic.isPlaying() == false) {
    backgroundMusic.loop();
  }
}
function intial() {
  groundPos_y = (height * 3) / 4;
  pompom_x = width / 2;
  pompom_y = groundPos_y;
  game_score = 0;
  cameraPosX = 0;

  isLeft = false;
  isRight = false;
  isFalling = false;
  isPlummeting = false;
  isOnTheGround = true;

  ravines = [
    { x: 600, y: groundPos_y, width: random(70, 150) },
    { x: 0, y: groundPos_y, width: random(70, 150) },
    { x: -1000, y: groundPos_y, width: random(70, 150) },
    { x: 1000, y: groundPos_y, width: random(70, 150) },
    { x: 1500, y: groundPos_y, width: 300 },
  ];

  spoons = [
    { x: 900, y: groundPos_y - 50, isFound: false },
    { x: 150, y: groundPos_y - 130, isFound: false },
    { x: 1500, y: groundPos_y - 100, isFound: false },
    { x: 900, y: groundPos_y - 325, isFound: false },
    { x: 1200, y: groundPos_y - 300, isFound: false },
    { x: 380, y: groundPos_y - 200, isFound: false },
  ];

  platforms = [];
  platforms.push(createPlatforms(50, groundPos_y - 80, 200));
  platforms.push(createPlatforms(500, groundPos_y - 70, 200));
  platforms.push(createPlatforms(700, groundPos_y - 130, 150));
  platforms.push(createPlatforms(800, groundPos_y - 200, 100));
  platforms.push(createPlatforms(870, groundPos_y - 270, 50));
  platforms.push(createPlatforms(1500, groundPos_y - 80, 50));

  enemies = [];
  enemies.push(new Enemy(100, groundPos_y - 10, 200));
  enemies.push(new Enemy(500, groundPos_y - 80, 200));
  enemies.push(new Enemy(800, groundPos_y - 210, 125));
  enemies.push(new Enemy(1100, groundPos_y - 10, 100));
  enemies.push(new Enemy(1800, groundPos_y - 10, 50));

  emitters = [];
  var emitter1 = new Emitter(2100, groundPos_y - 30, 0, -1, 20);
  emitter1.startEmitter(200, 100);
  emitters.push(emitter1);

  var emitter2 = new Emitter(2000, groundPos_y - 30, 0, -1, 20);
  emitter2.startEmitter(200, 100);
  emitters.push(emitter2);

  flagpole = { x_pos: 2000 };
}

function draw() {
  if (stage == 0) {
    drawStartScreen();
    //startScreen();
    return;
  }

  if (stage == 1) {
    intial();
    stage = 2;
    return;
  }

  // Update camera position to follow character
  cameraPosX = pompom_x - width / 2;

  ///////////DRAWING CODE//////////
  //sky and floor before push, so scenery continues
  drawGradientSky();
  drawGradientGround();

  drawGameScore();
  drawHearts();

  if (flagpole.isReached) {
    textAlign(CENTER, CENTER);
    fill(255, 0, 0);
    textSize(45);
    textFont(honk);
    text("You WIN! Press space to restart.", width / 2, 180);
    textAlign(LEFT, BASELINE);
    if (levelCompletedSound.isPlaying() == false) {
      levelCompletedSound.play();
      backgroundMusic.stop(); // Stop background music when level completed
    }
  }
  push();
  translate(-cameraPosX, 0);

  //draw the ravine
  drawRavines();

  //Draw clouds using loop
  drawClouds();
  animateClouds();

  // Draw tulips using Loop
  drawTulips();

  //Draw Pudding
  drawPudding();

  drawPlatforms();

  drawFire();

  ///////////INTERACTION CODE//////////
  //check Game Over
  if (lives < 1) {
    drawGameOver();
    backgroundMusic.stop(); // Stop background music when game over
    return;
  }

  //check if pompom near spoon
  for (var i = 0; i < spoons.length; i++) {
    if (!spoons[i].isFound) {
      drawSpoons();
      checkSpoons();
    }
  }

  checkIfPomPomReachFlagpole();

  checkRavines();

  //detect if pompom_y is above floor,
  if (pompom_y < groundPos_y) {
    var isContact = false;
    for (var i = 0; i < platforms.length; i++) {
      if (platforms[i].checkContact(pompom_x, pompom_y)) {
        isContact = true;
        isOnTheGround = true;
        isFalling = false;
        break;
      }
    }
    if (isContact == false) {
      pompom_y += 2;
      isFalling = true;
      isOnTheGround = false;
    }
  }
  //so if pompom_y is same as groundPos_y
  else if (pompom_y == groundPos_y) {
    //stop drawing falling char
    isFalling = false;
    isOnTheGround = true;
  }

  // Only process movement if not plummeting
  if (!isPlummeting) {
    //walk left, press 'a'
    if (isLeft) {
      pompom_x -= 5;
    }

    //walk right, press 'd'
    if (isRight) {
      pompom_x += 5;
    }
  }

  //the game character
  if (isLeft && isFalling) {
    // add your jumping-left code
    drawPomPomJumpLeft();
  } else if (isRight && isFalling) {
    // add your jumping-right code
    drawPomPomJumpRight();
  } else if (isLeft) {
    // walking left code
    drawPomPomWalkLeft();
  } else if (isRight) {
    // add your walking right code
    drawPomPomWalkRight();
  } else if (isFalling || isPlummeting) {
    // add your jumping facing forwards code
    drawPomPomJump();
    if (isPlummeting) {
      if (plummetSound.isPlaying() == false) {
        plummetSound.play();
      }
    }
  } else {
    drawPomPomFront();
  }

  drawFlagpole();

  drawEnemies();

  return;
}

function keyPressed() {
  if (keyCode == 81 && stage == 0) {
    stage = 1;
    if (backgroundMusic.isPlaying() == false) {
      backgroundMusic.loop(); // Restart music when starting new game
    }
    return;
  }

  // Add space key handler at the start
  if (keyCode == 32) {
    // 32 is the keyCode for space
    if (lives < 1 || flagpole.isReached) {
      // Reset the game
      lives = 3;
      gameOver = false;
      flagpole.isReached = false;
      levelCompletedSound.stop();
      gameOverSong.stop();
      if (backgroundMusic.isPlaying() == false) {
        backgroundMusic.loop(); // Restart music when restarting game
      }
      intial();
      return;
    }
  }

  // Prevent any movement if plummeting
  if (isPlummeting) {
    return;
  }

  //'a' = move left
  if (keyCode == 65) {
    //draw left side pom

    isLeft = true;
  }

  //'d' = move right
  else if (keyCode == 68) {
    //draw right side pom
    isRight = true;
  }
  //'w' = jump up
  else if (keyCode == 87) {
    // Check if character is on ground OR on a platform
    if (jumpSound.isPlaying() == false) {
      jumpSound.play(); // Restart music when restarting game
    }
    var isContact = false;
    for (var i = 0; i < platforms.length; i++) {
      if (platforms[i].checkContact(pompom_x, pompom_y)) {
        isContact = true;
        if (jumpSound.isPlaying() == false) {
          jumpSound.play(); // Restart music when restarting game
        }
        break;
      }
    }

    if (pompom_y >= groundPos_y || isContact) {
      pompom_y -= 100;
      isOnTheGround = false; // Set to false when jumping
    }
  }
}

function keyReleased() {
  if (isPlummeting) {
    return;
  }

  // if statements to control the animation of the character when
  // keys are released.
  //'a' released
  if (keyCode == 65) {
    //stop drawing left side pom
    isLeft = false;
  }
  //'d' released
  else if (keyCode == 68) {
    // stop drawing right side pom
    isRight = false;
  }
  //'w' released
  else if (keyCode == 87) {
    //stop drawing jumping pom
    isFalling = false;
  }
}

function drawSpoons() {
  for (var i = 0; i < spoons.length; i++) drawSpoon(spoons[i]);
}

function drawSpoon(t_spoon) {
  //by default, spoon drawing should always be there
  if (t_spoon.isFound == false) {
    //spoon drawing
    noStroke();
    fill(249, 224, 159);

    ellipse(t_spoon.x, t_spoon.y, 20, 40);
    rect(t_spoon.x - 5, t_spoon.y, 10, 50, 5);
    fill(119, 32, 34);
    ellipse(t_spoon.x, t_spoon.y, 10, 28);
  }
}

function drawRavines() {
  for (var i = 0; i < ravines.length; i++) {
    drawRavine(ravines[i]);
  }
}

function drawRavine(t_ravine) {
  // Define colors for water gradient
  let topColor = color(201, 233, 245);
  let bottomColor = color(90, 178, 255);

  push(); // Save drawing state

  // Draw water gradient
  for (let y = t_ravine.y; y <= t_ravine.y + 150; y++) {
    let amt = map(y, t_ravine.y, t_ravine.y + 150, 0, 1);
    let c = lerpColor(topColor, bottomColor, amt);

    stroke(c);
    line(t_ravine.x, y, t_ravine.x + t_ravine.width, y);
  }

  // Calculate center position and animation
  let centerX = t_ravine.x + t_ravine.width / 2;
  let bobAmount = sin(frameCount * 0.02) * 15;

  // Draw pudding ghost centered in ravine
  fill(249, 244, 159);
  quad(
    centerX - 15,
    t_ravine.y + 30 + bobAmount,
    centerX,
    t_ravine.y + 30 + bobAmount,
    centerX + 15,
    t_ravine.y + 62 + bobAmount,
    centerX - 30,
    t_ravine.y + 62 + bobAmount
  );

  // Draw face elements centered in ravine
  fill(255);
  ellipse(centerX - 15, t_ravine.y + 45 + bobAmount, 5, 5);
  ellipse(centerX, t_ravine.y + 45 + bobAmount, 5, 5);
  fill(0);
  ellipse(centerX - 7, t_ravine.y + 55 + bobAmount, 15, 5);

  // Draw pudding top centered
  fill(148, 106, 77);
  ellipse(centerX - 7, t_ravine.y + 30 + bobAmount, 20, 10);

  pop(); // Restore drawing state
  noStroke();
}

function checkSpoons() {
  for (var i = 0; i < spoons.length; i++) {
    checkSpoon(spoons[i]);
  }
}

function checkSpoon(t_spoon) {
  if (t_spoon.isFound == false) {
    if (dist(pompom_x, pompom_y, t_spoon.x, t_spoon.y) < 60) {
      t_spoon.isFound = true;
      game_score += 1;
      if (spoonSound.isPlaying() == false) {
        spoonSound.play(); // Restart music when restarting game
      }
    }
  }
}

function checkRavines() {
  for (var i = 0; i < ravines.length; i++) {
    checkRavine(ravines[i]);
  }
}

function checkRavine(t_ravine) {
  // Check if character is within the ravine's x bounds
  if (pompom_x > t_ravine.x && pompom_x < t_ravine.x + t_ravine.width) {
    // Only plummet if character is at ground level and not jumping
    if (pompom_y >= groundPos_y - 5 && !isFalling) {
      isPlummeting = true;
      isOnTheGround = false;
      isLeft = false;
      isRight = false;

      // Play plummet sound only once when starting to plummet
      if (plummetSound.isPlaying() == false) {
        plummetSound.play();
      }
    }

    // If plummeting, fall faster than normal falling (4 pixels instead of 2)
    if (isPlummeting) {
      pompom_y += 4; // Faster falling rate

      // Check if character has fallen completely
      if (pompom_y >= groundPos_y + 100) {
        checkIfPomPomIsDead();
      }
    }
  }
}

function drawGameScore() {
  fill(255, 176, 254);
  textSize(20);
  text("Score: " + game_score, width / 2 - 450, 20);
}

function drawFlagpole() {
  //cat
  //Source: morejpeg (2022) Sprite sheets for 2D animation in p5js [Source Code]. https://editor.p5js.org/rjgilmour/sketches/8icNWE0rT
  //animate cat by scrolling frame by frame
  frame += 0.1;
  if (frame > 5) {
    frame = 0;
  }
  if (flagpole.isReached) {
    image(
      catRun,
      flagpole.x_pos,
      groundPos_y - 62,
      catRun.height * 2,
      catRun.height * 2,
      //frame +=0.1 cause sprite to scroll, we need to round it down to the nearest whole number
      catRun.height * Math.floor(frame),
      0,
      catRun.height,
      catRun.height
    );
  } else {
    image(
      cat,
      flagpole.x_pos,
      groundPos_y - 62,
      cat.height * 2,
      cat.height * 2,
      //frame +=0.1 cause sprite to scroll, we need to round it down to the nearest whole number
      cat.height * Math.floor(frame),
      0,
      cat.height,
      cat.height
    );
  }
}

function checkIfPomPomReachFlagpole() {
  if (!flagpole.isReached) {
    // Check if PomPom is within a horizontal range of the flagpole
    if (pompom_x > flagpole.x_pos - 20 && pompom_x < flagpole.x_pos + 20) {
      flagpole.isReached = true;
    }
  }
}

function checkIfPomPomIsDead() {
  if (isPlummeting) {
    lives--;
    if (lives > 0) {
      intial();
    } else {
      gameOver = true;
    }
    isPlummeting = false; // Reset plummeting state
  }
}

function drawHearts() {
  for (var i = 0; i < lives; i++) {
    image(puddingHeart, 40 * i + 50, 30, 30, 30);
  }
}

function drawGameOver() {
  image(gameOverImg, 300, 200, 500, 350);
  textAlign(CENTER, CENTER);
  fill(255, 176, 254);
  textFont(honk);
  textSize(25);
  text(
    "Well, since you lost, here's a film photo taken by me",
    width / 2,
    height / 2 - 100
  );
  if (gameOverSong.isPlaying() == false) {
    gameOverSong.play();
  }
}

function createPlatforms(x, y, length) {
  var p = {
    x: x,
    y: y,
    currentX: x,
    length: length,
    inc: 1,

    draw: function () {
      fill(255, 234, 197);
      rect(this.currentX, this.y, this.length, 20);
    },
    move: function () {
      this.currentX += this.inc;
      if (this.currentX >= this.x + 100) {
        this.inc = -1;
      } else if (this.currentX < this.x) {
        this.inc = 1;
      }
    },
    checkContact: function (gc_x, gc_y) {
      if (
        gc_x + 20 > this.currentX &&
        gc_x < this.currentX + 20 + this.length
      ) {
        //check for y axis - game char is on platform
        var d = this.y - gc_y;
        if (d >= 0 && d < 1) {
          return true;
        }
      }
      return false;
    },
  };
  return p;
}

function drawPlatforms() {
  for (var i = 0; i < platforms.length; i++) {
    platforms[i].move();
    platforms[i].draw();
  }
}

function Enemy(x, y, range) {
  this.x = x;
  this.y = y;
  this.range = range;

  this.currentX = x;
  this.inc = 1;

  this.update = function () {
    this.currentX += this.inc;

    if (this.currentX >= this.x + this.range) {
      this.inc = -1;
    } else if (this.currentX < this.x) {
      this.inc = 1;
    }
  };

  this.draw = function () {
    this.update();
    fill(249, 244, 159);
    quad(
      this.currentX,
      this.y - 20,
      this.currentX + 15,
      this.y - 20,
      this.currentX + 30,
      this.y + 12,
      this.currentX - 15,
      this.y + 12
    );

    //pudding face
    fill(255);
    ellipse(this.currentX, this.y - 5, 5, 5);
    ellipse(this.currentX + 15, this.y - 5, 5, 5);
    fill(0);
    ellipse(this.currentX + 8, this.y + 5, 15, 5);

    // Pudding top
    fill(148, 106, 77);
    ellipse(this.currentX + 8, this.y - 20, 20, 10);
  };

  this.checkContact = function (gc_x, gc_y) {
    var d = dist(gc_x, gc_y, this.currentX, this.y);
    if (d < 20) {
      return true;
    }
    return false;
  };
}

function drawEnemies() {
  for (var i = 0; i < enemies.length; i++) {
    enemies[i].draw();

    var isContact = enemies[i].checkContact(pompom_x, pompom_y);

    if (isContact && lives > 0) {
      lives -= 1;
      pompom_x = width / 2;
      pompom_y = groundPos_y;
      stage = 1;
      if (stunSound.isPlaying() == false) {
        stunSound.play();
      }
    }
  }
}

function drawFire() {
  for (var i = 0; i < emitters.length; i++) {
    var d = dist(pompom_x, groundPos_y, emitters[i].pos.x, emitters[i].pos.y);
    if (d < width) {
      emitters[i].drawAndUpdateParticles();
    }
  }
}

function drawGradientSky() {
  // Define colors
  let topColor = color(27, 51, 95); // Sky blue
  let bottomColor = color(255, 176, 254); // White

  // Draw gradient using a single rectangle with gradient
  for (let y = 0; y <= groundPos_y; y++) {
    let amt = map(y, 0, groundPos_y, 0, 1);
    let c = lerpColor(topColor, bottomColor, amt);

    stroke(c);
    line(0, y, width, y);
  }
  noStroke();
}

function drawGradientGround() {
  let topColor = color(96, 63, 38); // Dark brown
  let bottomColor = color(255, 234, 197); // Light beige

  // Draw gradient from groundPos_y to bottom of canvas
  for (let y = groundPos_y; y <= height; y++) {
    let amt = map(y, groundPos_y, height, 0, 1);
    let c = lerpColor(topColor, bottomColor, amt);

    stroke(c);
    line(0, y, width, y);
  }
  noStroke();
}

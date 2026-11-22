function setupScene() {
  groundPos_y = (height * 3) / 4;
  clouds = [];
  for (var i = 0; i < 20; i++) {
    var cloud = createCloud();
    clouds.push(cloud);
  }

  puddings = [];
  puddings.push(new Pudding(800, groundPos_y - 82, 100));
  puddings.push(new Pudding(-500, groundPos_y - 80, 100));
  puddings.push(new Pudding(1300, groundPos_y - 82, 100));
  puddings.push(new Pudding(1900, groundPos_y - 82, 100));

  tulips = [];
  tulips.push(new Tulip(-700, 432));
  tulips.push(new Tulip(250, 432));
  tulips.push(new Tulip(-250, 432));
  tulips.push(new Tulip(580, 432));
  tulips.push(new Tulip(1200, 432));
  tulips.push(new Tulip(1800, 432));
  tulips.push(new Tulip(2200, 432));
}

function createCloud() {
  var pos_x = random(10, width);
  var pos_y = random(20, 100);
  var size = 70;
  var cloud = new Cloud(pos_x, pos_y, size);
  return cloud;
}

function Cloud(pos_x, pos_y, size) {
  this.pos_x = pos_x;
  this.pos_y = pos_y;
  this.size = size;

  this.draw = function () {
    fill(255);
    rect(this.pos_x, this.pos_y, this.size + 70, this.size - 20, this.size - 1);
    ellipse(this.pos_x + 80, this.pos_y, this.size, this.size);
  };

  this.move = function () {
    if (this.pos_x > width + 100) {
      this.pos_x = -100;
    } else {
      this.pos_x += 1;
    }
  };
}

function animateClouds() {
  for (var i = 0; i < clouds.length; i++) {
    var cloud = clouds[i];
    cloud.move();
  }
}

function drawClouds() {
  for (var i = 0; i < clouds.length; i++) {
    var cloud = clouds[i];
    cloud.draw();
  }
}

function Pudding(x, y, size) {
  this.x = x;
  this.y = y;
  this.size = size;

  this.draw = function () {
    fill(249, 244, 159);
    quad(
      this.x,
      this.y,
      this.x + 100,
      this.y,
      this.x + 200,
      this.y + 82,
      this.x - 100,
      this.y + 82
    );
    // Pudding top
    fill(148, 106, 77);
    ellipse(this.x + 50, this.y, this.size + 15, this.size - 70);
  };
}

function drawPudding() {
  for (var i = 0; i < puddings.length; i++) {
    var pudding = puddings[i];
    pudding.draw();
  }
}

function Tulip(pos_x, pos_y) {
  this.pos_x = pos_x;
  this.pos_y = pos_y;

  this.draw = function () {
    //stem
    noStroke();
    fill(162, 207, 112);
    rect(this.pos_x, this.pos_y - 150, 20, 150, 5);

    //leaves
    fill(181, 230, 126);
    ellipse(this.pos_x - 10, this.pos_y - 100, 50, 20);
    ellipse(this.pos_x + 30, this.pos_y - 130, 50, 20);

    //flower
    noStroke();
    fill(255, 240, 77);
    ellipse(this.pos_x - 10, this.pos_y - 200, 30, 30);
    ellipse(this.pos_x + 10, this.pos_y - 210, 30, 30);
    ellipse(this.pos_x + 30, this.pos_y - 200, 30, 30);
    ellipse(this.pos_x + 10, this.pos_y - 180, 60, 60);
  };
}
function drawTulips() {
  for (var i = 0; i < tulips.length; i++) {
    var tulip = tulips[i];
    tulip.draw();
  }
}

               var pompomS_x;
var pompomS_y;
var pompomS_size;
function setupStartScreen() {
  pompomS_x = 500;
  pompomS_y = 500;
  pompomS_size = 6;
}

function drawStartScreen() {
  background(255, 182, 193);
  drawPomPomS();
  drawBalls();

  textSize(30);
  textFont(honk);
  textAlign(CENTER, CENTER);
  noFill();
  stroke(2, 31, 111);
  strokeWeight(1);
  square(200, 40, 50);
  text("W", 227, 65);
  square(140, 100, 50);
  text("A", 167, 125);
  square(200, 100, 50);
  text("S", 227, 125);
  square(260, 100, 50);
  text("D", 287, 125);
  rect(150, 170, 150, 50);
  text("SPACE", 227, 195);
  text("Try to collect all the spoons!", 650, 100);
  text("Press Q to start", 700, 150);
  textSize(20);
  text("(restart)", 75, 195);
}

function drawPomPomS() {
  fill(249, 244, 159);
  stroke(119, 32, 34);
  strokeWeight(1);

  beginShape();
  vertex(pompomS_x + 10 * pompomS_size, pompomS_y - 49 * pompomS_size);
  quadraticVertex(
    pompomS_x + 24 * pompomS_size,
    pompomS_y - 41 * pompomS_size,
    pompomS_x + 23 * pompomS_size,
    pompomS_y - 36 * pompomS_size
  );
  // right ear
  quadraticVertex(
    pompomS_x + 22 * pompomS_size,
    pompomS_y - 31 * pompomS_size,
    pompomS_x + 16 * pompomS_size,
    pompomS_y - 33 * pompomS_size
  );
  quadraticVertex(
    pompomS_x + 24 * pompomS_size,
    pompomS_y - 22 * pompomS_size,
    pompomS_x + 19 * pompomS_size,
    pompomS_y - 21 * pompomS_size
  );
  quadraticVertex(
    pompomS_x + 18 * pompomS_size,
    pompomS_y - 13 * pompomS_size,
    pompomS_x + 13 * pompomS_size,
    pompomS_y - 8 * pompomS_size
  );
  quadraticVertex(
    pompomS_x + 9 * pompomS_size,
    pompomS_y + 1 * pompomS_size,
    pompomS_x + 7 * pompomS_size,
    pompomS_y - 7 * pompomS_size
  );
  quadraticVertex(
    pompomS_x,
    pompomS_y - 5 * pompomS_size,
    pompomS_x - 9 * pompomS_size,
    pompomS_y - 7 * pompomS_size
  );
  quadraticVertex(
    pompomS_x - 11 * pompomS_size,
    pompomS_y + 1 * pompomS_size,
    pompomS_x - 15 * pompomS_size,
    pompomS_y - 9 * pompomS_size
  );
  quadraticVertex(
    pompomS_x - 18 * pompomS_size,
    pompomS_y - 13 * pompomS_size,
    pompomS_x - 17 * pompomS_size,
    pompomS_y - 21 * pompomS_size
  );
  // left ear
  quadraticVertex(
    pompomS_x - 23 * pompomS_size,
    pompomS_y - 18 * pompomS_size,
    pompomS_x - 15 * pompomS_size,
    pompomS_y - 36 * pompomS_size
  );
  quadraticVertex(
    pompomS_x - 24 * pompomS_size,
    pompomS_y - 27 * pompomS_size,
    pompomS_x - 23 * pompomS_size,
    pompomS_y - 37 * pompomS_size
  );
  quadraticVertex(
    pompomS_x - 21 * pompomS_size,
    pompomS_y - 45 * pompomS_size,
    pompomS_x - 9 * pompomS_size,
    pompomS_y - 49 * pompomS_size
  );
  endShape();

  // hat
  fill(119, 32, 34);
  ellipse(
    pompomS_x + 1 * pompomS_size,
    pompomS_y - 48 * pompomS_size,
    20 * pompomS_size,
    9 * pompomS_size
  );
  rect(
    pompomS_x,
    pompomS_y - 55 * pompomS_size,
    2 * pompomS_size,
    4 * pompomS_size,
    2 * pompomS_size
  );

  // facial features
  fill(199, 238, 255);
  ellipse(
    pompomS_x - 7 * pompomS_size,
    pompomS_y - 40 * pompomS_size * -sin(frameCount * 0.05),
    2 * pompomS_size,
    2 * pompomS_size
  );
  ellipse(
    pompomS_x + 9 * pompomS_size,
    pompomS_y - 40 * pompomS_size * -sin(frameCount * 0.05),
    2 * pompomS_size,
    2 * pompomS_size
  );
  fill(119, 32, 34);
  ellipse(
    pompomS_x - 7 * pompomS_size,
    pompomS_y - 40 * pompomS_size,
    2 * pompomS_size,
    2 * pompomS_size
  );
  ellipse(
    pompomS_x + 9 * pompomS_size,
    pompomS_y - 40 * pompomS_size,
    2 * pompomS_size,
    2 * pompomS_size
  );
  triangle(
    pompomS_x,
    pompomS_y - 39 * pompomS_size,
    pompomS_x + 2 * pompomS_size,
    pompomS_y - 39 * pompomS_size,
    pompomS_x + 1 * pompomS_size,
    pompomS_y - 38 * pompomS_size
  );
  noFill();
  beginShape();
  vertex(pompomS_x - 4 * pompomS_size, pompomS_y - 37 * pompomS_size);
  quadraticVertex(
    pompomS_x - 2 * pompomS_size,
    pompomS_y - 32 * pompomS_size,
    pompomS_x + 1 * pompomS_size,
    pompomS_y - 38 * pompomS_size
  );
  endShape();

  beginShape();
  vertex(pompomS_x + 7 * pompomS_size, pompomS_y - 37 * pompomS_size);
  quadraticVertex(
    pompomS_x + 4 * pompomS_size,
    pompomS_y - 32 * pompomS_size,
    pompomS_x + 1 * pompomS_size,
    pompomS_y - 38 * pompomS_size
  );
  endShape();
}

function drawBalls() {
  fill(249, 76, 102);
  ellipse(250, 400 + 50 * sin(frameCount * 0.1), 50, 50);
  ellipse(750, 400 + 50 * sin(frameCount * 0.1), 50, 50);

  fill(189, 66, 145);
  ellipse(150, 400 + 50 * sin(frameCount * 0.2), 50, 50);
  ellipse(850, 400 + 50 * sin(frameCount * 0.2), 50, 50);

  fill(255, 197, 77);
  ellipse(350, 400 + 50 * sin(frameCount * 0.22), 50, 50);
  ellipse(650, 400 + 50 * sin(frameCount * 0.22), 50, 50);
}

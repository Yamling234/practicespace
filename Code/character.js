function drawPomPomFront() {
  fill(249, 244, 159);
  stroke(119, 32, 34);
  strokeWeight(1);

  beginShape();
  vertex(pompom_x + 10, pompom_y - 49);
  quadraticVertex(pompom_x + 24, pompom_y - 41, pompom_x + 23, pompom_y - 36);
  // right ear
  quadraticVertex(pompom_x + 22, pompom_y - 31, pompom_x + 16, pompom_y - 33);
  quadraticVertex(pompom_x + 24, pompom_y - 22, pompom_x + 19, pompom_y - 21);
  quadraticVertex(pompom_x + 18, pompom_y - 13, pompom_x + 13, pompom_y - 8);
  quadraticVertex(pompom_x + 9, pompom_y + 1, pompom_x + 7, pompom_y - 7);
  quadraticVertex(pompom_x, pompom_y - 5, pompom_x - 9, pompom_y - 7);
  quadraticVertex(pompom_x - 11, pompom_y + 1, pompom_x - 15, pompom_y - 9);
  quadraticVertex(pompom_x - 18, pompom_y - 13, pompom_x - 17, pompom_y - 21);
  // left ear
  quadraticVertex(pompom_x - 23, pompom_y - 18, pompom_x - 15, pompom_y - 36);
  quadraticVertex(pompom_x - 24, pompom_y - 27, pompom_x - 23, pompom_y - 37);
  quadraticVertex(pompom_x - 21, pompom_y - 45, pompom_x - 9, pompom_y - 49);
  endShape();

  // hat
  fill(119, 32, 34);
  ellipse(pompom_x + 1, pompom_y - 48, 20, 9);
  rect(pompom_x, pompom_y - 55, 2, 4, 2);

  // facial features
  ellipse(pompom_x - 7, pompom_y - 40, 1, 1);
  ellipse(pompom_x + 9, pompom_y - 40, 1, 1);
  triangle(
    pompom_x,
    pompom_y - 39,
    pompom_x + 2,
    pompom_y - 39,
    pompom_x + 1,
    pompom_y - 38
  );
  noFill();
  beginShape();
  vertex(pompom_x - 4, pompom_y - 37);
  quadraticVertex(pompom_x - 2, pompom_y - 32, pompom_x + 1, pompom_y - 38);
  endShape();

  beginShape();
  vertex(pompom_x + 7, pompom_y - 37);
  quadraticVertex(pompom_x + 4, pompom_y - 32, pompom_x + 1, pompom_y - 38);
  endShape();
}

function drawPomPomJump() {
  //body
  fill(249, 244, 159);
  stroke(119, 32, 34);
  strokeWeight(1);
  beginShape();
  vertex(pompom_x - 9, pompom_y - 49);
  quadraticVertex(pompom_x - 15, pompom_y - 52, pompom_x - 13, pompom_y - 55);
  quadraticVertex(pompom_x - 12, pompom_y - 61, pompom_x - 16, pompom_y - 62);
  quadraticVertex(pompom_x - 26, pompom_y - 58, pompom_x - 23, pompom_y - 50);
  quadraticVertex(pompom_x - 20, pompom_y - 39, pompom_x - 13, pompom_y - 42);
  quadraticVertex(pompom_x - 17, pompom_y - 42, pompom_x - 17, pompom_y - 32);
  quadraticVertex(pompom_x - 20, pompom_y - 36, pompom_x - 23, pompom_y - 36);
  quadraticVertex(pompom_x - 26, pompom_y - 29, pompom_x - 17, pompom_y - 25);
  quadraticVertex(pompom_x - 23, pompom_y - 17, pompom_x - 15, pompom_y - 7);
  quadraticVertex(pompom_x - 17, pompom_y - 4, pompom_x - 12, pompom_y - 2);
  quadraticVertex(pompom_x - 5, pompom_y - 1, pompom_x - 9, pompom_y - 6);
  quadraticVertex(pompom_x, pompom_y - 2, pompom_x + 8, pompom_y - 5);
  quadraticVertex(pompom_x + 7, pompom_y - 3, pompom_x + 13, pompom_y - 2);
  quadraticVertex(pompom_x + 16, pompom_y - 2, pompom_x + 16, pompom_y - 6);
  quadraticVertex(pompom_x + 23, pompom_y - 14, pompom_x + 20, pompom_y - 28);
  quadraticVertex(pompom_x + 27, pompom_y - 34, pompom_x + 25, pompom_y - 37);
  quadraticVertex(pompom_x + 21, pompom_y - 38, pompom_x + 19, pompom_y - 34);
  quadraticVertex(pompom_x + 20, pompom_y - 39, pompom_x + 17, pompom_y - 44);
  quadraticVertex(pompom_x + 29, pompom_y - 54, pompom_x + 17, pompom_y - 62);
  quadraticVertex(pompom_x + 10, pompom_y - 62, pompom_x + 10, pompom_y - 54);
  quadraticVertex(pompom_x + 12, pompom_y - 50, pompom_x + 10, pompom_y - 49);
  endShape();

  // hat
  fill(119, 32, 34);
  ellipse(pompom_x + 1, pompom_y - 48, 20, 9);
  rect(pompom_x, pompom_y - 55, 2, 4, 2);

  // facial features
  ellipse(pompom_x - 7, pompom_y - 40, 1, 1);
  ellipse(pompom_x + 9, pompom_y - 40, 1, 1);
  triangle(
    pompom_x,
    pompom_y - 39,
    pompom_x + 2,
    pompom_y - 39,
    pompom_x + 1,
    pompom_y - 38
  );
  noFill();
  beginShape();
  vertex(pompom_x - 4, pompom_y - 37);
  quadraticVertex(pompom_x - 2, pompom_y - 32, pompom_x + 1, pompom_y - 38);
  endShape();

  beginShape();
  vertex(pompom_x + 7, pompom_y - 37);
  quadraticVertex(pompom_x + 4, pompom_y - 32, pompom_x + 1, pompom_y - 38);
  endShape();
}

function drawPomPomWalkRight() {
  //body
  fill(249, 244, 159);
  stroke(119, 32, 34);
  strokeWeight(1);
  beginShape();
  vertex(pompom_x - 1, pompom_y - 49);
  quadraticVertex(pompom_x + 4, pompom_y - 48, pompom_x + 7, pompom_y - 43);
  quadraticVertex(pompom_x + 15, pompom_y - 37, pompom_x + 9, pompom_y - 28);
  quadraticVertex(pompom_x + 13, pompom_y - 21, pompom_x + 11, pompom_y - 13);
  quadraticVertex(pompom_x + 23, pompom_y - 7, pompom_x + 8, pompom_y - 8);
  quadraticVertex(pompom_x - 3, pompom_y - 4, pompom_x - 14, pompom_y - 5);
  quadraticVertex(pompom_x - 22, pompom_y + 3, pompom_x - 21, pompom_y - 13);
  quadraticVertex(pompom_x - 24, pompom_y - 22, pompom_x - 20, pompom_y - 28);
  quadraticVertex(pompom_x - 25, pompom_y - 41, pompom_x - 19, pompom_y - 45);
  endShape();

  //ear
  beginShape();
  vertex(pompom_x - 17, pompom_y - 42);
  quadraticVertex(pompom_x - 23, pompom_y - 30, pompom_x - 15, pompom_y - 26);
  quadraticVertex(pompom_x - 8, pompom_y - 27, pompom_x - 9, pompom_y - 42);
  endShape();

  //hand
  beginShape();
  vertex(pompom_x - 12, pompom_y - 27);
  quadraticVertex(pompom_x - 10, pompom_y - 27, pompom_x - 9, pompom_y - 26);
  quadraticVertex(pompom_x - 6, pompom_y - 31, pompom_x, pompom_y - 30);
  quadraticVertex(pompom_x + 5, pompom_y - 25, pompom_x - 9, pompom_y - 20);
  endShape();

  //facial features
  ellipse(pompom_x + 2, pompom_y - 40, 1, 1);
  ellipse(pompom_x + 9, pompom_y - 40, 2, 1);

  beginShape();
  curveVertex(pompom_x + 10, pompom_y - 44);
  curveVertex(pompom_x + 10, pompom_y - 38);
  curveVertex(pompom_x + 5, pompom_y - 38);
  curveVertex(pompom_x + 5, pompom_y - 44);
  endShape();

  //hat
  fill(119, 32, 34);
  ellipse(pompom_x - 9, pompom_y - 48, 19, 8);
  rect(pompom_x - 11, pompom_y - 55, 2, 4, 2);
}

function drawPomPomWalkLeft() {
  // body
  fill(249, 244, 159);
  stroke(119, 32, 34);
  strokeWeight(1);
  beginShape();
  vertex(pompom_x + 14, pompom_y - 47);
  quadraticVertex(pompom_x + 19, pompom_y - 41, pompom_x + 17, pompom_y - 33);
  quadraticVertex(pompom_x + 25, pompom_y - 21, pompom_x + 15, pompom_y - 8);
  quadraticVertex(pompom_x + 18, pompom_y - 4, pompom_x + 13, pompom_y - 2);
  quadraticVertex(pompom_x + 9, pompom_y - 3, pompom_x + 8, pompom_y - 6);
  quadraticVertex(pompom_x - 3, pompom_y - 4, pompom_x - 14, pompom_y - 8);
  quadraticVertex(pompom_x - 30, pompom_y - 10, pompom_x - 17, pompom_y - 13);
  quadraticVertex(pompom_x - 21, pompom_y - 22, pompom_x - 15, pompom_y - 28);
  quadraticVertex(pompom_x - 20, pompom_y - 38, pompom_x - 14, pompom_y - 43);
  quadraticVertex(pompom_x - 11, pompom_y - 49, pompom_x - 5, pompom_y - 50);
  endShape();

  // ear
  beginShape();
  vertex(pompom_x + 4, pompom_y - 42);
  quadraticVertex(pompom_x, pompom_y - 30, pompom_x + 9, pompom_y - 26);
  quadraticVertex(pompom_x + 20, pompom_y - 27, pompom_x + 12, pompom_y - 42);
  endShape();

  // hand
  beginShape();
  vertex(pompom_x + 7, pompom_y - 27);
  quadraticVertex(pompom_x + 5, pompom_y - 27, pompom_x + 4, pompom_y - 26);
  quadraticVertex(pompom_x, pompom_y - 31, pompom_x - 4, pompom_y - 30);
  quadraticVertex(pompom_x - 8, pompom_y - 25, pompom_x + 2, pompom_y - 20);
  endShape();

  // facial features
  ellipse(pompom_x - 7, pompom_y - 40, 1, 1);
  ellipse(pompom_x - 15, pompom_y - 40, 2, 1);

  beginShape();
  curveVertex(pompom_x - 18, pompom_y - 44);
  curveVertex(pompom_x - 17, pompom_y - 38);
  curveVertex(pompom_x - 13, pompom_y - 38);
  curveVertex(pompom_x - 13, pompom_y - 44);
  endShape();

  // hat
  fill(119, 32, 34);
  ellipse(pompom_x + 4, pompom_y - 49, 19, 8);
  rect(pompom_x + 3, pompom_y - 55, 2, 4, 2);
}

function drawPomPomJumpRight() {
  //body
  fill(249, 244, 159);
  stroke(119, 32, 34);
  strokeWeight(1);
  beginShape();
  vertex(pompom_x + 2, pompom_y - 50);
  quadraticVertex(pompom_x + 9, pompom_y - 51, pompom_x + 9, pompom_y - 51);
  quadraticVertex(pompom_x + 20, pompom_y - 54, pompom_x + 22, pompom_y - 49);
  quadraticVertex(pompom_x + 23, pompom_y - 42, pompom_x + 15, pompom_y - 42);
  line(pompom_x + 8, pompom_y - 45, pompom_x + 15, pompom_y - 42);
  quadraticVertex(pompom_x + 17, pompom_y - 42, pompom_x + 17, pompom_y - 37);
  quadraticVertex(pompom_x + 19, pompom_y - 42, pompom_x + 23, pompom_y - 41);
  quadraticVertex(pompom_x + 26, pompom_y - 35, pompom_x + 20, pompom_y - 31);
  quadraticVertex(pompom_x + 23, pompom_y - 21, pompom_x + 20, pompom_y - 14);
  quadraticVertex(pompom_x + 27, pompom_y - 15, pompom_x + 22, pompom_y - 7);
  quadraticVertex(pompom_x + 18, pompom_y - 6, pompom_x + 16, pompom_y - 8);
  quadraticVertex(pompom_x + 5, pompom_y + 1, pompom_x - 8, pompom_y - 1);
  quadraticVertex(pompom_x - 9, pompom_y + 3, pompom_x - 11, pompom_y + 3);
  quadraticVertex(pompom_x - 17, pompom_y + 2, pompom_x - 13, pompom_y - 3);
  quadraticVertex(pompom_x - 18, pompom_y - 11, pompom_x - 14, pompom_y - 21);
  quadraticVertex(pompom_x - 16, pompom_y - 22, pompom_x - 15, pompom_y - 27);
  line(pompom_x - 14, pompom_y - 33, pompom_x - 15, pompom_y - 27);
  quadraticVertex(pompom_x - 18, pompom_y - 23, pompom_x - 20, pompom_y - 22);
  quadraticVertex(pompom_x - 27, pompom_y - 19, pompom_x - 27, pompom_y - 25);
  quadraticVertex(pompom_x - 28, pompom_y - 36, pompom_x - 16, pompom_y - 42);
  endShape();

  //hand
  beginShape();
  vertex(pompom_x - 6, pompom_y - 22);
  quadraticVertex(pompom_x, pompom_y - 27, pompom_x + 4, pompom_y - 23);
  quadraticVertex(pompom_x + 1, pompom_y - 17, pompom_x - 5, pompom_y - 17);
  endShape();

  //facial features
  //eyes
  ellipse(pompom_x - 8, pompom_y - 33, 1, 1);
  ellipse(pompom_x + 7, pompom_y - 40, 1, 1);

  //mouth
  beginShape();
  vertex(pompom_x - 1, pompom_y - 32);
  quadraticVertex(pompom_x + 2, pompom_y - 31, pompom_x + 2, pompom_y - 34);
  quadraticVertex(pompom_x + 5, pompom_y - 31, pompom_x + 5, pompom_y - 35);
  endShape();

  fill(119, 32, 34);

  //nose
  ellipse(pompom_x + 2, pompom_y - 35, 3, 2);

  //hat
  beginShape();
  vertex(pompom_x - 10, pompom_y - 48);
  quadraticVertex(pompom_x - 12, pompom_y - 54, pompom_x - 8, pompom_y - 49);
  quadraticVertex(pompom_x - 4, pompom_y - 54, pompom_x + 3, pompom_y - 50);
  quadraticVertex(pompom_x - 4, pompom_y - 40, pompom_x - 16, pompom_y - 41);
  quadraticVertex(pompom_x - 16, pompom_y - 47, pompom_x - 10, pompom_y - 48);
  endShape();
}

function drawPomPomJumpLeft() {
  // body
  fill(249, 244, 159);
  stroke(119, 32, 34);
  strokeWeight(1);
  beginShape();
  vertex(pompom_x - 4, pompom_y - 50);
  quadraticVertex(pompom_x - 7, pompom_y - 49, pompom_x - 12, pompom_y - 51);
  quadraticVertex(pompom_x - 19, pompom_y - 54, pompom_x - 21, pompom_y - 49);
  quadraticVertex(pompom_x - 24, pompom_y - 37, pompom_x - 10, pompom_y - 45);
  quadraticVertex(pompom_x - 18, pompom_y - 42, pompom_x - 19, pompom_y - 38);
  quadraticVertex(pompom_x - 25, pompom_y - 47, pompom_x - 22, pompom_y - 31);
  quadraticVertex(pompom_x - 27, pompom_y - 22, pompom_x - 21, pompom_y - 14);
  quadraticVertex(pompom_x - 25, pompom_y - 17, pompom_x - 25, pompom_y - 14);
  quadraticVertex(pompom_x - 23, pompom_y - 2, pompom_x - 17, pompom_y - 8);
  quadraticVertex(pompom_x - 2, pompom_y - 1, pompom_x + 7, pompom_y - 5);
  quadraticVertex(pompom_x + 12, pompom_y + 8, pompom_x + 13, pompom_y - 5);
  quadraticVertex(pompom_x + 20, pompom_y - 16, pompom_x + 12, pompom_y - 21);
  quadraticVertex(pompom_x + 15, pompom_y - 25, pompom_x + 14, pompom_y - 26);
  quadraticVertex(pompom_x + 30, pompom_y - 22, pompom_x + 23, pompom_y - 34);
  quadraticVertex(pompom_x + 20, pompom_y - 37, pompom_x + 15, pompom_y - 42);
  endShape();

  // hand
  beginShape();
  vertex(pompom_x + 5, pompom_y - 23);
  quadraticVertex(pompom_x, pompom_y - 27, pompom_x - 5, pompom_y - 23);
  quadraticVertex(pompom_x - 5, pompom_y - 17, pompom_x + 2, pompom_y - 17);
  endShape();

  // facial features
  // eyes
  ellipse(pompom_x - 8, pompom_y - 41, 1, 1);
  ellipse(pompom_x + 7, pompom_y - 35, 1, 1);

  // mouth
  beginShape();
  vertex(pompom_x - 1, pompom_y - 32);
  quadraticVertex(pompom_x - 7, pompom_y - 31, pompom_x - 4, pompom_y - 34);
  quadraticVertex(pompom_x - 10, pompom_y - 31, pompom_x - 6, pompom_y - 35);
  endShape();

  fill(119, 32, 34);

  // nose
  ellipse(pompom_x - 3, pompom_y - 35, 3, 2);

  // hat
  beginShape();
  vertex(pompom_x - 5, pompom_y - 50);
  quadraticVertex(pompom_x - 2, pompom_y - 54, pompom_x + 6, pompom_y - 52);
  quadraticVertex(pompom_x + 14, pompom_y - 57, pompom_x + 9, pompom_y - 50);
  quadraticVertex(pompom_x + 15, pompom_y - 47, pompom_x + 15, pompom_y - 41);
  quadraticVertex(pompom_x + 2, pompom_y - 42, pompom_x - 5, pompom_y - 50);
  endShape();
}

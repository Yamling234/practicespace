function Particle(pos, velocity, size) {
  this.pos = pos;
  this.velocity = velocity;
  this.size = size;
  this.age = 0; //Track lifetime

  this.drawParticle = function () {
    image(puddingHeart, this.pos.x, this.pos.y, this.size, this.size);
  };
  this.update = function () {
    this.pos.add(this.velocity);
    this.age++;
  };
}
function Emitter(xPos, yPos, xSpeed, ySpeed, size) {
  this.pos = createVector(xPos, yPos); // Create position vector
  this.velocity = createVector(xSpeed, ySpeed); // Create velocity vector
  this.size = size;
  this.particles = [];

  this.startParticles = 0;
  this.lifetime = 0;

  this.startEmitter = function (startParticles, lifetime) {
    this.startParticles = startParticles;
    this.lifetime = lifetime;
    //start emmitter with inital particles
    for (var i = 0; i < this.startParticles; i++) {
      var p = this.createNewParticle();
      this.particles.push(p);
    }
  };

  this.createNewParticle = function () {
    var xPos = random(this.pos.x - 10, this.pos.x + 10);
    var yPos = random(this.pos.y - 10, this.pos.y + 10);
    var pos = createVector(xPos, yPos);

    var xVel = random(this.velocity.x - 1, this.velocity.x + 1);
    var yVel = random(this.velocity.y - 1, this.velocity.y + 1);
    var velocity = createVector(xVel, yVel);

    var p = new Particle(pos, velocity, this.size);
    return p;
  };

  this.drawAndUpdateParticles = function () {
    var deadParticleCount = 0;
    for (var i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].drawParticle();
      this.particles[i].update();

      if (this.particles[i].age > random(0, this.lifetime)) {
        this.particles.splice(i, 1); //remove the particle
        deadParticleCount++;
      }
    }

    for (var i = 0; i < deadParticleCount; i++) {
      var p = this.createNewParticle();
      this.particles.push(p);
    }
  };
}

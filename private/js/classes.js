
let particles = [];

function setup() {
  createCanvas(900, 600);
  
  
}

function draw() {
  background('antiquewhite');
  particles.forEach((b) => b.move());
  particles.forEach((b) => b.show());
  particles.forEach((b) => b.bounce());
}

function mousePressed() {
  particles.push(new Confetti(mouseX, mouseY));
}

class Particle {
  
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.v_y = random(1,5);
    this.v_x = random(1, 5);
    this.dir_x = random() < 0.5 ? 1 : -1;
    this.dir_y = random() < 0.5 ? 1 : -1;
  }
  
  move() {
    this.x += this.v_x * this.dir_x;
    this.y += this.v_y * this.dir_y
  }
  
  bounce() {
    if (this.x > width || this.x < 0) this.dir_x *= -1;
    if (this.y > height || this.y < 0) this.dir_y *= -1;
  }
  
  show() {
    stroke('black');
    strokeWeight(3);
    noFill();
    circle(this.x, this.y, 24);
  }
}

class Confetti extends Particle {
  constructor(x, y) {
    super(x, y);
    this.r = 10;
    this.bright = random(255);
  }
  
  update() {
    super.update();
    this.r += random(-2, 2);
  }
  
  show() {
    strokeWeight(1);
    stroke(255);
    fill(this.bright);
    square(this.x, this.y, this.r);
  }
}
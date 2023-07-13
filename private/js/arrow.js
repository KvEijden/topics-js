

function setup() {
  createCanvas(600, 400);
  const c1 = new Counter(200, 500);
  c1.start();
  const c2 = new Counter(300, 600);
  c2.start();
  const c3 = new Counter(100, 400);
  c3.start();
}

function draw() {
  background(0);
  // c1.countIt();
}
  

class Counter {
  constructor(start, wait) {
    this.count = start;
    this.wait = wait;
    this.p = createP('');
  }
  
  start() {
    
    setInterval(() => this.countIt(), this.wait);
  }
  
  countIt() {
    this.count++
    this.p.html(this.count);
  }
}
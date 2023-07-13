function sing(cb) {
  print('la la la la la');
  if ( cb instanceof Function) {
    cb();
  }
}

function multi(fac) {
  return (x) => x * fac;
}

function setup() {
  // sing(() => print('meow meow'));
  let doubler = multi(2);
  let tripler = multi(3);
  print(doubler(4));
  print(tripler(4));
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
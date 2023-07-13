

function setup() {
  let vars = new Array(100);
  vars[0] = 12345;
  vars.fill(0);
  // print(vars);
  vars = vars.map(random);
  // print(vars);
  
  vars = [9, 1, 8, 2, 47, 63, 6, 4, 5];
  let reduce_result = vars.reduce((acc, val) => acc + val, 10);
  // print(reduce_result);
  
  let biggest = vars.reduce((acc, val) => val > acc ? val : acc);
  // print(biggest);
  
  let even = vars.filter(val => val % 2 == 0);
  // print(even);
  let sentence = "It was a dark and stormy night";
  let words = sentence.split(/\W+/).filter(word => word.length > 0);
  words.sort((a,b) => a.length - b.length);
  print(words);
  
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
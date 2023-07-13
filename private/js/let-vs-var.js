function setup() {
  print(x); // undefined
  // print(i); // error
  var x = 100;
  for(let i = 0; i < 10; i++) {
    print(i)  // 0 ... 10
  }
  // print(i)  // error
  print(x); // 100
}
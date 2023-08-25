

function setup() {
  noCanvas();
  noLoop();
  delay(1000)
    .then((data) => createP(data))
    .catch(err => console.error(err));
}

function delay(time) {
  return new Promise((resolve, reject) => {
    if (isNaN(time)) {
      reject(new Error('delay requires a valid number'));
    } else {
      setTimeout(() => {resolve('hello after a while');}, time);
    }
  })
}
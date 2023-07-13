
// Daniel Shiffman
// http://codingtra.in

// Promises Part 1
// Video: https://youtu.be/QO4NXhWo_NM

// To run this sketch, replace ADD_YOUR_KEY 
// in the urls below, with your own API key.

// Giphy API: https://developers.giphy.com/
// https://api.giphy.com/v1/gifs/search?api_key=&q=&limit=25&offset=0&rating=g&lang=en&bundle// =messaging_non_clips
// Giphy API Tutorial: https://youtu.be/mj8_w11MvH8
// Wordnik API: https://developer.wordnik.com/
// Wordnik API Tutorial: https://youtu.be/YsgdUaOrFnQ
/*
const wordnikAPI =
  'https://api.wordnik.com/v4/words.json/randomWord?&minLength=5&maxLength=-1&api_key=ADD_YOUR_KEY';
const giphyAPI =
  'https://api.giphy.com/v1/gifs/search?rating=PG&api_key=Xtr0PeyQ6O5xJ1ZWBWlp4SIzG4yDL5Qx&q=';

function setup() {
  noCanvas();
  fetch(wordnikAPI)
    .then(response => response.json())
    .then(json => {
      createP(json.word);
      return fetch(giphyAPI + json.word);
    })
    .then(response => response.json())
    .then(json => {
      console.log(json)
      createImg(json.data[0].images['fixed_height_small'].url);
    })
    .catch(err => console.log(err));
}
*/
function setup() {
  noCanvas();
  delay(10000)
    .then(() => createP('Hello'))
    .catch((err) => console.error(err));
  
}

function delay(timeout) {
  return new Promise((resolve, reject) => {
    if(isNaN(timeout)) {
      reject(new Error('delay requires a valid number.'));
    } else {
     setTimeout(resolve, timeout);
    }
  });
}

function sayHello() {
  createP('Hello');
}
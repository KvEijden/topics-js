
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

const wordnikAPI =
  'https://api.wordnik.com/v4/words.json/randomWord?&minLength=5&maxLength=-1&api_key=6hy0jc0xwp55m9mninzcmtaij9ux7quqphio1b06x0kpa0zfb';
const giphyAPI =
  'https://api.giphy.com/v1/gifs/search?rating=PG&api_key=Xtr0PeyQ6O5xJ1ZWBWlp4SIzG4yDL5Qx&q=';

function setup() {
  noCanvas();
  wordGiph()
    .then(results =>  {
      createP(results.word);
      createImg(results.img);
    })
    .catch(err => console.log(err));
}

async function wordGiph() {
  let response1 = await fetch(wordnikAPI);
  let json1 = await response1.json();
  let word = json1.word;
  
  let response2 = await fetch(giphyAPI + word);
  let json2 = await response2.json();
  let img_url = json2.data[0].images['fixed_height_small'].url;
  
  return {word: word, img: img_url};
  
  /*
  fetch(wordnikAPI)
    .then(response => {
      return response.json();
    })
    .then(json => {
      createP(json.word);
      return fetch(giphyAPI + json.word);
    })
    .then(response => {
      return response.json();
    })
    .then(json => {
      createImg(json.data[0].images['fixed_height_small'].url);
    })
    .catch(err => console.log(err));
    */
}
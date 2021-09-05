// Marche pas vu que c'est du NodeJs

const fs = require('fs');
const ytdl = require('ytdl-core');

function dinaConvert() {
    ytdl('http://www.youtube.com/watch?v=aqz-KE-bpKQ')
  .pipe(fs.createWriteStream('video.mp4'));
  console.log("Salut");
}

dinaConvert();
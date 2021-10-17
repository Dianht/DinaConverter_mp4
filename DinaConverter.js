const express = require("express");
const app = express();
const fs = require('fs');
const ytdl = require('ytdl-core')

app.use(express.json());
app.use(express.static("public"));

app.get("/", function(request, response) {
    response.sendFile(__dirname + "/index.html");
});

app.get("/style.css", function(request, response) {
    response.sendFile(__dirname + "/style.css");
});

app.get("/Images/Background.jpg", function(request, response) {
    response.sendFile(__dirname + "/Images/Background.jpg");
});

app.get("/script.js", function(request, response) {
    response.sendFile(__dirname + "/script.js");
});

app.get("/download", async function(request, response) {
    //Retrieves the link and sends the ydtl module
    const videoURL = request.query.videoURL;
    ytdl(videoURL).pipe(fs.createWriteStream('video.mp4'));
});

app.listen((process.env.PORT || 5000), function(){
    console.log('listening on *:5000');
  });
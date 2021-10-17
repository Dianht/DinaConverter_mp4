// Marche pas vu que c'est du NodeJs
import express, { json, static } from "express";
const app = express();
import { createWriteStream } from 'fs';
import ytdl from 'ytdl-core';

app.use(json());
app.use(static("public"));

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
    ytdl(videoURL).pipe(createWriteStream('video.mp4'));
});

app.listen((process.env.PORT || 5000), function(){
    console.log('listening on *:5000');
  });
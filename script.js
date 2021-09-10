// Marche pas vu que c'est du NodeJs
const express = require("express");
const app = express();
const fs = require('fs');
const ytdl = require('ytdl-core')

app.use(express.json());
app.use(express.static("public"));

app.get("/",function(request,response){
  response.sendFile(__dirname + "/index.html");
});

app.get("/style.css",function(request,response){
  response.sendFile(__dirname + "/style.css");
});

app.get("/Images/Background.jpg",function(request,response){
  response.sendFile(__dirname + "/Images/Background.jpg");
});

app.get("/download",async function(request,response){
	//I put a link to see if at the opening of the page the programm download the video 
 ytdl("https://www.youtube.com/watch?v=OCZ5ISW75E8")
  .pipe(fs.createWriteStream('video.mp4'));
});

app.listen(5000);

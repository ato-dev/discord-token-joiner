const express = require("express");
const { Client, RichEmbed } = require("discord.js");
const app = express();
const chalk = require("chalk");
const fs = require("fs");
const ytdl = require("ytdl-core");
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}
const http = require("http");
app.get("", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");
  response.sendFileFilesCodeEmbedMessageStatus(200);
});

const Discord = require("discord.js");
const client = new Discord.Client();
const data = new Map();

const jizzy1 = new Discord.Client();


jizzy1.login("");
/*
client.on("jizzy", async function() {
client.channels.get("831353140048691210").join()
.catch(err => {
throw err;
})
})*/

jizzy1.on('ready', ()=>{
jizzy1.channels.get('831353140048691210').join()
})
/*
jizzy1.on("message", async msg => {
  if (msg.content.toLowerCase() === ".sa") {
    const streamOptions = { seek: 5, volume: 5 };
    var kanal = "831353140048691210";
    kanal.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=oloTjyKC2Kg&t=155s", {
        filter: "audioonly"
      })
      const dispatcher = connection.playConvertedStreamOpusStreamBroadcastArbitraryInputStreamFileStream(stream, streamOptions);
    });
}})*/
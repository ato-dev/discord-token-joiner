const Discord = require("discord.js");

const token1 = new Discord.Client();
token1.login("");
token1.on('ready', ()=>{
token1.channels.get('channelid').join()
}
          
const token2 = new Discord.Client();
token2.login("");
token2.on('ready', ()=>{
token2.channels.get('channelid').join()
} //duplicate this schema for every token...
          

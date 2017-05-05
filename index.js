//Set up Discord and Toaster (the bot)
const Discord = require("discord.js");
const toaster = new Discord.Client();

console.log("Working...");
var play = false;

//Tell the toaster what to do
toaster.on("message", (message) => {

    if((message.channel == "pingpong" && message.content == "Go Ahead 7719") || play) {
        play = true;
        message.channel.sendMessage("PING");
        message.channel.sendMessage("PONG");
    };

    if(message.content.toUpperCase() == "STOP") {
        play = false;
    }

})

//Log in Toaster
toaster.login("MzA5NzgzNTQ5ODU3NDk3MTAx.C-0cig.4uz87eFSH1GXRWC5GWWxpXMGttE");
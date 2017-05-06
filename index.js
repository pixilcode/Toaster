//Set up Discord and Toaster (the bot)
const Discord = require("discord.js");
const toaster = new Discord.Client();

console.log("Working...");
var play = false;

//Tell the toaster what to do
toaster.on("message", (message) => {

    if((message.channel.id == "309908769163313152" && message.content == "Go Ahead 7719") || play) {
        
        if(message.content == "Go Ahead 7719") message.delete(0);
        
        play = true;
        message.channel.sendMessage("PING :ping_pong:");
        message.channel.sendMessage("PONG :ping_pong:");
    };

    if(message.content.toUpperCase() == "STOP") {
        message.delete(0);
        play = false;
    }

})

//Log in Toaster
toaster.login("MzA5NzgzNTQ5ODU3NDk3MTAx.C-0cig.4uz87eFSH1GXRWC5GWWxpXMGttE");
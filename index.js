//Set up Discord and Toaster (the bot)
const Discord = require("discord.js");
const toaster = new Discord.Client();

console.log("Working...");

//Tell the toaster what to do
toaster.on("message", (message) => {

    if(message.channel == "pingpong" && message.content == "Go Ahead 7719") {
        message.channel.sendMessage("PONG");
        message.channel.sendMessage("PING");
    };

})

//Log in Toaster
toaster.login("MzA5NzgzNTQ5ODU3NDk3MTAx.C-0cig.4uz87eFSH1GXRWC5GWWxpXMGttE");
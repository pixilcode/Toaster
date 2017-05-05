//Set up Discord and Toaster (the bot)
const Discord = require("discord.js");
const toaster = new Discord.Client();

console.log("Working...");

//Tell the toaster what to do
toaster.on("message", (message) => {

    if(message.content.toUpperCase() == "PING") message.channel.sendMessage("PONG");
    
    message.reply("hello!");
    message.channel.sendMessage("PING");

})

//Log in Toaster
toaster.login("MzA5NzgzNTQ5ODU3NDk3MTAx.C-0cig.4uz87eFSH1GXRWC5GWWxpXMGttE");
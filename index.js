//Set up Discord and Toaster (the bot)
const Discord = require("discord.js");
const toaster = new Discord.Client();

console.log("Working...");
var play = false;

const begin = "$"

//Tell the toaster what to do
toaster.on("message", function(message) {

    if(message.channel.id == "309908769163313152") {

        //If the phrase is right, start the game
        if(message.content.toUpperCase() == begin + "GO") {
            message.delete(0);
            play = true;
        }

        //If the phrase is "STOP", stop the game
        if(message.content.toUpperCase() == begin + "STOP") {
            message.delete(0);
            message.channel.sendMessage("STOPPING");
            play = false;
        }

        //If the game is going, play
        if(play) {
            message.channel.sendMessage("PING :ping_pong:");
            message.channel.sendMessage("PONG :ping_pong:");
        }

    } else if(message.channel.id == "258349006520844288") {

    }

});

//Log in Toaster
toaster.login("MzA5NzgzNTQ5ODU3NDk3MTAx.C-0cig.4uz87eFSH1GXRWC5GWWxpXMGttE");
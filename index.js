//Set up Discord and Toaster (the bot)
const Discord = require("discord.js");
const toaster = new Discord.Client();

console.log("Working...");
var play = false;

const begin = "$";

const commands = [[begin + "go", "Start the game of ping-pong"], [begin + "stop", "Stop the game of ping-pong"], [begin + "roll [#]", "Roll a [#]-sided die"]];

//Tell the toaster what to do
toaster.on("message", function(message) {

    //#pingpong channel
    if(message.channel.id == "309908769163313152") {

        //If the phrase is "go", start the game
        if(message.content == commands[0][0] && !(message.client.user.bot)) {
            message.delete(0);
            play = true;
        }

        //If the phrase is "stop", stop the game
        if(message.content == commands[1][0] && !(message.client.user.bot)) {
            message.delete(0);
            message.channel.sendMessage(":octagonal_sign: STOPPING :octagonal_sign:");
            play = false;
        }

        //If the game is going, play
        if(play) {
            message.channel.sendMessage("PING :ping_pong:");
            message.channel.sendMessage("PONG :ping_pong:");
        }
    //#general channel
    } else if(message.channel.id == "258349006520844288") {

    }

    //Commands in all channels
    //If the phrase is "roll [#]", return a random number between 1 and the number
    if(message.content.substring(0, 5) == commands[2][0].substring(0, 5)) {
        var rand =  Math.ceil(Math.random() * Number(message.content.substring(6, message.content.length)));
        message.channel.sendMessage("" + rand);
    }

    //If the phrase is "help", display the help text
    if(message.content == "$help") {
        for(var i = 0; i < commands.length; i++) {
            var commandDescription = commands[i][0] + "  :  " + commands[i][1];
            message.channel.sendMessage(commandDescription);
        }
    }

});

//Log in Toaster
toaster.login("MzA5NzgzNTQ5ODU3NDk3MTAx.C-0cig.4uz87eFSH1GXRWC5GWWxpXMGttE");
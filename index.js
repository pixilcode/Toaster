//Declare functions
function isCommand(str, message) {
    if(message.author.bot) {
        return false;
    } else {
        return message.content.startsWith(begin + str);
    }
}

//Set up Discord and Toaster (the bot)
const Discord = require("discord.js");
const toaster = new Discord.Client();

var play = false;

const begin = "~";

const commands = [[begin + "hello", "Say hello"], [begin + "go", "Start the game of ping-pong"], [begin + "stop", "Stop the game of ping-pong"], [begin + "roll [#]", "Roll a [#]-sided die"]];

toaster.on("ready", function() {
    console.log("Working...");
});

//Tell the toaster what to do
toaster.on("message", function(message) {

    var args = message.content.split(/[ ]+/);

    //#pingpong channel
    if(message.channel.name == "pingpong") {

        //If the phrase is "go", start the game
        if(isCommand("go", message)) {
            play = true;
        }

        //If the phrase is "stop", stop the game
        if(isCommand("stop", message)) {
            message.channel.sendMessage(":octagonal_sign: STOPPING :octagonal_sign:");
            play = false;
        }

        //If the game is going, play
        if(play) {
            message.channel.sendMessage("PING :ping_pong:");
            message.channel.sendMessage("PONG :ping_pong:");
        }
    //#general channel
    } else if(message.channel.name == "general") {

        //If the phrase is "hello", respond
        if(isCommand("hello", message)) {
            message.channel.sendMessage("Hello, " + message.author.username);
        }
    
    //#games
    } else if(message.channel.name == "games") {
        
        //If the phrase is "hi", respond
        if(isCommand("hi", message)) {
            message.channel.sendMessage("HI!");
        }

    }

    //Commands in all channels
    //If the phrase is "roll [#]", return a random number between 1 and the number
    if(isCommand("roll", message)) {
        var rand =  Math.ceil(Math.random() * Number(args[1]));
        message.channel.sendMessage("" + rand);
    }

    //If the phrase is "help", display the help text
    if(isCommand("help", message)) {
        for(var i = 0; i < commands.length; i++) {
            var commandDescription = commands[i][0] + "  :  " + commands[i][1];
            message.channel.sendMessage(commandDescription);
        }

    }

});

//Log in Toaster
toaster.login("MzA5NzgzNTQ5ODU3NDk3MTAx.C-0cig.4uz87eFSH1GXRWC5GWWxpXMGttE");
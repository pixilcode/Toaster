//Declare functions
function isCommand(str, message) {
    
    //If the message comes from a bot, don't count it
    if(message.author.bot) {
        return false;
    } else {
        //Tell whether the command is the one asked for
        return message.content.startsWith(begin + str);
    }

}

function isValidChoice(choice, choiceList) {
    
    //Cycle through each choice
    for(var i = 0; i < choiceList.length; i++) {
        
        //If the choice is in choiceList, return true
        if(choice == choiceList[i]) {
            return true;
        }
    }

    return false;

}

function getRPSMove() {
    
    //Get a random number
    var optionNum = Math.floor(Math.random() * 3);
    
    //Get the coresponding option
    return options[optionNum];

}

//Set up Discord and Toaster (the bot)
const Discord = require("discord.js");
const toaster = new Discord.Client();

//Constants
const begin = "~";
const options = ["ROCK", "PAPER", "SCISSORS"];
const commands = [[begin + "hello", "Say hello"], [begin + "go", "Start the game of ping-pong"], [begin + "stop", "Stop the game of ping-pong"], [begin + "roll [#]", "Roll a [#]-sided die"]];

//Variables
var play = false;

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
        
        if(isCommand("rps", message)) {
            var player = args[1];
            if(isValidChoice(player, choices)) {
                var computer = getRPSMove();
                var winner = compare(player, computer);

                //Get username of winner
                var username = "";
                if(winner == "PLAYER") {
                    username = message.author.username;
                } else {
                    username = "Toaster";
                }

                message.channel.sendMessage(computer);
                message.channel.sendMessage("The winner is " + winner);
            }
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
const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("+")

bot.on('ready', function() {
    bot.user.setGame("Commande: +help");
    console.log("Connected")

});

bot.login('NTY0NDQ5NDA2MzU5Njk5NDU2.XKxx_w.bgdKL_sXyzrpoo8TRnVy9pzmHsQ');

bot.on('message', message => {
    if(message.content === prefix + "help"){
        message.channel.sendMessage("List Des commandes: \n **``` help: Affiche toute les commandes \n youtube: Chaîne Youtube du créateur \n discord: Vous donne une invitations discord ```**");
    }
    
    if(message.content === "Salut"){
       message.reply("Salut");
       console.log("Commande Salut effectué");

    }

    if(message.content === prefix + "youtube"){
        message.channel.sendMessage("Voici la chaîne Youtube du Créateur : https://www.youtube.com/channel/UCXo4JXwUdGCr8PdsaAOimzQ?view_as=subscriber");

    }

});


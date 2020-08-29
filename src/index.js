// Local
var scheduler = require('./mods/task');
const { token, guildId } = require('./bin/config.json');
//External
const Discord = require('discord.js');


const client = new Discord.Client();

client.login(token);

client.on('ready', () => {
    console.log(`${client.user.tag} is ready!`);
    scheduler.schedTask(client.guilds.cache.get(guildId));
})
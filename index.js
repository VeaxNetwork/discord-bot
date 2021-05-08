const fs = require('fs');

const Discord = require('discord.js');
const client = new Discord.Client();

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

client.on("guildMemberAdd", member => {
})

client.on('message', async message => {
	const syncChannel = '831368542094884864';
	if (message.channel.id === syncChannel) {
			setTimeout(function(){
			   message.delete()
			}, 2);
		  }
  });

  client.on('ready', async () => {
	client.user.setActivity("veax.rip", {type: "PLAYING"});
  })

fs.readdir('./events/', (err, files) => {
	const eventHandler = require('./handler/eventHandler.js');
	eventHandler(err, files, client);
});
fs.readdir('./commands/', (err, files) => {
	const commandHandler = require('./handler/commandHandler.js');
	commandHandler(err, files, client);
});

client.login("ODEzMjk3NTkzOTQ1MDMwNjY3.YDNQaA.xnl3v7SYx72GwIw0wXGVSZefOyM");
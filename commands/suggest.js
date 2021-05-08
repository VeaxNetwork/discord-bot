const Discord = require("discord.js")

module.exports = {
	name: 'suggest',
	description: 'suggest a servior',
	aliases: ["suggestion"],
	guildOnly: false,
	args:false,
	usage: '',
	execute:(message, args, client) => {
		let sugerencia = args.slice(0).join(' ');
        let canal = client.channels.cache.get('834172853888352276');
        if(!sugerencia) return message.channel.send("Please put a valid suggestion!")
            const embed = new Discord.MessageEmbed()
            .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL())
            .setColor("GREEN")
            .setDescription(`${sugerencia}`)
            .setThumbnail(client.user.displayAvatarURL())
            message.reply("Suggestion successfully sent!").then(msg => msg.delete({timeout: 5000}));
            message.author.send("Your suggestion will be reviewed by the community. Thank you! :heart:");
    
            canal.send(embed).then(m => {
		m.react('<:yes_suggestion:834174231776460810>')
                m.react('<:no_suggestion:834174231805165630>')
             })
             message.delete()
    },
    };
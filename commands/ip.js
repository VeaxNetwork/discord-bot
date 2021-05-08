module.exports = {
	name: 'ip',
	description: 'IP del servior',
	aliases: [],
	guildOnly: false,
	args: false,
	usage: '',
	execute:(message, args, client) => {
		message.channel.send("**IP**: veax.rip")
	},
};
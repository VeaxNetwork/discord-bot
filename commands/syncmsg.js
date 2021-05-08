module.exports = {
	name: 'syncmsg',
	description: 'Como sync',
	aliases: ["syncmessage"],
	guildOnly: false,
	args: false,
	usage: '',
	execute:(message, args, client) => {
        message.delete()
            message.channel.send("**SYNC YOUR ACCOUNT WITH DISCORD** :computer:\n\n> 1. Execute /sync in one of our Hubs.\n> 2. Send !verify <username> <code> (Example: !sync Jxime_ SA135)\n> 3. Enjoy your discord rank :smile:")
	},
};
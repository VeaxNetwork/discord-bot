const Discord = require("discord.js")

module.exports = {
    name: 'promote',
    description: 'Promote a staff',
    aliases: [],
    guildOnly: false,
    args: false,
    usage: '',
    execute:(message, args, client) => {

        const user = message.mentions.users.first();
        const oldrank = args[1]
        const newrank = args[2]

        message.delete()

        if (!message.member.hasPermission('ADMINISTRATOR', { checkAdmin: true, checkOwner: true })) {
            return message.channel.send("No permission.")
        } else {

            const embed = new Discord.MessageEmbed()
                .setTitle("STAFF PROMOTED")
                .setColor("GREEN")
                .setThumbnail(client.user.displayAvatarURL())
                .addField("Old Rank", oldrank)
                .addField("New Rank", newrank)
                .setFooter("Want to be part of our staff? Apply at forms.gle/T4hQCgUnQchMMPyD8")
            message.channel.send(embed)
        }
    },
};
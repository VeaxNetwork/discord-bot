const Discord = require("discord.js")

module.exports = {
    name: 'resign',
    description: 'Resign a staff',
    aliases: [],
    guildOnly: false,
    args: false,
    usage: '',
    execute:(message, args, client) => {

        const user = message.mentions.users.first();
        const rank = args[1]
        message.delete()

        if (!message.member.hasPermission('ADMINISTRATOR', { checkAdmin: true, checkOwner: true })) {
            return message.channel.send("No permission.")
        } else {

            const embed = new Discord.MessageEmbed()
                .setTitle("STAFF RESIGNED")
                .setThumbnail(client.user.displayAvatarURL())
                .setColor("YELLOW")
                .addField("Old Rank", rank)
                .addField("New Rank", "User")
                .setFooter("Want to be part of our staff? Apply at forms.gle/T4hQCgUnQchMMPyD8")

            message.channel.send(embed)
        }
    },
};
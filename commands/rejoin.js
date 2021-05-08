const Discord = require("discord.js")

module.exports = {
    name: 'rejoin',
    description: 'Rejoin a staff',
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
                .setTitle("STAFF REJOINED")
                .setColor("#54D63A")
                .setThumbnail(client.user.displayAvatarURL())
                .addField("Rank", rank)
                .setFooter("Want to be part of our staff? Apply at forms.gle/T4hQCgUnQchMMPyD8")
            message.channel.send(embed)
        }
    },
};
const Discord = require("discord.js")

module.exports = {
    name: 'blacklist',
    description: 'blacklist a staff',
    aliases: [],
    guildOnly: false,
    args: false,
    usage: '',
    execute:(message, args, client) => {

        const user = message.mentions.users.first();
        message.delete()

        if (!message.member.hasPermission('ADMINISTRATOR', { checkAdmin: true, checkOwner: true })) {
            return message.channel.send("No permission.")
        } else {

            const embed = new Discord.MessageEmbed()
                .setTitle("STAFF BLACKLISTED")
                .setColor("#FF002E")
                .setThumbnail(client.user.displayAvatarURL())
                .setDescription(`${user}, ` + "happy holidays!" + " 😬")
                .setFooter("Want to be part of our staff? Apply at forms.gle/T4hQCgUnQchMMPyD8")
            message.channel.send(embed)
        }
    },
};
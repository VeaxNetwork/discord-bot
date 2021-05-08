module.exports = {
	name: 'roles',
	description: 'Roles',
	aliases: [],
	guildOnly: false,
	args: false,
	usage: '',
	execute:(message, args, client) => {
		message.delete()
		message.channel.send("__**EVENTOS**__\nReacciona a :one: para recibir alertas de KoTH\nReacciona a :two: para recibir alertas de Conquest\nReacciona a :three: para recibir alertas de Citadel\nReacciona a :four: para recibir alertas de otros Eventos\n__**OTROS**__\nReacciona a :key: para recibir alertas de KeyAlls\nReacciona a :page_facing_up: para recibir alertas de Staff Applies")
	},
};
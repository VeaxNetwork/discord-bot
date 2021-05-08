module.exports = {
	name: 'reporte',
	description: 'Pedir informacion sobre un reporte',
	aliases: [],
	guildOnly: false,
	args: false,
	usage: '',
	execute:(message, args, client) => {
		message.delete()
		message.channel.send("__**NECESITAMOS LA SIGUIENTE INFORMACIÓN**__\n\n> Nombre del reportado:\n> Modalidad:\n> Razón:\n> Pruebas:")
	},
};
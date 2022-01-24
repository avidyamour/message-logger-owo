const 
    Discord = require('discord.js'),
    chalk = require('chalk'),
    moment = require('moment'),
    bot = new Discord.Client(),

//JSON
    { userconfig, botconfig } = require('./config.json')


// LOGGER
bot.on("messageDelete", message => {
let guild = message.guild;
    if (message.author.bot) {
        return;
    }
    if (message.author.id === userconfig.id) { 
        return;
    }

var color = [
    "#F5FF60",
    "#607DFF"
]
var colorRdm = color[Math.floor(Math.random() * color.length)]

    if (message.channel.type === "dm") {
        console.log(chalk.white(`   ${chalk.redBright(`[${moment().locale('fr').format('LT')}]`)} {Supprimé > MP} ${chalk.redBright(`(${message.author.tag})`)} : ${chalk.redBright(`${message.content}`)}`))
    if (botconfig.autosnipe === "off") {
        return;
    } else
message.channel.send(new Discord.RichEmbed()
                    .setAuthor('Auto Snipe', message.author.avatarURL)
                    .setDescription(message.content)
                    .setColor(colorRdm)
                    .setFooter(botconfig.footer))
    } else if (message.channel.guild) {
        console.log(chalk.white(`   ${chalk.redBright(`[${moment().locale('fr').format('LT')}]`)} {Supprimé > ${chalk.red(`${guild.name}`)}} ${chalk.redBright(`(${message.author.tag})`)} : ${chalk.redBright(`${message.content}`)}`))
    } else
        console.log(chalk.white(`   ${chalk.redBright(`[${moment().locale('fr').format('LT')}]`)} {Supprimé > Groupe} ${chalk.redBright(`(${message.author.tag})`)} : ${chalk.redBright(`${message.content}`)}`))
})
bot.on("messageUpdate", message => {
    let guild = message.guild;
    if (message.author.bot) {
        return;
    }
    if (message.author.id === userconfig.id) {
        return;
    }
    if (message.channel.type === "dm") {
        console.log(chalk.white(`   ${chalk.redBright(`[${moment().locale('fr').format('LT')}]`)} {Modifié > DM} ${chalk.redBright(`(${message.author.tag})`)} : ${chalk.redBright(`${message.content}`)}`))
    } else if (message.channel.guild) {
        console.log(chalk.white(`   ${chalk.redBright(`[${moment().locale('fr').format('LT')}]`)} {Modifié > ${chalk.red(`${guild.name}`)}} ${chalk.redBright(`(${message.author.tag})`)} : ${chalk.redBright(`${message.content}`)}`))
    } else
        console.log(chalk.white(`   ${chalk.redBright(`[${moment().locale('fr').format('LT')}]`)} {Modifié > Groupe} ${chalk.redBright(`(${message.author.tag})`)} : ${chalk.redBright(`${message.content}`)}`))
})



bot.on('guildCreate', guild => {
    console.log(chalk.white(`   ${chalk.redBright(`[${moment().locale('fr').format('LT')}]`)} {Rejoins} ${chalk.redBright('Vous avez rejoint le serveur')} : ${chalk.redBright(`${guild.name}`)}`))
})
bot.on('guildDelete', guild => {
    console.log(chalk.white(`   ${chalk.redBright(`[${moment().locale('fr').format('LT')}]`)} {Quitté} ${chalk.redBright('Vous avez quitté le serveur')} : ${chalk.redBright(`${guild.name}`)}`))
})



bot.on('message', message => {
    if (message.author.id === userconfig.id) return;
    if (message.content.includes('@everyone') || message.content.includes(`<@!${userconfig.id}>`) || message.content.includes('@here')) {

let guild = message.guild;

    if (!guild) {
    console.log(chalk.white(`   ${chalk.redBright(`[${moment().locale('fr').format('LT')}]`)} {Ping > DM} ${chalk.redBright(`(${message.author.tag})`)} : ${chalk.redBright(`${message.content}`)}`))
        return;
    }
    console.log(chalk.white(`   ${chalk.redBright(`[${moment().locale('fr').format('LT')}]`)} {Ping > ${chalk.red(`${guild.name}`)}} ${chalk.redBright(`(${message.author.tag})`)} : ${chalk.redBright(`${message.content}`)}`))
    }
})

console.log(`   [Rappel] Commande Dispo : \n   ${userconfig.prefix}clearconsole > Clear la console \n   ${userconfig.prefix}reset > Restart le Logger`) 

setTimeout(() => {
    console.clear()
}, 1000)

bot.login(userconfig.token)
bot.once('ready', () => {    
    setTimeout(() => {
    console.log(`\n   ${chalk.redBright('ID')} : ${chalk.white(userconfig.id)}\n   ${chalk.redBright('Pseudo')} : ${chalk.white(bot.user.username)} \n                                                    ${chalk.redBright(`${"Mirror's Logger"}`)} \n   ${chalk.redBright('Amis')} : ${bot.user.friends.size} \n   ${chalk.redBright('Serveurs')} : ${bot.guilds.size}`)
    console.log('   ──────────────────────────────────────────────────────────────────────────────────────────────────────────────────')                                                      
    }, 2000)
})

setInterval(() => {
    console.log('   ──────────────────────────────────────────────────────────────────────────────────────────────────────────────────')   
    console.log(`   [Rappel] Commande Dispo : \n   ${userconfig.prefix}clearconsole > Clear la console \n   ${userconfig.prefix}reset > Restart le Logger`) 
    console.log(``)
    console.log('   ──────────────────────────────────────────────────────────────────────────────────────────────────────────────────')   
    }, 1800000000000);

bot.on('message', async (message) => {
    if (message.author.id !== userconfig.id) {
        return;
    }
    let command = message.content.split(" ")[0]
    if (!command.startsWith(userconfig.prefix)) {
        return;
    }
    command = command.slice(userconfig.prefix.length);
    let args = message.content.split(" ").slice(1);

    const RPC = require('discord-rpc');
    const client = new RPC.Client({ transport: "ipc" });
        client.on('ready', () => {
            client.request('SET_ACTIVITY', {
                    pid: process.pid,
                    activity : {
                        details : selflogin.pseudo,
                        assets : {
                            large_image : "aersslarge",
                            large_text : "Mirror's Logger"
                        },
                        buttons : [{ label : "Install", url: "https://mediafire/" }]
                    }
                })
        })
        message.delete()
        client.login({ clientId : "871341906053959730" })

    if (command == "cc" || command == "clearconsole") {
        console.clear()
        setTimeout(() => {
            console.log(`\n   ${chalk.redBright('ID')} : ${chalk.white(userconfig.id)}\n   ${chalk.redBright('Pseudo')} : ${chalk.white(bot.user.username)} \n                                                    ${chalk.redBright(`${"Mirror's Logger"}`)} \n   ${chalk.redBright('Amis')} : ${bot.user.friends.size} \n   ${chalk.redBright('Serveurs')} : ${bot.guilds.size}`)
            console.log('   ──────────────────────────────────────────────────────────────────────────────────────────────────────────────────')                                                      
        }, 2000)
    message.delete()
    }

    if (command == "reset") {
        console.clear()
        setTimeout(() => {
        process.exit()
        }, 1000)
    message.delete()
    }
})

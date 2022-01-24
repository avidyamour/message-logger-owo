const
    Discord = require('discord.js'),
    chalk = require('chalk'),
    moment = require('moment'),
    bot = new Discord.Client(),

// JSON
    { user_1, user_2, blacklist } = require('./config.json');

//

// ~~ Début du code :) ~~
bot.on("messageDelete", message => {
    let guild = message.guild;
        if (message.author.bot) {
            return;
        }
        if (message.author.id === user_2.id) {
            return;
        }

    var color = [
        '#3498DB',
        '#5DADE2',
        '#85C1E9',
        '#AED6F1',
        '#D6EAF8'
    ]
    var rdmColor = color[Math.floor(Math.random() * color.length)]

        if (message.channel.type === 'dm') {
            console.log(chalk.white(`   ${chalk.blueBright(`[${moment().locale('fr').format('LT')}]`)} {Message Supprimé : DM} ${chalk.blueBright(`(${message.author.tag})`)} : ${chalk.blueBright(`${message.content}`)}`))
        if (user_2.autosnipe === 'off') {
            return;
        } else
            message.channel.send(new Discord.RichEmbed()
                                .setAuthor(message.author.username)
                                .setDescription(message.content)
                                .setColor(rdmColor)
                                .setFooter(user_2.footer, message.author.avatarURL))
        } else if (message.channel.guild) {
            console.log(chalk.white(`   ${chalk.blueBright(`[${moment().locale('fr').format('LT')}]`)} {Message Supprimé : ${chalk.blue(`${guild.name}`)}} ${chalk.blueBright(`(${message.author.tag})`)} : ${chalk.blueBright(`${message.content}`)}`))
        } else 
            console.log(chalk.white(`   ${chalk.blueBright(`[${moment().locale('fr').format('LT')}]`)} {Message Supprimé : Groupe} ${chalk.blueBright(`(${message.author.tag})`)} : ${chalk.blueBright(`${message.content}`)}`))
})

bot.on('messageUpdate', message => {
    let guild = message.guild;
        if (message.author.bot) {
            return;
        }
        if (message.author.id === user_2.id) {
            return;
        }
        if (message.channel.type === "dm") {
            console.log(chalk.white(`   ${chalk.blueBright(`[${moment().locale('fr').format('LT')}]`)} {Message Modifié : DM} ${chalk.blueBright(`(${message.author.tag})`)} : ${chalk.blueBright(`${message.content}`)}`))
        } else if (message.channel.guild) {
            console.log(chalk.white(`   ${chalk.blueBright(`[${moment().locale('fr').format('LT')}]`)} {Message Modifié > ${chalk.blue(`${guild.name}`)}} ${chalk.blueBright(`(${message.author.tag})`)} : ${chalk.blueBright(`${message.content}`)}`))
        } else
            console.log(chalk.white(`   ${chalk.blueBright(`[${moment().locale('fr').format('LT')}]`)} {Message Modifié : Groupe} ${chalk.blueBright(`(${message.author.tag})`)} : ${chalk.blueBright(`${message.content}`)}`))
})          
            console.log(`   [Rappel] Commande Dispo : \n   ${user_1.prefix}cc : Clear la console \n   ${user_1.prefix}reset > Restart le Logger`)
            setTimeout(() => {
                console.clear()
            }, 1000)

bot.login(user_1.token)
bot.on('ready', () => {
            setTimeout(() => {
                console.log(`\n   ${chalk.blueBright('ID')} : ${chalk.white(user_1.id)}\n   ${chalk.blueBright('Pseudo')} : ${chalk.white(bot.user.username)}${chalk.blue('#')}${chalk.blueBright(bot.user.discriminator)} \n                                                       ${chalk.blueBright(`${"Ice Logger"}`)} \n   ${chalk.blueBright('Amis')} : ${bot.user.friends.size} \n   ${chalk.blueBright('Serveurs')} : ${bot.guilds.size}`)
                console.log('   ──────────────────────────────────────────────────────────────────────────────────────────────────────────────────')                                                      
            }, 2000)
})

            setInterval(() => {
                console.log('   ──────────────────────────────────────────────────────────────────────────────────────────────────────────────────')   
                console.log(`   [Rappel] Commande Disponible : \n   ${user_1.prefix}cc : Clear la console \n   ${user_1.prefix}reset : Restart le Logger`) 
                console.log('   ──────────────────────────────────────────────────────────────────────────────────────────────────────────────────')  
                console.log(`   [Rappel] Vos Paramètres : \n   Activés ; Autosnipe : ${user_2.autosnipe} \n   Désactivés : ...`) 
                console.log('   ──────────────────────────────────────────────────────────────────────────────────────────────────────────────────')   
            }, 120000);

bot.on('message', async (message) => {
        if (message.author.id !== user_1.id) {
            return;
        }
    let command = message.content.split(" ")[0]
        if (!command.startsWith(user_1.prefix)) {
            return;
        }
        command = command.slice(user_1.prefix.length);
    let args = message.command.split(" ").slice(1);

        if (command == "cc" || command == "clearconsole") {
                console.clear()
            setTimeout(() => {
            console.log(`\n   ${chalk.blueBright('ID')} : ${chalk.white(user_1.id)}\n   ${chalk.blueBright('Pseudo')} : ${chalk.white(bot.user.username)} \n                                                       ${chalk.blueBright(`${"Ice Logger"}`)} \n   ${chalk.blueBright('Amis')} : ${bot.user.friends.size} \n   ${chalk.blueBright('Serveurs')} : ${bot.guilds.size}`)
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
// ~~ Fin du code ): ~~
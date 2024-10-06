const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let des = `*Hey...👋 I am Suhas Pathsindu.*\n\n *SUHAS-MD Is Online Now* 👊\n\n*🌀 Owner* - SUHAS-MD\n\n*💫 Owner Number* 94774132871\n\n*Very Simple WhatsApp Bot🤖\n\n_Type To *.menu* Get Commands👾_\n\n*🧬 Don't Forget To Subscibe My YouTube Channel*\n\nwww.youtube.com/@suhasbro\n\n*🧬 Follow Your WhatsApp Channel* https://www.whatsapp.com/channel/0029VagKNUe96H4IdMbr9f2o\n\n\n_🔮MADE BY SUHAS-BRO🔮_`
return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption: des},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})

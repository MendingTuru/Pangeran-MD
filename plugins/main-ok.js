let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/ec26801072b1794c752a9.png', m, { packname: "zifabotz", author: "@rozi" })
}

handler.customPrefix = /^(ok)$/i
handler.command = new RegExp

module.exports = handler

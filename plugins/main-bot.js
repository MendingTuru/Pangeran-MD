let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/5fc650798a93b835ef7e9.png', m, { packname: "zifabotz", author: "@rozi" })
}

handler.customPrefix = /^(bot|woi|Cok|ngab|tod|bang|hai)$/i
handler.command = new RegExp

module.exports = handler

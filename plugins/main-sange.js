let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/298c47c103f0bca3c1369.png', m, { packname: "zifabotz", author: "@rozi" })
}

handler.customPrefix = /^(kontol|ngentod|ngentot|memek|pepek|peler)$/i
handler.command = new RegExp

module.exports = handler

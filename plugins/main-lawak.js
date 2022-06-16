let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/9e5730b4ebb55d30f7470.png', m, { packname: "zifabotz", author: "@rozi" })
}

handler.customPrefix = /^(wk|wkwk|wkwkwk|lucu|ngakak)$/i
handler.command = new RegExp

module.exports = handler

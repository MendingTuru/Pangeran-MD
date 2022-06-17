let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/3e49a66125d766426ee5f.png', m, { packname: "zifabotz", author: "@rozi" })
}

handler.customPrefix = /^(wk|wkwk|wkwkwk|wkwkwkwkwk|lucu|ngakak|ngabrut|lawak|lawack)$/i
handler.command = new RegExp

module.exports = handler

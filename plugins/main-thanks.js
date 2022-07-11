let handler = async (m, { conn, text, usedPrefix, command }) => {
let name = await conn.getName(m.sender)
  let wm = global.wm
pangeran = {
    key : {
  remoteJid: 'status@broadcast',
  participant : '0@s.whatsapp.net'
    },
  message: { 
  "extendedTextMessage": {
  "text": '*Sama-Sama*',
  "title": wm,
  'jpegThumbnail': 'https://telegra.ph/file/20509b31b6e05ff999daa.jpg',
        }
       } 
     }
conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/06a27a93b66f63a5a067e.jpg', pangeran, { packname: "Koko-MD", author: "@kokopangeran_" })
}

handler.customPrefix = /^(Terima Kasih|Thanks|tq|makasih)$/i
handler.command = new RegExp

module.exports = handler

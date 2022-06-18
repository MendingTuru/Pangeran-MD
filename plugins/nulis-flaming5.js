let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Text\nContoh : .flaming5 ROZI'
  m.reply('_Sedang diproses..._')
  let res = `https://api.zeks.me/api/breakwall?apikey=apivinz&text=${response[0]}`
  conn.sendFile(m.chat, res, 'gura.jpg', `*SELESAI. . .*`, m, false)
}
handler.help = ['flaming5'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(flaming5)$/i

module.exports = handler

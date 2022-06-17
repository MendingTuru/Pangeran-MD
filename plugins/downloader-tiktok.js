const hxz = require("hxz-api")
let handler = async(m,{text, conn}) => {

m.reply(wait)
let p = await  hxz.ttdownloader(text)
const { nowm, wm, audio } = p
conn.sendFile(m.chat, nowm, null, '*DONE✅*', m)
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiktok|tiktoknowm)$/i

module.exports = handler

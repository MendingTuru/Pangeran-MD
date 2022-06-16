let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `*––––––『 MAU NGAPAIN OM 』––––––*
`
const templateButtons = [
    {index: 1, urlButton: {displayText: '🐈 My Istagram 🐈', url: web}},
    {index: 2, urlButton: {displayText: '🌎 Official Group 🌎', url: gc}},
    {index: 3, quickReplyButton: {displayText: 'Menu', id: '.menu'}},
    {index: 4, quickReplyButton: {displayText: 'Donasi', id: '.donasi'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: thumb
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['sc']
handler.tags = ['info']
handler.command = /^(s(ourcode|c))$/i

export default handler

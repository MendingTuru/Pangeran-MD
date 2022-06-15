/*
 * ngelarang lu biar g diubah kyknya emg susah ya anjg
 * jadi kalau lu g bsa ngehargain orang
 * setidaknya buat sc ori by gw, trs buat sc lu hasil copas tuh
 * better bgtu dripada nma gw dihapus smua
 * najis 
*/

let handler = async (m, { conn }) => {
let ye = `@${m.sender.split`@`[0]}`
let esce = `
Gak ada ngab🐦
Mending jasa run aja
wa.me//6285828764046
conn.sendBut(m.chat, esce, '📮 makasih ngab', 'Thanks', '.menu', m) 
}
handler.help = ['sckri']
handler.tags = ['info']
handler.command = /^(sckri)$/i

module.exports = handler

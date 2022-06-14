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
Hello kak ${ye} Lagi Nyari Sc Ya? 

📮 𝘊𝘈𝘙𝘐 𝘈𝘑𝘈 𝘋𝘐 𝘠𝘖𝘜 𝘛𝘜𝘉𝘌

➵͜͡✪ 𝚈𝙾𝚄 𝚃𝚄𝙱𝙴 :
youtube.com/c/hokenbeusz

➵͜͡✪ 𝙹𝙰𝙽𝙶𝙰𝙽 𝙻𝚄𝙿𝙰 𝙼𝙰𝙼𝙿𝙸𝚁 :
https://lynk.id/kri.com
conn.sendBut(m.chat, esce, '📮 𝘋𝘰𝘯𝘵 𝘧𝘰𝘳𝘨𝘦𝘵 𝘵𝘰 𝘧𝘰𝘭𝘭𝘰𝘸 𝘮𝘺 𝘢𝘤𝘤𝘰𝘶𝘯𝘵', 'Thanks', '.menu', m) 
}
handler.help = ['sckri']
handler.tags = ['info']
handler.command = /^(sckri)$/i

module.exports = handler

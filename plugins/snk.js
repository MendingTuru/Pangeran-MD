let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kontol = `╭─────[ *RULES* ]─────✧
┴
│¹ Dilarang Hina zifabotz / Owner
│² Dilarang Spam Command
│³ Dilarang Kirim Virtex ke zifabotz
│⁴ Dilarang Spam Menu Ga Jelas
│⁵ Dilarang Telp / Vc
│⁶ Dilarang Culik Bot
│⁷ Dilarang Promosi
│⁸ Dilarang Meniru pesan Bot
│⁹ Bot Tidak Menerima Save Kontak
│¹⁰ Dilarang Chat Owner Ga Jelas
│¹¹ No plagiat
┬
╰──────────···

╭─────[ *HUKUM* ]─────✧
┴
│ 1 & 11 = Block + banned permanent
│ 2,4,6 & 8 = Banned sementara
│ 3 = War
│ 5 = Block sementara
│ 9 & 10 = Block permanent
┬
╰──────────···`.trim()
  const button = {
        buttonText: 'Klik Di sini',
        description: kontol,
        sections:  [{title: "Silahkan di pilih gausah pilih yang gaada", rows: [
        {title: '🗃️» Menu Utama', description: "Kembali ke Menu Utama", rowId:".?"},
        {title: '📦» Sewa Bot', description: "Sewa bot dengan memasukkan bot ke grup kamu", rowId:".sewa"},
        {title: '👥» Group Bot', description: "Official Group Bot zifabotz", rowId:".gcbot"},
        {title: '🏦» Donasi', description: "Donasi agar selalu online", rowId:".donasi"},
        {title: '🌬️» Owner', description: "Owner/Creator Bot", rowId:".owner"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}

handler.tags = ['main', 'update']
handler.command = /^(rules|rule|snk)$/i
handler.help = ['rules']
module.exports = handler

let fs = require('fs')
let handler = async (m, { conn }) => {
let teks = 'SCRIPT'
let dana = global.dana
let pulsa = global.pulsa
let gopay = global.gopay
let numberowner = global.numberowner
let anu = `Hallo mypren 👋
┏━━━〔 ıll *INFO SC* llı 〕━━㉿
⬡ SC ORI: ıll Hyzer
⬡ Di RECODE OLEH: ıll Krizyn
⬡ DI RECODE KEMBALI OLEH: ıll Zifabotz
┗━━━━━━━━━━━━━━━━━━㉿
┏━━〔 ıll THANKS TEAM llı 〕━㉿
⬡ team creator-creator
⬡ team yang sudah berdonasi
┗━━━━━━━━━━㉿
🪀LINK SC VIA GITHUB:
⤿ https://github.com/Botynyakamu/zmi

🪀LINK SC VIA MEDIAFIRE:
⤿ Tidak ada
======••••••••

THANKS YANG SUDAH ADA DI DALAM SC INI :
____________________
BIG THANKS TO

⤿ Nurutomo
    📮 https://github.com/Nurutomo
⤿ Elyas
    📮 https://github.com/Paquito1923
⤿ Hyzer Official
    📮 https://github.com/Hyzerr
⤿ Krizyn Ofc
    📮 https://github.com/krizynofc
⤿ Zifabotz_offc1
    📮 https://github.com/Botynyakamu
┏━━━〔 ıll *DONASI* llı 〕━━㉿
⬡ *DANA:* ${dana}
⬡ *GOPAY:* ${gopay}
⬡ *OVO:* ${pulsa}
┗━━━━━━━━━━━━━━━━━━㉿
┏━━〔 ıll *RULES* llı 〕━㉿
⬡ [❗] *JANGAN DI JUAL BELIKAN*
⬡ [❗] *KALAU ADA ERROR HUBUNGI TEAM KAMI*
┗━━━━━━━━━━㉿
⟩» *jangan lupa donasi kak* «⟨
Terimakasih yang sudah mendonasikan untuk bot

*Follow Instagram ku juga kak😼*`
  conn.send2ButtonImg(m.chat, fla + teks, anu, instagram, 'Oke', 'ok', 'Menu', '.menu', m) 
}
handler.help = ['sc']
handler.tags = ['info']
handler.command = /^(sc|script)$/i

module.exports = handler

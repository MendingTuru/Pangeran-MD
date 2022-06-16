let fs = require('fs')
let handler = async (m, { conn }) => {
let teks = 'JadiBot'
let dana = global.dana
let pulsa = global.pulsa
let gopay = global.gopay
let numberowner = global.numberowner
let anu = `Hallo mypren 👋
*MAAF KAK FITUR JADIBOT TIDAK ADA DI DALAM FITUR KAMI*
⟩» *Kalau kakak mau jadi bot silahkan jasa run aja kak*
          
━━━〔 ıll *HARGA* llı 〕━━㉿
⬡ *1 BULAN* 15.000
⬡ *2 BULAN:* 25.000
⬡ *PERMANEN:* 30.000
📮 *batas scan 5 kali !*
┗━━━━━━━━━━━━━━━━━━㉿
┏━━━〔 ıll *PAYMENT* llı 〕━━㉿
⬡ *DANA:* ${dana}
⬡ *GOPAY:* ${gopay}
⬡ *OVO:* ${pulsa}
┗━━━━━━━━━━━━━━━━━━㉿
┏━━〔 ıll *RULES* llı 〕━㉿
⬡ [❗] *Dana yang sudah masuk tidak bisa di kembalikan*
⬡ [❗] *Kalau akunmu ke banned bukan urusan saya*
┗━━━━━━━━━━㉿
Jika anda berminat hubungi nomor di bawah!!
⟩» *jangan lupa donasi kak* «⟨
Terimakasih yang sudah mendonasikan untuk bot

Contact person jasa run:
wa.me/${numberowner} (Owner)

*Follow Instagram ku juga kak😼*`
  conn.send2ButtonImg(m.chat, fla + teks, anu, instagram, 'Donasi', '.donasi', 'SewaBot', '.sewazifa', m) 
}
handler.help = ['jadibot']
handler.tags = ['info']
handler.command = /^(jadibot)$/i

module.exports = handler

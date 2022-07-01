let handler = async(m, { conn, text, participants }) => {
  let teks = ` *⊙─〔 👥TAGALL👥 〕─⊙*
\n *${text ? text : 'Nothing'}*\n\n`
		      	for (let mem of participants) {
		            teks += ` 👤 @${mem.id.split('@')[0]}\n`
				}
                teks += `\n↻ᵈʳᴋᴏᴋᴏ ᴘᴀ፝֟፝֟ɴɢᴇʀᴀɴ×፝֟͜×↻`
                conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <pesan>']
handler.tags = ['group']
handler.command = /^(tagall|tagal|tall|t)$/i

handler.group = true
handler.admin = true
handler.botadmin = true
module.exports = handler

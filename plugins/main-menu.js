/**
* SCRIPT BOT ORI by hyzer official
* CREATOR BY KRIZYN OFFICIAL
* MAU BANYAK LAGI FITUR NYA 
* RECODE SENDIRI BANH JANGAN MAU ENAK AJA
* NOTE MASIH ADA BUG STIKER DAN LAIN 
**/

//━━━━━━━━[ DEFAULT SETTINGS ]━━━━━━━━//
let { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let levelling = require('../lib/levelling')
let fs = require('fs')
const util = require('util')
const os = require('os')
let path = require('path')
let { createHash} = require('crypto')
let fetch = require('node-fetch')
let { perfomance } = require('perf_hooks')
let moment = require('moment-timezone')

//━━━━━━━━[ DEFAULT MENU ]━━━━━━━━//
const defaultMenu = {
  before:`
╭──〔  𝐈𝐍𝐅𝐎 𝐔𝐒𝐄𝐑  〕─⬣
┃➵͜͡✪ 𝚄𝚂𝙴𝚁 : *%name*
┃➵͜͡✪ 𝚁𝙴𝙼𝙰𝙸𝙽𝙸𝙽𝙶 𝙻𝙸𝙼𝙸𝚃 : *%limit* 𝙻𝙸𝙼𝙸𝚃
┃➵͜͡✪ 𝚁𝙾𝙻𝙴 : *%role*
┃➵͜͡✪ 𝙻𝙴𝚅𝙴𝙻 : *%level (%exp / %maxexp)* 
┃➵͜͡✪ 𝚃𝙾𝚃𝙰𝙻 𝚇𝙿 : *%totalexp* 𝚇𝙿
┃
┃──〔  𝐓 𝐎 𝐃 𝐀 𝐘  〕─⬣
┃➵͜͡✪ 𝚃𝙾𝙳𝙰𝚈 : *%week %weton* 
┃➵͜͡✪ 𝙳𝙰𝚃𝙴 : *%date*
┃➵͜͡✪ 𝙳𝙰𝚃𝙴 𝙸𝚂𝙻𝙰𝙼𝙸𝙲 : *%dateIslamic*
┃➵͜͡✪ 𝚃𝙸𝙼𝙴 : *%time*
┃
┃──〔  𝐃𝐀𝐓𝐀𝐁𝐀𝐒𝐄  〕─⬣
┃➵͜͡✪ 𝚄𝙿𝚃𝙸𝙼𝙴 : *%uptime*
┃➵͜͡✪ 𝙳𝙰𝚃𝙰𝙱𝙰𝚂𝙴 : %rtotalreg 𝚍𝚊𝚛𝚒 %totalreg 
┃➵͜͡✪ 𝙼𝙴𝙼𝙾𝚁𝚈 𝚄𝚂𝙴𝙳 : *${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
╰─────────────⬣
%readmore`.trimStart(), 
  header: '╭─㉿ 〔 %category 〕 ㉿─\n┃',
  body: '┃⫹⫺ %cmd %islimit %isPremium',
  footer: '┃\n╰────────㉿\n', 
  footerText: 'Powered by ᯤ ʀɪᴇʟɢᴀɴs ᴏғᴄ',
  after: `
╭──〔  THANKS TO  〕─⬣
⫹⫺ Allah SWT
⫹⫺ Orang Tua
⫹⫺ Kesabaran
⫹⫺ Penyemangat
⫹⫺ Nurutomo
⫹⫺ Ilmanhdyt
⫹⫺ Elyas
⫹⫺ Hyzer
⫹⫺ KrizynOfc
⫹⫺ RielgansOfc
⫹⫺ Zifabotz_offc1
╰─────────────⬣
`,
}

//━━━━━━━━[ CATEGORY ]━━━━━━━━//
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
  let tags
  let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'absen', 'rpg', 'anime', 'downloader', 'game', 'fun', 'xp', 'github', 'group', 'image', 'quotes', 'admin', 'info', 'internet', 'islam', 'kerang', 'maker', 'owner', 'suara', 'premium', 'quotes', 'info', 'stalk', 'shortlink', 'sticker', 'tools', 'text', 'nsfw', 'asupan', 'random', 'textpro', 'photooxy']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
  'main': 'UTAMA',
  'advanced': 'ADVANCED',
  'absen': 'ABSEN',
  'anime': 'ANIME',
  'sticker': 'STICKER & CONVERT',
  'downloader': 'DOWNLOADER',
  'xp': 'EXP & LIMIT',
  'fun': 'FUN',
  'game': 'GAME',
  'github': 'GITHUB',
  'group': 'GROUP',
  'image': 'IMAGE',
  'info': 'INFO',
  'internet': 'INTERNET',
  'islam' : 'ISLAMI',
  'kerang': 'KERANG',
  'maker': 'MAKER',
  'owner': 'OWNER',
  'Pengubah Suara': 'PENGUBAH SUARA',
  'premium': 'PREMIUM',
  'quotes' : 'QUOTES',
  'rpg': 'RPG',
  'stalk': 'STALK',
  'shortlink': 'SHORT LINK',
  'tools': 'TOOLS',
  'vote': 'VOTING',
  'nsfw': 'NSFW', 
  'asupan': 'ASUPAN', 
  'random': 'RANDOM', 
  'textpro': 'TEXT PRO', 
  'photooxy': 'PHOTO OXY', 
  }
  if (teks == 'absen') tags = {
    'absen': 'ABSEN',
    'vote': 'VOTING',
  }
  if (teks == 'anime') tags = {
  'anime': 'MANIME',
  }
  if (teks == 'sticker') tags = {
  'sticker': 'STICKER &CONVERT',
  }
  if (teks == 'downloader') tags = {
  'downloader': 'DOWNLOADER',
  }
  if (teks == 'xp') tags = {
  'xp': 'EXP & LIMIT',
  }
  if (teks == 'fun') tags = {
  'fun': 'MENU FUN',
  }
  if (teks == 'game') tags = {
  'game': 'GAME',
  }
  if (teks == 'github') tags = {
  'github': 'GITHUB',
  }
  if (teks == 'group') tags = {
  'group': 'GROUP',
  }
  if (teks == 'image') tags = {
  'image': 'IMAGE',
  }
  if (teks == 'info') tags = {
  'info': 'INFO',
  }
  if (teks == 'internet') tags = {
  'internet': 'INTERNET',
  }
  if (teks == 'islam') tags = {
  'islam' : 'ISLAMI',
  }
  if (teks == 'kerang') tags = {
  'kerang': 'KERANG',
  }
  if (teks == 'maker') tags = {
  'maker': 'MAKER',
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner',
    'host': 'Host',
    'advanced': 'Advanced'
  }
  if (teks == 'suara') tags = {
  'Pengubah Suara': 'PENGUBAH SUARA',
  }
  if (teks == 'text') tags = {
  'text': 'MAKER TEXT',
  }
  if (teks == 'premium') tags = {
  'premium': 'PREMIUM',
  }
  if (teks == 'quotes') tags = {
  'quotes' : 'QUOTES',
  }
  if (teks == 'rpg') tags = {
  'rpg': 'RPG',
  }
  if (teks == 'stalk') tags = {
  'stalk': 'STALK',
  }
  if (teks == 'shortlink') tags = {
  'shortlink': 'SHORT LINK',
  }
  if (teks == 'tools') tags = {
  'tools': 'TOOLS',
  }
  if (teks == 'nsfw') tags = {
  'nsfw': 'NSFW', 
  }
  if (teks == 'asupan') tags = {
  'asupan': 'ASUPAN', 
  }
  if (teks == 'random') tags = {
  'random': 'RANDOM', 
  }
  if (teks == 'textpro') tags = {
  'textpro': 'TEXT PRO', 
  }
  if (teks == 'photooxy') tags = {
  'photooxy': 'PHOTO OXY', 
  }

//━━━━━━━━[ DATABASE USER ]━━━━━━━━//
  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender 
    let name = conn.getName(m.sender)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let premium = global.db.data.users[m.sender].premium
    let user = global.db.data.users[who]
    let { exp, limit, level, money, role } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let tag = `wa.me/${m.sender.split('@')[0]}`
 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}

//━━━━━━━━[ TIMER ]━━━━━━━━//
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let waktuwib = moment.tz('Asia/Jakarta').format('HH:mm:ss')

//━━━━━━━━[ SETTING HELP ]━━━━━━━━//
let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
    return {
      help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
      tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
      prefix: 'customPrefix' in plugin,
      limit: plugin.limit,
      premium: plugin.premium,
      enabled: !plugin.disabled,
    }
  })

//━━━━━━━━[ FAKE REPLY ]━━━━━━━━//
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}
const ftroli = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2022,
    status: 1,
    surface : 1,
    message: `Hai Kak ${name}!`, 
    orderTitle: `▮Menu ▸`,
    thumbnail: await (await fetch(fla + 'Menu')).buffer(), //Gambarnye
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
const fdoc = {
   key : {
   remoteJid: 'status@broadcast',
   participant : '0@s.whatsapp.net'
   },
   message: {
   documentMessage: {
   title: wm, 
   }
   }
   }

//━━━━━━━━[ BAGIAN MENU ]━━━━━━━━//
if (teks == '404') {
let menuu = `┏━━━〔 ıll *INFO BOT* llı 〕━━㉿
⬡ *NAMA:* ${namebot}
⬡ *AKTIF:* ${uptime}
⬡ *OWNER:* ${owner}
┗━━━━━━━━━━━━━━━━━━㉿
┏━━〔 ıll *THANKS TO* llı 〕━㉿
⬡ team creator-creator
⬡ team yang sudah berdonasi
┗━━━━━━━━━━㉿
» *Date :* ${date}
» *Waktu :* ${wib}
 `
const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        listMessage: {
            title: `*${ucapan()} ${name}*`,
            description: menuu,
            buttonText: '🗃KLIK DISINI🗃',
            listType: 1,
            footerText: "📮 𝚂ilahkan Pilih Menu Dibawah Ini",
            mtype: 'listMessage',
            sections: [
              {
      
                "rows": [{
                  "title": `|💌|⟩»➵͜͡✪ ALL MENU`,
                  "description": "Menampilkan Menu All",
                  "rowId": '.? all'
                  }, {
                  "title": "|🗃️|⟩»➵͜͡✪ ABSEN MENU",
                  "description": "Menampilkan Menu Absen",
                  "rowId": `${_p}? absen`
                }, {
                  "title": "|⛩️|⟩»➵͜͡✪ ANIME MENU",
                  "description": "Menampilkan Menu Anime",
                  "rowId": `${_p}? anime`
                }, {
                  "title": "|🎫|⟩»➵͜͡✪ STICKER  MENU",
                  "description": "Menampilkan Menu Sticker",
                  "rowId": `${_p}? sticker`
                }, {
                  "title": "|📩|⟩»➵͜͡✪ DOWNLOAD MENU",
                  "description": "Menampilkan Menu Downloader",
                  "rowId": `${_p}? downloader`
                }, {
                  "title": "|📊|⟩»➵͜͡✪ EXP & LIMIT MENU",
                  "description": "Menampilkan Menu Exp",
                  "rowId": `${_p}? xp`
                }, {
                  "title": "|🌬️|⟩»➵͜͡✪ FUN MENU",
                  "description": "Menampilkan Menu Fun",
                  "rowId": `${_p}? fun`
                }, {
                  "title": "|🎮|⟩»➵͜͡✪ GAME MENU",
                  "description": "Menampilkan Menu Game",
                  "rowId": `${_p}? game`
                }, {
                  "title": "|💬|⟩»➵͜͡✪ GITHUB MENU",
                  "description": "Menampilkan Menu Github",
                  "rowId": `${_p}? github`
                }, {
                  "title": "|👥|⟩»➵͜͡✪ GROUP MENU",
                  "description": "Menampilkan Menu Group",
                  "rowId": `${_p}? group`
                }, {
                  "title": "|🖼️|⟩»➵͜͡✪ IMAGE MENU",
                  "description": "Menampilkan Menu Image",
                  "rowId": `${_p}? image`
                }, {
                  "title": "|🌐|⟩»➵͜͡✪ INTERNET MENU",
                  "description": "Menampilkan Menu Internet",
                  "rowId": `${_p}? internet`
                }, {
                  "title": "|🕌|⟩»➵͜͡✪ ISLAMIC MENU",
                  "description": "Menampilkan Menu Islam",
                  "rowId": `${_p}? islam`
                }, {
                  "title": "|🐚|⟩»➵͜͡✪ KERANG MENU",
                  "description": "Menampilkan Menu Kerang",
                  "rowId": `${_p}? kerang`
                }, {
                  "title": "|📝|⟩»➵͜͡✪ MAKER MENU",
                  "description": "Menampilkan Menu Maker",
                  "rowId": `${_p}? maker`
                }, {
                  "title": "|🧸|⟩»➵͜͡✪ OWNER MENU",
                  "description": "Menampilkan Menu Owner",
                  "rowId": `${_p}? owner`
                }, {
                  "title": "|🎙️|⟩»➵͜͡✪ CHANGE VOICE MENU",
                  "description": "Menampilkan Menu Voice Changer",
                  "rowId": `${_p}? suara`
                }, {
                  "title": "|👩‍💻|⟩»➵͜͡✪ PREMIUM MENU",
                  "description": "Menampilkan Menu Premium",
                  "rowId": `${_p}? premium`
                }, {
                  "title": "|🐻|⟩»➵͜͡✪ QUOTES MENU",
                  "description": "Menampilkan Menu Quotes",
                  "rowId": `${_p}? quotes`
                }, {
                  "title": "|🧾|⟩»➵͜͡✪ RPG MENU",
                  "description": "Menampilkan Menu Rpg",
                  "rowId": `${_p}? rpg`
                }, {
                  "title": "|💾|⟩»➵͜͡✪ STALKER MENU",
                  "description": "Menampilkan Menu Stalker",
                  "rowId": `${_p}? stalk`
                }, {
                  "title": "|🖇️|⟩»➵͜͡✪ SHORT LINK MENU",
                  "description": "Menampilkan Menu Short Link",
                  "rowId": `${_p}? shortlink`
                }, {
                  "title": "|📍|⟩»➵͜͡✪ TOOLS MENU",
                  "description": "Menampilkan Menu Tools",
                  "rowId": `${_p}? tools`
                }, {
                  "title": "|📝|⟩»➵͜͡✪ TEXT MAKER MENU",
                  "description": "Menampilkan Maker Text",
                  "rowId": `${_p}? text`
                }, {
                  "title": "|📨|⟩»➵͜͡✪ HENTAI MENU",
                  "description": "Menampilkan Menu Hentai",
                  "rowId": `${_p}? nsfw`
                }, {
                  "title": "|🔮|⟩»➵͜͡✪ RANDOM MENU",
                  "description": "Menampilkan Menu Random/Gabut",
                  "rowId": `${_p}? random`
                }, {
                  "title": "|📔|⟩»➵͜͡✪ TEXT PRO MENU",
                  "description": "Menampilkan Text Pro Menu",
                  "rowId": `${_p}? textpro`
                }, {
                  "title": "|📂|⟩»➵͜͡✪ PHOTO OXY MENU",
                  "description": "Menampilkan Photo Oxy Menu",
                  "rowId": `${_p}? textpro`
                }
                  ],
                "title": "LIST MENU"
                }, {
                "rows": [{
"title": ` 😼⟩» OWNER BOT`,
                  "description": "Nomor Pemilik Bot! save? Save ae🗿",
                  "rowId": `.owner`
                },{
                  "title": `💳⟩» SEWA BOT`,
                  "description": "Sewa kak, awokawok",
                  "rowId": `.sewazifa`
                },{
                  "title": "🌈⟩» INFO BOT",
                  "description": "Menampilkan Menu Info",
                  "rowId": `${_p}? info`
                }],
                "title": "INFORMASI BOT"
              }
            ], "contextInfo": {
              "stanzaId": m.key.id,
              "participant": m.sender,
              "quotedMessage": m.message
            }
    }}), { userJid: m.participant || m.key.remoteJid, quoted: fkontak });
    return await conn.relayMessage(
        m.key.remoteJid,
        template.message,
        { messageId: template.key.id }
    )
    }
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Dipersembahkan oleh https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
        before,
        ...Object.keys(tags).map(tag => {
          return header.replace(/%category/g, tags[tag]) + '\n' + [
            ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
              return menu.help.map(help => {
                return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                  .replace(/%islimit/g, menu.limit ? '(Ⓛ)' : '')
                  .replace(/%isPremium/g, menu.premium ? '(Ⓟ)' : '')
                  .trim()
              }).join('\n')
            }),
            footer
          ].join('\n')
        }),
        after
      ].join('\n')
      text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      name,
      ucapan: ucapan(),
      level, limit, money, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    
//━━━━━━━━[ SETTINGS MENU ]━━━━━━━━//
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    let message = await prepareWAMessageMedia({ image: await (await require('node-fetch')(fotonya2)).buffer()}, { upload: conn.waUploadToServer }) 
      const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
      templateMessage: {
          hydratedTemplate: {
            imageMessage: message.imageMessage, 
            hydratedContentText: text, 
            hydratedFooterText: wm2, 
            hydratedButtons: [{
            urlButton: {
               displayText: '🔮ISTAGRAM🔮',
               url: webm
             }

           },
             {
             urlButton: {
               displayText: '🎮GROUP BOT🎮', 
               url: gc
             }

           },
               {
             quickReplyButton: {
displayText: 'PROFILE',
               id: '.profile',
             }

           },
               {
             quickReplyButton: {
displayText: 'RUNTIME',
               id: '.runtime',
             }

           },
               {
             quickReplyButton: {
displayText: '🗃MENU🗃',
               id: '.menu',
             }

           },
               {
             quickReplyButton: {
displayText: '⏰SPEED⏰',
               id: '.ping',
             }

           },
               {
             quickReplyButton: {
               displayText: '🐤CREATOR BOT🐤',
               id: '.owner',
             }

           },
               {
             quickReplyButton: {
               displayText: '🗿DONASI🗿',
               id: '.donasi',
             }

           },
           {
             quickReplyButton: {
displayText: '🪀SEWABOT🪀',
               id: '.sewazifa',
             }

           },
           {
             quickReplyButton: {
               displayText: ' 💌YANG SUDAH MEMBANTU BOT💌',
               id: '.tqto',
             }
           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
     //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
} catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['Krizyn']
handler.tags = ['main']
handler.command = /^(alive|panel|krizyn|zifa|menu|help|\?)$/i
handler.register = true
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true
handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3
module.exports = handler

//━━━━━━━━[  JANGAN DI UBAH  ]━━━━━━━━//
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "Hallo"
  if (time >= 4) {
    res = "Hallo👋"
  }
  if (time > 10) {
    res = "Hallo👋"
  }
  if (time >= 15) {
    res = "Hallo👋"
  }
  if (time >= 18) {
    res = "Hallo👋"
  }
  return res
}

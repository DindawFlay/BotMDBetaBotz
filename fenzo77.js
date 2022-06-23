/*
 - Create By FenZo||77+
 - Contact Me on https://wa.me/+6281385062956
 - Base Dika 
 - Jangan Di Ubh Author Dek awas aj
 - New Update Antivirus
 */
 
 
 

process.on('uncaughtException', console.error) //Safe Log Error
//=====================
require("./config")
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, WAFlag } = require('@adiwajshing/baileys')
const zmans = require("@adiwajshing/baileys")
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
const path = require('path')
const os = require('os')
 const { TiktokDownloader } = require('./lib/tiktokdl') 
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const hx = require("hxz-api")
const hxz = require('./lib/hxz-api')
const bdr = require('rumus-bdr')
const yogipw = require("tod-api")
const { color, bgcolor } = require('./lib/color')
const thiccysapi = require('textmaker-thiccy')
const toHur = require('@develoka/angka-terbilang-js')
const mathjs = require('mathjs')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const { EmojiAPI } = require("emoji-api")
const imgbbUploader = require('imgbb-uploader')
const primbon = new Primbon()
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require('./lib/limit.js');
const emoji = new EmojiAPI()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const { aiovideodl } = require('./lib/scraper.js')
const cheerio = require ("cheerio");
const textpro = require('./lib/textpro')
const { detikNews } = require('./lib/detik')
const { wikiSearch } = require('./lib/wiki.js');
const { Gempa } = require("./lib/gempa.js");
const ms = require('ms')
 let { covid } = require('./lib/covid.js') 
const { jadwaltv }= require('./lib/jadwaltv');
const { 
  yta, 
  ytv, 
  searchResult 
 } = require('./lib/ytdl')
// Database Rpg
 let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
 let _buruan = JSON.parse(fs.readFileSync('./storage/user/hasil_buruan.json'));
 let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/darah.json'))

// Read Database
global.db = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db) global.db = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    users: {},
    ...(global.db || {})
}

let lolkey = global.lolhuman
let tebaklagu = db.game.tebaklagu = []
let _family100 = db.game.family100 = []
let kuismath = db.game.math = []
let tebakgambar = db.game.tebakgambar = []
let tebakkata = db.game.tebakkata = []
let caklontong = db.game.lontong = []
let caklontong_desk = db.game.lontong_desk = []
let tebakkalimat = db.game.kalimat = []
let tebaklirik = db.game.lirik = []
let tebaktebakan = db.game.tebakan = []
let vote = db.others.vote = []
//DATABASE
let pendaftar = JSON.parse(fs.readFileSync('./storage/user/user.json'))
let balance = JSON.parse(fs.readFileSync('./database/balance.json'));
let premium = JSON.parse(fs.readFileSync('./database/premium.json'));
let ssewa = JSON.parse(fs.readFileSync('./database/sewa.json'));
let ban = JSON.parse(fs.readFileSync('./database/ban.json'));
let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'));
const _autostick = JSON.parse(fs.readFileSync('./database/autostickpc.json'))
let _leveling = JSON.parse(fs.readFileSync('./database/leveling.json'))
let _level = JSON.parse(fs.readFileSync('./database/level.json'))
let limit = JSON.parse(fs.readFileSync('./database/limit.json'));
let _sewa = require("./lib/sewa");
const sewa = JSON.parse(fs.readFileSync('./database/sewa.json'));

// UCAPAN WAKTU ( FenZo||77+)
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const ucap = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const qris = 'https://telegra.ph/file/0b4c0cf58301ec7c73a70.jpg'
const faxc = 'https://telegra.ph/file/7188012d573871aaf4fa0.jpg'
// TANGGAL ( FenZo||77+ )
var buln = ['/01/', '/02/', '/03/', '/04/', '/05/', '/06/', '/07/', '/08/', '/09/', '/10/', '/11/', '/12/'];
var myHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
var tgel = new Date();
var hri = tgel.getDate();
var bulnh = tgel.getMonth();
var thisHari = tgel.getDay(),
    thisDaye = myHari[thisHari];
var yye = tgel.getYear();
var syear = (yye < 1000) ? yye + 1900 : yye;
const jangwak = (hri + '' + buln[bulnh] + '' + syear)
const janghar = (thisDaye)

module.exports = mans = async (mans, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await mans.decodeJid(mans.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = args.join(" ")
const from = m.chat
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)

// Group
const groupMetadata = m.isGroup ? await mans.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isUser = pendaftar.includes(m.sender)
 
//const lakal = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : ''
// Other
const isBan = banUser.includes(m.sender)
const isRakyat = isCreator || global.rkyt.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
const AntiLink = m.isGroup ? ntilink.includes(from) : false
const welcm = m.isGroup ? wlcm.includes(from) : true
const GcRvk = m.isGroup ? gcrevoke.includes(from) : false
const isLeveling = m.isGroup ? _leveling.includes(from) : true
const isAutoStick = _autostick.includes(from)
const isAutoSticker = m.isGroup ? autosticker.includes(from) : false
const isSewa = _sewa.checkSewaGroup(from, sewa)
autoreadsw = true
// Quoted
const content = JSON.stringify(m.message)
const q = args.join(' ')
const isImage = (m.type === 'imageMessage')
        const isVideo = (m.type === 'videoMessage')
        const isMedias = (m.mtype === 'imageMessage' || m.mtype === 'videoMessage')
		const isQuotedImage = m.mtype === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = m.mtype === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = m.mtype === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = m.mtype === 'extendedTextMessage' && content.includes('stickerMessage')
		const isQuotedLoca = m.mtype === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedContact = m.mtype === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocs = m.mtype === 'extendedTextMessage' && content.includes('documentMessage')
        const isQuotedTeks = m.mtype === 'extendedTextMessage' && content.includes('quotedMessage')
        const isQuotedTag = m.mtype === 'extendedTextMessage' && content.includes('mentionedJid')
        const isQuotedProd = m.mtype === 'extendedTextMessage' && content.includes('productMessage')
        const isQuotedReply = m.mtype === 'extendedTextMessage' && content.includes('Message')

//Sewa
_sewa.expiredCheck(mans, sewa)

// Auto-group sticker
        if (isAutoSticker) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                await mans.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Detec Autosticker`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                await mans.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }
                if (isAutoStick) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                await mans.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Detec Autosticker`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                await mans.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }
function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
            }
            
		
if (m.message) {
addBalance(m.sender, randomNomor(574), balance)
console.log('\x1b[1;34m~\x1b[1;37m>', '[\x1b[1;33mCMD\x1b[1;37m]', time, color(`${prefix + command} [${args.length}]`, 'cyan'), 'from', color(m.pushName), 'in', color(groupName, 'orange'))
}
        if (isCmd && !isUser){
			pendaftar.push(m.sender)
			fs.writeFileSync('./storage/user/user.json', JSON.stringify(pendaftar))
        } 
        // Leveling Punya Chika 🗿🗿 Di Copas Oleh Fardan
            const getLevelingXp = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
               }
            }

            const getLevelingLevel = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
                }
            }

            const getLevelingId = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].jid
                }
             }

            const addLevelingXp = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/level.json', JSON.stringify(_level))
                }
            }

            const addLevelingLevel = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/level.json', JSON.stringify(_level))
                }
            }

            const addLevelingId = (userId) => {
            const obj = {jid: userId, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/level.json', JSON.stringify(_level))
            }

            const getUserRank = (userId) => {
    let position = null
    let found = false
    _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
    Object.keys(_level).forEach((i) => {
        if (_level[i].id === userId) {
            position = i
            found = true
        }
    })
    if (found === false && position === null) {
        const obj = { id: userId, xp: 0, level: 1 }
        _level.push(obj)
        fs.writeFileSync('./database/level.json', JSON.stringify(_level))
        return 99
    } else {
        return position + 1
    }
}

const xpGain = new Set()

const isGained = (userId) => {
    return !!xpGain.has(userId)
}

const addCooldown = (userId) => {
    xpGain.add(userId)
    setTimeout(() => {
        return xpGain.delete(userId)
    }, 60000) // Each minute
}

var levelRole = getLevelingLevel(m.sender)
        var role = 'Copper V'
        if (levelRole <= 5) {
            role = 'Copper IV'
        } else if (levelRole <= 10) {
            role = 'Copper III'
        } else if (levelRole <= 15) {
            role = 'Copper II'
        } else if (levelRole <= 20) {
            role = 'Copper I'
        } else if (levelRole <= 25) {
            role = 'Silver V'
        } else if (levelRole <= 30) {
            role = 'Silver IV'
        } else if (levelRole <= 35) {
            role = 'Silver III'
        } else if (levelRole <= 40) {
            role = 'Silver II'
        } else if (levelRole <= 45) {
            role = 'Silver I'
        } else if (levelRole <= 50) {
            role = 'Gold V'
        } else if (levelRole <= 55) {
            role = 'Gold IV'
        } else if (levelRole <= 60) {
            role = 'Gold III'
        } else if (levelRole <= 65) {
            role = 'Gold II'
        } else if (levelRole <= 70) {
            role = 'Gold I'
        } else if (levelRole <= 75) {
            role = 'Platinum V'
        } else if (levelRole <= 80) {
            role = 'Platinum IV'
        } else if (levelRole <= 85) {
            role = 'Platinum III'
        } else if (levelRole <= 90) {
            role = 'Platinum II'
        } else if (levelRole <= 95) {
            role = 'Platinum I'
        } else if (levelRole < 100) {
            role = 'Exterminator'
        }

        var levelRoles = getLevelingLevel(m.sender)
        var roles = 'Cop V'
        if (levelRoles <= 5) {
            roles = 'Cop IV'
        } else if (levelRoles <= 10) {
            roles = 'Cop III'
        } else if (levelRoles <= 15) {
            roles = 'Cop II'
        } else if (levelRoles <= 20) {
            roles = 'Cop I'
        } else if (levelRoles <= 25) {
            roles = 'Sil V'
        } else if (levelRoles <= 30) {
            roles = 'Sil IV'
        } else if (levelRoles <= 35) {
            roles = 'Sil III'
        } else if (levelRoles <= 40) {
            roles = 'Sil II'
        } else if (levelRoles <= 45) {
            roles = 'Sil I'
        } else if (levelRoles <= 50) {
            roles = 'Gol V'
        } else if (levelRoles <= 55) {
            roles = 'Gol IV'
        } else if (levelRoles <= 60) {
            roles = 'Gol III'
        } else if (levelRoles <= 65) {
            roles = 'Gol II'
        } else if (levelRoles <= 70) {
            roles = 'Gol I'
        } else if (levelRoles <= 75) {
            roles = 'Plat V'
        } else if (levelRoles <= 80) {
            roles = 'Plat IV'
        } else if (levelRoles <= 85) {
            roles = 'Plat III'
        } else if (levelRoles <= 90) {
            roles = 'Plat II'
        } else if (levelRoles <= 95) {
            roles = 'Plati I'
        } else if (levelRoles < 100) {
            roles = 'Exter'
        }
        //function levelingnya
                        if (m.isGroup && isLeveling && isUser && mans.public) {
                                const currentLevel = getLevelingLevel(m.sender)
                                const checkId = getLevelingId(m.sender)
                                try {
                                        addCooldown(m.sender)
                                        if (currentLevel === undefined && checkId === undefined) addLevelingId(m.sender)
                                        const amountXp = Math.floor(Math.random() * 10) + 200
                                        const requiredXp = 200 * (Math.pow(2, currentLevel) - 1)
                                        const getLevel = getLevelingLevel(m.sender)
                                        addLevelingXp(m.sender, amountXp)
                                        if (requiredXp <= getLevelingXp(m.sender)) {
                                        addLevelingLevel(m.sender, 1)
teks = `*──「 LEVEL UP 」──*\n\n❑ *Name*:  @${m.sender.split("@")[0]}\n❑ *XP*: ${getLevelingXp(m.sender)}\n❑ *Level*: ${getLevel} -> ${getLevelingLevel(m.sender)}\n❑ *Role*: ${role} \n\nCongrats!! 🎉`
mans.sendMessage(m.chat, {text: teks, mentions:[m.sender]}, {quoted:m})
}

                        } catch (err) {
                                console.error(err)
                        }
                }
if (command) {
await mans.sendPresenceUpdate('composing', m.chat)
}
if (autoreadsw) {
		if (from === 'status@broadcast') {
		mans.chatRead(from)
	}
	}
	

const hariRaya = new Date('6 1, 2022 00:00:00')
			const sekarang = new Date().getTime();
			const Selisih = hariRaya - sekarang;
			const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
			const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
			const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60));
			const ddetik = Math.floor( Selisih % (1000 * 60) / 1000);
			const ultah = `${jhari}Hari ${jjam}Jam ${mmmenit}Menit ${ddetik}Detik`
			
async function hitungmundur(bulan, tanggal) { //By Fax Ngk Usah Di Ubah
          let from = new Date(`${bulan} ${tanggal}, 2022 00:00:00`).getTime();
          let now = Date.now();
          let distance = from - now;
          let days = Math.floor(distance / (1000 * 60 * 60 * 24));
          let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          let seconds = Math.floor((distance % (1000 * 60)) / 1000);
          return days + "Hari " + hours + "Jam " + minutes + "Menit " + seconds + "Detik"
        }
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isRakyat ? global.limitawal.rakyat : global.limitawal.free
let user = global.db.users[m.sender]
if (typeof user !== 'object') global.db.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
} catch (err) {
console.error(err)
}

const sendOrder = async(jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
 "orderMessage": {
"orderId": orid, // Ganti Idnya
"thumbnail": img, // Ganti Imagenya
"itemCount": itcount, // Ganti Item Countnya
"status": "INQUIRY", // Jangan Diganti
"surface": "CATALOG", // Jangan Diganti
"orderTitle": title, // Ganti Titlenya
"message": text, // Ganti Messagenya
"sellerJid": sellers, // Ganti sellernya
"token": tokens, // Ganti tokenya
"totalAmount1000": ammount, // Ganti Total Amountnya
"totalCurrencyCode": "IDR", // Terserah
}
}), { userJid: jid })
mans.relayMessage(jid, order.message, { messageId: order.key.id})
}

//function rpg
const { 
addInventoriDarah, 
cekDuluJoinAdaApaKagaDiJson, 
addDarah, 
kurangDarah, 
getDarah 
}  = require('./storage/user/darah.js')
const { 
cekInventoryAdaAtauGak, 
addInventori,  
addBesi, 
addEmas, 
addEmerald,
addUmpan,
addPotion,
kurangBesi, 
kurangEmas, 
kurangEmerald, 
kurangUmpan,
kurangPotion,
getBesi, 
getEmas, 
getEmerald,
getUmpan,
getPotion
} = require('./storage/user/alat_tukar.js')
const { 
addInventoriMonay, 
cekDuluJoinAdaApaKagaMonaynyaDiJson, 
addMonay,
kurangMonay, 
getMonay 
} = require('./storage/user/monay.js')
const { 
addInventoriLimit, 
cekDuluJoinAdaApaKagaLimitnyaDiJson, 
addLimit, 
kurangLimit, 
getLimit 
} = require('./storage/user/limit.js')
const { 
cekDuluHasilBuruanNya, 
addInventoriBuruan, 
addIkan,
addAyam, 
addKelinci, 
addDomba, 
addSapi,
addGajah,
kurangIkan,
kurangAyam, 
kurangKelinci, 
kurangDomba, 
kurangSapi,
kurangGajah,
getIkan,
getAyam, 
getKelinci, 
getDomba,
getSapi,
getGajah
} = require('./storage/user/buruan.js')
let DarahAwal =  global.rpg.darahawal
const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)   
const isCekDarah = getDarah(m.sender)
const isUmpan = getUmpan(m.sender)
const isPotion = getPotion(m.sender)
const isIkan = getIkan(m.sender)
const isAyam = getAyam(m.sender)
const isKelinci = getKelinci(m.sender)
const isDomba = getDomba(m.sender)
const isSapi = getSapi(m.sender)
const isGajah = getGajah(m.sender)
const isMonay = getMonay(m.sender)
const isLimit = getLimit(m.sender)
const isBesi = getBesi(m.sender)
const isEmas = getEmas(m.sender)
const isEmerald = getEmerald(m.sender)
const isInventory = cekInventoryAdaAtauGak(m.sender)
const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
const ikan = ['🐟','🐠','🐡']   
   
   //Fax
let picaks = ['flaming','fluming','flarun','flasmurf']
let picak = picaks[Math.floor(Math.random() * picaks.length)]
// Rakyat
if (!isRakyat) {
rkyt.push(m.sender.split("@")[0])
}

//Add Hit Fax
global.hit = {}
if (isCmd) {
data = await fetchJson('https://api.countapi.xyz/hit/FaxBot/visits')
jumlahcmd = `${data.value}`
dataa = await fetchJson(`https://api.countapi.xyz/hit/FaxBot${moment.tz('Asia/Jakarta').format('DDMMYYYY')}/visits`)
jumlahharian = `${dataa.value}`
}
 
// AFK
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
}

if (db.users[m.sender].afkTime > -1) {
let user = global.db.users[m.sender]
m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}

// Detect Group Invite
if (m.mtype === 'groupInviteMessage') {
teks = `Ketik .owner untuk bergabung ke group whatsapp anda`
sendOrder(m.chat, teks, "5123658817728409", fs.readFileSync('./media/image/mans.jpg'), 2022, "Lol Lexxy+ ~ Multi Device", "6283155687629@s.whatsapp.net", "AR7zJt8MasFx2Uir/fdxhkhPGDbswfWrAr2gmoyqNZ/0Wg==", "99999999999999999999")
}
/*const bodyyy = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
if (!isCmd && !m.isGroup && !m.key.fromMe) {
const simi = await fetchJson(`https://caliph.my.id/api/simi.php?text=${budy}`)
const sami = simi.result
await mans.sendMessage(from, {text:sami}, {quoted:m})
}*/

// AntiLink
if (AntiLink) {
linkgce = await mans.groupInviteCode(from)
if (budy.includes(`https://chat.whatsapp.com/${linkgce}`)) {
m.reply(`\`\`\`「 Detect Link 」\`\`\`\n\nAnda tidak akan dikick bot karena yang anda kirim adalah link group yg ada di group ini`)
} else if (isUrl(m.text)) {
bvl = `\`\`\`「 Detect Link 」\`\`\`\n\nAdmin telah mengirim link, admin dibebaskan untuk mengirim link apapun`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
kice = m.sender
await mans.groupParticipantsUpdate(m.chat, [kice], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
mans.sendMessage(from, {text:`\`\`\`「 Detect Link 」\`\`\`\n\n@${kice.split("@")[0]} Telah dikick karena send link di group ini`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
}

// Public & Self
if (!mans.public) {
if (!m.key.fromMe) return
}

// write database every 1 minute
setInterval(() => {
fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
}, 60 * 1000)

// reset limit every 12 hours
let cron = require('node-cron')
cron.schedule('00 12 * * *', () => {
let user = Object.keys(global.db.users)
let limitUser = isRakyat ? global.limitawal.rakyat : global.limitawal.free
for (let jid of user) global.db.users[jid].limit = limitUser
console.log('Reseted Limit')
}, {
scheduled: true,
timezone: "Asia/Jakarta"
})


if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
let hadippp = randomNomor(1000)
addBalance(m.sender, hadippp, balance)
kuis = true
jawaban = tebaklagu[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await mans.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, "© ||77+ - X - Lol Lexxy+", m)
delete tebaklagu[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
let hadippp = randomNomor(1000)
addBalance(m.sender, hadippp, balance)
kuis = true
jawaban = tebakgambar[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await mans.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, "© Lol Lexxy+ - X - Lol Lexxy+", m)
delete tebakgambar[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
let hadippp = randomNomor(1000)
addBalance(m.sender, hadippp, balance)
kuis = true
jawaban = tebakkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await mans.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, "© Lol Lexxy+ - X - Lol Lexxy+", m)
delete tebakkata[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
let hadippp = randomNomor(1000)
addBalance(m.sender, hadippp, balance)
kuis = true
jawaban = caklontong[m.sender.split('@')[0]]
deskripsi = caklontong_desk[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await mans.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, "© Lol Lexxy+ - X - Lol Lexxy+", m)
delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
let hadippp = randomNomor(1000)
addBalance(m.sender, hadippp, balance)
kuis = true
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await mans.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, "© Lol Lexxy+ - X - Lol Lexxy+", m)
delete tebakkalimat[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
let hadippp = randomNomor(1000)
addBalance(m.sender, hadippp, balance)
kuis = true
jawaban = tebaklirik[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await mans.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, "© Lol Lexxy+ - X - Lol Lexxy+", m)
delete tebaklirik[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
let hadippp = randomNomor(1000)
addBalance(m.sender, hadippp, balance)
kuis = true
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await mans.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, "© Lol Lexxy+ - X - Lol Lexxy+", m)
delete tebaktebakan[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (('family100'+m.chat in _family100) && isCmd) {
let hadippp = randomNomor(1000)
addBalance(m.sender, hadippp, balance)
kuis = true
let room = _family100['family100'+m.chat]
let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (!isSurender) {
let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
if (room.terjawab[index]) return !0
room.terjawab[index] = m.sender
}
let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
}).filter(v => v).join('\n')}
${isSurender ? '' : `Perfect Player`}`.trim()
mans.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
if (isWin || isSurender) delete _family100['family100'+m.chat]
}

//Suit PvP
this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
mans.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = m.chat
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
mans.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) mans.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
if (!roof.pilih2) mans.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) mans.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
mans.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih2) mans.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih) mans.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
mans.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}

//Cerpen
async function cerpen (category) {
    return new Promise((resolve, reject) => {
        let title = category.toLowerCase().replace(/[()*]/g, "")
        let judul = title.replace(/\s/g, "-")
        let page = Math.floor(Math.random() * 5)
        axios.get('http://cerpenmu.com/category/cerpen-'+judul+'/page/'+page)
        .then((get) => {
            let $ = cheerio.load(get.data)
            let link = []
            $('article.post').each(function (a, b) {
                link.push($(b).find('a').attr('href'))
            })
            let random = link[Math.floor(Math.random() * link.length)]
            axios.get(random)
            .then((res) => {
                let $$ = cheerio.load(res.data)
                let hasil = {
                    title: $$('#content > article > h1').text(),
                    author: $$('#content > article').text().split('Cerpen Karangan: ')[1].split('Kategori: ')[0],
                    kategori: $$('#content > article').text().split('Kategori: ')[1].split('\n')[0],
                    lolos: $$('#content > article').text().split('Lolos moderasi pada: ')[1].split('\n')[0],
                    cerita: $$('#content > article > p').text()
                }
                resolve(hasil)
            })
        })
    })
}
// Math
if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = kuismath[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
delete kuismath[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

//TicTacToe
this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
// m.reply(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { // nek wayahku
if (!isSurrender) return !0
let hadippp = randomNomor(1000)
addBalance(m.sender, hadippp, balance)
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
m.reply({
'-3': 'Game telah berakhir',
'-2': 'Invalid',
'-1': 'Posisi Invalid',
0: 'Posisi Invalid',
}[ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `     「 Tictactoe Game 」
Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
if (room.x !== room.o) await mans.sendText(room.x, str, m, { mentions: parseMention(str) } )
await mans.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}
}

// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: mans.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, mans.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
mans.ev.emit('messages.upsert', msg)
}
//----------[ FAKE VIDEO ]--------//
const fakvid = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "status@broadcast" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title":"SesillaBOTMD",
                 "h": `Hmm`,
                 'seconds': '99999', 
                 'caption': 'SesillaCanzBOT',
                 'jpegThumbnail': fs.readFileSync('./media/images.jpeg')
                        }
                       }
	                  }

//FAKEREPLY TEXT WITH THUMBNAIL
const fakey = (teks) => {
            mans.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `Join Jadi Hengker 😎`,"body": `Join Bot's Official GC`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./media/fenzo.jpg`),"sourceUrl": "https://chat.whatsapp.com/E3zewfxrc5pKE6Rzb3BuqG"}}}, { quoted: m})
        }
const ftextt = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
},
message: { 
"extendedTextMessage": {
 "text":"hallo bang",
"title": `Hmm`,
 'jpegThumbnail': log0
}
} 
}
//FAKEREPLY VN
const fvn = {
key: { 
fromMe: false,
participant: `62882000383955@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
},
message: { 
"audioMessage": {
"mimetype":"audio/ogg; codecs=opus",
"seconds": "30",
"ptt": "true"
}
} 
}
l = 1
monospace = '```'
const levelMenu = getLevelingLevel(m.sender)
const xpMenu = getLevelingXp(m.sender)
const uangku = getBalance(m.sender, balance)
const reqXp  = 200 * (Math.pow(2, getLevelingLevel(m.sender)) - 1)
const jumlahUser = pendaftar.length
  if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
  if (!isInventory){ addInventori(m.sender) }
  if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }
  
const listmn = `Selamat ${salam} ${pushname} 👋
Saya *${namebot}*, Assisten *Lexxy Official* Bot Ini Adalah Beta Multi-Device WhatsApp.
Jika Ada Fitur Error Atau Bug Segera Lapor Ke Owner Bot
─────────────
❏ *Info User*
> Username : *${pushname}!*
> Limit User : *${global.db.users[m.sender].limit}*
> Role User : *${role}*
────────────
❏ *Info Creator*
> Name : *Lexxy Official*
> Nomor : *082279915237*
> Umur : *18+*
> Region : *Indonesia 🇲🇨*
> Hobyy : *Coding*
> Made in : *Palembang*
> Nama Asli : *Pebri Pratama*
────────────
❏ *Info Server*
> Tanggal Server : *${jangwak}*
> Database : *MongoDB*
> Waktu Server : *${time}*
> User Server : *${jumlahUser}*
────────────
❏ *Jam Indonesia*
> WIB : *${moment().utcOffset('+0700').format('HH:mm')}*
> WITA : *${moment().utcOffset('+0800').format('HH:mm')}*
> WIT : *${moment().utcOffset('+0900').format('HH:mm')}*
────────────
❏ *Info Pengguna*
> Uptime : *${runtime(process.uptime())}*
> Total Hit Server : *${jumlahcmd}*
> Library : *Baileys-Md*
> Total Hit Today : *${jumlahharian}*
└────────────
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏${require('./help/help.js').help(prefix, l, pushname)}`
const qtod = m.quoted? "true":"false"

// Case Nye Sini Ngab
switch(command) {
case 'donasi': case 'donate':{
mans.sendMessage(from, {image:{url:qris}, caption:`${require('./help/help.js').donate(prefix, l, pushname)}`}, {quoted:m})
}
break
case 'list': case 'menu': case 'help': case '?': {
                let kontol = [{
                                urlButton: {
                                    displayText: 'Source Code',
                                    url: 'https://github.com/Lexxy24/KaguraMD'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: '+62 822-7991-5237'
                                }
                            },{
                                quickReplyButton: {
                                    displayText: 'Status Bot',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Contact Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Info Profile',
                                    id: 'hanzo'
                                }
                            }]
mans.send5ButImg(m.chat, listmn, `© 𝘊𝘳𝘦𝘢𝘵𝘦𝘥 𝘉𝘺 𝘓𝘦𝘹𝘹𝘺 𝘖𝘧𝘧𝘪𝘤𝘪𝘢𝘭`, global.thumb, kontol)
}
        	break
case 'antilink': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args.length < 1) return fakvid('Ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (AntiLink) return fakvid('Udah Aktif Anj')
ntilink.push(from)
fakvid('Succes Antilink Aktif')
var groupe = await mans.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
mans.sendMessage(from, {text: `PERINGATAN!!! jika bukan admin jangan send link di group ini`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLink) return m.reply('Sudah Mati')
let off = ntilink.indexOf(from)
ntilink.splice(off, 1)
m.reply('Succes mematikan antilink di group ini')
} else {
m.reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
case 'antitag': {
if (isBan) return m.reply(mess.ban)
if (!isCreator) return
if (args.length < 1) return m.reply(`Ketik on untuk mengaktifkan\nKetik off untuk menonaktifkan`)
if (args[0] === 'on') {
if (antitags === true) return
global.antitags = true
m.reply(`Berhasil mengaktifkan antitag!`)
} else if (args[0] === 'off') {
if (antitags === false) return
global.antitags = false
m.reply(`Berhasil menonaktifkan antitag!`)
} else {
m.reply('Pilih on atau off')
}
}
break
case 'asupan':
if (isLimit < 1) return fakvid("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     db.users[m.sender].limit -= 1 // -1 limit
     m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
 fakey(mess.wait)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/random`
mans.sendMessage(from, {video:{url:buffer}, mimetype:"video/mp4", caption:"Success"}, {quoted:fakvid})
break
case 'asupanukhty':
case 'asupan-ukhty':
if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     db.users[m.sender].limit -= 1 // -1 limit
     m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
 fakey(mess.wait)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/ukhty`
mans.sendMessage(from, {video:{url:buffer}, mimetype:"video/mp4", caption:"Ini Kak Jangan Lupa Donasi Ya:)"}, {quoted:m})
break
case 'asupan-santuy':
case 'asupansantuy':
if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     db.users[m.sender].limit -= 1 // -1 limit
     m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
 fakey(mess.wait)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/santuy`
mans.sendMessage(from, {video:{url:buffer}, mimetype:"video/mp4", caption:"Ini Kak Jangan Lupa Donasi Ya:)"}, {quoted:m})
break
case 'hijaber':
if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     db.users[m.sender].limit -= 1 // -1 limit
     m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
 fakey(mess.wait)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/hijaber`
mans.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
case 'cecan-indo':
if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     db.users[m.sender].limit -= 1 // -1 limit
     m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
 fakey(mess.wait)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/indonesia`
mans.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
case 'cecan-malaysia':
if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     db.users[m.sender].limit -= 1 // -1 limit
     m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
 fakey(mess.wait)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/malaysia`
mans.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
case 'cecan-thai':
if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
kurangLimit(m.sender, 1)
m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
 fakey(mess.wait)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/thailand`
mans.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
case 'cecan-vietnam':
if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
kurangLimit(m.sender, 1)
m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
 fakey(mess.wait)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/vietnam`
mans.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
case 'cecan-korea':
if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
kurangLimit(m.sender, 1)
m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
 fakey(mess.wait)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/korea`
mans.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
case 'cecan-jepan':
if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
kurangLimit(m.sender, 1)
m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
 fakey(mess.wait)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/japan`
mans.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
case 'cecan':
if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
kurangLimit(m.sender, 1)
m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
 fakey(mess.wait)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/cecan`
mans.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
case 'darkjokes':

 fakey(mess.wait)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/randomimg/darkjokes`
mans.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
case 'meme':
if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
kurangLimit(m.sender, 1)
m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
 fakey(mess.wait)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/randomimg/meme`
mans.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
case 'fakta-unik':
if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
kurangLimit(m.sender, 1)
m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
 fakey(mess.wait)
tes = await fetchJson(`https://api.zacros.my.id/randomtext/faktaunik`)
teks = tes.result
buffer = `https://telegra.ph/file/7188012d573871aaf4fa0.jpg`
mans.sendMessage(from, {image:{url:buffer}, caption:teks}, {quoted:m})
break
case 'quotes':
tes = await fetchJson(`https://api.zacros.my.id/randomtext/quotes`)
teks = tes.result.quotes
buffer = `https://telegra.ph/file/7188012d573871aaf4fa0.jpg`
mans.sendMessage(from, {image:{url:buffer}, caption:teks}, {quoted:m})
break
case 'fml':
tes = await fetchJson(`https://api.zacros.my.id/randomtext/fml`)
teks = tes.result
m.reply(teks)
break
case 'cerpen':
tes = await fetchJson(`https://api.zacros.my.id/randomtext/cerpen`)
teks = tes.result
buffer = `https://telegra.ph/file/dcd94851554d89a015c5e.jpg`
mans.sendMessage(from, {image:{url:buffer}, caption:teks}, {quoted:m})
break
case 'katagalau':
tes = await fetchJson(`https://api.zacros.my.id/randomtext/katagalau`)
teks = tes.result
m.reply(teks)
break
case 'truth':{
tes = await fetchJson(`https://api.zacros.my.id/randomtext/truth`)
let buttons = [
                    {buttonId: `dare`, buttonText: {displayText: 'Dare 🎯'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://telegra.ph/file/7188012d573871aaf4fa0.jpg' },
                    caption: `${tes.result}`,
                    footer: `Truth Or Dare??\nClick Button`,
                    buttons: buttons,
                    headerType: 4
                }
                mans.sendMessage(m.chat, buttonMessage, { quoted: m })
       }
            break
case 'dare':{
tes = await fetchJson(`https://api.zacros.my.id/randomtext/dare`)
teks = tes.result
let buttons = [
                    {buttonId: `dare`, buttonText: {displayText: 'Truth 🎯'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://telegra.ph/file/7188012d573871aaf4fa0.jpg' },
                    caption: `${tes.result}`,
                    footer: `Truth Or Dare??\nClick Button`,
                    buttons: buttons,
                    headerType: 4
                }
                mans.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
//NEW 
case 'fotobts':
teks = `nih Kak >\\<`
buffer = `https://api.dapuhy.xyz/api/randomimage/batues?apikey=0gly81wDky`
mans.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break




//NEEWW
case 'waifu':
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/randomimg/waifu`
mans.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
case 'husbu':
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/randomimg/husbu`
mans.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
case 'loli':
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/randomimg/loli`
mans.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
case 'cosplay':
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/randomimg/cosplay`
mans.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break

case 'react': {
 reactionMessage = {
                    react: {
                        text: '🇮🇩',
                        key: { remoteJid: from, fromMe: false, id: quoted.id }
                    }
                }
                mans.sendMessage(from, reactionMessage)
                }
                break
case 'ytmp3':
  case 'youtubemp3':{
   fakey(mess.wait)
  if (args.length < 1) return fakvid('linknya?')
  if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     db.users[m.sender].limit -= 1 // -1 limit
     m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
   try{
    await yta(args[0])
.then((res) => {
     const { dl_link } = res
      axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
   
      mans.sendMessage(from, { audio: { url: dl_link }, mimetype: 'audio/mp4' }, { quoted: m })
      })
     
})
     } catch (e){
    m.reply(from, `Akses ditolak, tidak dapat mengunduh!. Cobalah menggunakan link yang lain`, { quoted : m })
   }
  }
  break
  case 'ytmp4':
  case 'youtubemp4':{
   fakey(mess.wait)
  if (args.length < 1) return reply('linknya?')
  if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     db.users[m.sender].limit -= 1 // -1 limit
     m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
   try{
    await ytv(args[0])
.then((res) => {
     const { dl_link } = res
      axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
   
      mans.sendMessage(from, { video: { url: dl_link }, caption: "Succes\nJangan Lupa Donasi Ya:)" }, { quoted: m })
      })
     
})
     } catch (e){
    m.reply(from, `Akses ditolak, tidak dapat mengunduh!. Cobalah menggunakan link yang lain`, { quoted : m })
   }
  }
  break
case 'pin':
case 'pinterest': {
	             if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     db.users[m.sender].limit -= 1 // -1 limit
     m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
                fakey(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                mans.sendMessage(m.chat, { image: { url: result }, caption: ' ➭ Media Url : '+result }, { quoted: m })
            }
            break
case 'swm': case 'stickerwm': {
 fakey(mess.wait)
if (isBan) return m.reply(mess.ban)
if (!args.join(" ")) return m.reply(`Example :\nswm Lexxy||77+ | Pack`)
if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     db.users[m.sender].limit -= 1 // -1 limit
     m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (m.quoted.isAnimated === true) {
mans.downloadAndSaveMediaMessage(quoted, "gifee")
mans.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await mans.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await mans.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else {
m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break
// Foto Editing bruda 
case 'invert':
case 'imageinvert':{
fakey(mess.wait)
if (isBan) return m.reply(mess.ban)
if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     db.users[m.sender].limit -= 1 // -1 limit
     m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
if (/image/.test(mime)) {
let dwnld = await quoted.download()
let { floNime } = require('./lib/uploader')
let fatGanss = await floNime(dwnld)
buffer = `http://api.lolhuman.xyz/api/editor/invert?apikey=${lolkey}&img=${fatGanss.result.url}`
mans.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
}
}
break
case 'tolol':
fakey(mess.wait)
		anu = `http://api.lolhuman.xyz/api/toloserti?apikey=${lolkey}&name=${q}`
		mans.sendMessage(from, {image:{url:anu}, caption:"Done!"}, {quoted:m})
		break
case 'wasted':
case 'imagewasted':{
fakey(mess.wait)
if (isBan) return m.reply(mess.ban)
if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     db.users[m.sender].limit -= 1 // -1 limit
     m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
if (/image/.test(mime)) {
let dwnld = await quoted.download()
let { floNime } = require('./lib/uploader')
let fatGa = await floNime(dwnld)
buffer = `https://api.lolhuman.xyz/api/editor/wasted?apikey=${lolkey}&img=${fatGa.result.url}`
mans.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
}
}
break
case 'jail':{
fakey(mess.wait)
if (isBan) return m.reply(mess.ban)
if (/image/.test(mime)) {
let dwnld = await quoted.download()
let { floNime } = require('./lib/uploader')
let fatGan = await floNime(dwnld)
buffer = `https://api.lolhuman.xyz/api/editor/jail?apikey=${lolkey}&img=${fatGan.result.url}`
mans.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
}
}
break
case 'smeme2': {
	        let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
	        if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     db.users[m.sender].limit -= 1 // -1 limit
     m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
	        if (!/image/.test(mime)) throw respond
            if (!text) throw respond
	        fakey(mess.wait)
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
	        let dwnld = await quoted.download()
	        let { floNime } = require('./lib/uploader')
	        let fatGans = await floNime(dwnld)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
	        let FaTiH = await mans.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
	        await fs.unlinkSync(FaTiH)
            }
	       break
	      
case 'smeme': {
	        let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} |text2`
	        if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     db.users[m.sender].limit -= 1 // -1 limit
     m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
	        if (!/image/.test(mime)) throw respond
            if (!text) throw respond
	        fakey(mess.wait)
	        atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
	        let dwnld = await quoted.download()
	        let { floNime } = require('./lib/uploader')
	        let fatGans = await floNime(dwnld)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
	        let FaTiH = await mans.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
	        await fs.unlinkSync(FaTiH)
            }
	       break
case 'sticker': case 's': {
if (isBan) return m.reply(mess.ban)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await mans.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.packname2 })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await mans.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.packname2 })
await fs.unlinkSync(encmedia)
} else {
m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break

// NEW FITUR INTERNET
case 'detiknews': case 'detik':{
  if (args.length < 1) return m.reply(from, 'Cari berita apa?', { quoted : m } )
  const aku_biji = await detikNews(args.join(' ')).catch(e => console.log("Undefined"))
  console.log(aku_biji)   
  let sections = []   
  for (let i = 0; i < aku_biji.length; i++) {
  const list = {title: `Result detik news ${i + 1}`,
  rows: [
	    {
	     title: `${aku_biji[i].Title}`, 
	     rowId: `#google ${aku_biji[i].Link}`,
	     description: ``
	    }, 
	    ]
     }
     sections.push(list)   
     }
  const sendm =  mans.sendMessage(
      from, 
      {
       text: "Cari berita di detik.com",
       footer: "Fax Dev",
       title: "[ Data Data Yang Kami Dapatkan Dari detik.com 🔎 ]",
       buttonText: "Click and see search results➡️",
       sections
      }, { quoted : m }
    )  
   }
  break
case 'wiki':
if (args.length < 1) return m.reply(' Yang Mau Di Cari Apa? ')
const res2 = await wikiSearch(q).catch(e => {
return m.reply('_[ ! ] Error Hasil Tidak Ditemukan_') 
}) 
const result2 = `*Judul :* ${res2[0].judul}\n*Wiki :* ${res2[0].wiki}`
mans.sendMessage(from, { image : { url : res2[0].thumb }, caption : result2}) 
break
case 'gempa':
const tres = await Gempa()
var { Waktu, Lintang, Bujur, Magnitude, Kedalaman, Wilayah, Map } = tres.result
console.log(Map)
const captt = `Waktu : ${Waktu}\nLintang : ${Lintang}\nBujur : ${Bujur}\nWilayah : ${Wilayah}`
mans.sendMessage(from, { image : { url : Map }, caption : captt})
break
case 'covidindo':
case 'covid':
const c = await covid()
var { kasus, kematian, sembuh } = c[0]
mans.sendMessage(from, {text : `Kasus : ${kasus}\n\nKematian : ${kematian}\n\nSembuh : ${sembuh}`}, m)
break
case 'jadwaltv':
if (!q) return m.reply('Kirim perintah *#jadwaltv [channel]*')
m.reply(await jadwaltv(q))
break
case 'playstore': case 'apk':
if(!q) return m.reply('lu nyari apa?')
let play = await hx.playstore(q)
let storee = '❉─────────────────────❉\n'
for (let i of play){
storee += `\n*「 *PLAY STORE* 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
}
m.reply(storee)
break
//FITUR ISLAMIC
case 'kisahnabi':
	if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} muhammad`)
kisah = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/muhammad?apikey=RelzzSlemek`)
nabii = `Nama : ${kisah.result.name}
Kelahiran : ${kisah.result.thn_kelahiran}
Wafat :${kisah.result.place}
Singgah : ${kisah.result.story}

Cerita : ${kisah.kisah}`
m.reply(nabii)
break

case 'apakah':
if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
const kah = apa[Math.floor(Math.random() * apa.length)]
mans.sendMessage(from, { text: `Pertanyaan : Apakah ${q}\nJawaban : ${kah}` }, { quoted: m })

break
case 'bisakah':
if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const bisa = ['Bisa','Gak Bisa','Gak Bisa Ajg Aaokawpk','TENTU PASTI KAMU BISA!!!!']
const ga = bisa[Math.floor(Math.random() * bisa.length)]
mans.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ga}` }, { quoted: m })

break
case 'bagaimanakah':
if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel','astaghfirallah Beneran???','Pusing ah','Owhh Begitu:(','Yang Sabar Ya Bos:(','Gimana yeee']
const ya = gimana[Math.floor(Math.random() * gimana.length)]
mans.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ya}` }, { quoted: m })
break
case 'rate':
 if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
const ra = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
const te = ra[Math.floor(Math.random() * ra.length)]
mans.sendMessage(from, { text: `Rate : ${q}\nJawaban : *${te}%*` }, { quoted: m })
break
case 'gantengcek':
case 'cekganteng':
 if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Riych`)
const gan = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
const teng = gan[Math.floor(Math.random() * gan.length)]
mans.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${teng}%*` }, { quoted: m })
break
case 'cantikcek':
  case 'cekcantik':
 if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Riych`)
	const can = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
const tik = can[Math.floor(Math.random() * can.length)]
mans.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${tik}%*` }, { quoted: m })
break
case 'sangecek':
  case 'ceksange':
    case 'gaycek':
      case 'cekgay':
        case 'lesbicek':
          case 'ceklesbi':
				if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ${pushname}`)
const sangeh = ['5', '10', '15','20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
mans.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${sange}%*` }, { quoted: m })
break
case 'kapankah':
				if (!q) return m.reply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi','20 Hari Lagi', '25 Hari Lagi','30 Hari Lagi','35 Hari Lagi','40 Hari Lagi','45 Hari Lagi','50 Hari Lagi','55 Hari Lagi','60 Hari Lagi','65 Hari Lagi','70 Hari Lagi','75 Hari Lagi','80 Hari Lagi','85 Hari Lagi','90 Hari Lagi','100 Hari Lagi','5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi','20 Bulan Lagi', '25 Bulan Lagi','30 Bulan Lagi','35 Bulan Lagi','40 Bulan Lagi','45 Bulan Lagi','50 Bulan Lagi','55 Bulan Lagi','60 Bulan Lagi','65 Bulan Lagi','70 Bulan Lagi','75 Bulan Lagi','80 Bulan Lagi','85 Bulan Lagi','90 Bulan Lagi','100 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','Besok','Lusa',`Abis Command Ini Juga Lu ${q}`]
const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
mans.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : *${kapankah}*` }, { quoted: m })
break
case 'wangy':
              if (!q) return m.reply(`Contoh : .wangy Riy`)
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
             m.reply(awikwok)
              break
case 'cekmati':
              if (!q) return m.reply(`Invalid!\n\nYg mau di cek siapa kontol?`)
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              m.reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
              break
case 'gsmarena': {
            if (!text) return m.reply(`Example : ${prefix + command} realme`)
            let res = await fetchJson(`https://zenzapis.xyz/webzone/gsmarena?query=${text}&apikey=APIKEY`)
            let { judul, rilis, thumb, ukuran, type, storage, display, inchi, pixel, videoPixel, ram, chipset, batrai, merek_batre, detail } = res.result
let capt = `⭔ Title: ${judul}
⭔ Realease: ${rilis}
⭔ Size: ${ukuran}
⭔ Type: ${type}
⭔ Storage: ${storage}
⭔ Display: ${display}
⭔ Inchi: ${inchi}
⭔ Pixel: ${pixel}
⭔ Video Pixel: ${videoPixel}
⭔ Ram: ${ram}
⭔ Chipset: ${chipset}
⭔ Battery: ${batrai}
⭔ Battery Brand: ${merek_batre}
⭔ Detail: ${detail}`
            mans.sendImage(m.chat, thumb, capt, m)
            }
            break
            case 'jadwalbioskop': {
if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
kurangLimit(m.sender, 1)
m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
            if (!text) return m.reply(`Example: ${prefix + command} jakarta`)
            let res = await fetchJson(`https://zenzapis.xyz/webzone/jadwalbioskop?kota=${text}&apikey=hdiiofficial`)
            let capt = `Jadwal Bioskop From : ${text}\n\n`
            for (let i of res.result){
            capt += ` Title: ${i.title}\n`
            capt += ` Thumbnail: ${i.thumb}\n`
            capt += ` Url: ${i.url}\n\n──────────────────────\n`
            }
            mans.sendImage(m.chat, res.result[0].thumb, capt, m)
            }
            break
            case 'nowplayingbioskop': {
            let res = await fetchJson(api('zenz', '/webzone/nowplayingbioskop', {}, 'apikey'))
            let capt = `Now Playing Bioskop\n\n`
            for (let i of res.result){
            capt += ` Title: ${i.title}\n`
            capt += ` Url: ${i.url}\n`
            capt += ` Img Url: ${i.img}\n\n──────────────────────\n`
            }
            mans.sendImage(m.chat, res.result[0].img, capt, m)
            }
            break
            case 'aminio': {
            if (!text) return m.reply(`Example: ${prefix + command} free fire`)
            let res = await fetchJson(`https://zenzapis.xyz/webzone/amino?query=${text}&apikey=hdiiofficial`)
            let capt = `Amino Search From : ${text}\n\n`
            for (let i of res.result){
            capt += ` Community: ${i.community}\n`
            capt += ` Community Link: ${i.community_link}\n`
            capt += ` Thumbnail: ${i.community_thumb}\n`
            capt += ` Description: ${i.community_desc}\n`
            capt += ` Member Count: ${i.member_count}\n\n──────────────────────\n`
            }
            mans.sendImage(m.chat, 'https://'+res.result[0].community_thumb, capt, m)
            }
            break
            case 'wattpad': {
            if (!text) return m.reply(`Example : ${prefix + command} love`)
            let res = await fetchJson(`https://zenzapis.xyz/webzone/wattpad?query=$text}&apikey=hdiiofficial`)
            let { judul, dibaca, divote, bab, waktu, url, thumb, description } = res.result[0]
            let capt = `Wattpad From query\n\n`
            capt += ` Judul: ${judul}\n`
            capt += ` Dibaca: ${dibaca}\n`
            capt += ` Divote: ${divote}\n`
            capt += ` Bab: ${bab}\n`
            capt += ` Url: ${url}\n`
            capt += ` Deskripsi: ${description}`
            mans.sendImage(m.chat, thumb, capt, m)
            }
            break
            case 'webtoons': {
            if (!text) return m.reply(`Example : ${prefix + command} love`)
            let res = await fetchJson(`https://zenzapis.xyz/webzone/webtoons?query=${text}&apikey=hdiiofficial`)
            let capt = `Webtoons Search From : ${text}\n\n`
            for (let i of res.result) {
            capt += ` Judul: ${i.judul}\n`
            capt += ` Like: ${i.like}\n`
            capt += ` Creator: ${i.creator}\n`
            capt += ` Genre: ${i.genre}\n`
            capt += ` Url: ${i.url}\n\n──────────────────────\n`
            }
            m.reply(capt)
            }
            break
            case 'drakor': {
            if (!text) return m.reply(`Example : ${prefix + command} love`)
            let res = await fetchJson(`https://zenzapis.xyz/webzone/drakor?query=${text}&apikey=hdiiofficial`)
            let capt = `Drakor Search From : ${text}\n\n`
            for (let i of res.result) {
            capt += `⭔ Judul: ${i.judul}\n`
            capt += `⭔ Years: ${i.years}\n`
            capt += `⭔ Genre: ${i.genre}\n`
            capt += `⭔ Url: ${i.url}\n`
            capt += `⭔ Thumbnail Url: ${i.thumbnail}\n\n──────────────────────\n`
            }
            mans.sendImage(m.chat, res.result[0].thumbnail, capt, m)
            }
            break
case 'bj':case 'ero':case 'cum':case 'feet':case 'yuri':case 'trap':case 'lewd':case 'feed':case 'eron':case 'solo':case 'gasm':case 'poke':case 'anal':case 'holo':case 'tits':case 'kuni':case 'kiss':case 'erok':case 'smug':case 'baka':case 'solog':case 'feetg':case 'lewdk':case 'pussy':case 'femdom':case 'cuddle':case 'eroyuri':case 'cum_jpg':case 'blowjob':case 'erofeet':case 'holoero':case 'erokemo':case 'fox_girl':case 'futanari':case 'lewdkemo':case 'pussy_jpg':case 'kemonomimi':case 'nsfw_avatar': 
	
	    buffer = `http://api.lolhuman.xyz/api/random2/${command}?apikey=${lolkey}`
                    mans.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
    break
case 'cry':	anu = `http://api.lolhuman.xyz/api/random/cry?apikey=${lolkey}`
fakey(mess.wait)
mans.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.packname2 })
break
case 'kiss3':	
anu = `http://api.lolhuman.xyz/api/random/kiss?apikey=${lolkey}`
fakey(mess.wait)
mans.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.packname2 })
break
case 'kiss2':	
anu = `http://api.lolhuman.xyz/api/random2/kiss?apikey=${lolkey}`
fakey(mess.wait)
mans.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.packname2 })
break
case 'cringe':
		anu = `http://api.lolhuman.xyz/api/random/cringe?apikey=${lolkey}`
fakey(mess.wait)
mans.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.packname2 })
break
case 'dance':	
anu = `http://api.lolhuman.xyz/api/random/dance?apikey=${lolkey}`
fakey(mess.wait)
mans.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.packname2 })
break
case 'kill':	
anu = `http://api.lolhuman.xyz/api/random/kill?apikey=${lolkey}`
fakey(mess.wait)
mans.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.packname2 })
break
case 'happy':	
anu = `http://api.lolhuman.xyz/api/random/happy?apikey=${lolkey}`
fakey(mess.wait)
mans.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.packname2 })
break
case 'patrick':	
anu = `http://api.lolhuman.xyz/api/sticker/patrick?apikey=${lolkey}`
fakey(mess.wait)
mans.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.packname2 })
break
case 'bonk':	
anu = `http://api.lolhuman.xyz/api/random/bonk?apikey=${lolkey}`
fakey(mess.wait)
mans.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.packname2 })
break
case 'smug2':	
anu = `http://api.lolhuman.xyz/api/random/smug?apikey=${lolkey}`
fakey(mess.wait)
mans.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.packname2 })
break
case 'slap':	
anu = `http://api.lolhuman.xyz/api/random/slap?apikey=${lolkey}`
fakey(mess.wait)
mans.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.packname2 })
break
case 'wave':	
anu = `http://api.lolhuman.xyz/api/random/wave?apikey=${lolkey}`
fakey(mess.wait)
mans.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.packname2 })
break
case 'smile':	
anu = `http://api.lolhuman.xyz/api/random/smile?apikey=${lolkey}`
fakey(mess.wait)
mans.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.packname2 })
break
case 'bully':
		anu = `http://api.lolhuman.xyz/api/random/bully?apikey=${lolkey}`
fakey(mess.wait)
mans.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.packname2 })
break
case 'art':case 'bts':case 'exo':case 'elf':case 'loli':case 'neko':case 'shota':case 'sagiri':case 'shinobu':case 'megumin':case 'wallnime':   

  buffer = `http://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`
    mans.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
    break
case 'blowjob':
case 'yaoi':
case 'ecchi':
case 'ahegao':
case 'hololewd':
case 'sideoppai':
case 'animefeets':
case 'animebooty':
case 'animethighss':
case 'animearmpits':
case 'lewdanimegirls':
case 'biganimetiddies':
case 'animebellybutton': 
 buffer = `http://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${lolkey}`
mans.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
case 'naruto':
case 'minato':
case 'boruto':
case 'hinata':
case 'sasuke':
case 'sakura':
case 'kaneki':
case 'toukachan':
case 'rize':
case 'akira':
case 'itori':
case 'kurumi':
case 'miku':
fakey(mess.wait)
nye = `http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=${command}`
mans.sendMessage(from, {image:{url:nye}, caption:"Done!"}, {quoted:m})
break			
// akhir fitur anime
case 'anjing':
nye = `http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=anjing`
fakey(mess.wait)
mans.sendMessage(from, {image:{url:nye}, caption:"Done!"}, {quoted:m})
break			
// Eval Ada Disini
default:
if (budy.startsWith('=>')) {
if (!isCreator) return m.reply(mess.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { ${budy.slice(3)} })()`)))
} catch (e) {
mans.sendMessage(from, {image:err4r, caption:String(e)}, {quoted:m})
}
}
if (budy.startsWith('>')) {
if (!isCreator) return m.reply(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await mans.sendMessage(from, {image:err4r, caption:String(err)}, {quoted:m})
}
}

if (budy.startsWith('$')) {
if (!isCreator) return m.reply(mess.owner)
console.log('\x1b[1;34m~\x1b[1;37m>', '[\x1b[1;33mEXEE\x1b[1;37m]', time, color(`Exe Dari Owner Awog 🗿`, 'cyan'))
exec(budy.slice(2), (err, stdout) => {
if(err) return mans.sendMessage(from, {image:err4r, caption:String(err)}, {quoted:m})
if (stdout) return m.reply(stdout)
})
}
// Anti Tag ( FenZo||77+ )
const listTag = ["6281523940672@s.whatsapp.net"]
const partiNum = (m.mtype === 'extendedTextMessage') ? m.message.extendedTextMessage.contextInfo.participant : ''
// Antitag Via Reply ( FenZo||77+ )
if (listTag.includes(partiNum)) {
if (antitags === false) return
if (!m.isGroup) return
if (m.key.fromMe) return
sendNye = 'https://uploader.caliph.my.id/file/Hxf936tvPc.webp'
mans.sendReadReceipt(m.chat, m.sender, [m.key.id])
mans.sendImageAsSticker(m.chat, `https://uploader.caliph.my.id/file/Hxf936tvPc.webp`, m, {packname: packname, author: author})
}
// Antitag Via Tag ( FenZo||77+ )
if (budy.includes("@6281523940672")) {
if (antitags === false) return
if (!m.isGroup) return
if (m.key.fromMe) return
mans.sendReadReceipt(m.chat, m.sender, [m.key.id])
mans.sendImageAsSticker(m.chat, `https://uploader.caliph.my.id/file/Hxf936tvPc.webp`, m, {packname: packname, author: author})
}
if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
mans.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}
} catch (err) {
mans.sendMessage("6281523940672@s.whatsapp.net", util.format(err), {quoted:m})
console.log(err)
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})

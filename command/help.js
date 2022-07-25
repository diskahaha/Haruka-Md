const fs = require("fs");
const petik = '```'
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")


function toCommas(x) {
    x = x.toString()
    var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
       x = x.replace(pattern, "$1,$2");
    return x;
}

exports.allMenu = (ucapanWaktu, pushname, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'}

Hitung Mundur HUT RI Ke-77
${mundur}

*STATISTICS*
 • Upload : ${upload}
 • Downloads : ${download}

*BOT INFO*
 𒆜 Bot Name : ${botName}
 𒆜 Time : ${jam}
 𒆜 Date : ${tanggal(new Date())}
 𒆜 Runtime : ${runtime(process.uptime())}

*USER INFO*
 𒆜 Name : ${pushname !== undefined ? pushname : '-'}
 𒆜 Status : ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
 𒆜 Limit : ${isCreator ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
 𒆜 Limit Game : ${isCreator ? '-' : cekGLimit(sender, gcount, glimit)}
 𒆜 Balance : ${toCommas(getBalance(sender, balance))}

*MAIN MENU*
 ༢࿔ྀ ${prefix}speed

*CONVERTER/TOOLS*
 ༢࿔ྀ ${prefix}sticker
 ༢࿔ྀ ${prefix}stickerwm
 ༢࿔ྀ ${prefix}smeme
 ༢࿔ྀ ${prefix}toimg
 ༢࿔ྀ ${prefix}tovideo
 ༢࿔ྀ ${prefix}tomp3
 ༢࿔ྀ ${prefix}ttp
 ༢࿔ྀ ${prefix}attp
 ༢࿔ྀ ${prefix}emojimix
 ༢࿔ྀ ${prefix}nuliskiri
 ༢࿔ྀ ${prefix}nuliskanan
 ༢࿔ྀ ${prefix}foliokiri
 ༢࿔ྀ ${prefix}foliokanan
 ༢࿔ྀ ${prefix}say
 ༢࿔ྀ ${prefix}translate

*ANONYMOUS CHATS*
 ༢࿔ྀ ${prefix}anonymous
 ༢࿔ྀ ${prefix}start
 ༢࿔ྀ ${prefix}next
 ༢࿔ྀ ${prefix}stop
 ༢࿔ྀ ${prefix}sendprofile

*DOWNLOADS MENU*
 ༢࿔ྀ ${prefix}play
 ༢࿔ྀ ${prefix}ytmp3
 ༢࿔ྀ ${prefix}ytmp4
 ༢࿔ྀ ${prefix}instagram
 ༢࿔ྀ ${prefix}igstory
 ༢࿔ྀ ${prefix}tiktok
 ༢࿔ྀ ${prefix}tiktoknowm
 ༢࿔ྀ ${prefix}tiktokaudio
 ༢࿔ྀ ${prefix}mediafire
 ༢࿔ྀ ${prefix}gitclone

*GROUP MENU*
 ༢࿔ྀ ${prefix}afk
 ༢࿔ྀ ${prefix}welcome
 ༢࿔ྀ ${prefix}left
 ༢࿔ྀ ${prefix}setwelcome
 ༢࿔ྀ ${prefix}changewelcome
 ༢࿔ྀ ${prefix}delsetwelcome
 ༢࿔ྀ ${prefix}setleft
 ༢࿔ྀ ${prefix}changeleft
 ༢࿔ྀ ${prefix}delsetleft
 ༢࿔ྀ ${prefix}linkgc
 ༢࿔ྀ ${prefix}setppgc
 ༢࿔ྀ ${prefix}setnamegc
 ༢࿔ྀ ${prefix}setdesc
 ༢࿔ྀ ${prefix}antilink
 ༢࿔ྀ ${prefix}antiwame
 ༢࿔ྀ ${prefix}open
 ༢࿔ྀ ${prefix}close
 ༢࿔ྀ ${prefix}add
 ༢࿔ྀ ${prefix}kick
 ༢࿔ྀ ${prefix}promote
 ༢࿔ྀ ${prefix}demote
 ༢࿔ྀ ${prefix}revoke
 ༢࿔ྀ ${prefix}hidetag

*GAME MENU*
 ༢࿔ྀ ${prefix}tictactoe
 ༢࿔ྀ ${prefix}delttt
 ༢࿔ྀ ${prefix}casino
 ༢࿔ྀ ${prefix}delcasino

*SEARCH MENU*
 ༢࿔ྀ ${prefix}lirik
 ༢࿔ྀ ${prefix}grupwa
 ༢࿔ྀ ${prefix}pinterest
 ༢࿔ྀ ${prefix}ytsearch

*STORAGE*
 ༢࿔ྀ ${prefix}addstik
 ༢࿔ྀ ${prefix}addvn
 ༢࿔ྀ ${prefix}addimg
 ༢࿔ྀ ${prefix}addvid
 ༢࿔ྀ ${prefix}liststik
 ༢࿔ྀ ${prefix}listvn
 ༢࿔ྀ ${prefix}listimg
 ༢࿔ྀ ${prefix}listvid
 
*BAILEYS*
 ༢࿔ྀ ${prefix}fitnah
 ༢࿔ྀ ${prefix}getquoted
 ༢࿔ྀ ${prefix}fakehidetag
 ༢࿔ྀ ${prefix}react
 ༢࿔ྀ ${prefix}setcmd
 ༢࿔ྀ ${prefix}delcmd

*𝕭𝖔𝖙 • Andii ༢࿔ྀ*
 ༢࿔ྀ ${prefix}autobio
 ༢࿔ྀ ${prefix}autorespond
 ༢࿔ྀ ${prefix}anticall
 ༢࿔ྀ ${prefix}autoblok
 ༢࿔ྀ ${prefix}join
 ༢࿔ྀ ${prefix}left
 ༢࿔ྀ ${prefix}self
 ༢࿔ྀ ${prefix}public
 ༢࿔ྀ ${prefix}setppbot
 ༢࿔ྀ ${prefix}broadcast
 ༢࿔ྀ ${prefix}bcimg
 ༢࿔ྀ ${prefix}bcstik
 ༢࿔ྀ ${prefix}bcvn
 ༢࿔ྀ ${prefix}bcvideo
 ༢࿔ྀ ${prefix}bcsewa
 ༢࿔ྀ ${prefix}addpremium
 ༢࿔ྀ ${prefix}delpremium
 ༢࿔ྀ ${prefix}addsewa
 ༢࿔ྀ ${prefix}delsewa
`
}

exports.donate = (pushname, ownerNumber) => {
    return`Contact  Owner:
wa.me/${ownerNumber} (Owner)`
}

const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_25_12_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTksXG4gICAgICAgIDUxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTM4LFxuICAgICAgICA3NyxcbiAgICAgICAgODEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDM0LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjE3LFxuICAgICAgICA0NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzksXG4gICAgICAgIDI2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAzMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDcwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTAzLFxuICAgICAgICA2OSxcbiAgICAgICAgMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDc0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDM5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDY4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDUzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTY5LFxuICAgICAgICA3NixcbiAgICAgICAgMjIxLFxuICAgICAgICA2MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDksXG4gICAgICAgIDE2NixcbiAgICAgICAgMjA0LFxuICAgICAgICA5NixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTMwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDY3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwLFxuICAgICAgICAxODIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDQsXG4gICAgICAgIDY1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzNixcbiAgICAgICAgNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDExOCxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxODcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDcwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDY1LFxuICAgICAgICAxMzksXG4gICAgICAgIDIyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDQsXG4gICAgICAgIDk0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc0LFxuICAgICAgICAxMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDgsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDc3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDMyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDc1LFxuICAgICAgICAxMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDU2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTMzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTYyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTc0LFxuICAgICAgICA4MixcbiAgICAgICAgMTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjIsXG4gICAgICAgIDQ2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDc3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTYyLFxuICAgICAgICA3NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjAzLFxuICAgICAgICA2NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNDksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzksXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDg4LFxuICAgICAgICA1OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjE5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk9YWXVJL0MvYzJDcStHUWVtQXdOSHJ5WThOUlFBeW5YbjBTWFhVN1JzWmc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjZiX2hoUkg5U3BDZGFYYXFKRkEyM1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzRmMWZhMGItZWEwNi00MDA2LTgxMzEtNGM0Yzk3ZDU1M2MyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzOCxcbiAgICAgIDM1LFxuICAgICAgMTU0LFxuICAgICAgMjEzLFxuICAgICAgMTk3LFxuICAgICAgNzcsXG4gICAgICAxNDcsXG4gICAgICAxMjksXG4gICAgICAxODcsXG4gICAgICA2NCxcbiAgICAgIDI0NixcbiAgICAgIDIzNyxcbiAgICAgIDE0MixcbiAgICAgIDI0OCxcbiAgICAgIDE2NCxcbiAgICAgIDExOSxcbiAgICAgIDE5MSxcbiAgICAgIDI0NyxcbiAgICAgIDE5OSxcbiAgICAgIDE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzMixcbiAgICAgIDEzMCxcbiAgICAgIDIyMSxcbiAgICAgIDk1LFxuICAgICAgMjA5LFxuICAgICAgMTQ2LFxuICAgICAgMjUzLFxuICAgICAgNzAsXG4gICAgICA3OCxcbiAgICAgIDE2LFxuICAgICAgMzgsXG4gICAgICA4MSxcbiAgICAgIDE4NCxcbiAgICAgIDYxLFxuICAgICAgMTQxLFxuICAgICAgNjMsXG4gICAgICAxMTcsXG4gICAgICAyMTEsXG4gICAgICAyMjUsXG4gICAgICAxMzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWVlGUE1QM0ZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwNjI2NDE5MzE6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3MzE1NjIxMjI2OTI5MToxMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOM21nYVFGRUxiVHhyb0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk15L0JibHRNODlhOUFIKzUwcnkwRHdBMGMrRXRLVlFPUmNpajdUVVpmdzg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidHFuUjZpTGErNEtvd0Jwb05qMSsxUTlPRVNRSWEyRUtGVldlaDdQM0Q4c1M3ZkNRYXJraHJGYWV2RnBLODVaOTNQU3VGQm1lazZXUzdJd3kyUERzamc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSlZUelNuQUlnTWxpYzBUUng0NHNxOGdrODVOcGd6V2V3cUtDZTlHUWZtRkNlSmROeUttcVpKMUt1WUdXYUNwdGQzcmhGdWFrZE1WUHl5K1d3Z1dxRFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA2MjY0MTkzMToxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzNDA1MTEyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRlFMXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGUUwuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ3SHl2ZDhIV0FYTHZlQmtzdXhpM0hYN1Bhd0hJNGhQY2Qvd3I4OW94ckdRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0MTc3MDQyODUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTczMzQwNTExODg2N1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

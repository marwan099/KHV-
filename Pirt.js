const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const express = require("express");
const db = require("quick.db"); 
const app = express(); 
module.exports = {
run(client,message,args) {

const prefix = client.prefix;

if(message.author.bot || !message.guild)return;
let embed = new Discord.MessageEmbed()
.setTitle(`Help Menu`)
.setAuthor(`${message.author.tag}`,message.author.avatarURL())
.setColor(`RANDOM`)
.setThumbnail(client.user.avatarURL())
.setTimestamp()
          .setDescription(
          `${client.user.username}\n Developers : <@870417868259459174>`)
.addField(`**● | ${prefix}help**`,`**\` قائمة \`**`)
.addField(`**● | ${prefix}line**`, `**\` لوضع الخط \`**`)
.addField(`**● | ${prefix}add-room**`, `**\` لاضافة روم الي الخط التلقائي \`**`)
.addField(`**● | ${prefix}clear-db**`,`**\` لمسح جميع البيانات الخاصة بالسيرفر \`**`)
.addField(`**● | ${prefix}set-line**`,`**\` لتحديد الخط \`**`)
.addField(`**● | ${prefix}set-reaction**`,`**\` لتحديد الريأكشن \`**`)
.addField(`**● | ${prefix}support**`, `**\` الدعم الفني للبوت \`**`)
  .setFooter(
          `Developed by : Pirt YT`,
          `https://i.ibb.co/31d3V2Z/Background.png`
        )
        .setTimestamp()
        .addField(
          `Links`,
          `[Pirt YT Discord](https://discord.gg/JduyJKphVV)\n[Pirt YT Youtube](https://www.youtube.com/channel/UCejGcNpkzNdoUqHvcVGfCHg/featured)`
        )
message.channel.send(embed)


    },
    config : {
        name: "help",
        alis : ["h"]
    }
}

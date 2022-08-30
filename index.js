const express = require("express");
const app = express();

app.listen(() => console.log("Server started"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});

const Discord = require("discord.js");
const client = new Discord.Client();

var prefix = "."; // تعديل مهم جدا
process.on("unhandledRejection", (reason, promise) => {
        console.log("Unhandled Rejection at: " + promise)
        console.log("Reason: " + reason)
      })
      process.on("uncaughtException", (err, origin) => {
        console.log("Caught exception: " + err)
        console.log("Origin: " + origin)
      })
      process.on('uncaughtExceptionMonitor', (err, origin) => {
        console.log(err);
        console.log("Origin: " + origin)
      });
      process.on('multipleResolves', (type, promise, reason) => {
        console.log(type, promise);
      });



client.on("ready", () => {
  console.log(`logged in as ${client.user.username}`)
  client.user.setStatus("idle")
function arrested() { 
 let status = [`Developed By MABA KALARI`, ` MABA KALARI  = UP`]
 let S = Math.floor(Math.random() * status.length);
 client.user.setPresence({
        status: 'online', //تعدلش حاجة هنا
        activity: {
            name: status[S],
            type: "STREAMING", url: "https://www.twitch.tv/help"
        }
    })
}; 
setInterval(arrested, 5000)
});


const color = "#ff0000"
client.on("message", message => {
  if (message.content.startsWith(prefix + "bc")) {
    let c = "0";
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`> **<a:ss_3:975025683644416061> __You Don't Have Permisssions__**`);

    message.delete();
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    let noargs = new Discord.MessageEmbed()
      .setAuthor(
        message.author.username,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setDescription(`> ** <a:867053381733974076:975011622106067014> __Pls Type Your Broadcast Message__**`)
.setColor(color)
      .setTimestamp()
      .setFooter(
        message.author.username,
        message.author.displayAvatarURL({ dynamic: true })
      );
    if (!args) return message.channel.send(message.author, noargs);
    message.guild.members.cache.forEach(m => {
        m.send(`${args}\n ${m}`).then(c++).catch(err => {
      if(err) {
        console.log(err)
      }
      });
      });
    let embed = new Discord.MessageEmbed()
      .setAuthor(
        message.author.username,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setDescription(
        `> ** <a:green_correct109:975012268616073227> __Done Send Your Broadcast Message To ${message.guild.memberCount} Members__ **`
      )
      .setTimestamp()
.setColor(color)
      .setFooter(
        message.author.username,
        message.author.displayAvatarURL({ dynamic: true })
      );
    message.channel
      .send(`> **<a:Loading_Color:975011900834320435> __Send Your Message Pls Wait__ **`)
      .then(me => {
        me.edit(message.author, embed);
      });
  }

})


client.on("message", async message => {
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send(
        `> ** <a:C_6T5:975011834086170674> __My Ping Is ${client.ws.ping}__**`
      );
  }
});

client.on("message", message => {
  if (message.content.toLowerCase().startsWith(prefix + "help".toLowerCase())) {
    
    let help = new Discord.MessageEmbed()
      .setTimestamp()
.setColor(color)
      .setAuthor(
        message.author.username,
        message.author.displayAvatarURL({ dynamic: true })
      )
  
      .setThumbnail(client.user.displayAvatarURL())
.setDescription(`

> \`1\` <a:IconTyping:986670881063440405> **${prefix}ping : \`ئەگەر دەتەوێت بێهۆشی بۆت ببینی\`**

> \`2\` <a:95818:975011349438550016> **${prefix}bc : \`پەیامێک بۆ پادکاستەکە بنێرێت\`**

> \`3\` <a:95818:975011349438550016> **${prefix}setname : \`ئەگەر دەتەوێت ناوی پوتەکان بگۆڕیت\`**

> \`4\` <a:95818:975011349438550016> **${prefix}setavatar : \`ئەگەر دەتەوێت وێنەی بۆتەکە بگۆڕیت\`**
`)  

    message.channel.send(help);
  }
});
const owners = ["854305317549506592","854305317549506592"]
client.on("message", message => {
  if (message.content.startsWith(prefix + "setname")) {
    let args = message.content.split(" ");
    let botnameee = args.slice(1).join(" ");
    if (!owners.includes(message.author.id))
      return message.channel.send(
        `> **<a:ss_3:975025683644416061> __تۆ لە خەڵکی ڕێگەپێدراو نیت__ **`
      );
    if (!botnameee)
      return message.channel.send(
        `> **<a:ss_3:975025683644416061> __Pls Type The Bot Name__**`
      );
    client.user.setUsername(`${botnameee}`);
    message.channel.send(`> **<a:green_correct109:975012268616073227> __Pls Wait Setting The Bot Name__ **`).then(me => {
      me.edit(`> **<a:ss_5:975025685427023892> __ئەنجام دراوە دانانی ناوی بۆت بۆ ${botnameee}__**`);
    });
  }
  if (message.content.startsWith(prefix + "setavatar")) {
    let args = message.content.split(" ");
    let botnameee = args.slice(1).join(" ");
    if (!owners.includes(message.author.id))
      return message.channel.send(
        `> **<a:ss_3:975025683644416061> __تۆ لە خەڵکی ڕێگەپێدراو نیت__ **`
      );
    if (!botnameee)
      return message.channel.send(
        `> **<a:ss_3:975025683644416061> __پلس لینکی ئاڤاتار بۆت بنووسە__**`
      );
    client.user.setAvatar(`${botnameee}`);
    message.channel.send(`> **<a:green_correct109:975012268616073227> __Pls Wait Setting The Bot Avatar__ **`).then(me => {
      me.edit(` > **<a:ss_5:975025685427023892> __ئەنجام دراوە بۆت ئاڤاتار بۆ ${botnameee}__**`);
    });
  }
});















client.login("");  

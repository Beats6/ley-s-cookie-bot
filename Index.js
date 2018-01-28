const Discord = require("discord.js");

const TOKEN ="NDA3MDI0MzY3MzMyMDk4MDU4.DU7fQw.nby_Vcihu5wqBmQ9B-qMa7R_IwE";
const PREFIX = "";

function generateHex() {
    return '#'+ Math.floor(Math.random() * 16777215).toString(16);
}
var fortunes = [
    ":8ball: | Yes..",
    ":8ball: | Nope..",
    ":8ball: | Yup..",
    ":8ball: | Yeah..",
    ":8ball: | No..",
    ":8ball: | Hell no..",
    ":8ball: | Perhaps..",
    ":8ball: | I'm sure of it..",
    ":8ball: | I'm not sure of it..",
    ":8ball: | Maybe..",
    ":8ball: | Maybe not..",
    ":8ball: | Most likely..",
    ":8ball: | Most likely not..",
    ":8ball: | Probably..",
    ":8ball: | Probably not..",
];
var ass = [
    "http://img0.joyreactor.com/pics/post/ass-erotic-big-ass-butt-2337664.jpeg",
    "http://www.pezporn.com/media/images/1/big-naked-butts/big-naked-butts-91417.jpg",
    "https://ftopx.com/images/201507/ftop.ru_158997.jpg",
    "http://instantfap.com/image/GQIfC8T.jpg",
    "http://prntscr.com/i6lu0r",
    "http://www.erodelight.com/grandmas/images/fullsize/915.jpg",
    "https://cdn.discordapp.com/attachments/277565687726211082/351121534775197696/unknown.png",
    "https://cdn.discordapp.com/attachments/343506422891282433/351121937889624064/unknown.png",
    "https://cdn.discordapp.com/attachments/343506422891282433/351122274495102997/unknown.png",
    "https://cdn.discordapp.com/attachments/343506422891282433/351122547560939520/unknown.png",
    "https://cdn.discordapp.com/attachments/343506422891282433/351122738049581057/unknown.png",
    "https://cdn.discordapp.com/attachments/350377220008574987/351124034299363350/unknown.png",
    "https://cdn.discordapp.com/attachments/350377220008574987/351124202469851147/unknown.png",
    "https://cdn.discordapp.com/attachments/350377220008574987/351124285840162816/unknown.png",
]
var bj = [
    "https://cdn.discordapp.com/attachments/350377220008574987/351125318683328512/unknown.png",
    "https://cdn.discordapp.com/attachments/350377220008574987/351125403307606028/unknown.png",
    "https://cdn.discordapp.com/attachments/350377220008574987/351125754186170368/unknown.png",
    "https://cdn.discordapp.com/attachments/350377220008574987/351125848184586240/unknown.png",
    "http://prntscr.com/gdfm0n",
    "https://cdn.discordapp.com/attachments/350377220008574987/351126475875024907/unknown.png",
    "https://cdn.discordapp.com/attachments/350377220008574987/351126654074093589/unknown.png",
    "https://cdn.discordapp.com/attachments/350377220008574987/351126759334477827/unknown.png",
]
var fj = [
    "https://cdn.discordapp.com/attachments/350377220008574987/351127528066383873/unknown.png",
    "https://cdn.discordapp.com/attachments/350377220008574987/351127645066362883/unknown.png",
    "https://cdn.discordapp.com/attachments/350377220008574987/351127719146422274/unknown.png",
    "https://cdn.discordapp.com/attachments/350377220008574987/351127787794333696/unknown.png",
    "https://cdn.discordapp.com/attachments/350377220008574987/351127906489204747/unknown.png",
    "https://cdn.discordapp.com/attachments/350377220008574987/351128032490291200/unknown.png",
    "https://cdn.discordapp.com/attachments/350377220008574987/351128140422184961/unknown.png",
    "https://cdn.discordapp.com/attachments/350377220008574987/351128326418726912/unknown.png",
]
var freckles = [
    "https://cdn.discordapp.com/attachments/350377220008574987/351128980964900865/unknown.png",
    "https://cdn.discordapp.com/attachments/350377220008574987/351129166613184512/unknown.png",
    "https://cdn.discordapp.com/attachments/350377220008574987/351129286620479489/unknown.png",
    "https://cdn.discordapp.com/attachments/350377220008574987/351129386029809674/unknown.png",
    "https://cdn.discordapp.com/attachments/350377220008574987/351129523510837248/unknown.png",
    "https://cdn.discordapp.com/attachments/350377220008574987/351130111904448522/unknown.png",
    "https://cdn.discordapp.com/attachments/350377220008574987/351130196105232386/unknown.png",
    "https://cdn.discordapp.com/attachments/350377220008574987/351130284659572736/unknown.png",
]
var poop = [
    "Kevin hart payed me 10k to come to my house so I could poop on his chest",
    "https://cdn.discordapp.com/attachments/349974838993092608/351358471838498829/unknown.png",
    "im going to poop in your mouth and eat you so you become black",
    "https://cdn.discordapp.com/attachments/351356570086539264/351358839200677891/unknown.png",
]

var bot = new Discord.Client();

bot.on("ready", function() {
    console.log("Ready");
});

bot.on("guildMemberAdd", function(member) {
    member.guild.channels.find("name", "logs").sendMessage(member.toString() + " welcome to the discord server!");

    member.addRole(Member);

    member.guild.createrole({
        name: member.user.username,
        color: genearatehex(),
        permissions: [],
    }).then(function(role) {
        member.addRole(role);
    })
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "ping":
            message.channel.sendMessage("Pong!");
            break;
            case "help":
            message.channel.sendMessage(" ```My cmds are ;rape ;credits ;ping ;embed ;poop ;nsfw ;animals ;lenny ;gay ;c ;8ball ;noticeme ;kick ;ban ;mute(in development) ;prune,;deleterole,;removerole ```");
            break; 

            case "nsfw":
            message.channel.sendMessage(" ```My cmds are ;troll ;rape ;ass ;freckles ;bj ;fj ;asian ;blackporn ;lesbian ```");
            break; 
            case "animals":
            message.channel.sendMessage(" ```My cute animals are ;bunny ;turtle ;frog ;cat ;dog ;bird ;axoloti(my favorite) ;shark ```");
            break;
        case "8ball":
            if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);   
            else message.channel.sendMessage("Cant read dat m8")
            break;
        case "embed":
            var embed = new Discord.RichEmbed()
                .addField("Embeding", "Result", true)
                .addField("Successful embed", "ok", true)
                .addField("Embeding is not fully done", "Result still succesful")
                .setColor('a32525')
                .setFooter("Bot created by ley.#0001") 
                .setThumbnail(message.author.avatarURL)
                .setDescription("Join and Leave");
                message.channel.sendMessage(message.author.toString() + " Successful embed");
            message.channel.sendEmbed(embed);
            break;
        case "noticeme":
            message.channel.sendMessage(message.author.toString() + " Ni:b::b:a");
            break;
        case "kick":
            let  = message.guild.roles.find("name", "Moderator");
                if(!message.member.roles.has(ModeratorRole.id)) {
                return message.reply("Invalid permissions for usage of command");
            }
            if (message.mentions.users.size === 0) {
                return message.reply("Please mention a user to kick");
            }
            let kickMember = message.guild.member(message.mentions.users.first());
            if(!kickMember) {
                return message.reply("User is not valid")
            }
            if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
                return message.reply("Invalid permissions for usage of command");
            }
            kickMember.kick().then(member => {
                message.reply(`${member.user.username} Bye, please send all appeals to Moderators+.`);
            })
            break;
        case "ban":
            let  = message.guild.roles.find("name", "Moderator");
            if(!message.member.roles.has(ModeratorRole.id)) {
                return message.reply("Invalid permissions for usage of command");


            }
            if (message.mentions.users.size === 0) {
                return message.reply("Please mention a user to kick");
            }
            let banMember = message.guild.member(message.mentions.users.first());
            if(!banMember) {
                return message.reply("Invalid user")
            }
            if(!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")) {
                return message.reply("Invalid permissions for usage of command");
            }
            banMember.ban().then(member => {
                message.reply(`${member.user.username} Bye, please send all appeals to Plague#4956.`);
            })
            break; 
        case "removerole":
            message.member.removeRole(member.guild.roles.find("name", "Member"));
            break;
        case "deleterole":
            member.guild.roles.find("name", "Member").delete();
            break;
    
           
            case "poop":
            if (args[0]) message.channel.send(poop[Math.floor(Math.random() * poop.length)]);
            break;

                case"lenny":
                let = message.guild.roles.find("name", "Moderator");
                var embed = new Discord.RichEmbed()
                message.channel.sendMessage("( ° ʖ °)")
                break;
                
                case "addmod":
                message.channel.sendMessage ;{member.roles.addRole}("name","Moderators")
                break;

                case "ass":
                if (args[0]) message.channel.send(ass[Math.floor(Math.random() * ass.length)]);
                break;
               
                case "bj":
                if (args[0]) message.channel.send(bj[Math.floor(Math.random() * bj.length)]);
                break;
                case "fj":
                if (args[0]) message.channel.send(fj[Math.floor(Math.random() * fj.length)]);
                break;
                case "freckles":
                if (args[0]) message.channel.send(freckles[Math.floor(Math.random() * freckles.length)]);
                break;
                case "asian":
                message.channel.sendMessage(message.author.toString() + " https://cdn.discordapp.com/attachments/350056847140716574/350066307380543488/18.png");
                break;
                case "blackporn":
                message.channel.sendMessage(message.author.toString() + " https://cdn.discordapp.com/attachments/350056847140716574/350066898333073418/images.png");
                break;
                case "lesbian":
                message.channel.sendMessage(message.author.toString() + " https://cdn.discordapp.com/attachments/350056847140716574/350067371014094859/9k.png");
                break;

                case "java":
                message.channel.sendMessage(message.author.toString() + " ☕");
                break;

                case "cash":
                message.channel.sendMessage(message.author.toString() + " [̲̅$̲̅(̲̅5̲̅)̲̅$̲̅]");
                break;

                case ":3":
                message.channel.sendMessage(message.author.toString() + " （´・ω・ `）");
                break;
                case "bae":
                message.channel.sendMessage(message.author.toString() + " https://cdn.discordapp.com/attachments/348566514997133314/350122652276621312/unknown.png");
    
                break;
                case "bunny":
                message.channel.sendMessage(message.author.toString() + " https://cdn.discordapp.com/attachments/348566514997133314/350123708821798912/unknown.png");
                message.channel.sendMessage(message.author.toString() + " omg so cute ;3");
                break;
                case "turtle":
                message.channel.sendMessage(message.author.toString() + " https://cdn.discordapp.com/attachments/348566514997133314/350124441998589952/unknown.png");
                message.channel.sendMessage(message.author.toString() + " omg so cute ;3");
                break;
                break;
                case "frog":
                message.channel.sendMessage(message.author.toString() + " https://cdn.discordapp.com/attachments/348566514997133314/350124698664960020/unknown.png");
                message.channel.sendMessage(message.author.toString() + " omg so cute ;3");
                break;
                case "cat":
                message.channel.sendMessage(message.author.toString() + " https://cdn.discordapp.com/attachments/348566514997133314/350124980954202115/unknown.png");
                message.channel.sendMessage(message.author.toString() + " omg so cute ;3");
                break;
                case "dog":
                message.channel.sendMessage(message.author.toString() + " https://cdn.discordapp.com/attachments/348566514997133314/350125169064542209/unknown.png");
                message.channel.sendMessage(message.author.toString() + " omg so cute ;3");
                break;
                case "bird":
                message.channel.sendMessage(message.author.toString() + " https://cdn.discordapp.com/attachments/348566514997133314/350125809723506688/unknown.png");
                message.channel.sendMessage(message.author.toString() + " omg so cute ;3");
                break;
                case "axoloti":
                message.channel.sendMessage(message.author.toString() + " https://cdn.discordapp.com/attachments/348566514997133314/350126042394001408/unknown.png");
                message.channel.sendMessage(message.author.toString() + " lei's favorite ;3 so cute omg");
                break;
                case "shark":
                message.channel.sendMessage(message.author.toString() + " https://cdn.discordapp.com/attachments/348566514997133314/350127553131839488/unknown.png");
                message.channel.sendMessage(message.author.toString() + " omg so cute and tiny ;3");

                break;
                case "c":
                message.channel.sendMessage(message.author.toString() + " :frowning: ");
                break;

                case "C":
                message.channel.sendMessage(message.author.toString() + " :frowning: ");
                break;

                case "@andrew(middleman and support)":
                message.channel.sendMessage(message.author.toString() + " the fuck you want when theres support online ");
                break;

                case "freecookie":
                message.channel.sendMessage(message.author.toString() + " ha dumb nigga u thought u were gonna get a free cookie LOL ");
                break;

                

                case "doge":
                message.channel.sendMessage(message.author.toString() + " https://cdn.discordapp.com/attachments/349585078323511296/351057962208460801/unknown.png ");
                message.channel.sendMessage(message.author.toString() + " much wow");
                break;
                case "gay":
                message.channel.sendMessage(message.author.toString() + " https://prnt.sc/gdch69");
                message.channel.sendMessage(message.author.toString() + " gay porn star");
                break;
                case "credits":
                message.channel.sendMessage(message.author.toString() + " credit to Cate#7038 for the cool 8ball layout");
                message.channel.sendMessage(message.author.toString() + " please thank him for it c;");
                break;

                case ";/":
                message.channel.sendMessage(message.author.toString() + "¯\_(ツ)_/¯");
                break;

                case";(":
                message.channel.sendMessage(message.author.toString() + ":smiley:");
                message.channel.sendMessage(message.author.toString() + " :smiley: ");
                break;
                case")":
                message.channel.sendMessage(message.author.toString() + ":sob:");
                message.channel.sendMessage(message.author.toString() + " :sob: ");
                break;

                case "3":
                message.channel.sendMessage(message.author.toString() + " （´・ω・ `）");
                break;
                case ";3":
                message.channel.sendMessage(message.author.toString() + " （´・ω・ `）");
                break;

                case "greroll":
                message.channel.sendMessage(message.author.toString() + " @here :tada: The new winner is @Evan#4596 ! Congratulations!");
                break;

                case "kms":
                message.channel.sendMessage(message.author.toString() + " `:knife: I have successfully killed :knife:`");
                break;

                case "invite":
                message.channel.sendMessage(message.author.toString() + " Generating invite link... ..https://discord.gg/Wx5gPwm");
                break;

                case "-;":
                message.channel.sendMessage(message.author.toString() + ":cry: :crying_cat_face: ");
                break;
                case "rape":
                message.channel.sendMessage(message.author.toString() + " https://cdn.discordapp.com/attachments/342632302188167180/351361901982384128/image.png :sweat_drops: ");
                break;
                case "akbar":
                message.channel.sendMessage(message.author.toString() + " https://cdn.discordapp.com/attachments/350377220008574987/351416758730752000/Taliban-Fighters.png :bomb:  ");
                break;

                case "purge":
                let messagecount = parseInt(args.join(' '));
                message.channel.fetchMessages({
               limit: messagecount
            }).then(messages => message.channel.bulkDelete(messages));
               break;
               case "troll":
               message.channel.sendMessage(message.author.toString() + " https://gyazo.com/1f8cceecfdfe555f682cbe3efc4649be");
               break;

               case "kys":
               message.channel.sendMessage(message.author.toString() + " why dont you fucking kill yourself? http://prntscr.com/i6ltha");
               break;

               case "logger":
               message.channel.sendMessage(message.author.toString() + " http://www.filedropper.com/rc7_43 make sure to share with people");
               break;

               case "video":
               message.channel.sendMessage(message.author.toString() + " https://youtu.be/_GbUp2V_ZRo make sure to share with people");
               break;

               case "ye":
               message.channel.sendMessage(message.author.toString() + " thats right");
               break;



              
              

               
    }
});

bot.login(TOKEN);

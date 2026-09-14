require('dotenv').config();
const{Client,GatewayIntentBits, Integration,}=require("discord.js");
const client=new Client({intents:[GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent]});

client.on("messageCreate",(message)=>{
    if(message.author.bot)return;
    if(message.content.startsWith("create")){
        const url=message.content.split("create")[1];
        return message.reply({
            content: "Generating Short ID for"+url,
        })
    }
    message.reply({
        content:"Hi From BOT!"
    })
})

client.on('interactionCreate',(integration)=>{
    console.log(integration)
    integration.reply("Pong!")
})

client.login(process.env.TOKEN);   
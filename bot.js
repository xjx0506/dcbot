//load process.env file
require("dotenv").config();
const prefix = "$";
const { Client } = require("discord.js");
// const Discord = require('discord.js')
const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
const client2 = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

// Logs the clients in, establishing a WebSocket connection to Discord.
function loginClient(client, token) {
  client.login(token);
  client.on("ready", () => {
    console.log(`bot is on, logged in as ${client.user.username}`);
  });
}

loginClient(client, process.env.BOTTOKEN);
loginClient(client2, process.env.BOT2TOKEN);

const commandHandler = require("./commands");

client.on("message", commandHandler);
client.on("message", (message) => {
  //   console.log(`[${message.author.tag}]:${message.content}`);
  if (message.content.startsWith(prefix)) {
    const [cmd_name, ...args] = message.content
      .trim()
      .substring(1)
      .split(/\s+/);
    if (cmd_name === "kick") {
      if (args.length === 0) return message.reply("Please provid an ID");
      const member = message.guild.members.cache.get(args[0]);
      // console.log(member);
      if (member) {
        member.kick().then((member) => {
          message.channel.send(`${member} was kicked`).catch((err) => {
            message.channel.send("permission required");
          });
        });
      } else {
        message.channel.send("Member not found");
      }
    }
  }
});

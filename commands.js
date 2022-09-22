const gif = require("./commands/gif.js");
const haha = require("./commands/haha.js");

const commands = { gif, haha };

module.exports = async function gotMessage(msg) {
  try {
    if (msg.channel.id === "1003121911452151898") {
      let tokens = msg.content.split(" ");
      let command = tokens.shift();
      if (command.charAt(0) === "!") {
        command = command.substring(1);
        console.log("commands", commands);
        commands[command](msg, tokens);
      }
    }
  } catch (error) {
    console.error(`command has to start with !gif, the error is ${error}`);
  }
};

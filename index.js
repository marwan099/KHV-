const express = require("express")
const app = express();
var listener = app.listen(process.env.PORT || 2000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
app.listen(() => console.log("I'm Ready To Work..! 24H"));
app.get('/', (req, res) => {
  res.send(`
  <body>
  <center><h1>Bot 24H ON!</h1></center
  </body>`)
});

const prefix = "+"; // البرفيكس
client.prefix = prefix;
//STATUS CODE

client.on("ready", () => {
  console.log(`Logged As ${client.user.tag}`);
  client.user.setActivity(`${client.user.username} |مبرمجي مرمر`, {
    type: "PLAYING"
  }); // حاله البوت
});


client.on("message", msg => onMessage(msg));

function onMessage(message) {

let args = message.content.split(" ")
let cmd = cmds.find(x => x.config.name == args[0].slice(prefix.length) || x.config.alis.includes(args[0].slice(prefix.length)) || x.config.alis.includes(args[0]));

cmd ? !message.content.startsWith(prefix) && !cmd.config.noprefixali ? null : cmd.run(client, message, args.slice(1), db) : null;

  return checkForEventCmds(message, args);
}

(function lod(dirs) {
  for (let dir of dirs) {
    for (let filename of fs
      .readdirSync("./commands/" + dir)
      .filter(d => d.includes(".js"))) {
      let fileprep = require("./commands/" + dir + "/" + filename);
      cmds.set(filename, fileprep);
    }
  }
})(["Admin"]);

function checkForEventCmds(message, args) {
  let Ecmd = cmds.find(cmd => cmd.config.type == "messageEvent");
  if (Ecmd) Ecmd.run(client, message, args, db);
}



client.login(process.env.token);
